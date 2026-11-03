import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, ITEMS, countsByCategory } from "@/data/landers";

const ORIGIN = "https://mohitkoli.in";
const CANONICAL = `${ORIGIN}/lander`;

export const metadata: Metadata = {
    title: "Layout Gallery: Landing Page & Website Design Examples",
    description:
        "Landing page, e-commerce, mobile and business website layouts, grouped by what the page has to do — with the structure that works and the mistakes that cost the most.",
    keywords: [
        // PRIMARY
        "website design examples",
        // SECONDARY
        "landing page design examples",
        "web design layout gallery",
        "ui design examples india",
        // LONG-TAIL
        "website design examples india",
        "landing page vs website layout",
        "website layout ideas by page type",
        // SUPPORTING
        "ecommerce website design",
        "mobile app ui design",
        "business website design",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Layout Gallery: Landing Page & Website Design Examples",
        description:
            "Layouts grouped by purpose — landing pages, stores, app screens, dashboards and business sites — with what works and what does not.",
        url: CANONICAL,
        type: "website",
        images: [
            { url: "/assets/og-default.png", width: 1200, height: 630, alt: "Layout gallery by Mohit Koli" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Layout Gallery: Landing Page & Website Design Examples",
        description: "Layouts filed by what the page has to do, not by what they look like.",
        images: ["/assets/og-default.png"],
    },
};

const HUB_FAQ = [
    {
        question: "What is the difference between a landing page and a website?",
        answer:
            "A landing page has one job and no navigation — every section pushes toward a single action. A website has several jobs and needs navigation so people can choose between them. Using one where the other belongs is the most common structural mistake: a landing page with a full site menu leaks traffic, and a website squeezed onto one page cannot rank for more than one search.",
    },
    {
        question: "How do I choose a layout for my page?",
        answer:
            "Start from what the page has to achieve, not from a design you liked. A page that takes a payment, a page that books a call and a page that has to be found in search have different structures, and a layout borrowed across those lines usually fails for reasons that look like design problems but are not.",
    },
    {
        question: "Does the layout affect how a page ranks in Google?",
        answer:
            "Indirectly, and more than people expect. Layout decides how much real text the page carries, how fast it loads, and whether a phone user can use it — all three feed into ranking. What layout does not do is substitute for content: a beautiful page with nothing written on it has nothing to rank.",
    },
    {
        question: "Can you build one of these?",
        answer:
            "Yes — that is the work I do. The layout is the quickest part; the build, the hosting it runs on and the yearly renewal cost are where the real decisions sit.",
    },
];

export default function LanderHubPage() {
    const counts = countsByCategory();

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${CANONICAL}#page`,
                url: CANONICAL,
                name: "Layout Gallery",
                description: metadata.description,
                author: { "@id": `${ORIGIN}/#person` },
                mainEntity: {
                    "@type": "ItemList",
                    itemListElement: CATEGORIES.map((category, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: category.h1,
                        url: `${CANONICAL}/${category.slug}`,
                    })),
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${CANONICAL}#faq`,
                mainEntity: HUB_FAQ.map((entry) => ({
                    "@type": "Question",
                    name: entry.question,
                    acceptedAnswer: { "@type": "Answer", text: entry.answer },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${CANONICAL}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
                    { "@type": "ListItem", position: 2, name: "Layout Gallery", item: CANONICAL },
                ],
            },
        ],
    };

    return (
        <main className="pt-28 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link href="/" className="hover:text-primary-400">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li className="text-gray-300">Layout Gallery</li>
                    </ol>
                </nav>

                <p className="reveal mt-6 text-sm uppercase tracking-[0.3em] text-primary-400">Layout Gallery</p>
                <h1 className="reveal mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Layouts, filed by what the page has to do
                </h1>
                <div className="reveal reveal-d1 mt-6 max-w-3xl space-y-5">
                    <p className="text-lg leading-8 text-gray-300">
                        Design galleries are usually sorted by style — dark, minimal, brutalist. That is useless when
                        you have a page to build, because style is the last decision and structure is the first.
                    </p>
                    <p className="text-lg leading-8 text-gray-300">
                        These are grouped by purpose instead. A checkout screen and a portfolio home page are both
                        &ldquo;a nice layout&rdquo; and have almost nothing in common, so they are filed apart. Each
                        category carries the section order that works for that kind of page, and the mistakes that
                        show up again and again.
                    </p>
                </div>
                <p className="reveal reveal-d2 mt-6 text-sm text-gray-500">
                    {CATEGORIES.length} categories · {ITEMS.length} {ITEMS.length === 1 ? "layout" : "layouts"}
                </p>
            </section>

            <section aria-label="Categories" className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/lander/${category.slug}`}
                            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary-500/40"
                        >
                            <h2 className="text-xl font-semibold text-white group-hover:text-primary-400">
                                {category.h1}
                            </h2>
                            <p className="mt-3 grow leading-7 text-gray-400">{category.blurb}</p>
                            <span className="mt-5 text-sm text-gray-500">
                                {counts[category.slug] ?? 0}{" "}
                                {(counts[category.slug] ?? 0) === 1 ? "layout" : "layouts"}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                    Pick the structure before the style
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-lg font-semibold text-white">One action or many</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                            If the page has a single goal, it is a landing page and the navigation comes off. If it
                            has several, it needs a menu and a page for each — one page cannot rank for four
                            different searches.
                        </p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-lg font-semibold text-white">Visited once or daily</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                            A page seen once has to explain itself. A screen used every day should get out of the
                            way and show more at once — whitespace that felt calm in week one is scrolling by month
                            six.
                        </p>
                    </article>
                    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-lg font-semibold text-white">How much the decision costs</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                            A ₹500 purchase can be asked for in the hero. A ₹5,00,000 one needs six sections of
                            proof first. Price sets the number of sections, not taste.
                        </p>
                    </article>
                </div>
            </section>

            <section aria-label="Frequently asked questions" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
                <div className="mt-8 space-y-4">
                    {HUB_FAQ.map((entry) => (
                        <article key={entry.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-xl text-white">{entry.question}</h3>
                            <p className="mt-3 leading-7 text-gray-400">{entry.answer}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-primary-500/30 bg-black/20 p-8">
                    <h2 className="text-2xl font-bold text-white">From layout to live site</h2>
                    <p className="mt-4 max-w-3xl leading-7 text-gray-300">
                        Choosing a structure is the first decision. After it come the build, the hosting, and the
                        renewal price that is typically several times the introductory rate you signed up on.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                        >
                            Web development services
                        </Link>
                        <Link
                            href="/tools/hosting-cost-calculator"
                            className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                        >
                            Hosting cost calculator
                        </Link>
                        <Link
                            href="/blog/best-web-hosting-india-2026"
                            className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                        >
                            Best web hosting in India
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
