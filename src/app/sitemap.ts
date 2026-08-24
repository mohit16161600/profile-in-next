import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/posts';
import { SEO_LOCATIONS } from '@/data/locations';

export const revalidate = 86400;

const baseUrl = 'https://mohitkoli.in';

// Stable <lastmod> anchors. Bump these ONLY when the underlying page content
// actually changes. Previously every deploy stamped `new Date()` (today) on all
// static + location pages, so Google saw 18 pages "changed" every single day and
// learned to distrust our lastmod signal. Accurate, stable dates fix that.
const SECTION_PAGES_UPDATED = '2026-07-03'; // profile, services, projects, locations hub
const LEGAL_PAGES_UPDATED = '2026-01-21';   // privacy-policy, terms — rarely change
const LOCATION_PAGES_UPDATED = '2026-06-20'; // developer-in/* templated service-area pages

const DAY_MS = 1000 * 60 * 60 * 24;
const toDay = (value: number | Date) => new Date(value).toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
    // Home + /blog genuinely change when a new post ships, so anchor their
    // lastmod to the newest post's date instead of "today".
    const newestPostTime = BLOG_POSTS.reduce(
        (max, post) => Math.max(max, new Date(post.date).getTime()),
        0,
    );
    const feedLastMod = toDay(newestPostTime);

    const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
        const published = new Date(post.date);
        const ageInDays = Math.max(0, (Date.now() - published.getTime()) / DAY_MS);
        const changeFrequency = ageInDays < 30 ? 'weekly' : ageInDays < 180 ? 'monthly' : 'yearly';
        const priority = ageInDays < 30 ? 0.9 : ageInDays < 180 ? 0.7 : 0.5;

        return {
            url: `${baseUrl}/blog/${post.slug}`,
            // Freshened posts advertise their update date; others their publish date.
            lastModified: toDay(new Date(post.updated ?? post.date)),
            changeFrequency,
            priority,
        };
    });

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: feedLastMod, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/profile`, lastModified: SECTION_PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/services`, lastModified: SECTION_PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/blog`, lastModified: feedLastMod, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/locations`, lastModified: SECTION_PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/projects/sheopals-crm`, lastModified: SECTION_PAGES_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/privacy-policy`, lastModified: LEGAL_PAGES_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: LEGAL_PAGES_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    ];

    const locationRoutes: MetadataRoute.Sitemap = SEO_LOCATIONS.map((location) => ({
        url: `${baseUrl}/developer-in/${location.slug}`,
        lastModified: LOCATION_PAGES_UPDATED,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticRoutes, ...blogPosts, ...locationRoutes];
}
