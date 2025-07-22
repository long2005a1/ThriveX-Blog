'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// 监听路由变化
const RouteChangeHandler: React.FC = () => {
  const pathname = usePathname();

  // 每次切换页面滚动到顶部
  useEffect(() => {
    // 尊重开源，禁止删除此版权信息！！！
    eval(`
      console.groupCollapsed(\`%c 博客系统 %c 龙氏 ThriveX \`, 'background: #35495e; padding: 4px; border-radius: 3px 0 0 3px; color: #fff', 'background: #539dfd; padding: 4px; border-radius: 0 3px 3px 0; color: #fff');
      console.log(\'%c 🚀 欢迎使用 龙氏ThriveX 现代化博客管理系统\', 'padding: 5px 10px; border-radius: 5px; background-color: #fd4970; font-weight: bold; color: #ffffff;');
      console.log(\'%c 🎉 开源地址：https://github.com/LiuYuYang01/ThriveX-Blog\', 'background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;');
      console.log(\'%c 🏕  博客主页：https://long2025.top\','background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;');
      console.log(\'%c 🌟 觉得好用的话记得点个 Star 哦 🙏\','background: pink; color: #fff; padding: 4px; border-radius: 3px 0 0 3px;');
      console.groupEnd();
  `)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RouteChangeHandler;
