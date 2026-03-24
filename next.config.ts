import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // Legacy .html redirects to NEW slugs
      { source: '/blogs/blog1.html', destination: '/blog/ai-in-web-development-comprehensive-guide', permanent: true },
      { source: '/blogs/blog2.html', destination: '/blog/the-truth-about-ai-coding-assistants', permanent: true },
      { source: '/blogs/blog3.html', destination: '/blog/top-javascript-libraries-frameworks-2025', permanent: true },
      { source: '/blogs/blog4.html', destination: '/blog/best-ai-productivity-tools-2025', permanent: true },
      { source: '/blogs/blog5.html', destination: '/blog/hostinger-vps-hosting-review-discount', permanent: true },
      { source: '/blogs/blog6.html', destination: '/blog/frontend-vs-backend-development-guide', permanent: true },
      { source: '/blogs/blog7.html', destination: '/blog/is-react-worth-learning-2026', permanent: true },
      { source: '/blogs/blog8.html', destination: '/blog/will-ai-replace-web-developers-2026', permanent: true },
      { source: '/blogs/blog9.html', destination: '/blog/build-website-with-ai-step-by-step', permanent: true },
      
      // Temporary/Internal redirects from OLD slugs to NEW slugs
      { source: '/blog/blog1', destination: '/blog/ai-in-web-development-comprehensive-guide', permanent: true },
      { source: '/blog/blog2', destination: '/blog/the-truth-about-ai-coding-assistants', permanent: true },
      { source: '/blog/blog3', destination: '/blog/top-javascript-libraries-frameworks-2025', permanent: true },
      { source: '/blog/blog4', destination: '/blog/best-ai-productivity-tools-2025', permanent: true },
      { source: '/blog/blog5', destination: '/blog/hostinger-vps-hosting-review-discount', permanent: true },
      { source: '/blog/blog6', destination: '/blog/frontend-vs-backend-development-guide', permanent: true },
      { source: '/blog/blog7', destination: '/blog/is-react-worth-learning-2026', permanent: true },
      { source: '/blog/blog8', destination: '/blog/will-ai-replace-web-developers-2026', permanent: true },
      { source: '/blog/blog9', destination: '/blog/build-website-with-ai-step-by-step', permanent: true },

      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/blogs.html', destination: '/blog', permanent: true },
      { source: '/blogs/blogs.html', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
