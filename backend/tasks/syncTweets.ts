// backend/tasks/syncTweets.ts
import { getTweets } from '../utils/twitterClient';
import mongooseConnect from '../utils/mongooseConnect';
import Tweet from '../models/Tweet';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const syncTweets = async () => {
    await mongooseConnect();
    const tweets = await getTweets('DawnSayu');

    for (const tweet of tweets) {
        await Tweet.updateOne(
            { tweetId: tweet.id },
            { tweetId: tweet.id, text: tweet.text, date: new Date(tweet.created_at || Date.now()) },
            { upsert: true }
        );
        await delay(1000); // 延迟1秒，确保符合API请求速率限制
    }
    console.log('Tweets synchronized');
};

export default syncTweets;
