import localFont from 'next/font/local';

import HeroUIProvider from '@/components/HeroUIProvider';
import NProgress from '@/components/NProgress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Tools from '@/components/Tools';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Confetti from '@/components/Confetti';
import RouteChangeHandler from '@/components/RouteChangeHandler';

import { getWebConfigDataAPI } from '@/api/config';
import { Web } from '@/types/app/config';

// 加载样式文件
import '@/styles/index.scss';
import '@/styles/tailwind.scss';
import BaiduStatis from '@/components/BaiduStatis';
import FloatingBlock from '@/components/FloatingBlock';

// 加载本地字体
const LXGWWenKai = localFont({
  src: '../assets/font/LXGWWenKai-Regular.ttf',
  display: 'swap',
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const {
    data: { value: data },
  } = (await getWebConfigDataAPI<{ value: Web }>('web')) || { data: { value: {} as Web } };

  // 尊重开源，禁止删除此版权信息！！！
  eval(`
      console.groupCollapsed(\'%c 🚀 欢迎使用 龙氏ThriveX 现代化博客管理系统\', 'padding: 5px 10px; border-radius: 5px; background-color: #fd4970; font-weight: bold; color: #ffffff;')
      console.log(\'%c 🎉 开源地址：https://github.com/LiuYuYang01/ThriveX-Blog\', 'background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;')
      console.log(\'%c 🏕  博客主页：https://long2025.top\','background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;')
      console.log(\'%c 🌟 觉得好用的话记得点个 Star 哦 🙏\','background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;')
      console.groupEnd();
  `)

  return (
    <html lang="zh-CN" className={LXGWWenKai.className}>
      <head>
        <title>{`${data?.title} - ${data?.subhead}`}</title>
        <meta name="description" content={data?.description} />
        <meta name="keywords" content={data?.keyword} />
        <link rel="icon" href={data?.favicon || '/favicon.ico'} />

        {/* 百度统计 */}
        <BaiduStatis />
      </head>

      {/* 监听路由变化 */}
      <RouteChangeHandler />

      <body id="root" className={`dark:!bg-black-a`}>
        {/* 🎉 礼花效果 */}
        {/* <Confetti /> */}

        {/* 进度条组件 */}
        <NProgress />
        {/* 顶部导航组件 */}
        <Header />

        {/* 主体内容 */}
        <HeroUIProvider>
          <div className="min-h-[calc(100vh-300px)]">{children}</div>
        </HeroUIProvider>

        {/* 底部组件 */}
        <Footer />
        {/* 右侧工具栏组件 */}
        {/* <Tools /> */}

        {/* 悬浮块 */}
        <FloatingBlock />
      </body>
    </html>
  );
}
