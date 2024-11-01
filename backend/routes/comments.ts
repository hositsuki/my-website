// backend/routes/comments.ts
import express from 'express';
import Comment from '../models/Comment';

const router = express.Router();

router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ postId });
    res.json(comments);
});

router.post('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { name, text } = req.body;
    const newComment = new Comment({ postId, name, text });
    await newComment.save();
    res.json(newComment);
});

export default router;
