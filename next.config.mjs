/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: 'https://v1ckt.github.io/',
    basePath: '/v1ckt.github.io',
    trailingSlash: true,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;