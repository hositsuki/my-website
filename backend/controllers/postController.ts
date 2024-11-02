// controllers/postController.ts
import { Request, Response } from 'express';
import Post from '../models/Post';

interface AuthRequest extends Request {
    user?: { id: string };
}

export const createPost = async (req: AuthRequest, res: Response): Promise<void> => {
    const { title, content } = req.body;
    if (!req.user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    try {
        const post = await Post.create({
            title,
            content,
            authorId: req.user.id,
        });
        res.status(201).json(post);
    } catch (error) {
        console.error("Error creating post:", error); // 添加日志打印错误详情
        res.status(500).json({ message: 'Server error' });
    }
};
