/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trustluxurytransportation.com',
      },
      {
        protocol: 'https',
        hostname: '*.placeholder.com',
      },
    ],
  },
}

export default nextConfig
