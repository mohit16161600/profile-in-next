"use client";

import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/posts";

export default function LatestBlogs() {
    // Get the 3 most recent posts
    const latestPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Inside the Mind</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Latest from the <span className="text-primary-500">Blog</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Deep dives into modern web architecture, AI-driven development, and the future of coding.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 rounded-xl glass border border-white/10 text-white font-medium hover:bg-white/5 transition-all group"
                    >
                        View All Articles
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <article
                            key={post.slug}
                            className={`reveal reveal-d${index + 1} glass group rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 flex flex-col h-full`}
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative h-56 sm:h-60 overflow-hidden">
                                <Image
                                    src={post.imageSrc || "/assets/blog-placeholder.jpg"}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-primary-500/10 text-primary-400 uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.description}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-auto inline-flex items-center text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors group/link"
                                >
                                    Read Article
                                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
