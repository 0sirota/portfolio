/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "assets.aceternity.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings and errors during the build process
  },
};

module.exports = nextConfig;
