
import Layout from '../components/common/Layout';
import CreatePost from '../components/posts/CreatePost';

export default function CreatePostPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Create a New Post</h1>
      <CreatePost />
    </Layout>
  );
}
