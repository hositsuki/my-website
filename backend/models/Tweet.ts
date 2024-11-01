// models/Tweet.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITweet extends Document {
    tweetId: string;
    text: string;
    date: Date;
}

const TweetSchema: Schema = new Schema({
    tweetId: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    date: { type: Date, required: true },
});

export default mongoose.models.Tweet || mongoose.model<ITweet>('Tweet', TweetSchema);
