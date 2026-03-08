import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/developer-in-:location',
        destination: '/locations/:location',
      },
    ]
  },
};

export default nextConfig;
