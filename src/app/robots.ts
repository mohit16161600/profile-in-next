import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
            crawlDelay: 1, // Soft recommendation
        },
        sitemap: 'https://mohitkoli.info/sitemap.xml',
        host: 'https://mohitkoli.info',
    };
}
