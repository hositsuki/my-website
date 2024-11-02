// frontend/components/Navbar.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if token exists in localStorage to determine login status
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLoginRedirect = () => {
        router.push('/login');
    };
    const handleRegisterRedirect = () => {
        router.push('/register');
    };
    const handleCreatePostRedirect = () => {
        router.push('/create-post');
    };


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
                    {/* Conditional Buttons for Login and Write Post */}
                    {isLoggedIn ? (
                        <button onClick={handleCreatePostRedirect} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                            写文章
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button onClick={handleLoginRedirect}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors">
                                登录
                            </button>
                            <button onClick={handleRegisterRedirect}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
                                注册
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
