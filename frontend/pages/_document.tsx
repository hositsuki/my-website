// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="zh">
            <Head>
                {/* 可以在这里引入字体、favicon等 */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
