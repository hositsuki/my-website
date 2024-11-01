// frontend/components/Footer.tsx
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center border-t border-gray-700">
            <div className="container mx-auto">
                <p className="text-lg font-semibold text-gray-300">雪桜さゆ 的网站</p>
                <p className="text-sm mt-2 max-w-md mx-auto">
                    © 2024 雪桜さゆ - 版权所有。欢迎转载，但请注明出处。本文内容采用
                    <span className="text-blue-400"> MIT 开源许可证</span>，允许在保留版权的前提下自由使用、复制和再发布。
                </p>

                <p className="text-xs mt-1">本网站使用 Next.js 和 OpenAI API 构建。</p>

                <div className="flex justify-center mt-4 space-x-6">
                    <a href="https://github.com/hositsuki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://twitter.com/DawnSayu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                        <FaTwitter size={24} />
                    </a>
                </div>

                <p className="text-xs mt-4">
                    如有任何问题，请联系 <a href="mailto:yukisakuranoyume@gmail.com" className="text-blue-400 hover:text-blue-300">yukisakuranoyume@gmail.com</a>
                </p>
            </div>
        </footer>
    );
}
