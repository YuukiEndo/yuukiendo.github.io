/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { 
    unoptimized: true 
  },
    basePath: "/yuukiendo.github.io/", // Your repository name
    assetPrefix: "/yuukiendo.github.io/", // Note the trailing slash
};

export default nextConfig;