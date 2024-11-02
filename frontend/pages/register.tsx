
import Layout from '../components/common/Layout';
import Register from '../components/auth/Register';

export default function RegisterPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Register</h1>
      <Register />
    </Layout>
  );
}
