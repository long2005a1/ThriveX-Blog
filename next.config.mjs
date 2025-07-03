/** @type {import('next').NextConfig} */
const nextConfig = {
    // 关闭严格模式
    reactStrictMode: false,
    // 配置图片来源
    images: {
        // domains: [
        //     'res.liuyuyang.net',
        //     'q1.qlogo.cn',
        //     'bu.dusays.com',
        // ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.liuyuyang.net',
            },
            {
                protocol: 'https',
                hostname: 'q1.qlogo.cn',
            },
            {
                protocol: 'https',
                hostname: 'bu.dusays.com',
            }
        ],
    },
};

export default nextConfig;