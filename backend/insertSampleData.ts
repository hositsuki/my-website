// backend/insertSampleData.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Tweet from './models/Tweet'; // 确保路径正确
import Post from './models/Post';   // 确保路径正确

dotenv.config();

async function insertSampleData() {
    try {
        // 连接到 MongoDB
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to MongoDB");
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB Atlas');
        });
        // 示例博客文章数据
        const samplePosts = [
            {
                title: '如何学习 TypeScript',
                content: 'TypeScript 是 JavaScript 的超集，提供了静态类型检查...',
                date: new Date(),
            },
            {
                title: '深入理解异步编程',
                content: '异步编程让代码不会阻塞主线程，使用 async/await 能让代码更简洁...',
                date: new Date(),
            },
            {
                title: 'Node.js 初学者指南',
                content: 'Node.js 是一种基于 JavaScript 的后端开发环境...',
                date: new Date(),
            },
        ];

        // 示例推文数据
        const sampleTweets = [
            {
                tweetId: '12345',
                text: '今天学习了很多关于 TypeScript 的知识，感觉自己又进步了一些！',
                date: new Date(),
            },
            {
                tweetId: '12346',
                text: '异步编程虽然有些复杂，但掌握后可以让代码更加高效。',
                date: new Date(),
            },
            {
                tweetId: '12347',
                text: 'Node.js 是一个强大的工具，让我能够使用 JavaScript 开发后端应用！',
                date: new Date(),
            },
        ];

        // 插入数据，自动创建集合
        await Post.insertMany(samplePosts);
        console.log('Sample blog posts inserted successfully.');

        await Tweet.insertMany(sampleTweets);
        console.log('Sample tweets inserted successfully.');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

// 运行插入数据函数
insertSampleData();
