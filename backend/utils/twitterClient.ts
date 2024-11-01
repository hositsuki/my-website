// backend/utils/twitterClient.ts

import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

interface TweetData {
    id: string;
    text: string;
    created_at: string;
}

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET_KEY!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN!,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

// 定义 getTweets 函数，添加返回类型注解
export const getTweets = async (username: string, retryCount = 3): Promise<TweetData[]> => {
    try {
        const userTimeline = await twitterClient.v2.userTimeline(username, { max_results: 5 });
        return userTimeline.tweets
            .filter((tweet) => tweet.text.length > 50)
            .map((tweet) => ({
                id: tweet.id,
                text: tweet.text,
                created_at: tweet.created_at || '',
            }));
    } catch (error: any) {
        if (error?.data?.status === 429 && retryCount > 0) {
            console.log('Rate limit exceeded, retrying after delay...');
            await delay(5000); // 等待5秒
            return getTweets(username, retryCount - 1); // 递归重试
        } else {
            throw error;
        }
    }
};
