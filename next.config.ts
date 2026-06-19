import type { NextConfig } from "next";

const REMOVED_LOCATION_REDIRECTS = [
    { source: "jaipur", destination: "delhi" },
    { source: "surat", destination: "ahmedabad" },
    { source: "lucknow", destination: "noida" },
    { source: "chandigarh", destination: "delhi" },
    { source: "indore", destination: "ahmedabad" },
    { source: "patna", destination: "kolkata" },
    { source: "bhopal", destination: "ahmedabad" },
    { source: "kanpur", destination: "noida" },
    { source: "nagpur", destination: "pune" },
    { source: "agra", destination: "delhi" },
    { source: "varanasi", destination: "kolkata" },
    { source: "amritsar", destination: "delhi" },
    { source: "coimbatore", destination: "chennai" },
    { source: "kochi", destination: "chennai" },
    { source: "bhubaneswar", destination: "kolkata" },
    { source: "guwahati", destination: "kolkata" },
    { source: "maharashtra", destination: "mumbai" },
    { source: "karnataka", destination: "bangalore" },
    { source: "gujarat", destination: "ahmedabad" },
    { source: "tamil-nadu", destination: "chennai" },
    { source: "uttar-pradesh", destination: "noida" },
    { source: "rajasthan", destination: "delhi" },
    { source: "kerala", destination: "chennai" },
    { source: "punjab", destination: "delhi" },
    { source: "haryana", destination: "gurugram" },
    { source: "bihar", destination: "kolkata" },
    { source: "madhya-pradesh", destination: "ahmedabad" },
    { source: "west-bengal", destination: "kolkata" },
    { source: "telangana", destination: "hyderabad" },
    { source: "andhra-pradesh", destination: "hyderabad" },
];

const nextConfig: NextConfig = {
    images: {
        // Allow self-authored branded SVG hero images to be served via next/image.
        // Safe here: every SVG under /public/assets is authored in-repo (no remote/user SVG).
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        const locationRedirects = REMOVED_LOCATION_REDIRECTS.flatMap((entry) => [
            {
                source: `/developer-in/${entry.source}`,
                destination: `/developer-in/${entry.destination}`,
                permanent: true,
            },
            {
                source: `/locations/${entry.source}`,
                destination: `/developer-in/${entry.destination}`,
                permanent: true,
            },
        ]);

        return [
            // Legacy .html redirects to NEW slugs
            { source: "/blogs/blog1.html", destination: "/blog/ai-in-web-development-comprehensive-guide", permanent: true },
            { source: "/blogs/blog2.html", destination: "/blog/the-truth-about-ai-coding-assistants", permanent: true },
            { source: "/blogs/blog3.html", destination: "/blog/top-javascript-libraries-frameworks-2025", permanent: true },
            { source: "/blogs/blog4.html", destination: "/blog/best-ai-productivity-tools-2025", permanent: true },
            { source: "/blogs/blog5.html", destination: "/blog/hostinger-vps-hosting-review-discount", permanent: true },
            { source: "/blogs/blog6.html", destination: "/blog/frontend-vs-backend-development-guide", permanent: true },
            { source: "/blogs/blog7.html", destination: "/blog/is-react-worth-learning-2026", permanent: true },
            { source: "/blogs/blog8.html", destination: "/blog/will-ai-replace-web-developers-2026", permanent: true },
            { source: "/blogs/blog9.html", destination: "/blog/build-website-with-ai-step-by-step", permanent: true },

            // Temporary/Internal redirects from OLD slugs to NEW slugs
            { source: "/blog/blog1", destination: "/blog/ai-in-web-development-comprehensive-guide", permanent: true },
            { source: "/blog/blog2", destination: "/blog/the-truth-about-ai-coding-assistants", permanent: true },
            { source: "/blog/blog3", destination: "/blog/top-javascript-libraries-frameworks-2025", permanent: true },
            { source: "/blog/blog4", destination: "/blog/best-ai-productivity-tools-2025", permanent: true },
            { source: "/blog/blog5", destination: "/blog/hostinger-vps-hosting-review-discount", permanent: true },
            { source: "/blog/blog6", destination: "/blog/frontend-vs-backend-development-guide", permanent: true },
            { source: "/blog/blog7", destination: "/blog/is-react-worth-learning-2026", permanent: true },
            { source: "/blog/blog8", destination: "/blog/will-ai-replace-web-developers-2026", permanent: true },
            { source: "/blog/blog9", destination: "/blog/build-website-with-ai-step-by-step", permanent: true },

            // Consolidate duplicate blog posts (fix keyword cannibalization)
            { source: "/blog/hidden-chatgpt-features", destination: "/blog/chatgpt-hidden-features-hacks", permanent: true },
            { source: "/blog/hostinger-discount-90-coupon-code", destination: "/blog/hostinger-discount-code-2026", permanent: true },
            { source: "/blog/will-ai-replace-web-developers-2026", destination: "/blog/will-ai-replace-your-job-2026", permanent: true },

            // Consolidate location pages
            ...locationRedirects,

            { source: "/privacy", destination: "/privacy-policy", permanent: true },
            { source: "/blogs.html", destination: "/blog", permanent: true },
            { source: "/blogs/blogs.html", destination: "/blog", permanent: true },
        ];
    },
};

export default nextConfig;
