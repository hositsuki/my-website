
import Layout from '../components/common/Layout';
import Login from '../components/auth/Login';

export default function LoginPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Login</h1>
      <Login />
    </Layout>
  );
}
