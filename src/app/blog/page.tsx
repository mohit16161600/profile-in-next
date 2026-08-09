import { BLOG_POSTS } from "@/data/posts";
import BlogIndex from "@/components/BlogIndex";

export const metadata = {
    title: "Blog | Mohit Koli — Web Hosting, AI Tools & Development Guides",
    description:
        "Practical guides on web hosting in India, AI tools, and full-stack development — written from real client projects by Mohit Koli, Senior Full Stack Developer.",
    keywords:
        "Mohit Koli blog, web hosting india, hostinger guides, ai tools, web development tutorials, nextjs, react, nodejs, full stack development",
    alternates: {
        canonical: "https://mohitkoli.in/blog",
    },
    openGraph: {
        title: "Blog | Mohit Koli — Web Hosting, AI Tools & Development Guides",
        description:
            "Practical guides on web hosting in India, AI tools, and full-stack development — from real client projects.",
        url: "https://mohitkoli.in/blog",
        type: "website",
    },
};

export default function BlogPage() {
    const categoryCount = new Set(BLOG_POSTS.map((p) => p.category)).size;

    return (
        <>
            {/* Hero — pure CSS gradient (no image request = instant LCP) */}
            <section className="relative overflow-hidden pt-36 pb-16 text-white" aria-label="Blog hero">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="absolute -bottom-40 left-[5%] h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
                    <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                            The Blog
                        </p>
                        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Guides that come from{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-primary-400 to-cyan-400 bg-clip-text text-transparent">
                                real projects
                            </span>
                        </h1>
                        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
                            Web hosting in India, AI tools, and full-stack development — tested on real client work,
                            written without the fluff. By Mohit Koli, Senior Full Stack Developer.
                        </p>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                            <span><strong className="text-white">{BLOG_POSTS.length}</strong> articles</span>
                            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                            <span><strong className="text-white">{categoryCount}</strong> topics</span>
                            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                            <span>Updated <strong className="text-white">August 2026</strong></span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <BlogIndex posts={BLOG_POSTS} />
            </main>
        </>
    );
}
