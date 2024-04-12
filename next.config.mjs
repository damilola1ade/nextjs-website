/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {
    API_TOKEN: process.env.API_TOKEN,
    BLOG_URL: process.env.BLOG_URL,
  },
};

export default nextConfig;
