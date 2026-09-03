import { BLOG_POSTS } from "@/data/posts";
import BlogSidebar from "@/components/BlogSidebar";
import ShareButtons from "@/components/ShareButtons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Blog1 from "@/components/blog-posts/Blog1";
import Blog2 from "@/components/blog-posts/Blog2";
import Blog3 from "@/components/blog-posts/Blog3";
import Blog4 from "@/components/blog-posts/Blog4";
import Blog5 from "@/components/blog-posts/Blog5";
import Blog6 from "@/components/blog-posts/Blog6";
import Blog7 from "@/components/blog-posts/Blog7";
import Blog9 from "@/components/blog-posts/Blog9";
import Blog10 from "@/components/blog-posts/Blog10";
import Blog11 from "@/components/blog-posts/Blog11";
import Blog14 from "@/components/blog-posts/Blog14";
import Blog15 from "@/components/blog-posts/Blog15";

const CONTENT_MAP: Record<string, React.ComponentType> = {
    "ai-in-web-development-comprehensive-guide": Blog1,
    "the-truth-about-ai-coding-assistants": Blog2,
    "top-javascript-libraries-frameworks-2025": Blog3,
    "best-ai-productivity-tools-2025": Blog4,
    "hostinger-vps-hosting-review-discount": Blog5,
    "frontend-vs-backend-development-guide": Blog6,
    "is-react-worth-learning-2026": Blog7,
    "build-website-with-ai-step-by-step": Blog9,
    "best-ai-tools-to-make-money-online-2026": Blog10,
    "best-ai-tools-for-whatsapp-business-automation-2026": Blog11,
    "mohit-koli-backend-developer-laravel-php-profile": Blog14,
    "react-se-ecommerce-website-kaise-banaye": Blog15,
};

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

/**
 * Social platforms and Google Discover reject SVG: Facebook, WhatsApp, X, LinkedIn
 * and Pinterest all render a bare text link instead of a card. Every branded SVG
 * hero has a PNG twin (see scripts/rasterize-blog-images.mjs) — the SVG stays the
 * on-page hero for LCP, the PNG goes everywhere a crawler or scraper reads it.
 */
function socialImage(imageSrc: string) {
    return imageSrc.replace(/\.svg$/, ".png");
}

/**
 * Google truncates around 60 characters. Most of these titles are already at that
 * limit, so appending " | Mohit Koli" (13 chars) only bought a cut-off brand name —
 * the suffix now applies solely when it actually fits.
 */
const BRAND_SUFFIX = " | Mohit Koli";
function pageTitle(title: string) {
    return title.length + BRAND_SUFFIX.length <= 60 ? `${title}${BRAND_SUFFIX}` : title;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Blog Post Not Found" };

    const ogImage = socialImage(post.imageSrc);

    return {
        title: pageTitle(post.seoTitle ?? post.title),
        description: post.description,
        keywords: post.keywords.join(", "),
        alternates: {
            canonical: `https://mohitkoli.in/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://mohitkoli.in/blog/${post.slug}`,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            modifiedTime: new Date(post.updated ?? post.date).toISOString(),
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const ContentComponent = CONTENT_MAP[slug];

    const relatedPosts = BLOG_POSTS
        .filter((p) => p.slug !== slug && (p.category === post.category || p.keywords.some((k) => post.keywords.includes(k))))
        .slice(0, 4);

    const AUTHORITY_LINKS: Record<string, { label: string; href: string; source: string; sponsored?: boolean }[]> = {
        "AI Hacks": [
            { label: "OpenAI ChatGPT product overview", href: "https://openai.com/chatgpt/", source: "OpenAI" },
            { label: "Google AI principles and research", href: "https://ai.google/", source: "Google" },
            { label: "Anthropic Claude documentation", href: "https://claude.com/product/overview", source: "Anthropic" },
        ],
        "AI Tips": [
            { label: "OpenAI ChatGPT product overview", href: "https://openai.com/chatgpt/", source: "OpenAI" },
            { label: "Anthropic Claude — official", href: "https://claude.com/product/overview", source: "Anthropic" },
            { label: "ChatGPT prompt engineering guide", href: "https://developers.openai.com/api/docs/guides/prompt-engineering", source: "OpenAI Platform" },
        ],
        "AI Tools": [
            { label: "Hugging Face — open-source AI models", href: "https://huggingface.co/", source: "Hugging Face" },
            { label: "GitHub Copilot official page", href: "https://github.com/features/copilot", source: "GitHub" },
            { label: "Google Gemini overview", href: "https://gemini.google.com/", source: "Google" },
        ],
        "AI Comparison": [
            { label: "OpenAI ChatGPT", href: "https://openai.com/chatgpt/", source: "OpenAI" },
            { label: "Google Gemini", href: "https://gemini.google.com/", source: "Google" },
            { label: "Anthropic Claude", href: "https://claude.com/product/overview", source: "Anthropic" },
        ],
        "AI & Career": [
            { label: "World Economic Forum — Future of Jobs", href: "https://www.weforum.org/reports/the-future-of-jobs-report-2023/", source: "WEF" },
            { label: "McKinsey — generative AI and the workforce", href: "https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america", source: "McKinsey" },
        ],
        "AI & Web Development": [
            { label: "MDN Web Docs", href: "https://developer.mozilla.org/", source: "Mozilla" },
            { label: "Next.js documentation", href: "https://nextjs.org/docs", source: "Vercel" },
            { label: "React documentation", href: "https://react.dev/", source: "Meta" },
        ],
        "AI Coding": [
            { label: "GitHub Copilot", href: "https://github.com/features/copilot", source: "GitHub" },
            { label: "Cursor IDE", href: "https://cursor.com/", source: "Cursor" },
        ],
        "AI Development": [
            { label: "MDN Web Docs", href: "https://developer.mozilla.org/", source: "Mozilla" },
            { label: "OpenAI API reference", href: "https://developers.openai.com/api/docs", source: "OpenAI" },
        ],
        React: [
            { label: "Official React docs", href: "https://react.dev/", source: "Meta" },
            { label: "Next.js App Router guide", href: "https://nextjs.org/docs/app", source: "Vercel" },
            { label: "MDN — JavaScript reference", href: "https://developer.mozilla.org/docs/Web/JavaScript", source: "Mozilla" },
        ],
        JavaScript: [
            { label: "MDN JavaScript reference", href: "https://developer.mozilla.org/docs/Web/JavaScript", source: "Mozilla" },
            { label: "TC39 ECMAScript specifications", href: "https://tc39.es/", source: "TC39" },
            { label: "Node.js documentation", href: "https://nodejs.org/en/docs", source: "Node.js" },
        ],
        Career: [
            { label: "Stack Overflow Developer Survey", href: "https://survey.stackoverflow.co/", source: "Stack Overflow" },
            { label: "GitHub Octoverse report", href: "https://octoverse.github.com/", source: "GitHub" },
        ],
        Hosting: [
            { label: "Hostinger — official", href: "https://www.hostinger.com/in?REFERRALCODE=mohitkoli", sponsored: true, source: "Hostinger" },
            { label: "Cloudflare — web performance basics", href: "https://www.cloudflare.com/learning/", source: "Cloudflare" },
        ],
        Blogging: [
            { label: "Google Search Central — SEO starter guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", source: "Google" },
            { label: "Google AdSense — official", href: "https://adsense.google.com/start/", source: "Google" },
        ],
        "Personal Brand": [
            { label: "LinkedIn — Mohit Koli", href: "https://www.linkedin.com/in/mohit-koli-b47260213", source: "LinkedIn" },
            { label: "GitHub — Mohit Koli", href: "https://github.com/mohit16161600", source: "GitHub" },
        ],
    };

    const authorityLinks = AUTHORITY_LINKS[post.category] ?? [];

    const publishedISO = new Date(post.date).toISOString();
    const modifiedISO = new Date(post.updated ?? post.date).toISOString();
    const canonical = `https://mohitkoli.in/blog/${post.slug}`;
    // Article rich results need a raster image, so the schema points at the PNG twin
    // even though the hero above renders the lighter SVG.
    const schemaImage = socialImage(post.imageSrc);
    const absoluteImage = schemaImage.startsWith("http")
        ? schemaImage
        : `https://mohitkoli.in${schemaImage}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: absoluteImage,
        datePublished: publishedISO,
        dateModified: modifiedISO,
        author: {
            "@type": "Person",
            name: "Mohit Koli",
            url: "https://mohitkoli.in/profile",
            jobTitle: "Senior Full Stack Developer",
            sameAs: [
                "https://github.com/mohit16161600",
                "https://www.linkedin.com/in/mohit-koli-b47260213",
                "https://x.com/mohitko86979490",
            ],
        },
        publisher: {
            "@type": "Person",
            name: "Mohit Koli",
            logo: {
                "@type": "ImageObject",
                url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg",
            },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        inLanguage: "en-IN",
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: canonical },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-3">
                        {/* Breadcrumb */}
                        <nav className="mb-6">
                            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                                <li><Link href="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link></li>
                                <li>/</li>
                                <li className="text-gray-300 line-clamp-1">{post.title}</li>
                            </ol>
                        </nav>

                        {/* Article Header */}
                        <header className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <Image
                                            src="/assets/mohit-koli-profile-photo.jpg"
                                            alt="Mohit Koli"
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-3 object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-white">Mohit Koli</p>
                                            <p className="text-gray-400">Senior Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p>{post.date}</p>
                                    <p>{post.readTime}</p>
                                </div>
                            </div>

                            <div className="relative w-full aspect-video mb-8">
                                <Image
                                    src={post.imageSrc}
                                    alt={post.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                        </header>

                        {/* Content Body */}
                        <div className="prose prose-lg prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-a:text-primary-500 hover:prose-a:text-primary-400">
                            {ContentComponent ? <ContentComponent /> : <p>Content coming soon...</p>}
                        </div>

                        {/* Social Share */}
                        <div className="glass rounded-xl shadow-sm p-6 mt-12 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4">Share This Article</h3>
                            <ShareButtons url={canonical} title={post.title} />
                        </div>

                        {authorityLinks.length > 0 && (
                            <section className="mt-12 glass rounded-2xl border border-white/10 p-6" aria-labelledby="further-reading">
                                <h2 id="further-reading" className="text-xl md:text-2xl font-bold text-white mb-2">Further reading from trusted sources</h2>
                                <p className="text-sm text-gray-400 mb-5">
                                    Cross-checked references from primary, authoritative sources — useful if you want to go deeper on this topic.
                                </p>
                                <ul className="space-y-3">
                                    {authorityLinks.map((link) => (
                                        <li key={link.href} className="flex items-start gap-3">
                                            <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary-400" aria-hidden="true" />
                                            <a
                                                href={link.href}
                                                rel={"sponsored" in link && link.sponsored ? "nofollow sponsored noopener" : "noopener noreferrer external"}
                                                target="_blank"
                                                className="text-primary-300 hover:text-primary-200 transition-colors underline-offset-4 hover:underline"
                                            >
                                                {link.label}
                                            </a>
                                            <span className="text-xs text-gray-500 ml-1">— {link.source}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Author E-E-A-T block — signals expertise to Google */}
                        <aside className="mt-12 glass rounded-2xl border border-white/10 p-6 flex flex-col sm:flex-row gap-6 items-start">
                            <Image
                                src="/assets/mohit-koli-profile-photo.jpg"
                                alt="Mohit Koli, Senior Full Stack Developer"
                                width={88}
                                height={88}
                                className="rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-primary-400 mb-1">About the author</p>
                                <h3 className="text-xl font-bold text-white">Mohit Koli — Senior Full Stack Developer</h3>
                                <p className="mt-3 text-gray-300 leading-7">
                                    I&apos;ve been shipping production web apps in React, Next.js, PHP, and Laravel since 2022, working with founders and agencies across India on real revenue-driving sites. I write about the tools, frameworks, and AI workflows I actually use — not theory.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                                    <Link href="/profile" className="text-primary-400 hover:text-primary-300 transition-colors">Full profile →</Link>
                                    <a href="https://github.com/mohit16161600" rel="author noopener" target="_blank" className="text-primary-400 hover:text-primary-300 transition-colors">GitHub</a>
                                    <a href="https://www.linkedin.com/in/mohit-koli-b47260213" rel="author noopener" target="_blank" className="text-primary-400 hover:text-primary-300 transition-colors">LinkedIn</a>
                                    <a href="https://x.com/mohitko86979490" rel="author noopener" target="_blank" className="text-primary-400 hover:text-primary-300 transition-colors">X (Twitter)</a>
                                </div>
                            </div>
                        </aside>

                        {relatedPosts.length > 0 && (
                            <section className="mt-16 border-t border-white/10 pt-12" aria-labelledby="related-articles">
                                <h2 id="related-articles" className="text-2xl md:text-3xl font-bold text-white mb-8">
                                    Continue reading
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/blog/${related.slug}`}
                                            className="group glass rounded-2xl border border-white/10 p-5 hover:border-primary-500/40 transition-colors block"
                                        >
                                            <p className="text-xs uppercase tracking-[0.25em] text-primary-400">{related.category}</p>
                                            <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="mt-3 text-sm text-gray-400 line-clamp-2">{related.description}</p>
                                            <p className="mt-4 text-xs text-gray-500">{related.date} • {related.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                    </article>

                    <BlogSidebar />
                </div>
            </main>
        </>
    );
}
