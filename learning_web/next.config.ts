import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  assetPrefix: "",
  rewrites: async () => [
    {
      source: '/learn',
      destination: '/version-dev/learn',
    },
    {
      source: '/learn/:path*',
      destination: '/version-dev/learn/:path*',
    }
  ]
};

export default nextConfig;
