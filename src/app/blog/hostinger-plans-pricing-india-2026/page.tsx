import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
// Plan-specific cart links, 48-month term (the term the card prices quote).
// Agency links: Startup/Growth on the 24-month term the listed price requires;
// Professional has no verified price quoted, its link just shows the live cart price.
const CART_PREMIUM_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CART_UNLIMITED_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_business&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-ac18-72fd-adc3-4fce44121064";
const CART_CLOUD_STARTUP_48 = "https://www.hostinger.com/in/cart?product=hosting%3Acloud_economy&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06615-43bc-7078-a7a8-92d52d2cce7b";
const CART_AGENCY_STARTUP_24 = "https://www.hostinger.com/in/cart?product=hosting%3Aagency_startup&period=24&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06615-f5fc-7264-81e6-8f10259c436c";
const CART_AGENCY_GROWTH_24 = "https://www.hostinger.com/in/cart?product=hosting%3Aagency_growth&period=24&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06616-0e28-733b-90ec-5742d8408d55";
const CART_AGENCY_PROFESSIONAL = "https://www.hostinger.com/in/cart?product=hosting%3Aagency_professional&period=12&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06615-bffa-7134-9cc0-61d654e36b7f";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-plans-pricing-india-2026";

export const metadata: Metadata = {
    title: "Hostinger Plans India 2026: ₹149–₹599 Full Price List",
    description:
        "Hostinger plans & price list India 2026 — Premium ₹149, Unlimited ₹249, Cloud ₹599/mo, real renewal rates, and the monthly-billing trap before you pay.",
    keywords: [
        "hostinger plans india",
        "hostinger india plans",
        "hostinger plan india",
        "hostinger pricing",
        "hostinger pricing plans",
        "hostinger plans",
        "hostinger price in india",
        "hostinger price list india 2026",
        "hostinger hosting prices",
        "hostinger premium web hosting price",
        "hostinger business plan pricing",
        "hostinger subscription plan",
        "hostinger pay monthly",
        "hostinger 2 year plan",
        "how much is hosting on hostinger",
        "hostinger business email pricing india 2026",
        "hostinger bd price",
        "hostinger renewal price",
        "hostinger kvm plans",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger Plans India 2026: ₹149–₹599 Full Price List",
        description:
            "Premium ₹149, Unlimited ₹249, Cloud ₹599/mo — the full India price list with renewal rates, term math, and which plan fits your project.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/hostinger-plans-pricing-india-2026.png", width: 1200, height: 630, alt: "Hostinger plans and price list in India 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger Plans India 2026: ₹149–₹599 Full Price List",
        description: "Every Hostinger plan with real India pricing — intro vs renewal rates, monthly billing truth, KVM VPS specs, and which plan to buy.",
        images: ["/assets/blog/hostinger-plans-pricing-india-2026.png"],
    },
};

const FAQ = [
    {
        q: "How much does Hostinger cost per month in India?",
        a: "Shared hosting starts at ₹149/mo for Premium on the 48-month term, Unlimited (formerly Business) is ₹249/mo, Cloud Startup is ₹599/mo, and KVM VPS starts around ₹499/mo. Renewals are higher — roughly ₹449, ₹649 and ₹1,599/mo — and GST is added at checkout for Indian billing, so budget the invoice total slightly above the listed rate.",
    },
    {
        q: "Which Hostinger plan is cheapest?",
        a: "Premium at ₹149/mo on the 48-month term is the cheapest plan in the Hostinger India lineup — about ₹119/mo with the referral discount stacked. It still includes 3 websites, 20 GB SSD, a free domain for the first year, and free SSL, so it does not feel like a stripped-down starter plan.",
    },
    {
        q: "What is the price of the Hostinger Business plan?",
        a: "The Unlimited plan (formerly Business) costs ₹249/mo on the 48-month sale term — ₹11,952 upfront, or roughly ₹199/mo with the referral stack — and renews around ₹649/mo. Over Premium it adds NVMe storage, daily backups, unlimited websites, and the AI ecommerce builder.",
    },
    {
        q: "Does Hostinger have a monthly payment plan?",
        a: "Yes, month-to-month billing exists, but the deep discounts are tied to long terms — paying monthly puts Premium near its ₹599/mo regular rate instead of ₹149/mo. If upfront cash is tight, the 12-month term keeps a real discount, and the 48-month term remains the best value.",
    },
    {
        q: "Which Hostinger plan is best for a WordPress blog in India?",
        a: "Premium (₹149/mo on the 48-month sale term) is the sweet spot for blogs and portfolios: 3 websites, 20 GB SSD, free domain for a year, free SSL, and managed WordPress with one-click install. Upgrade to Business only if you need daily backups and NVMe speed.",
    },
    {
        q: "What is the real difference between Hostinger Premium and Business?",
        a: "Unlimited — the plan formerly called Business — at ₹249/mo adds NVMe storage (roughly 2x faster disk I/O), daily backups instead of weekly, unlimited websites instead of 3, 50 GB NVMe instead of 20 GB, and an AI ecommerce builder. For a serious business site or WooCommerce store the ₹60/mo difference is easily worth it.",
    },
    {
        q: "What are Hostinger KVM VPS plans and who needs them?",
        a: "KVM plans (KVM 1, 2, 4, 8) are virtual private servers with dedicated vCPU and RAM — you get root access and full control. Choose KVM when you run custom Node.js/Laravel apps, Docker, or need guaranteed resources. KVM 1 starts around ₹499/mo on sale with 1 vCPU, 4 GB RAM, and 50 GB NVMe.",
    },
    {
        q: "Does Hostinger have plans for agencies managing client websites?",
        a: "Yes — the Agency line under Hostinger Pro. Agency Startup was listed at ₹2,499/mo on the 24-month term in September 2026 (renewing at ₹3,499/mo) with 100 isolated websites, 300 GB NVMe, 6 CPU cores, 12 GB RAM, an unbranded client dashboard and staging. Larger Agency tiers scale up to around 300 sites on one plan.",
    },
    {
        q: "How much does Hostinger cost after renewal?",
        a: "Renewal rates are higher than the intro sale: Premium renews around ₹449/mo, Business around ₹649/mo, Cloud Startup around ₹1,599/mo. The standard way to handle this is buying the longest term (48 months) at the sale price, which locks the low rate for 4 years.",
    },
    {
        q: "Is the 48-month Hostinger plan worth paying upfront?",
        a: "Almost always yes. Premium at ₹149/mo × 48 months is ₹7,152 upfront. The same 4 years bought as 12-month terms with renewals costs well over ₹15,000. If upfront cash is tight, 24 months is the next-best value.",
    },
    {
        q: "Can I upgrade my Hostinger plan later without losing anything?",
        a: "Yes. Upgrades from Premium to Business or Cloud are one-click from hPanel, your sites stay live, and you only pay the difference. Downgrades work at renewal time. Starting small and upgrading when traffic grows is a perfectly safe strategy.",
    },
    {
        q: "Is the Hostinger BD (Bangladesh) price the same as the India price?",
        a: "No — Hostinger localizes pricing by region, so the Bangladesh (BD) storefront shows the same Premium, Unlimited, and Cloud lineup at slightly different local rates than the Indian ₹149/₹249/₹599 sale prices. Plan features are identical everywhere; the referral link automatically opens your region's storefront with its live localized prices.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger Plans India 2026: ₹149–₹599 Full Price List",
        description:
            "Hostinger plans & price list India 2026 — Premium ₹149, Unlimited ₹249, Cloud ₹599/mo, real renewal rates, and the monthly-billing trap before you pay.",
        image: "https://mohitkoli.in/assets/blog/hostinger-plans-pricing-india-2026.png",
        datePublished: "2026-06-24T00:00:00.000Z",
        dateModified: "2026-08-20T00:00:00.000Z",
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
            logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "hostinger plans india, hostinger india plans, hostinger plan india, hostinger pricing, hostinger pricing plans, hostinger price in india, hostinger price list india 2026, hostinger hosting prices, hostinger business plan pricing, hostinger premium web hosting price, hostinger subscription plan, hostinger pay monthly, hostinger 2 year plan, hostinger renewal price, hostinger kvm plans, hostinger agency hosting, hostinger pro plans india",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Plans & Pricing India 2026", item: CANONICAL },
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

const PLANS = [
    {
        name: "Premium",
        cart: CART_PREMIUM_48,
        badge: "Most Popular",
        price: "₹149",
        regular: "₹599",
        off: "75% OFF",
        renewal: "₹449/mo",
        highlight: true,
        features: ["3 websites", "20 GB SSD storage", "Free domain (1st year)", "Free SSL + weekly backups", "2 mailboxes free for 1 year", "Managed WordPress"],
        bestFor: "Blogs, portfolios, small business sites",
    },
    {
        name: "Unlimited",
        cart: CART_UNLIMITED_48,
        badge: "Best Value",
        price: "₹249",
        regular: "₹699",
        off: "64% OFF",
        renewal: "₹649/mo",
        highlight: false,
        features: ["Unlimited websites", "50 GB NVMe storage (≈2x faster)", "Free domain (1st year)", "Daily backups", "AI ecommerce builder", "5 mailboxes free for 1 year"],
        bestFor: "Business sites, WooCommerce, freelancers with clients",
    },
    {
        name: "Cloud Startup",
        cart: CART_CLOUD_STARTUP_48,
        badge: "High Traffic",
        price: "₹599",
        regular: "₹1,699",
        off: "65% OFF",
        renewal: "₹1,599/mo",
        highlight: false,
        features: ["100 websites", "100 GB NVMe storage", "Dedicated resources", "Free domain + dedicated IP", "Daily backups", "Priority support"],
        bestFor: "High-traffic sites, agencies, heavy stores",
    },
];

const KVM_PLANS = [
    ["KVM 1", "1 vCPU", "4 GB", "50 GB NVMe", "4 TB", "Solo apps, bots, small APIs"],
    ["KVM 2", "2 vCPU", "8 GB", "100 GB NVMe", "8 TB", "Production apps, small SaaS"],
    ["KVM 4", "4 vCPU", "16 GB", "200 GB NVMe", "16 TB", "Busy APIs, ecommerce backends"],
    ["KVM 8", "8 vCPU", "32 GB", "400 GB NVMe", "32 TB", "Heavy workloads, multiple apps"],
];

export default function HostingerPlansPricing() {
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
                            <li className="text-gray-300">Hostinger Plans &amp; Pricing India</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Pricing Guide · Updated August 20, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hostinger Plans &amp; Pricing in India (2026): Full Price List &amp; Which Plan to Buy
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Hostinger&apos;s pricing page shows you three shiny cards and hopes you pick the middle one. What it does not show
                        clearly: <strong className="text-white">renewal prices, term math, and when a ₹149 plan beats a ₹599 one</strong>.
                        So here is the whole India price list for 2026 — shared, Cloud and KVM VPS — with the renewal number printed next to
                        every intro number. I have deployed client projects on every tier, and the plan most people should buy is not the one
                        that middle card is pushing.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: links on this page use my referral code — you get an extra ~20% discount on top of the sale price, and I
                        earn a commission at no extra cost to you. Prices checked July 2, 2026; Hostinger rotates sales so exact numbers can shift.
                    </p>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/hostinger-plans-pricing-india-2026.svg"
                            alt="Title card for this Hostinger plans and pricing India 2026 guide, bylined Mohit Koli, senior full stack developer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Master price list */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger hosting prices in India — every plan at a glance</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            <strong className="text-white">How much is hosting on Hostinger?</strong> In India it starts at{" "}
                            <strong className="text-white">₹149/mo</strong> for the Premium shared plan on the 48-month term, ₹249/mo for
                            Unlimited (formerly Business), and ₹599/mo for Cloud Startup; KVM VPS starts around ₹499/mo. Renewals land higher — roughly ₹449,
                            ₹649 and ₹1,599/mo — so the table below prints both numbers side by side, and my{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">hosting cost calculator</Link>{" "}
                            totals them across however many years you plan to stay. Every shared plan includes free SSL
                            and a free domain for the first year.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Intro price (48-mo term)</th>
                                        <th className="p-4">Renewal price</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Premium", "₹149/mo (~₹119 with referral)", "₹449/mo", "Blogs, portfolios, small business sites"],
                                        ["Unlimited (was Business)", "₹249/mo (~₹199 with referral)", "₹649/mo", "WooCommerce stores, client work"],
                                        ["Cloud Startup", "₹599/mo (~₹479 with referral)", "₹1,599/mo", "High-traffic sites, agencies"],
                                        ["KVM 1 (VPS)", "~₹499/mo on sale", "Varies by term", "Custom apps, bots, small APIs"],
                                        ["KVM 2–8 (VPS)", "See live pricing", "Varies by term", "Production apps to heavy workloads"],
                                    ].map(([plan, intro, renewal, best], i) => (
                                        <tr key={plan} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{plan}</td>
                                            <td className="p-4">{intro}</td>
                                            <td className="p-4">{renewal}</td>
                                            <td className="p-4">{best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            These are India-localized sale prices (last verified July 2026 — Hostinger rotates offers, so the live cart is
                            the source of truth). One fine-print note for Indian buyers: GST is added at checkout on top of the listed
                            price, so the invoice total comes out a bit higher than price × months — check the cart summary before you pay.
                            To see how these numbers hold up against the rest of the market, my{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                best web hosting in India 2026
                            </Link>{" "}
                            roundup and the{" "}
                            <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger vs GoDaddy vs Bluehost price comparison
                            </Link>{" "}
                            cover every rival worth considering.
                        </p>
                    </section>

                    {/* 30-second answer */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>🏆 <strong className="text-white">Most people:</strong> Premium at ₹149/mo (48-month term) — blog, portfolio, or business site with a free domain.</li>
                            <li>🛒 <strong className="text-white">Online store / client work:</strong> Unlimited at ₹249/mo — NVMe speed + daily backups pay for themselves.</li>
                            <li>🚀 <strong className="text-white">Developers / custom apps:</strong> KVM 2 VPS — root access, dedicated 8 GB RAM, Docker-ready.</li>
                            <li>⚠️ <strong className="text-white">Nobody:</strong> monthly billing on any plan — you lose almost the entire discount.</li>
                        </ul>
                    </section>

                    {/* Pricing cards */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Shared &amp; Cloud plans (Monsoon Sale prices, 48-month term)</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {PLANS.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`rounded-3xl border p-6 flex flex-col ${plan.highlight ? "border-primary-500/60 bg-primary-500/[0.08] shadow-lg shadow-primary-900/30" : "border-white/10 bg-white/[0.03]"}`}
                                >
                                    <p className={`text-xs uppercase tracking-[0.25em] mb-3 ${plan.highlight ? "text-primary-300" : "text-gray-500"}`}>{plan.badge}</p>
                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                    <div className="mt-3 mb-1 flex items-end gap-2">
                                        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                        <span className="text-gray-400 mb-1">/mo</span>
                                        <span className="text-red-400 line-through mb-1 text-sm">{plan.regular}</span>
                                    </div>
                                    <p className="text-green-400 text-sm font-semibold mb-1">{plan.off} + extra ~20% via referral</p>
                                    <p className="text-xs text-gray-500 mb-4">Renews at {plan.renewal}</p>
                                    <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <span className="text-green-400 mt-0.5">✓</span>{f}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-gray-400 mb-4"><strong className="text-gray-300">Best for:</strong> {plan.bestFor}</p>
                                    <a
                                        href={plan.cart}
                                        target="_blank"
                                        rel="nofollow sponsored noopener"
                                        className={`text-center font-bold px-6 py-3 rounded-xl transition ${plan.highlight ? "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
                                    >
                                        Get {plan.name} →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Effective cost chart */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Chart: what each plan really costs per month</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Sale price is only half the story: the referral stack pulls it down, renewal pushes it back up. All three
                            numbers, per plan:
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-8">
                            {[
                                { name: "Premium", stack: 119, sale: 149, renew: 449, max: 1699 },
                                { name: "Unlimited", stack: 199, sale: 249, renew: 649, max: 1699 },
                                { name: "Cloud Startup", stack: 479, sale: 599, renew: 1599, max: 1699 },
                            ].map((p) => (
                                <div key={p.name}>
                                    <p className="text-white font-semibold mb-3">{p.name}</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="w-40 text-xs text-gray-400 flex-shrink-0">With referral stack</span>
                                            <div className="flex-1 h-3 rounded-full bg-white/5">
                                                <div className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: `${(p.stack / p.max) * 100}%` }} />
                                            </div>
                                            <span className="text-green-400 text-sm font-bold w-20 text-right">~₹{p.stack}/mo</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-40 text-xs text-gray-400 flex-shrink-0">Public sale price</span>
                                            <div className="flex-1 h-3 rounded-full bg-white/5">
                                                <div className="h-3 rounded-full bg-yellow-400/80" style={{ width: `${(p.sale / p.max) * 100}%` }} />
                                            </div>
                                            <span className="text-yellow-300 text-sm font-semibold w-20 text-right">₹{p.sale}/mo</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-40 text-xs text-gray-400 flex-shrink-0">Renewal (after term)</span>
                                            <div className="flex-1 h-3 rounded-full bg-white/5">
                                                <div className="h-3 rounded-full bg-red-500/70" style={{ width: `${(p.renew / p.max) * 100}%` }} />
                                            </div>
                                            <span className="text-red-400 text-sm font-semibold w-20 text-right">₹{p.renew}/mo</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-3">Bars scaled to ₹1,699 (Cloud regular price). Renewal applies only after your locked term ends — one more reason the 48-month term wins.</p>
                    </section>

                    {/* Full table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Feature-by-feature comparison (including what the sales page hides)</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Feature</th>
                                        <th className="p-4">Premium</th>
                                        <th className="p-4">Business</th>
                                        <th className="p-4">Cloud Startup</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Sale price (48-mo)", "₹149/mo", "₹249/mo", "₹599/mo"],
                                        ["With referral stack", "~₹119/mo", "~₹199/mo", "~₹479/mo"],
                                        ["Renewal price", "₹449/mo", "₹649/mo", "₹1,599/mo"],
                                        ["48-mo upfront total", "₹7,152", "₹11,952", "₹28,752"],
                                        ["Websites", "3", "50", "100"],
                                        ["Storage", "20 GB SSD", "50 GB NVMe", "100 GB NVMe"],
                                        ["Backups", "Weekly", "Daily", "Daily"],
                                        ["Free domain (1 yr)", "✅", "✅", "✅"],
                                        ["Free SSL", "✅", "✅", "✅"],
                                        ["Free mailboxes (1 yr)", "2 / website", "5 / website", "10 / website"],
                                        ["Dedicated IP", "—", "—", "✅"],
                                        ["AI ecommerce builder", "—", "✅", "✅"],
                                        ["Support", "24/7 chat", "24/7 chat", "24/7 priority"],
                                    ].map(([label, a, b, c], i) => (
                                        <tr key={label} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{label}</td>
                                            <td className="p-4">{a}</td>
                                            <td className="p-4">{b}</td>
                                            <td className="p-4">{c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Premium & Business plan detail */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Premium and Business plans in detail</h2>
                        <h3 className="text-xl font-bold text-white mb-3">Hostinger Premium plan price — ₹149/mo</h3>
                        <p className="text-gray-300 leading-8 mb-6">
                            The full math on Premium web hosting: ₹149/mo on the 48-month sale term, ₹7,152 upfront for four years, roughly
                            ₹119/mo once the referral stack is applied, and ₹449/mo at renewal once the term ends. That buys 3 websites,
                            20 GB SSD, a free domain for year one, free SSL, weekly backups, and managed WordPress. For a blog, portfolio,
                            or single business site this is the one I&apos;d buy without thinking twice — it is the plan I use in my{" "}
                            <Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger WordPress hosting India guide
                            </Link>{" "}
                            setup walkthrough, and the plan that tops my{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                cheap web hosting under ₹200 in India
                            </Link>{" "}
                            shortlist if budget is the only criterion.
                        </p>
                        <h3 className="text-xl font-bold text-white mb-3">Hostinger Business plan — now "Unlimited" at ₹249/mo</h3>
                        <p className="text-gray-300 leading-8">
                            The <Link href="/blog/hostinger-business-plan" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger Business plan</Link> is now sold as Unlimited, at ₹249/mo on the 48-month term — ₹11,952 upfront, about ₹199/mo with
                            the referral stack — renewing around ₹649/mo. The extra ₹60/mo over Premium buys NVMe storage with roughly 2x
                            faster disk I/O, daily backups instead of weekly, unlimited websites, 50 GB of space, and the AI ecommerce builder. If
                            your site earns money — a store, lead-gen pages, client projects — Business is the safer default. My verdict
                            after a year of running client sites on these plans is in the{" "}
                            <Link href="/blog/hostinger-review-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                full Hostinger review
                            </Link>.
                        </p>
                    </section>

                    {/* Term length cost */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger 1-year vs 2-year vs 4-year plan cost</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Every Hostinger subscription plan is prepaid for the term you pick, and the discount deepens with length — the
                            48-month term carries the headline 77% off on Premium. Here is how the three common terms play out:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Term</th>
                                        <th className="p-4">Premium cost</th>
                                        <th className="p-4">What happens after</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["48 months (4-year)", "₹149/mo — ₹7,152 total", "Renewal (₹449/mo) cannot touch you until 2030"],
                                        ["24 months (2-year)", "Between ₹149 and ₹599/mo — rotates with sales", "Renews at ₹449/mo after two years"],
                                        ["12 months (1-year)", "Smallest upfront, smallest discount", "Renews at ₹449/mo from year two"],
                                    ].map(([term, cost, after], i) => (
                                        <tr key={term} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{term}</td>
                                            <td className="p-4">{cost}</td>
                                            <td className="p-4">{after}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The 1-year plan looks cheapest on checkout day but is the most expensive path over time: four years bought as
                            12-month terms costs well over ₹15,000 versus ₹7,152 on the 4-year lock. The 2-year plan is the honest middle
                            path if the 48-month upfront amount feels heavy. Before choosing, read the exact{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger renewal price in India
                            </Link>{" "}
                            breakdown so year-two costs never surprise you.
                        </p>
                    </section>

                    {/* Monthly billing */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger monthly plan — can you pay month-to-month?</h2>
                        <p className="text-gray-300 leading-8">
                            Yes, Hostinger lets you pay monthly, but it is the worst-value way to buy. The 65–77% discounts are attached to
                            long terms; on month-to-month billing you pay close to the regular rate — around ₹599/mo for Premium instead of
                            ₹149/mo — so the cheap-hosting math disappears with the first invoice. Monthly billing only makes sense for a
                            genuinely temporary project, like a one-month campaign site. If upfront cash is the constraint, the 12-month
                            term is the sensible compromise: a real discount now, and you can switch to a 48-month lock at renewal. Either
                            way, stack the extra referral discount first — the exact steps are in my guide on{" "}
                            <Link href="/blog/how-to-get-hostinger-90-off-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                how to get 90% off on Hostinger
                            </Link>.
                        </p>
                    </section>

                    {/* Business email pricing */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger business email pricing in India</h2>
                        <p className="text-gray-300 leading-8">
                            Every shared and Cloud plan on this page includes free business mailboxes for the first year — 2 per website on Premium, 5 on
                            Business, 10 on Cloud Startup — so you@yourdomain.com costs nothing on day one. After year one, mailboxes renew
                            at a per-mailbox rate that Hostinger rotates with its sales, so check the live cart for the current number and
                            compare it against Google Workspace&apos;s ₹1,650/user/year before paying for a separate email suite. One catch:
                            business email rides on your domain, and the domain has its own renewal cost — which is the next section.
                        </p>
                    </section>

                    {/* Domain + hosting */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Is a domain included with your Hostinger plan?</h2>
                        <p className="text-gray-300 leading-8">
                            Yes — every shared plan from Premium up bundles a free domain for the first year (worth roughly ₹799), so
                            &quot;domain + hosting&quot; does not mean two separate purchases on day one. Three things to know before you
                            rely on that bundle: the free year applies to the first year only, and from year two the domain renews
                            separately from your hosting term at the normal registry rate; you can also buy a domain from Hostinger without
                            any hosting plan if you just want to park a name; and if your domain already lives at GoDaddy or another
                            registrar, pointing it at Hostinger hosting is free — no transfer required. The real renewal numbers for .com,
                            .in and .store, plus the transfer-vs-point decision, are in my{" "}
                            <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger domain price in India 2026
                            </Link>{" "}
                            guide.
                        </p>
                    </section>

                    {/* Personas */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Agency plans: for freelancers managing client sites</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            In 2026 Hostinger also sells a separate Agency line (under the &quot;Hostinger Pro&quot;
                            banner) aimed at web developers, freelancers and agencies running many client websites
                            from one panel. The entry tier, <strong className="text-white">Agency Startup</strong>,
                            was listed at ₹2,499/mo on the 24-month term when I checked in September 2026 — regular
                            ₹4,999/mo, renewing at ₹3,499/mo. A different budget class than shared hosting, and
                            priced that way because of what it carries:
                        </p>
                        <ul className="space-y-2 text-gray-300 leading-7 mb-6">
                            <li>✓ 100 websites with full per-site isolation — one client&apos;s problem cannot take down another&apos;s site</li>
                            <li>✓ 300 GB NVMe storage, 6 CPU cores, 12 GB RAM</li>
                            <li>✓ Unbranded client dashboard with per-site access sharing — clients log in without seeing Hostinger&apos;s branding or your other projects</li>
                            <li>✓ Staging environments, daily backups, unlimited CDN and SSL</li>
                            <li>✓ 10 mailboxes per website, free for the first year</li>
                        </ul>
                        <p className="text-gray-300 leading-8 mb-6">
                            Two larger tiers — Agency Growth and Agency Professional — scale the same idea up;
                            Hostinger advertises up to 300 sites on a single plan at the top end. If you bill
                            clients for hosting, the maths usually works: five clients at a modest ₹500/mo each
                            already covers the Startup tier.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-12">
                            <a href={CART_AGENCY_STARTUP_24} target="_blank" rel="nofollow sponsored noopener" className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition">Check Agency Startup price →</a>
                            <a href={CART_AGENCY_GROWTH_24} target="_blank" rel="nofollow sponsored noopener" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition">Agency Growth →</a>
                            <a href={CART_AGENCY_PROFESSIONAL} target="_blank" rel="nofollow sponsored noopener" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition">Agency Professional →</a>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Which plan fits you?</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["📝 Blogger / student / portfolio", "Premium", "One or two sites, free domain, free SSL, managed WordPress. At ~₹119/mo with the stack this is the cheapest serious hosting in India."],
                                ["💼 Small business / WooCommerce store", "Unlimited", "NVMe storage loads product pages noticeably faster and daily backups protect order data. The AI store builder helps non-developers ship quickly."],
                                ["🧑‍💻 Freelancer hosting client sites", "Unlimited", "Unlimited websites on one plan means you host every client project under one bill and keep the margin."],
                                ["⚙️ Developer running custom apps", "KVM 2 VPS", "Root access, 2 vCPU / 8 GB RAM, Docker, any stack — Node.js, Laravel, Python. Shared hosting cannot do this; see the KVM table below."],
                            ].map(([who, plan, why]) => (
                                <div key={who} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-semibold text-white mb-1">{who}</h3>
                                    <p className="text-primary-400 font-bold mb-2">→ {plan}</p>
                                    <p className="text-sm text-gray-300 leading-6">{why}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* KVM VPS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger KVM VPS plans (for developers)</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            KVM plans are the developer end of the lineup: a real virtual server with dedicated vCPU and RAM, root access,
                            your choice of OS, and NVMe disks. KVM 1 starts around ₹499/mo on sale — prices rotate, so check the live page
                            through the link before you commit to a tier.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">vCPU</th>
                                        <th className="p-4">RAM</th>
                                        <th className="p-4">Storage</th>
                                        <th className="p-4">Bandwidth</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {KVM_PLANS.map(([plan, cpu, ram, storage, bw, best], i) => (
                                        <tr key={plan} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{plan}</td>
                                            <td className="p-4">{cpu}</td>
                                            <td className="p-4">{ram}</td>
                                            <td className="p-4">{storage}</td>
                                            <td className="p-4">{bw}</td>
                                            <td className="p-4">{best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300">
                            I wrote a full hands-on review of the KVM line here:{" "}
                            <Link href="/blog/hostinger-vps-hosting-review-discount" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger KVM VPS Review — is it worth it?
                            </Link>
                        </p>
                    </section>

                    {/* Money saving */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">5 ways to pay less than everyone else</h2>
                        <ol className="space-y-4">
                            {[
                                ["Stack the referral discount", "The public sale gives 65–77% off; buying through a referral link adds ~20% more on top. Full walkthrough in my 90% OFF guide (linked below)."],
                                ["Always choose the 48-month term", "It carries the deepest discount and freezes the price — the renewal jump cannot touch you for 4 years."],
                                ["Claim the free domain immediately", "Worth ~₹799/year. It is part of Premium and above — skipping the claim wizard is throwing money away."],
                                ["Use the free first-year mailboxes", "Professional email (you@yourdomain.com) is included free for year one — do not pay Google Workspace ₹1,650/user/year on day one."],
                                ["Test inside the 30-day window", "Deploy your real site in week one. If speed or support disappoints, the money-back guarantee is a full refund — the trial is genuinely free."],
                            ].map(([title, body], i) => (
                                <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                                        <p className="text-sm text-gray-300 leading-6">{body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="text-gray-300 leading-8 mt-4">
                            Coupon codes rotate monthly, and most of the ones floating around forums are expired — I keep a tested, working
                            list in my{" "}
                            <Link href="/blog/hostinger-discount-code-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger discount code 2026
                            </Link>{" "}
                            post, so check it before you hit the payment page.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Lock today&apos;s sale price for 4 years</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Premium from ~₹119/mo with the referral stack · free domain · free SSL · 30-day money-back.
                                The link below applies the extra discount automatically.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                See Live Prices with Discount Applied →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger plans &amp; pricing</h2>
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
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading (hosting series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — exactly what you&apos;ll pay after year one</Link></li>
                            <li><Link href="/blog/hostinger-wordpress-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">Is Hostinger Good for WordPress? — setup, speed &amp; plan picks</Link></li>
                            <li><Link href="/blog/hostinger-review-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Review 2026 — honest verdict after a year of client sites</Link></li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Domain Price India 2026 — .com, .in &amp; .store real costs</Link></li>
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — the exact discount-stacking steps</Link></li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost — 2026 India comparison</Link></li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">7 Best Web Hosting Services in India (2026)</Link></li>
                            <li><Link href="/blog/hostinger-vps-hosting-review-discount" className="hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS Review — hands-on with the developer plans</Link></li>
                        </ul>
                    </section>
                    {/* Cluster links — added so these articles are not internal-link orphans. */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">The ₹55/mo offer explained</Link> — what every plan costs once a referral code is applied.</li>
                            <li><Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best VPS hosting in India</Link> — when shared plans stop being enough.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger Cloud hosting</Link> — dedicated CPU and RAM without root access.</li>
                        </ul>
                    </section>


                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title="Hostinger Plans India 2026: ₹149–₹599 Full Price List" />
                    </div>
                </article>
            </main>
        </>
    );
}
