/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ogrenciproje.apps.srv.aykutdurgut.com.tr",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
