// utils/twitterClient.ts
import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET_KEY!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN!,
    accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

export const getTweets = async (username: string) => {
    const userTimeline = await twitterClient.v2.userTimeline(username, { max_results: 100 });
    return userTimeline.tweets.filter((tweet) => tweet.text.length > 50);
};
