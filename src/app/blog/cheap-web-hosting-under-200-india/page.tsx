import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/cheap-web-hosting-under-200-india";

export const metadata: Metadata = {
    title: "Cheap Web Hosting Under ₹200/Month in India (2026)",
    description:
        "Cheap web hosting under ₹200/month in India — 5 real picks, what ₹99, ₹139 and ₹199 actually buy, and the renewal trap. Price-checked Aug 2026.",
    keywords: [
        "cheap web hosting india",
        "cheap web hosting under 200 india",
        "web hosting under 200 rupees",
        "cheapest web hosting in india",
        "cheapest hosting india 2026",
        "hosting under 200 per month india",
        "cheap hosting with free domain india",
        "budget web hosting india",
        "cheap hosting for students india",
        "cheap wordpress hosting india",
        "affordable web hosting india 2026",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Cheap Web Hosting Under ₹200/Month in India (2026): 5 Real Picks",
        description:
            "5 real under-₹200 hosting options in India compared — price, renewal, storage, free domain — plus the corners budget hosts cut and the smartest pick per use case.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/cheap-web-hosting-under-200-india.png", width: 1200, height: 630, alt: "Cheap web hosting under ₹200 per month in India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cheap Web Hosting Under ₹200/Month in India (2026): 5 Real Picks",
        description: "₹99 vs ₹139 vs ₹199 hosting compared honestly — renewal traps, free-domain math, and the smartest budget pick for 2026.",
        images: ["/assets/blog/cheap-web-hosting-under-200-india.png"],
    },
};

const FAQ = [
    {
        q: "Which is the best web hosting under ₹200 per month in India?",
        a: "For most people, Hostinger Premium (₹139/mo on the 48-month sale term) is the strongest under-₹200 option in India: 3 websites, 20 GB SSD, free domain for year one, free SSL, weekly backups and managed WordPress. Nothing else in this price band bundles a free domain plus email.",
    },
    {
        q: "Which is the cheapest web hosting in India?",
        a: "From a serious host, the floor is a Single-type plan at roughly ₹99/mo on a long-term term. But count the domain: a .com alone costs ~₹1,199/year at renewal rates, so Hostinger Premium at ₹139/mo — with the domain free for year one — usually works out cheapest overall. The ₹49 'unlimited' offers that renew at ₹399 are marketing, not the cheapest hosting.",
    },
    {
        q: "Can I get hosting under ₹200 per month with a free domain?",
        a: "Yes — that is exactly what the ₹139/mo Premium tier is: free domain for year one, free SSL, email and 3 websites, all under ₹200. Sub-₹100 plans normally exclude the free domain, so if you need a domain anyway, paying ₹139 instead of ₹99 is usually the cheaper total.",
    },
    {
        q: "Can I get reliable hosting for ₹99 per month in India?",
        a: "Yes, but with real trade-offs. Sub-₹100 'Single'-type plans usually mean one website, slower storage, no free domain, and tighter resource limits. They are fine for a personal project or a first blog — just don't run a business site or store on them.",
    },
    {
        q: "What do budget hosts cut to hit low prices?",
        a: "The usual cuts: no free domain, weekly (not daily) backups, slower SATA SSD instead of NVMe, fewer mailboxes, capped databases and inodes, and steep renewal pricing. The plan can still be good — you just need to know which cuts you can live with.",
    },
    {
        q: "Is free hosting better than ₹200/month hosting?",
        a: "For anything you care about, no. Free hosts show ads, sleep your site, block custom domains or die without notice. If ₹139–₹199/mo is genuinely out of budget, a better free path is GitHub Pages or Vercel for static sites — not classic 'free hosting' companies.",
    },
    {
        q: "Do cheap hosting plans stay cheap at renewal?",
        a: "Usually not — this is the biggest budget-hosting trap. A ₹99–₹199 intro price typically renews at 2–3× that. Always read the renewal line at checkout, and lock the longest term you can afford at the sale price. I break the exact renewal numbers down in my Hostinger renewal price guide.",
    },
    {
        q: "Is cheap hosting good enough for WordPress?",
        a: "For a typical blog or business site, yes — a well-configured shared plan with LiteSpeed caching comfortably handles tens of thousands of monthly visits, and the ₹139 tier includes managed WordPress with a one-click installer. Upgrade to a higher tier or VPS only when you're consistently pushing serious traffic or running heavy WooCommerce.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Cheap Web Hosting Under ₹200/Month in India (2026): 5 Real Picks",
        description:
            "Cheap web hosting under ₹200/month in India, price-checked Aug 2026 — 5 real picks: what ₹99, ₹139 & ₹199 buy, who gives a free domain, and the renewal trap.",
        image: "https://mohitkoli.in/assets/blog/cheap-web-hosting-under-200-india.png",
        datePublished: "2026-08-09T00:00:00.000Z",
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
        keywords: "cheap web hosting india, cheap web hosting under 200 india, web hosting under 200 rupees, cheapest web hosting in india, cheapest hosting india 2026, budget hosting india, cheap wordpress hosting india, cheap hosting with free domain india",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Cheap Web Hosting Under ₹200/Month in India", item: CANONICAL },
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

export default function CheapHostingUnder200() {
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
                            <li className="text-gray-300">Hosting Under ₹200 in India</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Budget Guide · Updated August 20, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Cheap Web Hosting Under ₹200/Month in India: 5 Real Picks (and What&apos;s a Trap)
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Cheap web hosting under ₹200 a month sounds like it can&apos;t be real hosting. In India in 2026 it is —
                        chai money buys a plan that will happily run a proper website. The catch:{" "}
                        <strong className="text-white">this price band is also where the worst traps live</strong> — fake
                        &quot;₹49&quot; prices that renew at ₹399, free hosts that vanish overnight, and plans missing the one
                        feature you actually needed. I put client sites on budget plans, so here is the honest map: 5 real
                        options, compared on price, renewal, storage and free domain.
                    </p>
                    <p className="text-xs text-gray-500 mb-4 border-l-2 border-white/10 pl-3">
                        Disclosure: some links use my referral code — you get an extra discount, I earn a small commission at no extra cost to you.
                        Prices checked August 20, 2026; sale prices rotate, verify at checkout.
                    </p>
                    <div className="mb-8 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-4 text-sm text-gray-300 leading-6">
                        <strong className="text-white">August 2026 price check:</strong> I re-verified this month that the
                        figures below still hold — the ~₹99 Single-type tier, ₹139/mo Premium (48-month term) and ~₹199 Business
                        are all live at these sale prices. If your checkout shows higher, that sale has rotated — my{" "}
                        <Link href="/blog/hostinger-discount-code-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                            Hostinger discount code guide
                        </Link>{" "}
                        tracks what&apos;s currently working.
                    </div>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/cheap-web-hosting-under-200-india.svg"
                            alt="Cover card reading Web Hosting Under ₹200/Month, tagged Budget Guide, with the mohitkoli.in byline"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 30 second answer */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>🏆 <strong className="text-white">Best overall under ₹200:</strong> Hostinger Premium — ₹139/mo (48-mo term) with free domain, SSL, email and 3 websites.</li>
                            <li>🎓 <strong className="text-white">Tightest budget (student/personal):</strong> a &quot;Single&quot;-type plan at ₹99 or less — fine for one small site, know the limits.</li>
                            <li>⚡ <strong className="text-white">Free alternative for static sites:</strong> GitHub Pages / Vercel free tier — genuinely free, but static only.</li>
                            <li>🚩 <strong className="text-white">Skip:</strong> any &quot;unlimited everything at ₹49&quot; host that hides its renewal price.</li>
                        </ul>
                    </section>

                    {/* All 5 options compared */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">All 5 under-₹200 hosting options compared (August 2026)</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Option</th>
                                        <th className="p-4">Intro price</th>
                                        <th className="p-4">Renewal reality</th>
                                        <th className="p-4">Storage</th>
                                        <th className="p-4">Free domain?</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Hostinger Single", "~₹99/mo", "~2–3× intro — check checkout", "~30 GB SSD", "❌", "First blog, student project"],
                                        ["Hostinger Premium", "₹139/mo (48-mo term)", "~2–3× intro — lock the long term", "20 GB SSD", "✅ year 1", "Blogs, portfolios, small business"],
                                        ["Hostinger Business", "~₹199/mo", "~2–3× intro — check checkout", "50 GB NVMe", "✅ year 1", "Business sites, WooCommerce"],
                                        ["GitHub Pages", "₹0", "Stays free", "Enough for static sites", "❌ bring your own", "Static portfolio, docs"],
                                        ["Vercel / Netlify (free tier)", "₹0", "Stays free", "Generous for static sites", "❌ bring your own", "Static and frontend projects"],
                                    ].map(([option, price, renewal, storage, domain, bestFor], i) => (
                                        <tr key={option} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{option}</td>
                                            <td className="p-4">{price}</td>
                                            <td className="p-4">{renewal}</td>
                                            <td className="p-4">{storage}</td>
                                            <td className="p-4">{domain}</td>
                                            <td className="p-4">{bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-3">
                            Renewal jumps are the whole game in this price band — a ₹99–₹199 intro typically renews at 2–3× that,
                            so lock the longest term you can afford at the sale price. For the plan-by-plan detail behind rows 1–3, see my{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger plans &amp; pricing in India (2026) breakdown
                            </Link>.
                        </p>
                    </section>

                    {/* What 200 buys */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What ₹99 vs ₹139 vs ₹199 actually buys in India</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">What you get</th>
                                        <th className="p-4">~₹99/mo tier</th>
                                        <th className="p-4">~₹139/mo tier</th>
                                        <th className="p-4">~₹199/mo tier</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Websites", "1", "3", "25–50"],
                                        ["Storage", "~30 GB SSD", "20 GB SSD", "50 GB NVMe (faster)"],
                                        ["Free domain (year 1)", "❌ usually not", "✅", "✅"],
                                        ["Free SSL", "✅", "✅", "✅"],
                                        ["Email mailboxes", "1", "2–3 (free year 1)", "5+ (free year 1)"],
                                        ["Backups", "Weekly", "Weekly", "Daily"],
                                        ["Traffic comfort zone", "~10k visits/mo", "~25k visits/mo", "~100k visits/mo"],
                                        ["Good for", "First blog, project", "Blog, portfolio, small business", "Business, WooCommerce, client sites"],
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
                        <p className="text-sm text-gray-500 mt-3">
                            Tiers based on Hostinger&apos;s Single/Premium/Business lineup on long-term sale pricing — the reference
                            point for Indian budget hosting. Traffic figures are comfortable estimates for cached WordPress sites, not hard caps.
                        </p>
                    </section>

                    {/* Cheapest = total cost math */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Cheapest web hosting in India: the real year-one math</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Search &quot;cheapest web hosting in India&quot; and you&apos;ll drown in ₹49 banners. But the cheapest
                            headline price is almost never the cheapest total, because a real website needs a domain too — and a
                            .com runs about ₹1,199/year at renewal rates, roughly ₹100/month in real terms. Do the math with the
                            domain included and the ranking flips:
                        </p>
                        <ul className="space-y-2 text-gray-300 leading-7 mb-4">
                            <li>💸 <strong className="text-white">~₹99 Single-type plan</strong> + domain bought separately → effectively ~₹199/mo in year one.</li>
                            <li>🏆 <strong className="text-white">₹139 Premium</strong> with the domain free for year one → ₹139/mo, everything included.</li>
                            <li>🚩 <strong className="text-white">₹49 &quot;unlimited&quot; offers</strong> that renew at ₹399 → the two-year average beats neither of the above.</li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            So if you need a domain — and almost everyone starting a site does — the ₹139 tier is the genuinely
                            cheaper buy, not the sub-₹100 plans. And whichever you pick, check what year two costs{" "}
                            <em>before</em> paying: my{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger renewal price in India guide
                            </Link>{" "}
                            breaks down the exact post-sale numbers so the &quot;cheap&quot; plan doesn&apos;t quietly double on you.
                        </p>
                    </section>

                    {/* Mid-article CTA */}
                    <aside className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-gray-300 leading-7 mb-4 sm:mb-0">
                            Numbers looking sensible? The ₹139 Premium tier is the one I put most client sites on —
                            sale pricing rotates, so a quick look at the live checkout beats any table (an extra
                            referral discount usually applies on top).
                        </p>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block flex-shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40"
                        >
                            Check the ₹139 plan today →
                        </a>
                    </aside>

                    {/* Corners cut */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">The 5 corners budget hosts cut (check these before paying)</h2>
                        <ol className="space-y-4">
                            {[
                                ["Renewal price hidden below the fold", "A ₹99 intro that renews at ₹299+ triples your bill from year two. The renewal line is always on the checkout page somewhere — scroll and find it before you type your card number."],
                                ["No free domain", "A .com costs ~₹1,199/year at renewal rates. A plan that bundles the domain free for year one is effectively ₹100/mo cheaper than one that doesn't."],
                                ["Slow storage on the cheapest tier", "Entry plans ship SATA SSD; the ₹199 tier gets NVMe (roughly 2× disk speed). For an image-heavy WordPress site, that difference is visible in load times."],
                                ["Inode / database / resource caps", "Budget plans limit file counts (inodes), concurrent processes and DB size. Normal blogs never hit these — but a site builder importing 50 plugins can. Read the limits page once."],
                                ["Support quality drops at the bottom", "Sub-₹100 plans often get slower chat queues. If your site earns money, the ₹139–₹199 band is where support becomes dependable."],
                            ].map(([title, body], i) => (
                                <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                                        <p className="text-sm text-gray-300 leading-6">{body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Use cases */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which one should you actually pick?</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["🎓 Student building a first site", "₹99 Single-type plan", "One site, learn WordPress or upload HTML, upgrade later. Or use GitHub Pages free if the site is static."],
                                ["📝 Blogger starting seriously", "₹139 Premium tier", "Free domain + SSL + email + 3 sites. The free domain alone recovers ~₹800 of year-one cost."],
                                ["💼 Small business site", "₹199 Business tier", "NVMe speed, daily backups, room for 25–50 sites. Your site is your storefront — the extra ₹60/mo is insurance."],
                                ["🛒 Small WooCommerce store", "₹199 Business tier", "Daily backups protect orders; NVMe keeps product pages fast. Below this tier, stores feel sluggish."],
                            ].map(([who, plan, why]) => (
                                <div key={who} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-semibold text-white mb-1">{who}</h3>
                                    <p className="text-primary-400 font-bold mb-2">→ {plan}</p>
                                    <p className="text-sm text-gray-300 leading-6">{why}</p>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Still unsure? Find the line that describes you</h3>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li><strong className="text-white">Site is fully static</strong> (portfolio, docs, landing page) → GitHub Pages or Vercel. Spend ₹0.</li>
                            <li><strong className="text-white">One small site, hard ₹100 ceiling</strong> → the ~₹99 Single-type plan. Accept the limits, upgrade later.</li>
                            <li><strong className="text-white">You need a domain anyway</strong> (most people) → ₹139 Premium. The free year-one domain effectively pays back the difference.</li>
                            <li><strong className="text-white">The site earns money or takes orders</strong> → ₹199 Business for NVMe speed and daily backups.</li>
                            <li>
                                <strong className="text-white">Building a Node.js/Next.js app with a backend?</strong> Shared hosting won&apos;t run it — see my guide to{" "}
                                <Link href="/blog/nodejs-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Node.js hosting in India
                                </Link>{" "}
                                instead.
                            </li>
                        </ul>
                        <p className="text-gray-300 leading-8 mt-6">
                            Want the full India-wide rankings beyond the budget band? Read{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                7 Best Web Hosting Services in India (2026)
                            </Link>{" "}
                            — it covers the premium tiers too.
                        </p>
                    </section>

                    {/* Free hosting warning */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">&quot;Why not just use free hosting?&quot; — the honest answer</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Because free hosting companies have to make money somehow: ads injected into your pages, aggressive
                            upsells, sleeping sites, no custom domain, or sudden shutdowns. I have migrated enough panicked clients
                            off dead free hosts to say this plainly: <strong className="text-white">if the site matters, free classic hosting is the
                            most expensive option</strong> — you pay in downtime and migration pain.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The exception: static sites (portfolio, docs, landing page) on <strong className="text-white">GitHub Pages, Vercel or
                            Netlify free tiers</strong>. Those are genuinely free and reliable — but there&apos;s no PHP/WordPress, no
                            database, no email. The moment you need WordPress or dynamic features, you&apos;re back to needing a
                            ₹139–₹199 plan.
                        </p>
                    </section>

                    {/* WordPress on a budget */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Is cheap hosting good enough for WordPress?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            For a typical blog or business site — yes. Every paid tier here runs WordPress with a one-click
                            installer, and with LiteSpeed caching enabled a shared plan comfortably serves tens of thousands of
                            visits a month. The <strong className="text-white">₹139 Premium tier is the sweet spot for cheap WordPress
                            hosting in India</strong>: managed WordPress, free domain, email and 3 sites. The ~₹99 tier runs
                            WordPress too — just one site, with tighter resource limits.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Where under-₹200 stops being enough: heavy WooCommerce stores, page-builder sites stacking dozens of
                            plugins, or anything consistently past the ~100k visits/month band — that&apos;s ₹199 Business or VPS
                            territory. I&apos;ve broken down the WordPress-specific features, speed tests and limits in my{" "}
                            <Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger WordPress hosting India (2026) guide
                            </Link>.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">The best under-₹200 deal right now</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Hostinger Premium at ₹139/mo (48-month term) — free domain, SSL, email, 3 websites.
                                The referral link stacks an extra ~20% off the sale price. 30-day money-back guarantee.
                                Want every discount stacked properly? Follow my{" "}
                                <Link href="/blog/how-to-get-hostinger-90-off-2026" className="text-primary-300 hover:text-primary-200 underline underline-offset-4">
                                    step-by-step guide to 90% off on Hostinger
                                </Link>.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                See Live Prices with Discount →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — budget hosting in India</h2>
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
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing in India 2026 — every plan explained</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — the real cost after year one</Link></li>
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — discount-stacking walkthrough</Link></li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">7 Best Web Hosting Services in India (2026) — tested &amp; ranked</Link></li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Domain Price India — .com, .in &amp; .store real costs</Link></li>
                        </ul>
                    </section>
                    {/* Cluster links — added so these articles are not internal-link orphans. */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger at ₹55/mo</Link> — the cheapest plan on this list, priced in full.</li>
                            <li><Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best VPS hosting in India</Link> — the next step up from budget shared hosting.</li>
                        </ul>
                    </section>


                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title="Cheap Web Hosting Under ₹200/Month in India (2026): 5 Real Picks" />
                    </div>
                </article>
            </main>
        </>
    );
}
