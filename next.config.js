/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.donmai.us",
      },
    ],
  },
};

module.exports = nextConfig;
