// middlewares/authMiddleware.ts
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: { id: string };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Not authenticated' });
        return;
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
