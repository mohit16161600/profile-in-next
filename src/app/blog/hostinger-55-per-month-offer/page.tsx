import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

// Lands directly on the price table with the referral code already applied — the page
// shows a "Referral code applied" badge, so the reader can verify the discount is real
// before entering anything.
const REFERRAL_URL = "https://www.hostinger.com/in/pricing?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-55-per-month-offer";
const IMAGE = "https://mohitkoli.in/assets/blog/hostinger-55-per-month-offer.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Hostinger ₹55/mo Offer: 86% Off + Extra 20% (2026)",
    description:
        "Hostinger Single drops to ₹55.20/mo with a referral code — 86% off ₹399. Every plan's real price, the upfront total and the renewal rate.",
    keywords: [
        "hostinger 55 rupees",
        "hostinger offer",
        "hostinger 55 per month",
        "cheapest web hosting india",
        "hostinger single plan price",
        "hostinger discount code 2026",
        "hostinger 86 off",
        "hostinger referral code",
        "cheapest hosting india 2026",
        "hostinger price india",
        "hostinger lowest price",
        "hostinger sale 2026",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger ₹55/mo Offer: 86% Off + Extra 20% (2026)",
        description:
            "Single at ₹55.20/mo, Premium ₹119.20, Unlimited ₹199.20 — the real referral-applied prices, upfront totals and renewals.",
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger hosting at ₹55 per month with referral discount" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger ₹55/mo Offer: 86% Off + Extra 20% (2026)",
        description: "The real price after the referral code, including what you pay upfront.",
        images: [IMAGE],
    },
};

/**
 * Every figure below was read off Hostinger's India pricing page on 24 Aug 2026 with the
 * referral code applied (the page shows a "Referral code applied" badge). The referral
 * discount is exactly 20% on top of the live sale price — ₹69 becomes ₹55.20, ₹149
 * becomes ₹119.20, and so on.
 */
const PLANS = [
    {
        name: "Single", regular: "₹399", sale: "₹69", referral: "₹55.20", off: "86%",
        upfront: "₹2,649.60", regularTotal: "₹19,152", renews: "₹289",
        sites: "1", storage: "10 GB SSD", domain: false, cdn: false, ecom: false,
        ai: false, priority: false, node: false, backups: "Weekly", mail: "—",
        best: "A first site, a portfolio, or something you just need online cheaply.",
        highlight: false,
    },
    {
        name: "Premium", regular: "₹599", sale: "₹149", referral: "₹119.20", off: "80%",
        upfront: "₹5,721.60", regularTotal: "₹28,752", renews: "₹449",
        sites: "3", storage: "20 GB SSD", domain: true, cdn: false, ecom: false,
        ai: false, priority: false, node: false, backups: "Weekly", mail: "2 per site, free 1 yr",
        best: "A blog or small business site that wants a free domain included.",
        highlight: false,
    },
    {
        name: "Unlimited", regular: "₹699", sale: "₹249", referral: "₹199.20", off: "72%",
        upfront: "₹9,561.60", regularTotal: "₹33,552", renews: "₹649",
        sites: "Unlimited", storage: "50 GB NVMe", domain: true, cdn: true, ecom: true,
        ai: true, priority: true, node: true, backups: "Daily + easy restore", mail: "Unlimited, free 1 yr",
        best: "The one most people should actually buy. NVMe, CDN, daily backups, Node.js.",
        highlight: true,
    },
    {
        name: "Cloud Startup", regular: "₹1,699", sale: "₹599", referral: "₹479.20", off: "72%",
        upfront: "₹23,001.60", regularTotal: "₹81,552", renews: "₹1,599",
        sites: "Unlimited", storage: "100 GB NVMe", domain: true, cdn: true, ecom: true,
        ai: true, priority: true, node: true, backups: "Daily + on demand", mail: "Unlimited, free 1 yr",
        best: "Agencies and high-traffic projects that need dedicated resources.",
        highlight: false,
    },
];

const FAQ = [
    {
        q: "Is Hostinger really ₹55 per month?",
        a: "Yes, with two conditions. ₹55.20/mo is the Single plan on a 48-month term with a referral code applied — the sale price is ₹69/mo and the referral takes 20% more off. And Hostinger bills the whole term upfront, so you pay ₹2,649.60 once, not ₹55 a month. The monthly figure is the total divided by 48.",
    },
    {
        q: "How do I get the ₹55 price?",
        a: "Open Hostinger through a referral link, choose the Single plan and select the 48-month term. The page should show a 'Referral code applied' badge and the price should read ₹55.20/mo before you enter any details. If it still says ₹69, clear your cookies and open the link again in a fresh tab.",
    },
    {
        q: "What do I actually pay today?",
        a: "₹2,649.60 for Single across 48 months, ₹5,721.60 for Premium, ₹9,561.60 for Unlimited, or ₹23,001.60 for Cloud Startup. Every plan is charged upfront for the full term. If paying four years in advance is not realistic, pick a shorter term — the monthly rate will be higher.",
    },
    {
        q: "Does the ₹55 Single plan include a free domain?",
        a: "No, and this is the main catch. Single is the only plan without a free domain — you would buy one separately for roughly ₹700-₹1,000 for the first year. Premium at ₹119.20/mo includes a domain free for a year, which closes most of the price gap between them.",
    },
    {
        q: "What happens at renewal?",
        a: "Prices go up substantially. Single renews at ₹289/mo, Premium at ₹449/mo, Unlimited at ₹649/mo and Cloud Startup at ₹1,599/mo. That is roughly 4-5x the promotional rate. Buying the longest term is exactly how you delay that, which is why the 48-month price is the cheap one.",
    },
    {
        q: "Which plan is actually the best value?",
        a: "Unlimited at ₹199.20/mo, for most people. It is the cheapest plan with NVMe storage instead of SSD, a CDN, daily backups, Node.js support and priority support — and unlimited websites. Single and Premium are cheaper per month but are missing the things that make a site fast and recoverable.",
    },
    {
        q: "Is there a money-back guarantee?",
        a: "Hostinger offers a 30-day money-back guarantee on hosting. Domain registration fees are generally non-refundable, so if you claim a free domain and then cancel, expect that cost to come out of the refund. Test the service properly inside those 30 days.",
    },
    {
        q: "Can I upgrade later if I outgrow the plan?",
        a: "Yes, upgrading inside hPanel is straightforward and you pay the difference for the remaining term. Starting on Single or Premium and moving up when traffic justifies it is sensible. What you cannot do is downgrade and get money back, so do not over-buy on the assumption you will scale next month.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger ₹55/mo Offer: 86% Off + Extra 20% (2026)",
        description:
            "Hostinger Single drops to ₹55.20/mo with a referral code. Every plan's real price, the upfront total and the renewal rate.",
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: {
            "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile",
            jobTitle: "Senior Full Stack Developer",
            sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"],
        },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "hostinger 55 rupees, hostinger offer, cheapest web hosting india, hostinger discount code 2026, hostinger price india",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger ₹55/mo Offer", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
    },
];

const Tick = ({ on }: { on: boolean }) => (
    <span className={on ? "text-emerald-400" : "text-gray-600"} aria-label={on ? "included" : "not included"}>
        {on ? "✓" : "—"}
    </span>
);

export default function Hostinger55Offer() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Hostinger ₹55/mo Offer</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Hosting</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Hostinger at ₹55/mo: The Real Price, and What It Actually Costs You Today
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            ₹55.20 a month is genuine — it is the Single plan on a 48-month term with a referral code
                            applied, 86% off the ₹399 regular rate. It is also charged as{" "}
                            <strong className="text-white">₹2,649.60 upfront</strong>, not ₹55 a month. Here is every plan&apos;s
                            real number, including the renewals nobody puts in the ad.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>9 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/hostinger-55-per-month-offer.svg" alt="Hostinger hosting at ₹55 per month with referral discount applied" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        This article contains affiliate links. Buying through one earns me a commission at no extra cost
                        to you — and the referral code takes 20% off your price, so it is not a one-sided arrangement.
                        Every figure below was read directly off Hostinger&apos;s India pricing page on 24 August 2026
                        with the code applied. Sale pricing changes; confirm at checkout.
                    </p>

                    {/* Offer box */}
                    <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7">
                        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">Live offer</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">₹69 becomes ₹55.20 with the code</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Hostinger&apos;s sale already cuts Single from ₹399 to ₹69/mo. A referral code takes a further
                            20% off that — <strong className="text-white">₹69 × 0.8 = ₹55.20</strong>. The same 20% applies to
                            every plan, which is why Premium reads ₹119.20 and Unlimited ₹199.20 once the code is on.
                        </p>
                        <p className="text-gray-300 leading-8">
                            You do not type the code anywhere. Open the pricing page through the link below and it applies
                            itself — you should see a <strong className="text-white">&ldquo;Referral code applied&rdquo;</strong>{" "}
                            badge above the plans. If you do not see it, the discount is not on.
                        </p>
                    </section>

                    {/* Price table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Every plan, honestly priced</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Regular</th>
                                        <th className="p-4">Sale</th>
                                        <th className="p-4">With code</th>
                                        <th className="p-4">You pay upfront</th>
                                        <th className="p-4">Renews at</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {PLANS.map((p) => (
                                        <tr key={p.name} className={`border-t border-white/5 ${p.highlight ? "bg-primary-500/[0.06]" : ""}`}>
                                            <td className="p-4 font-semibold text-white">
                                                {p.name}
                                                {p.highlight && <span className="ml-2 text-xs uppercase tracking-wider text-primary-400">best value</span>}
                                            </td>
                                            <td className="p-4 text-gray-500 line-through">{p.regular}</td>
                                            <td className="p-4">{p.sale}</td>
                                            <td className="p-4 font-bold text-emerald-400">{p.referral}/mo</td>
                                            <td className="p-4">{p.upfront}</td>
                                            <td className="p-4 text-amber-300">{p.renews}/mo</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500">
                            48-month term. Hostinger charges the full term upfront — the monthly figure is the total
                            divided by the number of months, which is stated on their own pricing page. Prices read
                            24 August 2026 with the referral code applied.
                        </p>
                    </section>

                    {/* CTA 1 */}
                    <section className="mb-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">See the ₹55.20 price with the code applied</h2>
                        <p className="text-gray-300 leading-8 max-w-2xl mx-auto mb-6">
                            The link opens the India pricing page with the referral discount already on, so you can check
                            the number before entering a single detail. Look for the &ldquo;Referral code applied&rdquo; badge.
                        </p>
                        <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener"
                           className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                            Check Hostinger Plans With Code Applied →
                        </a>
                        <p className="mt-3 text-xs text-gray-500">30-day money-back guarantee · No code to type</p>
                    </section>

                    {/* What each plan includes */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What each plan actually includes</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            This is where the cheapest plan stops being the best plan. The differences that matter are
                            storage type, whether a domain is included, and whether you get a CDN and daily backups.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Feature</th>
                                        {PLANS.map((p) => <th key={p.name} className="p-4">{p.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Websites</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.sites}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Storage</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.storage}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Free domain (1 yr)</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4"><Tick on={p.domain} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">CDN</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4"><Tick on={p.cdn} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Backups</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.backups}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Integrated ecommerce</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4"><Tick on={p.ecom} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Node.js support</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4"><Tick on={p.node} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Priority 24/7 support</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4"><Tick on={p.priority} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Mailboxes</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.mail}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Notice the jump between Premium and Unlimited. That is where SSD becomes{" "}
                            <strong className="text-white">NVMe</strong>, weekly backups become daily, and you gain a CDN,
                            Node.js and priority support — for ₹80/mo more. It is the single best-value step in the range.
                        </p>
                    </section>

                    {/* The honest catches */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Three things the ad does not say</h2>
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">1. It is paid upfront, all four years of it</h3>
                                <p className="text-gray-300 leading-8">
                                    ₹55.20/mo is ₹2,649.60 charged today. Hostinger states this plainly on their pricing
                                    page — &ldquo;all plans are paid upfront&rdquo; — but the big number on the card is the
                                    monthly one. Shorter terms exist and cost more per month.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">2. Single has no free domain</h3>
                                <p className="text-gray-300 leading-8">
                                    Every other plan includes a domain free for the first year. Single does not. Add
                                    roughly ₹700-₹1,000 for a .com and the gap to Premium narrows to almost nothing —
                                    which makes Premium the better buy for most people despite the higher headline.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">3. Renewal is 4-5× the promo rate</h3>
                                <p className="text-gray-300 leading-8">
                                    Single renews at ₹289/mo, Premium ₹449, Unlimited ₹649, Cloud Startup ₹1,599. The
                                    48-month term is not an upsell — it is the mechanism that delays this for four years.
                                    Set a calendar reminder six weeks before it lands. Full breakdown in my{" "}
                                    <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                        Hostinger renewal price guide
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Which to buy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which plan should you buy?</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {PLANS.map((p) => (
                                <div key={p.name} className={`rounded-2xl border p-6 ${p.highlight ? "border-primary-500/50 bg-primary-500/[0.07]" : "border-white/10 bg-white/[0.03]"}`}>
                                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-white">{p.name}</h3>
                                        <span className="text-sm font-bold text-emerald-400">{p.referral}/mo</span>
                                        <span className="text-xs text-gray-500">{p.off} off</span>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-7">{p.best}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-300 leading-8">
                            My honest pick is <strong className="text-white">Unlimited at ₹199.20/mo</strong>. Single is the
                            cheapest number on the page but it is SSD, has no domain, no CDN and only weekly backups. If
                            budget is genuinely the constraint, compare against everything else under ₹200 in{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                cheap web hosting under ₹200
                            </Link>.
                        </p>
                    </section>

                    {/* How to claim */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How to get this price, step by step</h2>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside">
                            <li>Open the Hostinger India pricing page <strong className="text-white">through a referral link</strong>, not the plain homepage.</li>
                            <li>Confirm the <strong className="text-white">&ldquo;Referral code applied&rdquo;</strong> badge appears above the plan cards.</li>
                            <li>Select the <strong className="text-white">48-month term</strong> — this is where the advertised monthly rate comes from.</li>
                            <li>Pick your plan. Check the price reads ₹55.20, ₹119.20, ₹199.20 or ₹479.20 and not the undiscounted figure.</li>
                            <li><strong className="text-white">Untick the pre-selected add-ons</strong> at checkout. This is where a cheap plan quietly doubles.</li>
                            <li>Set a renewal reminder for six weeks before the term ends. This one habit is worth more than the discount.</li>
                        </ol>
                        <p className="mt-5 text-gray-300 leading-8">
                            If the discount does not appear, clear cookies and reopen the link in a fresh tab — an earlier
                            visit without a code can stick. More on what does and does not work in{" "}
                            <Link href="/blog/hostinger-discount-code-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger discount codes
                            </Link>.
                        </p>
                    </section>

                    {/* Final CTA */}
                    <section className="mb-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Hostinger at ₹55.20/mo</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            86% off Single, or ₹199.20/mo for Unlimited with NVMe, a CDN, daily backups and a free domain.
                            Free SSL, free migration and 30 days to change your mind. The code applies itself — just check
                            the badge is showing before you pay.
                        </p>
                        <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener"
                           className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                            See Hostinger&apos;s Current Offer →
                        </a>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — the ₹55 Hostinger offer</h2>
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
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Every Hostinger plan compared</Link> — the full range in detail.</li>
                            <li><Link href="/blog/hostinger-review-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger review</Link> — is it actually any good at this price?</li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">The renewal price trap</Link> — what happens in year five.</li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cheap hosting under ₹200</Link> — how it compares to rivals.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting explained</Link> — if you need more than shared.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this offer</h2>
                        <ShareButtons url={CANONICAL} title="Hostinger ₹55/mo Offer: 86% Off + Extra 20% (2026)" />
                    </div>
                </article>
            </main>
        </>
    );
}
