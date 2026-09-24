import Link from "next/link";
import { BLOG_POSTS, PRIORITY_SLUGS, type BlogPost } from "@/data/posts";

/**
 * Every article ends with six contextual links to sibling articles.
 *
 * Why this exists: the site's link graph was sparse — most posts had 1-5 inbound
 * internal links and several had one, which is how a page ends up crawled but never
 * ranked. Hand-written "Related reading" blocks only covered the pages someone
 * remembered to edit.
 *
 * Relevance alone is not enough: a post in a category of its own (the riding-vlog
 * page, the developer profile) scores near zero against everything and would stay
 * orphaned, which is exactly the problem this is meant to solve. So the map is
 * built once per build with a coverage pass that guarantees every post is linked
 * from at least MIN_INBOUND others.
 *
 * Server component on purpose: the links must be in the static HTML for Google.
 */

const PICKS = 6;
const MIN_INBOUND = 3;

const score = (current: BlogPost, candidate: BlogPost) => {
    let s = 0;
    if (candidate.category === current.category) s += 3;
    const mine = new Set(current.keywords.map((k) => k.toLowerCase()));
    for (const k of candidate.keywords) if (mine.has(k.toLowerCase())) s += 2;
    // Nudge toward the monetised Hostinger pages when scores otherwise tie.
    if (PRIORITY_SLUGS.includes(candidate.slug)) s += 1;
    return s;
};

/** slug -> the six slugs shown under it. Computed once, deterministically. */
const RELATED: Map<string, string[]> = (() => {
    const ranked = new Map<string, { slug: string; s: number }[]>();
    for (const post of BLOG_POSTS) {
        ranked.set(
            post.slug,
            BLOG_POSTS.filter((p) => p.slug !== post.slug)
                .map((p) => ({ slug: p.slug, s: score(post, p) }))
                // Stable: score, then newest id, so every build produces the same map.
                .sort((a, b) => b.s - a.s || (BLOG_POSTS.find((x) => x.slug === b.slug)!.id - BLOG_POSTS.find((x) => x.slug === a.slug)!.id)),
        );
    }

    const picks = new Map<string, string[]>();
    for (const [slug, list] of ranked) picks.set(slug, list.slice(0, PICKS).map((x) => x.slug));

    const inbound = () => {
        const c = new Map<string, number>(BLOG_POSTS.map((p) => [p.slug, 0]));
        for (const list of picks.values()) for (const s of list) c.set(s, (c.get(s) ?? 0) + 1);
        return c;
    };

    // Coverage pass: pull every under-linked post into the lists that rank it highest,
    // displacing a pick that can spare a link. Bounded, so it always terminates.
    for (let round = 0; round < PICKS; round++) {
        const counts = inbound();
        const starved = BLOG_POSTS.filter((p) => (counts.get(p.slug) ?? 0) < MIN_INBOUND);
        if (!starved.length) break;

        for (const poor of starved) {
            const hosts = ranked.get(poor.slug) ? BLOG_POSTS.filter((h) => h.slug !== poor.slug) : [];
            // Hosts that rank this post highest get it first.
            const byAffinity = hosts
                .map((h) => ({ h, s: score(h, poor) }))
                .sort((a, b) => b.s - a.s || a.h.id - b.h.id);

            for (const { h } of byAffinity) {
                const counts2 = inbound();
                if ((counts2.get(poor.slug) ?? 0) >= MIN_INBOUND) break;
                const list = picks.get(h.slug)!;
                if (list.includes(poor.slug)) continue;
                // Drop the least valuable pick that can afford to lose one.
                const dropIdx = [...list].reverse().findIndex((s) => (counts2.get(s) ?? 0) > MIN_INBOUND);
                if (dropIdx === -1) continue;
                list[list.length - 1 - dropIdx] = poor.slug;
            }
        }
    }

    return picks;
})();

export default function RelatedPosts({ slug }: { slug: string }) {
    const slugs = RELATED.get(slug);
    if (!slugs?.length) return null;

    const picks = slugs
        .map((s) => BLOG_POSTS.find((p) => p.slug === s))
        .filter((p): p is BlogPost => Boolean(p));

    return (
        <section className="mb-12" aria-label="Related articles">
            <h2 className="text-2xl font-bold text-white mb-5">Aage kya padhein</h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {picks.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-primary-500/40 hover:bg-primary-500/5"
                    >
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2">
                            {p.category} · {p.readTime}
                        </p>
                        <h3 className="font-bold text-white leading-snug mb-2 group-hover:text-primary-300">
                            {p.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-6 line-clamp-2">{p.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
