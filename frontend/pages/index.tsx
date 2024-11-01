// frontend/pages/index.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-8 text-center flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">欢迎来到我的网站</h1>
                <p className="text-lg text-gray-600 max-w-xl">这是一个包含博客和 GPT 交互的示例网站，探索最新的 AI 互动功能和有趣的博客内容。</p>
            </main>
            <Footer />
        </div>
    );
}
