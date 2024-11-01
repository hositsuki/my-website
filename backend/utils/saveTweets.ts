// utils/saveTweets.ts
import Tweet, { ITweet } from '../models/Tweet';

export const saveTweets = async (tweets: ITweet[]) => {
    for (const tweet of tweets) {
        const existingTweet = await Tweet.findOne({ tweetId: tweet.tweetId });
        if (!existingTweet) {
            await new Tweet(tweet).save();
        }
    }
};
