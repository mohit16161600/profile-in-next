import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/shopify-vs-woocommerce";
const IMAGE = "https://mohitkoli.in/assets/blog/shopify-vs-woocommerce.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Shopify vs WooCommerce India 2026: The Real Monthly Cost",
    description:
        "Shopify Basic is ₹1,994/mo — but Shopify Payments does not work in India, so add 2% on every order. Full cost breakdown against WooCommerce for Indian sellers.",
    keywords: [
        "shopify vs woocommerce", "shopify vs woocommerce india", "shopify price india",
        "woocommerce cost india", "shopify transaction fee india", "shopify payments india",
        "best ecommerce platform india", "woocommerce vs shopify 2026", "cheapest way to start online store india",
        "shopify alternatives india", "ecommerce website cost india", "online store monthly cost",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Shopify vs WooCommerce India 2026: The Real Monthly Cost",
        description: "Shopify Payments does not work in India — which changes the entire cost comparison.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Shopify vs WooCommerce cost comparison for India" }],
    },
    twitter: {
        card: "summary_large_image", title: "Shopify vs WooCommerce India 2026: The Real Monthly Cost",
        description: "The 2% Indian sellers pay that most comparisons never mention.", images: [IMAGE],
    },
};

const FAQ = [
    { q: "Is Shopify or WooCommerce cheaper in India?", a: "WooCommerce, substantially, if you are willing to manage a WordPress site. WooCommerce itself is free and needs only hosting — from a few hundred rupees a month. Shopify Basic is ₹1,994/month billed monthly or ₹1,499 billed annually, before the transaction fee, apps and GST. For a small store the realistic gap is tens of thousands of rupees a year." },
    { q: "Why does Shopify cost more in India specifically?", a: "Because Shopify Payments is not available to Indian merchants. Everyone here uses a third-party payment gateway, which means Shopify's own transaction fee applies on top of whatever the gateway charges. On the Basic plan that is an extra 2% of every order — a cost sellers in supported countries simply do not pay." },
    { q: "What does a Shopify store really cost per month in India?", a: "The subscription is only the start. Add the transaction fee, the payment gateway's own charge, GST, paid apps and often a paid theme, and a working Basic store commonly lands somewhere between ₹6,000 and ₹15,000 a month depending on order volume and how many apps you install." },
    { q: "Is WooCommerce really free?", a: "The plugin is genuinely free and open source. The costs are elsewhere: hosting, a domain, an SSL certificate (usually free now), possibly a premium theme, and paid extensions for things like advanced shipping or subscriptions. Your time is the largest hidden cost — updates, security and backups are yours to manage." },
    { q: "Which is better for a beginner?", a: "Shopify, without much doubt. You can have a working store the same day with no technical knowledge, and hosting, security and updates are not your problem. WooCommerce asks you to understand WordPress first. The question is whether that convenience is worth several thousand rupees a month once you know your order volume." },
    { q: "Can I move from Shopify to WooCommerce later?", a: "Yes, and plenty of sellers do once subscription plus transaction fees start outweighing the convenience. Products, customers and orders can be exported and imported. It is a real project, not a click — budget a weekend and expect to rebuild the theme rather than port it." },
    { q: "Does WooCommerce need special hosting?", a: "It needs hosting that can handle a database-driven site under load, which entry-level shared hosting can do for a small catalogue. As orders grow, move up to a plan with more RAM and NVMe storage — a busy WooCommerce store is far heavier than a blog on the same platform." },
    { q: "Which is better for SEO?", a: "WooCommerce, marginally, because you control the whole site structure, URLs and technical setup, and you get WordPress's SEO plugin ecosystem. Shopify's SEO is competent but more constrained — URL structures are partly fixed. For most stores this difference matters far less than product pages and content quality." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Shopify vs WooCommerce India 2026: The Real Monthly Cost",
        description: "Full cost breakdown for Indian sellers, including the transaction fee Shopify Payments' absence creates.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "shopify vs woocommerce, shopify price india, shopify transaction fee india, best ecommerce platform india",
        articleSection: "Ecommerce", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Shopify vs WooCommerce", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function ShopifyVsWooCommerce() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Shopify vs WooCommerce</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Ecommerce</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Shopify vs WooCommerce in India: The 2% Nobody Mentions
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Every comparison quotes Shopify at ₹1,994/month. Almost none mention that Shopify Payments
                            does not operate in India — so Indian sellers pay a transaction fee on every single order
                            that sellers elsewhere do not. That one fact changes the whole calculation.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>11 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/shopify-vs-woocommerce.svg" alt="Shopify and WooCommerce cost compared for Indian sellers" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Pricing checked in
                        August 2026. Shopify plan prices and fee structures change — confirm on their India pricing page
                        before committing.
                    </p>

                    <section className="mb-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The India-specific catch</h2>
                        <p className="text-gray-300 leading-8">
                            <strong className="text-white">Shopify Payments is not available in India.</strong> That means every
                            Indian merchant uses a third-party gateway — Razorpay, PayU, Cashfree — and Shopify charges
                            its own transaction fee on top, because you are not using their payment product. On the Basic
                            plan that is <strong className="text-white">2% of every order</strong>, in addition to whatever your
                            gateway charges. A store doing ₹5 lakh a month pays ₹10,000 in Shopify transaction fees alone,
                            before the subscription.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Cost side by side</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Cost</th><th className="p-4">Shopify Basic</th><th className="p-4">WooCommerce</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Platform subscription", "₹1,994/mo monthly · ₹1,499/mo annual", "₹0 — free plugin"],
                                        ["Hosting", "Included", "From ~₹149–₹599/mo"],
                                        ["Domain", "Extra", "Often free year 1 with hosting"],
                                        ["SSL", "Included", "Free with most hosts"],
                                        ["Shopify transaction fee", "2% of every order", "₹0"],
                                        ["Payment gateway fee", "Yes (third-party)", "Yes (third-party)"],
                                        ["Theme", "Free or ~₹15,000 one-off", "Free or ~₹5,000 one-off"],
                                        ["Apps / plugins", "Often ₹1,000–₹5,000/mo", "Many free; some paid"],
                                        ["Your time", "Minimal", "Updates, backups, security"],
                                    ].map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-medium text-white">{r[0]}</td>
                                            <td className="p-4">{r[1]}</td>
                                            <td className={`p-4 ${r[2] === "₹0" || r[2] === "₹0 — free plugin" ? "text-emerald-400" : ""}`}>{r[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Once GST, gateway charges, apps and a theme are included, a working Shopify Basic store in
                            India commonly costs <strong className="text-white">₹6,000 to ₹15,000 a month</strong>. An
                            equivalent WooCommerce store on decent hosting runs a few hundred to a couple of thousand.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Shopify plan pricing in India</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Plan</th><th className="p-4">Annual billing</th><th className="p-4">Monthly billing</th><th className="p-4">Best for</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Basic</td><td className="p-4">₹1,499/mo</td><td className="p-4">₹1,994/mo</td><td className="p-4">New stores, low order volume</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Shopify</td><td className="p-4">—</td><td className="p-4">₹7,447/mo</td><td className="p-4">Growing stores; lower transaction fee</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Advanced</td><td className="p-4">—</td><td className="p-4">₹30,164/mo</td><td className="p-4">High volume; lowest transaction fee</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Worth noting how the upgrade logic works: the higher plans reduce the transaction fee, so at
                            enough volume the more expensive plan is genuinely cheaper. Work out your monthly revenue
                            before assuming Basic is the economical choice.
                        </p>
                        <p className="mt-3 text-sm text-gray-500">[AFFILIATE_LINK: SHOPIFY]</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Where the break-even sits</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Rather than argue about which is &ldquo;better&rdquo;, work out where the money crosses over.
                            Roughly:
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">Under ~₹1 lakh/month revenue:</strong> Shopify&apos;s fixed costs dominate. WooCommerce on cheap hosting is dramatically cheaper — if you can run it.</li>
                            <li><strong className="text-white">₹1–5 lakh/month:</strong> the convenience genuinely starts earning its keep. Time you would spend on maintenance is worth more than the subscription.</li>
                            <li><strong className="text-white">Above ₹5 lakh/month:</strong> the 2% transaction fee becomes the dominant cost. At this point either upgrade the plan to reduce it, or reconsider the platform entirely.</li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            The honest summary: Shopify sells you time, and time is worth different amounts to different
                            people. If you have more time than money, WooCommerce. If the reverse, Shopify.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What WooCommerce actually needs</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            WooCommerce is free; running it is not effortless. A store needs hosting that can handle a
                            database under load — a busy WooCommerce site is much heavier than a blog on the same
                            platform. Entry shared hosting works for a small catalogue; past that you want more RAM and
                            NVMe storage.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Hosting for a WooCommerce store</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                Shared plans from ₹149/mo handle a small catalogue fine. Once orders are steady, the{" "}
                                <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Cloud tier from ₹599/mo
                                </Link>{" "}
                                gives dedicated CPU and RAM so checkout does not slow down during a sale — which is the
                                one moment a slow store actually costs you money. Free domain for year one, free SSL,
                                free migration and 30 days to change your mind.
                            </p>
                            <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener"
                               className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                                Check Hosting for Your Store →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which should you choose?</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                ["Choose Shopify", "You want to sell this week, you are not technical, and your margins can absorb a few thousand rupees a month plus 2% per order. The speed to launch is real and worth paying for."],
                                ["Choose WooCommerce", "You are comfortable with WordPress, your volume makes the fees hurt, or you want full control of the site and its SEO. Budget your own time as a real cost."],
                                ["Start Shopify, move later", "Perfectly reasonable. Validate the business on Shopify, migrate to WooCommerce once fees outgrow convenience. Plenty of stores follow this path."],
                                ["Neither yet", "If you have not made a sale anywhere, sell on a marketplace or social first. A store is a distribution problem, not a platform problem."],
                            ].map(([who, body]) => (
                                <div key={who} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">{who}</h3>
                                    <p className="text-sm text-gray-300 leading-7">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Shopify vs WooCommerce in India</h2>
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
                            <li><Link href="/blog/shopify-review-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Shopify review for Indian sellers</Link> — the platform in detail.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting for stores</Link> — when shared hosting stops coping.</li>
                            <li><Link href="/blog/react-se-ecommerce-website-kaise-banaye" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Building an ecommerce site with React</Link> — the custom-build route.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this comparison</h2>
                        <ShareButtons url={CANONICAL} title="Shopify vs WooCommerce India 2026: The Real Monthly Cost" />
                    </div>
                </article>
            </main>
        </>
    );
}
