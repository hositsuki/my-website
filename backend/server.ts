// backend/server.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/posts';
import commentRoutes from './routes/comments';
import gptRoutes from './routes/gpt';
import getBlogData from './routes/getBlogData';
import triggerSync from './routes/triggerSync';
import fetchTweets from './routes/fetchTweets';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error(error));

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/gpt', gptRoutes);
app.use('/api/getBlogData', getBlogData);
app.use('/api/triggerSync', triggerSync);
app.use('/api/fetchTweets', fetchTweets);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
