/** @type {import('next').NextConfig} */
const repoName = 'yuukiendo.github.io'; // Replace with your actual repository name

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
};

export default nextConfig;
