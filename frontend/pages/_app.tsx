// pages/_app.tsx
import '../styles/globals.css' // 引入全局样式文件
import type { AppProps } from 'next/app'

// 自定义的根组件，包含所有页面
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} /> // 渲染每个页面组件
}

export default MyApp
