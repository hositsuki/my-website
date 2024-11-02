
import Layout from '../components/common/Layout';

export default function HomePage() {
  return (
    <Layout>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">欢迎来到我的网站</h1>
        <p className="text-lg text-gray-600 max-w-xl">这是一个包含博客和 GPT 交互的示例网站，探索最新的 AI
            互动功能和有趣的博客内容。</p>
    </Layout>
  );
}
