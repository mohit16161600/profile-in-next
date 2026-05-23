import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/posts';
import { SEO_LOCATIONS } from '@/data/locations';

export const revalidate = 86400;
const LAST_MAJOR_CONTENT_UPDATE = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mohitkoli.info';

    const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
        const published = new Date(post.date);
        const ageInDays = Math.max(0, (Date.now() - published.getTime()) / (1000 * 60 * 60 * 24));
        const changeFrequency = ageInDays < 30 ? 'daily' : ageInDays < 180 ? 'weekly' : 'monthly';
        const priority = ageInDays < 30 ? 0.9 : ageInDays < 180 ? 0.7 : 0.5;

        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: published.toISOString().split('T')[0],
            changeFrequency,
            priority,
        };
    });

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/profile`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/locations`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/projects/sheopals-crm`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    const locationRoutes: MetadataRoute.Sitemap = SEO_LOCATIONS.map((location) => ({
        url: `${baseUrl}/developer-in/${location.slug}`,
        lastModified: LAST_MAJOR_CONTENT_UPDATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticRoutes, ...blogPosts, ...locationRoutes];
}
