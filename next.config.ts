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
    experimental: {
        // Inlining Tailwind was measured and it lost, so it stays off.
        //
        // Measured 2026-08-24 on /blog/best-vps-hosting-india-2026, gzipped over the wire:
        //   inlineCss: true  -> 66 KB first load, 66 KB every subsequent page (never cached)
        //   inlineCss: false -> 21 KB HTML + 21 KB CSS = 42 KB first load, 21 KB thereafter
        // It is lighter on the FIRST page too, not just on navigation — inlining saved one
        // HTTP/2 request and paid 24 KB for it. The original note here assumed a ~21 KB sheet;
        // that is the gzipped figure and still correct, but it was never the deciding number.
        inlineCss: false,
    },
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
            // The previous site published these as hyphenated paths (/developer-in-guwahati)
            // rather than a path segment (/developer-in/guwahati). Backlinks still point at the
            // hyphen form and were all 404ing. These resolve straight to the final destination
            // so a legacy link costs one redirect, not two.
            {
                source: `/developer-in-${entry.source}`,
                destination: `/developer-in/${entry.destination}`,
                permanent: true,
            },
            {
                source: `/locations-${entry.source}`,
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
            { source: "/blogs/blog8.html", destination: "/blog/will-ai-replace-your-job-2026", permanent: true },
            { source: "/blogs/blog9.html", destination: "/blog/build-website-with-ai-step-by-step", permanent: true },

            // Temporary/Internal redirects from OLD slugs to NEW slugs
            { source: "/blog/blog1", destination: "/blog/ai-in-web-development-comprehensive-guide", permanent: true },
            { source: "/blog/blog2", destination: "/blog/the-truth-about-ai-coding-assistants", permanent: true },
            { source: "/blog/blog3", destination: "/blog/top-javascript-libraries-frameworks-2025", permanent: true },
            { source: "/blog/blog4", destination: "/blog/best-ai-productivity-tools-2025", permanent: true },
            { source: "/blog/blog5", destination: "/blog/hostinger-vps-hosting-review-discount", permanent: true },
            { source: "/blog/blog6", destination: "/blog/frontend-vs-backend-development-guide", permanent: true },
            { source: "/blog/blog7", destination: "/blog/is-react-worth-learning-2026", permanent: true },
            { source: "/blog/blog8", destination: "/blog/will-ai-replace-your-job-2026", permanent: true },
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

            // Cities that are still live keep their own pages, so the hyphen form just needs the
            // separator swapped. This sits AFTER the consolidation rules above, which take
            // precedence — otherwise a retired city would land on its own dead slug.
            { source: "/developer-in-:slug", destination: "/developer-in/:slug", permanent: true },
            { source: "/locations-:slug", destination: "/developer-in/:slug", permanent: true },

            // Legacy .html leftovers from the old site. `terms.html` in particular is still the
            // target of live "Terms of Service" backlinks.
            { source: "/terms.html", destination: "/terms", permanent: true },
            { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
            { source: "/privacy.html", destination: "/privacy-policy", permanent: true },
            { source: "/index.html", destination: "/", permanent: true },

            // Sitemap is served at /sitemap.xml; the extensionless path was being linked.
            { source: "/sitemap", destination: "/sitemap.xml", permanent: true },
        ];
    },
};

export default nextConfig;
