// backend/models/Post.ts
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Post', PostSchema);
