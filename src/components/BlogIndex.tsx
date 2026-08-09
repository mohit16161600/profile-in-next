"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/posts";

/* Normalise the many raw post categories into a few clean reader-facing groups
   so the filter bar looks designed, not accidental. */
const GROUPS = ["All", "Hosting", "AI", "Web Dev", "Career & Money", "Lifestyle"] as const;
type Group = (typeof GROUPS)[number];

function groupOf(post: BlogPost): Exclude<Group, "All"> {
    const c = post.category.toLowerCase();
    if (c.includes("hosting")) return "Hosting";
    if (c.startsWith("ai")) return "AI";
    if (["react", "javascript", "web development"].some((k) => c.includes(k))) return "Web Dev";
    if (["riding", "rider", "creator", "lifestyle", "travel"].some((k) => c.includes(k))) return "Lifestyle";
    return "Career & Money";
}

const GROUP_ACCENT: Record<Exclude<Group, "All">, string> = {
    Hosting: "text-violet-300 bg-violet-500/10 border-violet-500/30",
    AI: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
    "Web Dev": "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
    "Career & Money": "text-amber-300 bg-amber-500/10 border-amber-500/30",
    Lifestyle: "text-rose-300 bg-rose-500/10 border-rose-500/30",
};

function PostMeta({ post }: { post: BlogPost }) {
    return (
        <div className="flex items-center gap-2 text-xs text-gray-500">
            <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
            <span aria-hidden="true">·</span>
            <span itemProp="timeRequired">{post.readTime}</span>
        </div>
    );
}

function CategoryChip({ post }: { post: BlogPost }) {
    const g = groupOf(post);
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${GROUP_ACCENT[g]}`}>
            {post.category}
        </span>
    );
}

function FeaturedCard({ post }: { post: BlogPost }) {
    return (
        <article
            className="group relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-900/20"
            itemScope
            itemType="https://schema.org/BlogPosting"
        >
            <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2" title={`Read ${post.title}`} itemProp="url">
                <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
                    <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        itemProp="image"
                    />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full bg-primary-500/15 border border-primary-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-300">
                            ★ Latest
                        </span>
                        <CategoryChip post={post} />
                    </div>
                    <h2 className="mb-3 text-2xl md:text-3xl font-bold leading-snug text-white transition-colors group-hover:text-primary-300" itemProp="headline">
                        {post.title}
                    </h2>
                    <p className="mb-5 text-gray-400 leading-relaxed line-clamp-3" itemProp="description">
                        {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <PostMeta post={post} />
                        <span className="text-sm font-semibold text-primary-400 transition-transform duration-300 group-hover:translate-x-1">
                            Read article →
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}

function PostCard({ post }: { post: BlogPost }) {
    return (
        <article
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-900/20"
            itemScope
            itemType="https://schema.org/BlogPosting"
        >
            <Link href={`/blog/${post.slug}`} className="flex h-full flex-col" title={`Read ${post.title}`} itemProp="url">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        itemProp="image"
                    />
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                        <CategoryChip post={post} />
                        <PostMeta post={post} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary-300 line-clamp-2" itemProp="headline">
                        {post.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2" itemProp="description">
                        {post.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                        <div className="flex items-center gap-2.5" itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 text-[10px] font-extrabold text-white">
                                MK
                            </span>
                            <span className="text-xs font-medium text-gray-300" itemProp="name">Mohit Koli</span>
                        </div>
                        <span className="text-xs font-semibold text-primary-400 transition-transform duration-300 group-hover:translate-x-1">
                            Read →
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
    const [active, setActive] = useState<Group>("All");

    const counts = useMemo(() => {
        const map = new Map<Group, number>([["All", posts.length]]);
        for (const p of posts) {
            const g = groupOf(p);
            map.set(g, (map.get(g) ?? 0) + 1);
        }
        return map;
    }, [posts]);

    const visible = active === "All" ? posts : posts.filter((p) => groupOf(p) === active);
    const [featured, ...rest] = visible;

    return (
        <div>
            {/* Filter bar */}
            <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter articles by topic">
                {GROUPS.map((g) => {
                    const isActive = active === g;
                    const count = counts.get(g) ?? 0;
                    if (g !== "All" && count === 0) return null;
                    return (
                        <button
                            key={g}
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActive(g)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                                isActive
                                    ? "border-primary-500/60 bg-primary-500/15 text-primary-300 shadow-lg shadow-primary-900/20"
                                    : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/25 hover:text-gray-200"
                            }`}
                        >
                            {g} <span className={`ml-1 text-xs ${isActive ? "text-primary-400" : "text-gray-600"}`}>{count}</span>
                        </button>
                    );
                })}
            </div>

            {featured && <FeaturedCard post={featured} />}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {visible.length === 0 && (
                <p className="py-16 text-center text-gray-500">No articles in this category yet.</p>
            )}
        </div>
    );
}
