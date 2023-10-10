/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {   
                protocol: 'https',
                hostname: 'cdn.donmai.us',
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
