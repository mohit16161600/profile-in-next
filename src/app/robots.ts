import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                    '/_next/',
                ],
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
                allow: '/',
            },
        ],
        sitemap: 'https://mohitkoli.info/sitemap.xml',
        host: 'https://mohitkoli.info',
    };
}
