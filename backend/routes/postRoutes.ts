
import express from 'express';
import { createPost } from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Define route to create a new post with authentication
router.post('/create', authMiddleware, createPost);

export default router;
