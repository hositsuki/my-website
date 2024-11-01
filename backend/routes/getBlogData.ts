import express from 'express';
import mongooseConnect from '../utils/mongooseConnect';
import Tweet from '../models/Tweet';
import Post from '../models/Post';

const router = express.Router();

router.get('/', async (req, res) => {
    await mongooseConnect();
    const tweets = await Tweet.find().sort({ date: -1 }).limit(10);
    const posts = await Post.find().sort({ date: -1 }).limit(10);
    res.json({ tweets, posts });
});

export default router;
