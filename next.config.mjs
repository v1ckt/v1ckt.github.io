/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    experimental: {
        viewTransition: true,
    },
};

export default nextConfig;