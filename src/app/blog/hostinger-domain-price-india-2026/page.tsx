import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=HOSTFIFTY";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-domain-price-india-2026";

export const metadata: Metadata = {
    title: "Hostinger Domain Price in India 2026: .com, .in & .store Real Costs",
    description:
        "Real Hostinger domain prices in India for 2026 — .com, .in, .store, .online registration vs renewal costs, the free-domain-with-hosting trick, and how to register a domain cheaply without the renewal shock.",
    keywords: [
        "hostinger domain price",
        "domain price in india",
        "hostinger india domain pricing .com .in 2026",
        ".in domain price india",
        ".com domain price india 2026",
        "cheapest domain registration india",
        "hostinger free domain offer",
        "domain renewal price india",
        "how to buy a domain in india",
        "hostinger domain vs godaddy domain price",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger Domain Price in India 2026: .com, .in & .store Real Costs",
        description:
            "Registration vs renewal for every popular extension, the free-domain trick, and how to register a domain in India without the year-2 price shock.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/hostinger-domain-price-india-2026.svg", width: 1200, height: 630, alt: "Hostinger domain price in India 2026 — .com, .in, .store" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger Domain Price in India 2026 (.com, .in, .store)",
        description: "Real registration vs renewal costs, the free-domain trick, and the cheapest way to register a domain in India.",
        images: ["/assets/blog/hostinger-domain-price-india-2026.svg"],
    },
};

const FAQ = [
    {
        q: "How much does a .com domain cost in India on Hostinger?",
        a: "A .com typically registers around ₹149–₹749 for the first year on Hostinger's sale and renews around ₹1,199/year. The exact intro price rotates with sales, but .com renewal sits near ₹1,199 almost everywhere — so compare on the renewal price, not the flashy first-year number.",
    },
    {
        q: "What is the price of a .in domain in India?",
        a: "A .in (India's country domain) is one of the cheapest options: roughly ₹99–₹299 for the first year and about ₹699/year on renewal. If your audience is Indian, .in is excellent value and signals a local business to visitors.",
    },
    {
        q: "Can I get a domain for free with Hostinger?",
        a: "Yes. Every Hostinger hosting plan from Premium and above (on a 12-month term or longer) includes a free domain for the first year — usually a .com, .in, .online, .store or similar. You only pay the standard renewal in year two. For a new site this is the cheapest way to get both hosting and a domain.",
    },
    {
        q: "Why is the domain renewal price higher than registration?",
        a: "The first-year price is a promotional hook; the renewal is the domain's real long-term cost, set largely by the registry (Verisign for .com, NIXI for .in). This is normal across all registrars. The smart play is to pick your extension based on the renewal price and register for multiple years upfront when a domain matters.",
    },
    {
        q: "Is it cheaper to buy the domain and hosting together?",
        a: "Almost always yes for a new project. Buying a Hostinger plan (Premium+) gets you the domain free for year one plus hosting, SSL and email — cheaper than buying a domain and hosting separately. If you only need a domain (no site yet), register just the domain and point it later.",
    },
    {
        q: "Should I choose .com or .in for an Indian website?",
        a: "Pick .com if you want the most trusted, globally-recognised extension and plan to grow beyond India. Pick .in (or .co.in) if you're targeting an Indian audience, want the lower price, and the .com version is already taken. Many Indian businesses register both and redirect one to the other.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger Domain Price in India 2026: .com, .in & .store Real Costs",
        description:
            "Real Hostinger domain prices in India for 2026 — registration vs renewal for .com, .in, .store and .online, the free-domain-with-hosting trick, and how to register a domain cheaply.",
        image: "https://mohitkoli.in/assets/blog/hostinger-domain-price-india-2026.svg",
        datePublished: "2026-07-17T00:00:00.000Z",
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
        keywords: "hostinger domain price, domain price in india, .in domain price, .com domain price india, hostinger free domain, domain renewal price",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Domain Price in India 2026", item: CANONICAL },
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

// [extension, first-year (sale), renewal/yr, best for]
const DOMAINS: [string, string, string, string][] = [
    [".com", "~₹149–₹749", "~₹1,199", "The default — trusted worldwide, best for brands"],
    [".in", "~₹99–₹299", "~₹699", "Indian audience, lowest cost, local trust signal"],
    [".co.in", "~₹99–₹399", "~₹699", "Indian businesses when .in is taken"],
    [".online", "~₹99–₹299", "~₹2,299", "Cheap year-one, but check the high renewal"],
    [".store", "~₹199–₹399", "~₹3,499", "Ecommerce vibe — renewal is steep, weigh it"],
    [".xyz", "~₹99–₹199", "~₹899", "Startups, side-projects, cheap experiments"],
    [".tech", "~₹399–₹799", "~₹3,499", "Dev / SaaS brands (pricey to renew)"],
    [".shop", "~₹99–₹399", "~₹2,799", "Stores wanting a keyword-rich domain"],
];

export default function HostingerDomainPriceIndia() {
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
                            <li className="text-gray-300">Hostinger Domain Price India</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Domain Pricing · Updated July 17, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hostinger Domain Price in India (2026): .com, .in &amp; .store — Real Costs
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Every domain seller shows you a tiny first-year price and hides the number that actually matters:
                        <strong className="text-white"> the renewal</strong>. This guide lists the real registration <em>and</em> renewal
                        prices for the extensions Indians actually buy — .com, .in, .store, .online — plus the one trick that gets your
                        domain <strong className="text-white">free for the first year</strong>. Prices checked July 2026 with real INR figures.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: links on this page use my Hostinger referral code — you get an extra discount and I earn a small
                        commission at no extra cost to you. Domain prices rotate with sales; confirm the live number before you buy.
                    </p>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/hostinger-domain-price-india-2026.svg"
                            alt="Hostinger domain price in India 2026 — .com, .in, .store registration and renewal"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 30-second answer */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>🇮🇳 <strong className="text-white">Cheapest good option:</strong> a <strong>.in</strong> domain — about ₹99–₹299 year one, ~₹699 renewal.</li>
                            <li>🌐 <strong className="text-white">Most trusted:</strong> a <strong>.com</strong> — ~₹149–₹749 year one, ~₹1,199 renewal.</li>
                            <li>🎁 <strong className="text-white">Free for year one:</strong> buy any Hostinger <strong>Premium+ plan (12 months or longer)</strong> — the domain is included.</li>
                            <li>⚠️ <strong className="text-white">Watch out:</strong> .store / .online / .tech look cheap year one but renew at ₹2,300–₹3,500. Judge on the renewal.</li>
                        </ul>
                    </section>

                    {/* Full price table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger domain prices in India (2026)</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Here is the full extension price sheet. The gap between the two number columns is the whole point — a domain that
                            costs ₹199 today can cost ₹3,499 next year. Sort your choice by the <strong className="text-white">renewal</strong> column.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Extension</th>
                                        <th className="p-4">1st year (sale)</th>
                                        <th className="p-4">Renewal / year</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {DOMAINS.map(([ext, first, renew, best], i) => (
                                        <tr key={ext} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{ext}</td>
                                            <td className="p-4 text-green-400">{first}</td>
                                            <td className="p-4">{renew}</td>
                                            <td className="p-4">{best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-3">Figures are typical July 2026 India prices in INR and move with Hostinger&apos;s sales. Always confirm on the live checkout.</p>
                    </section>

                    {/* Free domain trick */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The free-domain trick (how to pay ₹0 in year one)</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            If you need a website anyway, do not buy the domain separately. Every Hostinger plan from{" "}
                            <strong className="text-white">Premium and above, on a 12-month term or longer, includes a free domain for the first year</strong>
                            {" "}— along with free SSL and email. You get hosting + domain for less than the price of some domains alone.
                        </p>
                        <div className="rounded-2xl border border-green-500/30 bg-green-500/[0.06] p-6">
                            <h3 className="text-lg font-semibold text-white mb-3">What &quot;free domain&quot; actually covers</h3>
                            <ul className="space-y-2 text-gray-300 leading-7 text-sm">
                                <li>✅ First-year registration of an eligible extension (.com, .in, .online, .store and more)</li>
                                <li>✅ Free WHOIS privacy so your personal details stay hidden</li>
                                <li>✅ Free DNS management and unlimited subdomains</li>
                                <li>⚠️ Year-two renewal is the standard price from the table above — budget for it</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 leading-8 mt-6">
                            Not sure which plan? I break down every tier in{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger Plans &amp; Pricing in India 2026
                            </Link>{" "}— Premium (from ~₹139/mo) is where the free domain starts.
                        </p>
                    </section>

                    {/* Mid-article CTA */}
                    <aside className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-gray-300 leading-7 mb-4 sm:mb-0">
                            Going the bundle route? A Premium+ plan makes the first-year domain ₹0 — it&apos;s worth
                            checking which extensions qualify on the live checkout, where an extra referral discount
                            can apply as well.
                        </p>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block flex-shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40"
                        >
                            See free-domain plans →
                        </a>
                    </aside>

                    {/* .com vs .in */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">.com vs .in — which should you pick?</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Choose .com if…</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>• You want the most recognised, most-trusted extension</li>
                                    <li>• You may sell or grow beyond India someday</li>
                                    <li>• It&apos;s a personal brand or product name</li>
                                    <li>• You&apos;re fine paying ~₹1,199/yr to renew</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Choose .in / .co.in if…</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>• Your customers are in India</li>
                                    <li>• You want the lowest price (~₹699/yr renewal)</li>
                                    <li>• The .com you wanted is already taken</li>
                                    <li>• You want an instant &quot;local business&quot; signal</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">Pro tip many Indian brands use: register both .com and .in, then 301-redirect one to the other so nobody can grab your name.</p>
                    </section>

                    {/* How to register */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">How to register a domain in India (5 steps)</h2>
                        <ol className="space-y-4">
                            {[
                                ["Search your name", "Use the domain checker to see which extensions are free. If your exact .com is taken, try a .in or add a short prefix/suffix rather than a random hyphenated name."],
                                ["Compare the renewal, not the sale", "Open the price table above. A ₹199 .store that renews at ₹3,499 is not cheap. Decide on the long-term number."],
                                ["Register for 2+ years if it matters", "For a real business, register multiple years upfront — you lock the price and never risk losing the name to an expiry slip."],
                                ["Turn on free WHOIS privacy", "Hostinger includes it free — keep your name, email and phone off the public WHOIS record."],
                                ["Bundle hosting to get year one free", "If you need a site, buy a Premium+ plan and claim the domain free instead of paying for it separately."],
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
                            <h2 className="text-3xl font-bold text-white mb-3">Check live domain prices (with my discount)</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Search your name, compare .com vs .in, and grab a Premium+ plan if you want the domain free for year one.
                                The link applies the extra referral discount automatically.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                Search Domains &amp; See Live Prices →
                            </a>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger domain prices in India</h2>
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
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing in India 2026 — which plan to buy</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — hosting &amp; domain renewal rates together</Link></li>
                            <li><Link href="/blog/godaddy-renewal-price-increase-india" className="hover:text-primary-300 underline underline-offset-4">GoDaddy Renewal Price Shock — compare before you renew a domain there</Link></li>
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — the discount-stacking steps</Link></li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">7 Best Web Hosting Services in India (2026)</Link></li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost — 2026 India comparison</Link></li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title="Hostinger Domain Price in India 2026: .com, .in & .store Real Costs" />
                    </div>
                </article>
            </main>
        </>
    );
}
