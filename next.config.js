/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Static Export
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
