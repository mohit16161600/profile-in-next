import { BLOG_POSTS } from '@/data/posts';

export const dynamic = 'force-static';
export const revalidate = 86400;

const SITE = 'https://mohitkoli.info';

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export async function GET() {
    const items = BLOG_POSTS.map((post) => {
        const url = `${SITE}/blog/${post.slug}`;
        const pubDate = new Date(post.updated ?? post.date).toUTCString();

        return `        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <pubDate>${pubDate}</pubDate>
            <category>${escapeXml(post.category)}</category>
            <description>${escapeXml(post.description)}</description>
        </item>`;
    }).join('\n');

    const lastBuildDate = new Date(
        Math.max(...BLOG_POSTS.map((post) => new Date(post.updated ?? post.date).getTime())),
    ).toUTCString();

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Mohit Koli — Web Development, Hosting &amp; AI Blog</title>
        <link>${SITE}/blog</link>
        <description>Tutorials and honest guides on web development, hosting deals, JavaScript frameworks, and AI tools by Mohit Koli, Senior Full Stack Developer.</description>
        <language>en-in</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
    </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
