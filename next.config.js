/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only needed while the profile picture is hosted remotely; remove once it lives in /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.donmai.us",
      },
    ],
  },
};

module.exports = nextConfig;
