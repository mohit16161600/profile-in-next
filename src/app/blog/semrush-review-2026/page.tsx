import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/semrush-review-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/semrush-review-2026.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Semrush Review 2026: Is ₹12,000/mo Worth It in India?",
    description:
        "Semrush costs $139/mo — about ₹12,000 after forex. What you get, the per-seat pricing trap, and the cheaper tools that do most of the job.",
    keywords: [
        "semrush review", "semrush review 2026", "semrush price india", "is semrush worth it",
        "semrush pricing", "semrush free trial", "semrush vs ahrefs", "semrush alternatives",
        "semrush for beginners", "semrush keyword magic tool", "semrush india cost", "semrush pros and cons",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Semrush Review 2026: Is ₹12,000/mo Worth It in India?",
        description: "Real pricing, the per-seat trap, and whether an Indian blogger should actually buy it.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Semrush reviewed for Indian users in 2026" }],
    },
    twitter: {
        card: "summary_large_image", title: "Semrush Review 2026: Is ₹12,000/mo Worth It in India?",
        description: "What Semrush costs in rupees, and who should actually pay it.", images: [IMAGE],
    },
};

const FAQ = [
    { q: "How much does Semrush cost in India?", a: "Semrush prices in US dollars, not rupees. The entry SEO plan is $139/month, dropping to roughly $117/month on annual billing. At an indicative conversion that is about ₹12,000/month, and your card's forex markup pushes it higher. There is no India-specific pricing tier." },
    { q: "Is Semrush worth it for a beginner?", a: "Usually not. If you have fewer than about 20 published posts, the bottleneck is content, not research speed — and Google Search Console gives you your own performance data free. Semrush earns its price once you are publishing regularly and need to know what competitors rank for. Start with Search Console and a cheaper tool." },
    { q: "Does Semrush have a free trial?", a: "Yes. The public site typically offers a 7-day trial, and partner or referral links often carry an extended trial on the Pro or Guru plans. If you intend to test it, start from a referral link — the longer window costs nothing and gives you time to form a real opinion." },
    { q: "What is the biggest hidden cost of Semrush?", a: "Per-user seats. The advertised price covers one user; each additional team member is charged separately, so an agency of four is not paying $139 a month. If more than one person needs access, price the seats before you compare Semrush against anything else." },
    { q: "Semrush or Ahrefs — which should I buy?", a: "Semrush if you want one subscription covering keyword research, site audit, rank tracking, competitor analysis and ad data. Ahrefs if backlink analysis is the main job — its link index remains the deepest. Most people need one, and Semrush covers more ground per rupee." },
    { q: "What are the best cheaper Semrush alternatives?", a: "Mangools at about $29.90/month covers keyword research, rank tracking and basic backlinks well enough for a solo blog. SE Ranking at around $103/month on annual billing targets agencies wanting similar features with white-label reporting. Neither matches Semrush's database size, which may or may not matter to you." },
    { q: "Can I cancel Semrush anytime?", a: "Monthly plans can be cancelled before the next billing date. Annual plans are a commitment — you are buying twelve months at a discount, so treat the annual saving as a lock-in rather than free money. Check the current refund terms on their site before subscribing." },
    { q: "Does Semrush work well for Indian keyword data?", a: "Yes for the India database, with the usual caveat that volumes for regional and Hinglish queries are less reliable than for English ones. Cross-check anything surprising against Google Search Console and Keyword Planner before building content around it." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Semrush Review 2026: Is ₹12,000/mo Worth It in India?",
        description: "What Semrush costs, what it does, the per-seat pricing trap and who should actually buy it.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "semrush review, semrush price india, is semrush worth it, semrush pricing, semrush alternatives",
        articleSection: "SEO", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Semrush Review", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function SemrushReview() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Semrush Review</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">SEO</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Semrush Review 2026: Is It Worth ₹12,000 a Month in India?
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Semrush is the most complete SEO platform you can buy, and for most Indian bloggers it is
                            also the wrong purchase. Here is what it actually does, what it actually costs after forex,
                            and the specific point at which it starts paying for itself.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>10 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/semrush-review-2026.svg" alt="Semrush reviewed for Indian users" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Pricing checked
                        against Semrush&apos;s published plans in August 2026. This review is based on the product&apos;s
                        documented features and public pricing rather than a long-term paid subscription of my own.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Verdict up front</h2>
                        <p className="text-gray-300 leading-8">
                            Buy Semrush if content is your main acquisition channel and you need to know what
                            competitors rank for. Do <strong className="text-white">not</strong> buy it if you have under
                            20 posts, if you are the only person who will use it and your budget is tight, or if you
                            mainly need keyword research — Mangools does that for a fifth of the price.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pricing, honestly</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Billing</th><th className="p-4">Price</th><th className="p-4">Approx ₹/mo</th><th className="p-4">Note</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Monthly</td><td className="p-4">$139/mo</td><td className="p-4">~₹12,000</td><td className="p-4">Entry SEO plan, one seat</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Annual</td><td className="p-4">~$117/mo</td><td className="p-4">~₹10,100</td><td className="p-4">Twelve-month commitment</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Extra seats</td><td className="p-4 text-amber-300">Charged separately</td><td className="p-4">—</td><td className="p-4">The cost most comparisons ignore</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Rupee figures are indicative conversions before your card&apos;s forex markup — Semrush bills in
                            USD with no Indian pricing tier. For context, ₹12,000/month is roughly what twenty months of{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">shared hosting</Link>{" "}
                            costs. That framing is worth sitting with before you subscribe.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What you actually get</h2>
                        <div className="grid gap-5 md:grid-cols-2 mb-5">
                            {[
                                ["Keyword Magic Tool", "The largest keyword database of any tool in this class, with filtering that actually helps — intent, SERP features, question modifiers."],
                                ["Competitor research", "The genuine differentiator. See which keywords a rival ranks for, which pages earn their traffic, and where the gaps are."],
                                ["Site Audit", "Crawls your site and flags technical problems by severity. Good, though not better than a careful manual check on a small site."],
                                ["Position tracking", "Daily rank tracking by keyword, device and location. Useful once you have rankings worth watching."],
                                ["Backlink analysis", "Solid but not best-in-class — Ahrefs still has the deeper link index."],
                                ["Advertising data", "Competitor ad copy and spend estimates. Irrelevant if you do not run ads, which is most bloggers."],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="text-base font-semibold text-white mb-2">{t}</h3>
                                    <p className="text-sm text-gray-300 leading-7">{d}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-300 leading-8">
                            Notice how much of that list you will not use. If competitor research is not something you do
                            monthly, you are paying for a suite to use one tool in it.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The per-seat trap</h2>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                            <p className="text-gray-300 leading-8">
                                Semrush&apos;s advertised price is for <strong className="text-white">one user</strong>. Every
                                additional team member is a paid seat. An agency reading &ldquo;$139/month&rdquo; and planning
                                for four people is off by a large multiple. Account sharing is against the terms, so this
                                is not something you can quietly work around. Price the seats first.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pros and cons</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>Largest keyword database in its class</li>
                                    <li>Competitor research genuinely has no cheap substitute</li>
                                    <li>One subscription replaces three or four narrower tools</li>
                                    <li>India database available</li>
                                    <li>Extended trials available through partner links</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Not so good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>~₹12,000/mo is a serious cost for a solo blogger</li>
                                    <li>Per-seat pricing escalates fast for teams</li>
                                    <li>USD billing, no Indian tier, forex on every invoice</li>
                                    <li>Backlink index behind Ahrefs</li>
                                    <li>Most users use a fraction of what they pay for</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">When Semrush starts paying for itself</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            There is a reasonably clear line. Semrush is worth ₹12,000/month when:
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li>Organic search is a channel you actively rely on, not something you hope happens</li>
                            <li>You publish often enough that research speed is a real constraint</li>
                            <li>You need to know what competitors rank for — the one job free tools cannot do</li>
                            <li>You are billing clients for SEO work, so the subscription is a business input</li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            If none of those describe you yet, the money is better spent on hosting, content, or simply
                            kept. Read{" "}
                            <Link href="/blog/best-seo-tools-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">the full SEO tools comparison</Link>{" "}
                            for what to use instead.
                        </p>
                    </section>

                    <section className="mb-12">
                        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7">
                            <h2 className="text-2xl font-bold text-white mb-3">If you want to test it</h2>
                            <p className="text-gray-300 leading-8 mb-4">
                                Start from a referral link rather than the public homepage. Partner links frequently carry
                                an extended free trial rather than the standard 7 days — long enough to run real keyword
                                research on your own site and decide honestly whether the subscription earns its place.
                                It costs nothing extra either way.
                            </p>
                            <p className="text-sm text-gray-500">[AFFILIATE_LINK: SEMRUSH]</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Semrush</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <summary className="cursor-pointer text-lg font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/best-seo-tools-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best SEO tools in India</Link> — the full comparison including cheaper options.</li>
                            <li><Link href="/blog/semrush-vs-ahrefs" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Semrush vs Ahrefs</Link> — head to head on the data that matters.</li>
                            <li><Link href="/blog/best-keyword-research-tools-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best keyword research tools</Link> — if that is the only job you need done.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this review</h2>
                        <ShareButtons url={CANONICAL} title="Semrush Review 2026: Is ₹12,000/mo Worth It in India?" />
                    </div>
                </article>
            </main>
        </>
    );
}
