// frontend/pages/gpt.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GPTPage() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const generateResponse = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gpt`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: input })
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (_error) {
            console.error(_error);
            setResponse("请求失败，请稍后再试。");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">GPT 交互</h1>
                    <textarea
                        className="w-full border rounded-lg p-4 mb-4 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                        rows={5}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="输入你的问题..."
                    />
                    <button
                        onClick={generateResponse}
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        {loading ? "生成中..." : "生成回答"}
                    </button>
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left text-gray-700 whitespace-pre-line">
                        {response ? response : "等待生成结果..."}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
