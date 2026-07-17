import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.info/blog/best-web-hosting-india-2026";

export const metadata: Metadata = {
    title: "7 Best Web Hosting Services in India (2026) — Tested & Ranked",
    description:
        "I tested the 7 best web hosting providers in India for 2026 on speed, uptime, INR pricing, renewals and support. See the full rankings, comparison table, and the #1 pick for beginners.",
    keywords: [
        "best web hosting india",
        "best web hosting india 2026",
        "best hosting for beginners india",
        "cheapest web hosting india",
        "best wordpress hosting india",
        "web hosting india price comparison",
        "fastest web hosting india",
        "hosting with free domain india",
        "best hosting for small business india",
        "top web hosting companies india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "7 Best Web Hosting Services in India (2026) — Tested & Ranked",
        description: "Speed, uptime, real INR pricing and renewal honesty — 7 hosts ranked for India with one clear #1 for beginners.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/best-web-hosting-india-2026.svg", width: 1200, height: 630, alt: "Best web hosting in India 2026 ranked list" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "7 Best Web Hosting in India (2026) — Tested & Ranked",
        description: "The full ranked list with real INR prices, renewal traps and a clear #1 pick.",
        images: ["/assets/blog/best-web-hosting-india-2026.svg"],
    },
};

const HOSTS = [
    {
        rank: 1,
        name: "Hostinger",
        rating: 9.4,
        price: "₹139/mo",
        renewal: "₹449/mo",
        bestFor: "Overall #1 — beginners, blogs, business sites",
        pros: ["Cheapest real specs in India (~₹111/mo with referral stack)", "Mumbai data center + LiteSpeed = fast for Indian visitors", "Free domain, SSL, email (yr 1), weekly backups bundled", "Modern hPanel — easier than cPanel for first-timers", "Free automated migration"],
        cons: ["Best price requires 48-month term", "Chat-only support (no phone)"],
        blurb:
            "Hostinger wins 2026 the same way it won 2025: nobody else gives NVMe-class performance, a Mumbai data center, and a full bundle (domain, SSL, email, AI builder) at ₹139/mo — roughly ₹111/mo through the referral stack. Hostinger reports 5M+ clients and 10M+ websites created; my own client sites on Premium hold sub-2-second loads with caching enabled. The 30-day money-back window makes trying it genuinely risk-free.",
    },
    {
        rank: 2,
        name: "Cloudways",
        rating: 8.7,
        price: "≈₹1,000/mo ($11)",
        renewal: "same (no renewal jump)",
        bestFor: "Growing sites that outgrew shared hosting",
        pros: ["Managed cloud (DigitalOcean/AWS) with no renewal games", "Excellent scaling — resize server anytime", "Hourly billing available"],
        cons: ["No free domain or email — bring your own", "Overkill and over-budget for a first website"],
        blurb:
            "Cloudways is what you graduate to: managed cloud servers billed transparently with zero renewal inflation. For a store doing real revenue it is superb — but for a first blog it costs 7–8x more than shared hosting.",
    },
    {
        rank: 3,
        name: "Bluehost",
        rating: 8.2,
        price: "≈₹169/mo",
        renewal: "≈₹549–749/mo",
        bestFor: "US-audience WordPress sites",
        pros: ["Long WordPress.org-recommended pedigree", "Beginner-friendly guided onboarding", "Free domain year one"],
        cons: ["US-centric servers — slower for Indian visitors", "Renewals and add-ons stack up"],
        blurb:
            "A safe, familiar name for WordPress. If your readers are mostly in the US, it earns its rank; if they are in India, the missing local data center shows up as 200ms+ of extra latency without a CDN.",
    },
    {
        rank: 4,
        name: "DigitalOcean",
        rating: 8.1,
        price: "≈₹350/mo ($4)",
        renewal: "same (usage-based)",
        bestFor: "Developers who want raw cloud servers",
        pros: ["Bangalore region available", "Transparent usage pricing, superb docs", "Full root control — any stack, Docker, K8s"],
        cons: ["Unmanaged — you are the sysadmin", "No panel, domain, email, or support hand-holding"],
        blurb:
            "The developer favourite. A ₹350/mo droplet in the Bangalore region is fantastic value if you can secure and maintain a Linux server yourself. Everyone else should stay on managed hosting.",
    },
    {
        rank: 5,
        name: "SiteGround",
        rating: 8.0,
        price: "≈₹250/mo ($2.99 promo)",
        renewal: "steep (≈₹1,400/mo)",
        bestFor: "Quality-first small sites with budget",
        pros: ["Excellent support reputation", "Strong security and update tooling", "Google Cloud infrastructure"],
        cons: ["Harsh renewal pricing", "No India data center; billed in USD/EUR"],
        blurb:
            "Genuinely premium engineering and support — undermined for Indian buyers by USD billing, no local region, and one of the steepest renewal cliffs in the industry.",
    },
    {
        rank: 6,
        name: "GoDaddy",
        rating: 7.5,
        price: "≈₹199–299/mo",
        renewal: "≈₹499–699/mo",
        bestFor: "People with large domain portfolios there",
        pros: ["World-class domain management", "Phone support in India", "Frequent bundle offers"],
        cons: ["Backups/SSL tiers often paid add-ons", "Price-to-spec ratio trails Hostinger"],
        blurb:
            "Keep your domains at GoDaddy if you like its ecosystem — but for hosting, equivalent specs cost visibly more than the leaders once add-ons and renewals are totalled.",
    },
    {
        rank: 7,
        name: "MilesWeb",
        rating: 7.3,
        price: "≈₹60–150/mo",
        renewal: "moderate",
        bestFor: "Ultra-tight budgets, Indian support hours",
        pros: ["Indian company, INR billing, local support", "Very low entry pricing", "India data center options"],
        cons: ["Performance ceiling on cheapest plans", "Smaller infrastructure than global players"],
        blurb:
            "The best of the domestic budget hosts. For a hobby project at ₹60/mo it is fine; for anything business-critical, the global leaders justify their small premium.",
    },
];

const FAQ = [
    {
        q: "What is the best web hosting in India in 2026?",
        a: "Hostinger is the best overall web hosting for India in 2026: ₹139/mo intro pricing (around ₹111/mo with the referral discount), a Mumbai data center, free domain and SSL, and a modern control panel. It won our ranking across price, speed for Indian visitors, and bundled features.",
    },
    {
        q: "What is the cheapest reliable web hosting in India?",
        a: "Hostinger's Premium plan on the 48-month term is the cheapest hosting from a global-tier provider (~₹111–139/mo with free domain). Domestic budget hosts like MilesWeb go lower (₹60/mo) but with performance ceilings. Avoid free hosting for anything you care about — see the red flags section.",
    },
    {
        q: "Which hosting is fastest for Indian visitors?",
        a: "Hosts with India data centers win on latency: Hostinger (Mumbai) and DigitalOcean (Bangalore) lead. US-centric hosts like Bluehost add 200ms+ per request for Indian users unless you put a CDN like Cloudflare in front.",
    },
    {
        q: "Is free web hosting worth it in India?",
        a: "No — free hosts monetize through forced ads, throttled speed, random downtime, and no support, and many inject content into your pages. At ~₹111/mo for real hosting with a free domain, the savings are not worth risking your project or SEO.",
    },
    {
        q: "Which hosting should a beginner in India choose for WordPress?",
        a: "Hostinger Premium: one-click WordPress, LiteSpeed caching preconfigured, free SSL, free domain, and hPanel is simpler than cPanel. Bluehost is the alternative if your audience is US-based.",
    },
    {
        q: "How much should I pay for web hosting in India in 2026?",
        a: "For a personal site or blog: ₹100–200/mo (shared hosting, long term). For a business site or store: ₹200–600/mo (Business/Cloud tiers). For custom apps: ₹350–1,000/mo (VPS or managed cloud). Paying more than this without a specific reason is usually wasted money.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "7 Best Web Hosting Services in India (2026) — Tested & Ranked",
        description:
            "The 7 best web hosting providers in India for 2026 ranked on speed, uptime, INR pricing, renewals and support — with a clear #1 pick for beginners.",
        image: "https://mohitkoli.info/assets/blog/best-web-hosting-india-2026.svg",
        datePublished: "2026-06-30T00:00:00.000Z",
        dateModified: "2026-07-17T00:00:00.000Z",
        author: {
            "@type": "Person",
            name: "Mohit Koli",
            url: "https://mohitkoli.info/profile",
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
            logo: { "@type": "ImageObject", url: "https://mohitkoli.info/assets/mohit-koli-profile-photo.jpg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "best web hosting india 2026, best hosting for beginners india, cheapest web hosting india",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Best Web Hosting Services in India 2026",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: HOSTS.length,
        itemListElement: HOSTS.map((h) => ({
            "@type": "ListItem",
            position: h.rank,
            name: h.name,
            url: `${CANONICAL}#rank-${h.rank}`,
        })),
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.info/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.info/blog" },
            { "@type": "ListItem", position: 3, name: "7 Best Web Hosting Services in India (2026)", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    },
];

export default function BestWebHostingIndia() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Best Web Hosting India 2026</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Ranked List · Updated July 2, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        7 Best Web Hosting Services in India (2026) — Tested &amp; Ranked
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        I build and maintain websites for Indian clients for a living, which means I get to see how hosts behave
                        <em> after</em> the marketing page: real speeds from Indian networks, renewal invoices, support chats at 2 AM.
                        This ranking scores 7 popular hosts on <strong className="text-white">speed for Indian visitors, real INR pricing
                        (including renewals), bundled features, and support</strong> — with honest cons for every single one.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: the Hostinger links use my referral code — it applies an extra discount for you and pays me a commission
                        at no extra cost. No host paid for placement; the cons lists should make that obvious. Prices checked July 2, 2026.
                    </p>

                    <div className="relative w-full h-72 sm:h-96 mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/best-web-hosting-india-2026.svg"
                            alt="7 best web hosting services in India 2026 — tested and ranked"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Quick ranking table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The rankings at a glance</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">#</th>
                                        <th className="p-4 font-semibold">Host</th>
                                        <th className="p-4">Rating</th>
                                        <th className="p-4">Intro Price</th>
                                        <th className="p-4">Renewal</th>
                                        <th className="p-4">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {HOSTS.map((h) => (
                                        <tr key={h.name} className={`border-t border-white/5 ${h.rank === 1 ? "bg-purple-500/10" : h.rank % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-bold text-white">{h.rank === 1 ? "🥇" : h.rank === 2 ? "🥈" : h.rank === 3 ? "🥉" : h.rank}</td>
                                            <td className="p-4 font-medium text-white">
                                                <a href={`#rank-${h.rank}`} className="hover:text-primary-400">{h.name}</a>
                                            </td>
                                            <td className="p-4">{h.rating}/10</td>
                                            <td className="p-4">{h.price}</td>
                                            <td className="p-4 text-gray-400">{h.renewal}</td>
                                            <td className="p-4 text-gray-400">{h.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Host cards */}
                    <section className="mb-12 space-y-8">
                        <h2 className="text-3xl font-bold text-white">The full breakdown, host by host</h2>
                        {HOSTS.map((h) => (
                            <div
                                key={h.name}
                                id={`rank-${h.rank}`}
                                className={`rounded-3xl border p-6 md:p-8 scroll-mt-28 ${h.rank === 1 ? "border-purple-500/50 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 shadow-lg shadow-purple-900/20" : "border-white/10 bg-white/[0.03]"}`}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {h.rank === 1 ? "🥇" : h.rank === 2 ? "🥈" : h.rank === 3 ? "🥉" : `#${h.rank}`} {h.name}
                                        {h.rank === 1 && <span className="ml-3 align-middle text-xs uppercase tracking-widest bg-purple-500/30 text-purple-200 border border-purple-400/40 rounded-full px-3 py-1">Editor&apos;s Choice 2026</span>}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <div className="w-28 h-3 rounded-full bg-white/10">
                                            <div className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400" style={{ width: `${h.rating * 10}%` }} />
                                        </div>
                                        <span className="text-white font-bold">{h.rating}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm mb-4">
                                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">💰 From <strong className="text-white">{h.price}</strong></span>
                                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">🔁 Renews: {h.renewal}</span>
                                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">🎯 {h.bestFor}</span>
                                </div>
                                <p className="text-gray-300 leading-7 mb-5">{h.blurb}</p>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-2">
                                    <div>
                                        <p className="font-semibold text-green-400 mb-2">Pros</p>
                                        <ul className="space-y-1.5 text-gray-300">
                                            {h.pros.map((p) => <li key={p}>✓ {p}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-400 mb-2">Cons</p>
                                        <ul className="space-y-1.5 text-gray-300">
                                            {h.cons.map((c) => <li key={c}>✗ {c}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                {h.rank === 1 && (
                                    <div className="mt-5">
                                        <a
                                            href={REFERRAL_URL}
                                            target="_blank"
                                            rel="sponsored nofollow noopener"
                                            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                                        >
                                            Get Hostinger with Extra Discount →
                                        </a>
                                        <p className="mt-2 text-xs text-gray-500">Referral link auto-applies ~20% extra off the sale price · 30-day money-back</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>

                    {/* Methodology */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How I ranked them</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["🇮🇳 Speed for Indian visitors (30%)", "Data-center proximity (Mumbai/Bangalore regions), LiteSpeed/NVMe stacks, and real page loads on Indian mobile networks."],
                                ["💰 True cost (30%)", "Not the banner price — the 4-year total including renewals, plus what is bundled free (domain, SSL, email, backups) vs sold as add-ons."],
                                ["🛟 Support & reliability (25%)", "Response speed and competence on live chats, uptime track record, and how refunds are honoured."],
                                ["🧭 Ease for beginners (15%)", "Panel clarity, one-click WordPress, onboarding quality, and how hard the host pushes upsells."],
                            ].map(([title, body]) => (
                                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                                    <p className="text-sm text-gray-300 leading-6">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Red flags */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">4 red flags when choosing any host</h2>
                        <div className="space-y-3">
                            {[
                                ["“Unlimited” everything", "Unlimited storage/bandwidth on a ₹99 plan means hidden inode limits and CPU throttling buried in the ToS. Honest hosts publish real numbers."],
                                ["Free hosting for real projects", "Forced ads, injected scripts, random downtime, zero support, and some free hosts hold your domain hostage. Fine for throwaway experiments only."],
                                ["Hidden renewal pricing", "If the renewal rate takes three clicks to find, that is deliberate. Every host in my table above has its renewal listed in plain sight."],
                                ["No money-back guarantee", "A host confident in its product refunds within 30 days, no questions. No refund policy = walk away."],
                            ].map(([title, body]) => (
                                <div key={title} className="rounded-xl border border-red-500/20 bg-red-500/[0.06] p-5">
                                    <h3 className="font-semibold text-red-300 mb-1">🚩 {title}</h3>
                                    <p className="text-sm text-gray-300 leading-6">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Start with the #1 pick — risk-free</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Hostinger Premium from ₹139/mo (~₹111/mo via referral) with a free domain, free SSL and a 30-day
                                money-back guarantee. If it disappoints, refund and pick #2 — you lose nothing.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="sponsored nofollow noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                Claim the #1 Host + Extra Discount →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — best web hosting in India</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <summary className="cursor-pointer text-lg font-semibold text-white list-none flex justify-between items-center">
                                        {item.q}
                                        <span className="text-primary-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                    </summary>
                                    <p className="mt-3 text-gray-300 leading-7">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Go deeper (hosting series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — the discount-stacking walkthrough</Link></li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing India 2026 — which plan to buy</Link></li>
                            <li><Link href="/blog/hostinger-review-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Review 2026 — honest verdict after a year of real sites</Link></li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Domain Price India 2026 — .com, .in &amp; .store real costs</Link></li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost — the detailed head-to-head</Link></li>
                            <li><Link href="/blog/hostinger-vps-hosting-review-discount" className="hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS Review — for developers</Link></li>
                            <li><Link href="/blog/how-to-make-money-blogging-for-beginners-2026" className="hover:text-primary-300 underline underline-offset-4">How to Make Money Blogging — what to build on your new hosting</Link></li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Ranking</h3>
                        <ShareButtons url={CANONICAL} title="7 Best Web Hosting Services in India (2026) — Tested & Ranked" />
                    </div>
                </article>
            </main>
        </>
    );
}
