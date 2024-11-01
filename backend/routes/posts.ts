// backend/routes/posts.ts
import express from 'express';
import Post from '../models/Post';

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
});

export default router;
