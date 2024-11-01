// frontend/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-purple-200 via-purple-300 to-blue-400 shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">

                {/* 标题，点击回到主页 */}
                <Link href="/" className="text-gray-900 text-3xl font-bold tracking-wider hover:text-gray-700 transition-colors">
                    雪桜さゆ 的网站
                </Link>

                {/* 导航链接，居中对齐并带有下划线动画 */}
                <div className="flex space-x-8 items-center">
                    <Link href="/" className="relative text-gray-800 hover:text-gray-600 font-medium text-lg transition-colors">
                        首页
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                    <Link href="/blog" className="relative text-gray-800 hover:text-gray-600 font-medium text-lg transition-colors">
                        博客
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                    <Link href="/gpt" className="relative text-gray-800 hover:text-gray-600 font-medium text-lg transition-colors">
                        GPT 交互
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
