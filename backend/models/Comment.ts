// backend/models/Comment.ts
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Comment', CommentSchema);
