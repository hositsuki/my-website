// frontend/pages/blog.tsx
import { useEffect, useState } from 'react';

interface Tweet {
    tweetId: string;
    text: string;
    date: string;
}

interface Post {
    _id: string;
    title: string;
    content: string;
    date: string;
}

export default function BlogPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getBlogData`)
            .then((res) => res.json())
            .then((data) => {
                setTweets(data.tweets);
                setPosts(data.posts);
            });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-blue-600">博客与推文</h1>

            {/* 博客文章展示 */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 border-blue-300 pb-2">博客文章</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <h3 className="text-2xl font-bold mb-2 text-blue-500">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.content.slice(0, 100)}...</p>
                            <p className="text-sm text-gray-400 italic">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 推文展示 */}
            <section>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 border-blue-300 pb-2">精选推文</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {tweets.map((tweet) => (
                        <div key={tweet.tweetId} className="bg-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                            <p className="text-gray-800 mb-4">{tweet.text}</p>
                            <p className="text-sm text-gray-500 italic">{new Date(tweet.date).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
