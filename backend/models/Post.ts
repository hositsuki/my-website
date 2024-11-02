// backend/models/Post.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    title: string;
    content: string;
    date: Date;
    authorId: string;
}

const PostSchema = new Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    authorId: { type: String, required: true } // 新增 authorId 字段
});

export default mongoose.model<IPost>('Post', PostSchema);
