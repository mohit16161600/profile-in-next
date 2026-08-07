import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// BRANCH: redirect-mohitkoli-info  —  deploy this to mohitkoli.info ONLY.
//
// mohitkoli.info is being retired. This branch exists solely to hand every
// request (and its accumulated link equity) to the same path on mohitkoli.in.
// The real site lives on `master`; do not deploy this branch to mohitkoli.in.
//
// The page code is still here on purpose: it keeps the branch buildable and
// rebaseable on master, and it means a config regression degrades to "old site
// still serves" rather than "domain serves nothing".
// ---------------------------------------------------------------------------

const TARGET_ORIGIN = "https://mohitkoli.in";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        // `redirects` are evaluated ahead of both `public/` files and app routes,
        // so this covers pages, /sitemap.xml, /robots.txt, /feed.xml, /ads.txt —
        // everything. Query strings ride along automatically because the
        // destination declares none.
        //
        // 301 rather than `permanent: true` (which emits 308): both are permanent
        // and Google treats them identically, but 301 is the code every crawler,
        // social unfurler and backlink checker has understood for 25 years. On a
        // one-shot domain migration that compatibility is worth more than the
        // method-preservation 308 buys us on a GET-only site.
        return [
            // Root has to be listed separately — `/:path*` compiles to a pattern
            // with an optional capture, and relying on it to also produce a bare
            // origin for "/" is a subtlety not worth betting the homepage on.
            {
                source: "/",
                destination: TARGET_ORIGIN,
                statusCode: 301,
            },
            {
                source: "/:path*",
                destination: `${TARGET_ORIGIN}/:path*`,
                statusCode: 301,
            },
        ];
    },
};

export default nextConfig;
