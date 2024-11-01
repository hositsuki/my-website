// pages/_app.tsx
import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import axios from 'axios';

// const triggerSync = async () => {
//     try {
//         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/triggerSync`);  // 使用 POST 请求
//         console.log(response.data.message);
//     } catch (error) {
//         console.error('Error triggering sync:', error);
//     }
// };

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // triggerSync().then();
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
