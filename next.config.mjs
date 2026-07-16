/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,   // Surge serves /about/index.html not /about.html
  images: {
    unoptimized: true,   // Static export can't use Next.js image optimization
  },
};

export default nextConfig;
