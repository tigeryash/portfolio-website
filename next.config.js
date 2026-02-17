/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.donmai.us",
      },
    ],
    qualities: [75, 85, 95, 100],
  },
};

module.exports = nextConfig;
