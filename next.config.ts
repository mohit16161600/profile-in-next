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
  async redirects() {
    return [
      {
        source: '/blogs/blog1.html',
        destination: '/blog/blog1',
        permanent: true,
      },
      {
        source: '/blogs.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/blogs.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
