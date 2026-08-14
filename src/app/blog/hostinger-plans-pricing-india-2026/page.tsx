import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-plans-pricing-india-2026";

export const metadata: Metadata = {
    title: "Hostinger Plans & Pricing in India 2026: Which Plan Should You Buy?",
    description:
        "Every Hostinger plan explained with real July 2026 India pricing — Premium vs Business vs Cloud, KVM VPS specs, renewal costs nobody shows you, and a chart of what each plan really costs per month.",
    keywords: [
        "hostinger plans",
        "hostinger pricing india",
        "hostinger price list india 2026",
        "hostinger premium vs business",
        "hostinger renewal price",
        "hostinger kvm plans",
        "hostinger kvm 1 plan",
        "hostinger cloud startup plan",
        "which hostinger plan to buy",
        "hostinger 48 month plan price",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger Plans & Pricing in India 2026: Which Plan Should You Buy?",
        description:
            "Premium vs Business vs Cloud vs KVM VPS — real India pricing, renewal costs, and exactly which plan fits your project.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/hostinger-plans-pricing-india-2026.svg", width: 1200, height: 630, alt: "Hostinger plans and pricing in India 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger Plans & Pricing India 2026: Which Plan to Buy?",
        description: "Real prices, renewal traps, KVM VPS specs, and persona-based plan picks — everything on one page.",
        images: ["/assets/blog/hostinger-plans-pricing-india-2026.svg"],
    },
};

const FAQ = [
    {
        q: "Which Hostinger plan is best for a WordPress blog in India?",
        a: "Premium (₹139/mo on the 48-month sale term) is the sweet spot for blogs and portfolios: 3 websites, 20 GB SSD, free domain for a year, free SSL, and managed WordPress with one-click install. Upgrade to Business only if you need daily backups and NVMe speed.",
    },
    {
        q: "What is the real difference between Hostinger Premium and Business?",
        a: "Business (₹199/mo) adds NVMe storage (roughly 2x faster disk I/O), daily backups instead of weekly, 50 websites instead of 3, 50 GB instead of 20 GB, and an AI ecommerce builder. For a serious business site or WooCommerce store the ₹60/mo difference is easily worth it.",
    },
    {
        q: "What are Hostinger KVM VPS plans and who needs them?",
        a: "KVM plans (KVM 1, 2, 4, 8) are virtual private servers with dedicated vCPU and RAM — you get root access and full control. Choose KVM when you run custom Node.js/Laravel apps, Docker, or need guaranteed resources. KVM 1 starts around ₹499/mo on sale with 1 vCPU, 4 GB RAM, and 50 GB NVMe.",
    },
    {
        q: "How much does Hostinger cost after renewal?",
        a: "Renewal rates are higher than the intro sale: Premium renews around ₹449/mo, Business around ₹649/mo, Cloud Startup around ₹1,599/mo. The standard way to handle this is buying the longest term (48 months) at the sale price, which locks the low rate for 4 years.",
    },
    {
        q: "Is the 48-month Hostinger plan worth paying upfront?",
        a: "Almost always yes. Premium at ₹139/mo × 48 months is ₹6,672 upfront. The same 4 years bought as 12-month terms with renewals costs well over ₹15,000. If upfront cash is tight, 24 months is the next-best value.",
    },
    {
        q: "Can I upgrade my Hostinger plan later without losing anything?",
        a: "Yes. Upgrades from Premium to Business or Cloud are one-click from hPanel, your sites stay live, and you only pay the difference. Downgrades work at renewal time. Starting small and upgrading when traffic grows is a perfectly safe strategy.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger Plans & Pricing in India 2026: Which Plan Should You Buy?",
        description:
            "Every Hostinger plan explained with real July 2026 India pricing — shared hosting, Cloud, and KVM VPS, including renewal costs and persona-based recommendations.",
        image: "https://mohitkoli.in/assets/blog/hostinger-plans-pricing-india-2026.svg",
        datePublished: "2026-06-24T00:00:00.000Z",
        dateModified: "2026-07-17T00:00:00.000Z",
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
        keywords: "hostinger plans, hostinger pricing india, hostinger premium vs business, hostinger kvm plans, hostinger renewal price",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Plans & Pricing in India 2026", item: CANONICAL },
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
        badge: "Most Popular",
        price: "₹139",
        regular: "₹599",
        off: "77% OFF",
        renewal: "₹449/mo",
        highlight: true,
        features: ["3 websites", "20 GB SSD storage", "Free domain (1st year)", "Free SSL + weekly backups", "2 mailboxes free for 1 year", "Managed WordPress"],
        bestFor: "Blogs, portfolios, small business sites",
    },
    {
        name: "Business",
        badge: "Best Value",
        price: "₹199",
        regular: "₹699",
        off: "72% OFF",
        renewal: "₹649/mo",
        highlight: false,
        features: ["50 websites", "50 GB NVMe storage (≈2x faster)", "Free domain (1st year)", "Daily backups", "AI ecommerce builder", "5 mailboxes free for 1 year"],
        bestFor: "Business sites, WooCommerce, freelancers with clients",
    },
    {
        name: "Cloud Startup",
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

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Pricing Guide · Updated July 2, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hostinger Plans &amp; Pricing in India (2026): Which Plan Should You Actually Buy?
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Hostinger&apos;s pricing page shows you three shiny cards and hopes you pick the middle one. What it does not show
                        clearly: <strong className="text-white">renewal prices, term math, and when a ₹139 plan beats a ₹599 one</strong>.
                        I have deployed client projects on every tier — shared, Cloud, and KVM VPS. Here is the complete picture with real
                        July 2026 prices, so you buy the right plan the first time.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: links on this page use my referral code — you get an extra ~20% discount on top of the sale price, and I
                        earn a commission at no extra cost to you. Prices checked July 2, 2026; Hostinger rotates sales so exact numbers can shift.
                    </p>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/hostinger-plans-pricing-india-2026.svg"
                            alt="Hostinger plans and pricing in India 2026 — Premium vs Business vs Cloud"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 30-second answer */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>🏆 <strong className="text-white">Most people:</strong> Premium at ₹139/mo (48-month term) — blog, portfolio, or business site with a free domain.</li>
                            <li>🛒 <strong className="text-white">Online store / client work:</strong> Business at ₹199/mo — NVMe speed + daily backups pay for themselves.</li>
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
                                        href={REFERRAL_URL}
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
                            Sale price is only half the story — the referral stack lowers it further, and renewal raises it later.
                            This chart shows all three numbers per plan so nothing surprises you:
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-8">
                            {[
                                { name: "Premium", stack: 111, sale: 139, renew: 449, max: 1699 },
                                { name: "Business", stack: 159, sale: 199, renew: 649, max: 1699 },
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
                        <h2 className="text-3xl font-bold text-white mb-4">Full comparison table (including what pricing pages hide)</h2>
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
                                        ["Sale price (48-mo)", "₹139/mo", "₹199/mo", "₹599/mo"],
                                        ["With referral stack", "~₹111/mo", "~₹159/mo", "~₹479/mo"],
                                        ["Renewal price", "₹449/mo", "₹649/mo", "₹1,599/mo"],
                                        ["48-mo upfront total", "₹6,672", "₹9,552", "₹28,752"],
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

                    {/* Personas */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which plan fits you? (pick your situation)</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["📝 Blogger / student / portfolio", "Premium", "One or two sites, free domain, free SSL, managed WordPress. At ~₹111/mo with the stack this is the cheapest serious hosting in India."],
                                ["💼 Small business / WooCommerce store", "Business", "NVMe storage loads product pages noticeably faster and daily backups protect order data. The AI store builder helps non-developers ship quickly."],
                                ["🧑‍💻 Freelancer hosting client sites", "Business", "50 websites on one plan means you host every client project under one bill and keep the margin."],
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
                            If you searched &quot;hostinger kvm plans&quot;, here is the quick spec sheet. KVM plans give you a real virtual
                            server: dedicated vCPU and RAM, root access, your choice of OS, and NVMe disks. KVM 1 starts around ₹499/mo on
                            sale (prices rotate — check live pricing through the link).
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
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Lock today&apos;s sale price for 4 years</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Premium from ~₹111/mo with the referral stack · free domain · free SSL · 30-day money-back.
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

                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title="Hostinger Plans & Pricing in India 2026: Which Plan Should You Buy?" />
                    </div>
                </article>
            </main>
        </>
    );
}
