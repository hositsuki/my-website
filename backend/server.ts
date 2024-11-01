// backend/server.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/posts';
import commentRoutes from './routes/comments';
import gptRoutes from './routes/gpt';

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
