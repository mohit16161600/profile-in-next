import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/posts';
import { SEO_LOCATIONS } from '@/data/locations';

export const revalidate = 86400; // revalidate every 24 hours
const LAST_MAJOR_CONTENT_UPDATE = '2026-03-18';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mohitkoli.info';

    const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

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
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/locations`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects/sheopals-crm`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: LAST_MAJOR_CONTENT_UPDATE,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    const locationRoutes: MetadataRoute.Sitemap = SEO_LOCATIONS.map((location) => ({
        url: `${baseUrl}/developer-in-${location.slug}`,
        lastModified: LAST_MAJOR_CONTENT_UPDATE,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogPosts, ...locationRoutes];
}
