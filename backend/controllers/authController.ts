
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Login function to authenticate users and generate a JWT token
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  res.json({ token });
};

// Register function to create a new user
export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(400).json({ message: 'Username already exists' });
    return;
  }

  // Create new user
  const user = new User({ username, password });
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};
