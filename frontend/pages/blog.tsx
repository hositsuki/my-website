// frontend/pages/blog.tsx
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Post {
    _id: string;
    title: string;
    content: string;
    date: string;
}

interface Comment {
    _id: string;
    postId: string;
    name: string;
    text: string;
    date: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState({ name: '', text: '' });

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
            .then((res) => res.json())
            .then(setPosts);
    }, []);

    const fetchComments = (postId: string) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${postId}`)
            .then((res) => res.json())
            .then(setComments);
    };

    const handleCommentSubmit = async () => {
        if (selectedPost) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${selectedPost._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment),
            });
            const data = await res.json();
            setComments([...comments, data]);
            setNewComment({ name: '', text: '' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            <main className="flex-grow container mx-auto py-16 px-4">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">博客文章</h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post._id}
                            onClick={() => { setSelectedPost(post); fetchComments(post._id); }}
                            className="p-6 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                            <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
                            <small className="text-gray-500 block mt-2">{new Date(post.date).toLocaleDateString()}</small>
                        </div>
                    ))}
                </div>
                {selectedPost && (
                    <section className="mt-16 p-8 bg-white shadow-md rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">{selectedPost.title}</h2>
                        <p className="mt-4 text-gray-700">{selectedPost.content}</p>
                        <h3 className="mt-8 text-2xl font-bold text-gray-800">评论</h3>
                        <ul className="mt-4 space-y-4">
                            {comments.map((comment) => (
                                <li key={comment._id} className="border-b pb-2">
                                    <p className="font-semibold">{comment.name}</p>
                                    <p className="text-gray-700">{comment.text}</p>
                                    <small className="text-gray-500">{new Date(comment.date).toLocaleDateString()}</small>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <input
                                type="text"
                                placeholder="你的名字"
                                value={newComment.name}
                                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                                className="border p-2 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <textarea
                                placeholder="输入你的评论"
                                value={newComment.text}
                                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                                className="border p-2 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows={3}
                            />
                            <button
                                onClick={handleCommentSubmit}
                                className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
                            >
                                提交评论
                            </button>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
