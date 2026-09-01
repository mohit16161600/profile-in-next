import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                // /_next/ must stay crawlable: since inlineCss was turned off, the site's
                // entire stylesheet is served from /_next/static/. Blocking it meant
                // Googlebot rendered every page unstyled — which degrades mobile-usability
                // and page-experience evaluation. Google explicitly advises against
                // blocking CSS/JS assets.
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                ],
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
                allow: '/',
            },
        ],
        sitemap: 'https://mohitkoli.in/sitemap.xml',
        host: 'https://mohitkoli.in',
    };
}
