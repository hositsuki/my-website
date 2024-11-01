// backend/routes/gpt.ts
import express from 'express';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            console.error("Error with OpenAI API:", err.response.data);
            res.status(err.response.status).json({ error: err.response.data });
        } else {
            console.error("Error:", err.message);
            res.status(500).json({ error: "Failed to generate response" });
        }
    }
});

export default router;
