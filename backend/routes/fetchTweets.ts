// backend/routes/fetchTweets.ts
import express from 'express';
import syncTweets from '../tasks/syncTweets';

const router = express.Router();

router.post('/', async (req, res) => {
    await syncTweets();
    res.json({ message: 'Tweets synchronized' });
});

export default router;
