import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/posts';

export const revalidate = 86400; // revalidate every 24 hours

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
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/profile`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects/sheopals-crm`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return [...staticRoutes, ...blogPosts];
}
