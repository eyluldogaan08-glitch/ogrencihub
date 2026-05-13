/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  images: {
    qualities: [75, 100],
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
