import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const REFERRAL_PRICING_URL = "https://www.hostinger.com/in/pricing?REFERRALCODE=mohitkoli";
const REFERRAL_VPS_URL = "https://www.hostinger.com/in/vps-hosting?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/shopify-vs-woocommerce";
const IMAGE = "https://mohitkoli.in/assets/blog/shopify-vs-woocommerce.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";
const MODIFIED = "2026-09-07T00:00:00.000Z";

const HOSTING_PLANS = [
    { name: "Single", sale: 69, renew: 289, spec: "1 site · 10 GB SSD", fit: "A test store or a single small catalogue" },
    { name: "Premium", sale: 149, renew: 449, spec: "3 sites · 20 GB SSD", fit: "The realistic WooCommerce starting point" },
    { name: "Unlimited", sale: 249, renew: 649, spec: "Unlimited sites · 50 GB NVMe", fit: "A growing catalogue on NVMe storage" },
    { name: "Cloud Startup", sale: 599, renew: 1599, spec: "Unlimited sites · 100 GB NVMe", fit: "Dedicated resources so checkout survives a sale" },
    { name: "KVM 1", sale: 599, renew: 999, spec: "1 vCPU · 4 GB RAM · 50 GB NVMe", fit: "Root access, first step off shared hosting" },
    { name: "KVM 2", sale: 799, renew: 1199, spec: "2 vCPU · 8 GB RAM · 100 GB NVMe", fit: "A busy store with sustained daily traffic" },
    { name: "KVM 4", sale: 1099, renew: 2399, spec: "4 vCPU · 16 GB RAM · 200 GB NVMe", fit: "Heavy catalogue, many concurrent checkouts" },
];

export const metadata: Metadata = {
    title: "Shopify vs WooCommerce India 2026: ₹1,769 vs ₹176/mo",
    description:
        "Shopify Basic is ₹1,769/mo with GST plus 2.36% per order — Shopify Payments still is not in India. WooCommerce: ₹176/mo hosting. The full 2026 math.",
    keywords: [
        "shopify vs woocommerce", "shopify vs woocommerce india", "shopify price india",
        "woocommerce cost india", "shopify transaction fee india", "shopify payments india",
        "best ecommerce platform india", "woocommerce vs shopify 2026", "cheapest way to start online store india",
        "shopify alternatives india", "ecommerce website cost india", "online store monthly cost",
        "shopify pricing india 2026", "how much does shopify cost per month in india",
        "woocommerce india setup cost", "shopify vs woocommerce which is cheaper",
        "shopify grow plan india price", "shopify plus price india", "does shopify charge gst in india",
        "woocommerce gst invoice india", "shopify vs woocommerce seo",
        "shopify vs woocommerce speed core web vitals", "woocommerce hosting requirements india",
        "does woocommerce need vps", "migrate shopify to woocommerce", "cash on delivery woocommerce india",
        "rto cost cod ecommerce india", "razorpay vs cashfree vs payu fees",
        "best ecommerce platform india 2026", "shopify vs woocommerce for d2c brands india",
        "shopify vs woocommerce dropshipping india", "is shopify worth it for small business india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Shopify vs WooCommerce India 2026: ₹1,769 vs ₹176/mo",
        description: "Shopify Payments does not work in India — which changes the entire cost comparison. All four plans priced with 18% GST.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: MODIFIED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Shopify vs WooCommerce cost comparison for India" }],
    },
    twitter: {
        card: "summary_large_image", title: "Shopify vs WooCommerce India 2026: ₹1,769 vs ₹176/mo",
        description: "The 2.36% Indian sellers pay that most comparisons never mention.", images: [IMAGE],
    },
};

const FAQ = [
    { q: "Is Shopify or WooCommerce cheaper in India?", a: "WooCommerce, substantially, if you are willing to manage a WordPress site. WooCommerce itself is free and needs only hosting — from about ₹176 a month with GST. Shopify Basic is ₹1,769/month GST-inclusive on annual billing or ₹2,353 billed monthly, before the transaction fee, apps and gateway charges. For a small store the realistic gap is tens of thousands of rupees a year." },
    { q: "Is Shopify Payments available in India in 2026?", a: "No. As of September 2026 India does not appear on Shopify's own list of supported Shopify Payments countries, which covers markets such as the US, UK, Singapore and the UAE. Every Indian store therefore checks out through a third-party gateway like Razorpay, PayU or Cashfree — and that is exactly what triggers Shopify's own transaction fee." },
    { q: "How much does Shopify cost per month in India with GST?", a: "Shopify Basic works out to ₹1,769 a month once 18% GST is added to the ₹1,499 annual-billed price, or ₹2,353 a month if you pay monthly. Grow is ₹6,607 annual-billed, Advanced ₹26,762, and Plus starts near ₹2,06,500. Those are subscription figures only — the transaction fee, your gateway's charge and any paid apps sit on top." },
    { q: "Does Shopify charge GST in India?", a: "Yes. Indian merchants pay 18% GST on the Shopify subscription and on Shopify's transaction fee. That turns the headline ₹1,499 Basic price into ₹1,769 and the 2% order surcharge into an effective 2.36%. Your payment gateway's fee and your hosting bill carry the same 18%, so it is safest to budget every platform cost GST-inclusive." },
    { q: "What is the difference between Shopify Basic and Shopify Grow?", a: "Price and transaction fee, mostly. Basic is ₹1,769/month GST-inclusive with a 2% third-party payment fee; Grow is ₹6,607 with 1%, plus additional staff accounts and lower-friction shipping rates. Grow costs ₹4,838 more each month but saves 1.18% of sales after GST, so it starts paying for itself above roughly ₹4.1 lakh of monthly revenue." },
    { q: "How much does Shopify Plus cost in India?", a: "Shopify's India pricing page lists Plus from ₹1,75,000 a month, which is about ₹2,06,500 with 18% GST added. Plus carries the lowest third-party payment fee on the ladder at 0.2%, roughly 0.236% after GST. It is priced for brands where that fee difference alone justifies the jump, which realistically means several crore in annual sales." },
    { q: "Why does Shopify cost more in India specifically?", a: "Because Shopify Payments is not available to Indian merchants. Everyone here uses a third-party payment gateway, which means Shopify's own transaction fee applies on top of whatever the gateway charges. On the Basic plan that is an extra 2% of every order — 2.36% with GST — a cost sellers in supported countries simply do not pay." },
    { q: "Can I use Razorpay, PayU or Cashfree with Shopify in India?", a: "Yes, all three integrate with Shopify and you will need one of them, because Shopify Payments does not operate in India. The catch is that using any third-party gateway is precisely what triggers Shopify's surcharge — 2% on Basic, 1% on Grow, 0.6% on Advanced. Switching gateways changes your gateway rate but never removes Shopify's cut." },
    { q: "What does a Shopify store really cost per month in India?", a: "The subscription is only the start. Add Shopify's transaction fee, the payment gateway's own charge, 18% GST on all of it, paid apps including a GST invoicing app, and often a paid theme. At 10 orders a day and ₹1,500 average order value, platform fees alone run past ₹12,000 a month before you have paid for a single app." },
    { q: "Can I offer Cash on Delivery on WooCommerce?", a: "Yes. Cash on delivery ships in WooCommerce core as a built-in payment method, so you enable it in a couple of clicks with no plugin at all. Free and paid extensions add the controls Indian sellers actually need — restricting COD by pincode, cart value, product or shipping zone — and Indian courier aggregators publish their own WooCommerce plugins for COD reconciliation." },
    { q: "Does WooCommerce generate GST-compliant invoices?", a: "Not in core, but several plugins do. They add your GSTIN, HSN or SAC codes and the correct CGST plus SGST split for intra-state orders versus IGST for inter-state ones. Worth knowing that Shopify does not calculate Indian GST natively either — most Indian Shopify sellers install a paid GST invoicing app, which is a recurring cost that belongs in any honest comparison." },
    { q: "Is WooCommerce really free?", a: "The plugin is genuinely free and open source — WooCommerce.com offers the core download at no cost. The money goes elsewhere: hosting, a domain, possibly a premium theme, and paid extensions for advanced shipping or subscriptions. Your time is the largest hidden cost, because updates, security patching and backups become your responsibility rather than a vendor's." },
    { q: "Do I need a VPS for WooCommerce or is shared hosting enough?", a: "Shared hosting is genuinely fine for a modest catalogue and a few hundred daily visitors — Hostinger Premium at ₹149/month or Unlimited at ₹249/month before GST covers that comfortably. Move to Cloud Startup at ₹599 or a KVM VPS when checkout starts timing out under sale traffic, because cart and checkout pages cannot be served from page cache." },
    { q: "Which is faster, Shopify or WooCommerce?", a: "Shopify is faster out of the box, because Shopify owns and tunes the entire stack and there is very little you can misconfigure. WooCommerce has the higher ceiling but you have to reach it: NVMe storage, PHP 8.3, Redis object caching, an image CDN and a lean theme. A well-configured ₹249 plan will beat a badly configured expensive one." },
    { q: "Which is better for a beginner?", a: "Shopify, without much doubt. You can have a working store the same day with no technical knowledge, and hosting, security and updates are not your problem. WooCommerce asks you to understand WordPress first. The real question is whether that convenience is worth several thousand rupees a month once you actually know your order volume." },
    { q: "At how many orders a day does WooCommerce become cheaper than Shopify?", a: "On pure platform cost, from the very first order. At 3 orders a day and ₹1,500 average order value, Shopify Basic runs about ₹4,955 a month against roughly ₹176 for WooCommerce hosting. At 30 orders a day it is about ₹33,600 against ₹707. The real question is not when it gets cheaper but when the saving beats your own maintenance time." },
    { q: "Can I move from Shopify to WooCommerce later?", a: "Yes, and plenty of sellers do once subscription plus transaction fees start outweighing the convenience. Products, variants, customers and order history export and import cleanly. Themes, apps, discount codes and reviews do not port at all. Budget a weekend for a small catalogue and four to eight weeks for a real brand with apps and subscriptions." },
    { q: "Does WooCommerce need special hosting?", a: "It needs hosting that can handle a database-driven site under load, because cart, checkout and account pages must be excluded from page cache and hit PHP and MySQL directly on every request. Entry-level shared hosting copes with a small catalogue. As orders grow, move to a plan with more RAM, NVMe storage and object caching." },
    { q: "Which is better for SEO?", a: "WooCommerce, because you control URLs, site structure, faceted-filter indexation and the whole WordPress SEO plugin ecosystem. Shopify locks product URLs under /products/ and categories under /collections/, though it does now let you edit robots.txt through robots.txt.liquid. For most stores this difference matters far less than product pages and genuinely useful content." },
];

const MIGRATION_STEPS = [
    { name: "Export everything from Shopify", text: "Export products with variants, customers and order history as CSV from the Shopify admin. Export product reviews separately from whichever review app holds them, because they live outside Shopify's own export." },
    { name: "Set up WordPress hosting and install WooCommerce", text: "Provision hosting sized for a store rather than a blog, install WordPress and add the free WooCommerce plugin, then configure your currency, tax rates and shipping zones for India before importing anything." },
    { name: "Import the catalogue", text: "Use a free Shopify importer plugin, WooCommerce's built-in CSV importer, or a paid migration service to bring products, variants, customers and orders across. Import into a staging site first, not the live domain." },
    { name: "Rebuild the theme and replace every app", text: "The Shopify theme cannot be ported. Rebuild it on a lean WordPress theme and find a WordPress equivalent for each Shopify app you rely on, including GST invoicing, reviews and any subscription logic." },
    { name: "Build the 301 redirect map before launch", text: "Shopify's /products/slug and /collections/slug become WooCommerce's /product/slug and /product-category/slug. Map every ranking URL to its new destination and load the redirects before you switch DNS, or you lose the rankings you already have." },
    { name: "Cut over and keep Shopify running for two weeks", text: "Point DNS at the new store, place real test orders through your live gateway, and keep the Shopify subscription active for a fortnight so you can reconcile orders and re-export anything you missed." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Shopify vs WooCommerce India 2026: The Real Monthly Cost",
        description: "Full cost breakdown for Indian sellers, including 18% GST, the transaction fee Shopify Payments' absence creates, and what WooCommerce hosting actually costs.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: MODIFIED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "shopify vs woocommerce india, shopify pricing india 2026, shopify transaction fee india, woocommerce cost india, does shopify charge gst in india",
        articleSection: "Ecommerce", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "Product",
        "@id": CANONICAL + "#hosting",
        name: "Hostinger Hosting for WooCommerce (India)",
        description: "Shared and KVM VPS hosting sold in India, used here as the WooCommerce hosting recommendation: Single, Premium, Unlimited and Cloud Startup on shared, plus KVM 1, KVM 2 and KVM 4 on VPS. NVMe storage on the higher tiers, AMD EPYC hardware and a 30-day money-back window.",
        brand: { "@type": "Brand", name: "Hostinger" },
        category: "Web Hosting",
        image: IMAGE,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "69",
            highPrice: "1099",
            offerCount: HOSTING_PLANS.length,
            availability: "https://schema.org/InStock",
            url: CANONICAL,
            offers: HOSTING_PLANS.map((p) => ({
                "@type": "Offer",
                name: `Hostinger ${p.name}`,
                price: String(p.sale),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: CANONICAL,
            })),
        },
        review: {
            "@type": "Review",
            name: "Hostinger as WooCommerce hosting for an Indian store",
            reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5", worstRating: "1" },
            author: { "@type": "Person", name: "Mohit Koli" },
            datePublished: MODIFIED,
            reviewBody: "The best price-to-specification fit for a new Indian WooCommerce store, with NVMe storage from the Unlimited tier upward and a clean upgrade path from shared hosting into KVM VPS when checkout traffic outgrows shared resources. The honest reservation is the renewal cliff — the promotional rate holds only for the term you prepay, and shared plans roughly triple on renewal, so the four-year upfront commitment is doing a lot of the work in the headline price.",
        },
    },
    {
        "@context": "https://schema.org", "@type": "HowTo",
        name: "How to migrate a Shopify store to WooCommerce",
        description: "The order of operations for moving an Indian Shopify store to WooCommerce without losing rankings, orders or customer records.",
        totalTime: "P14D",
        step: MIGRATION_STEPS.map((s, i) => ({
            "@type": "HowToStep", position: i + 1, name: s.name, text: s.text, url: `${CANONICAL}#migration`,
        })),
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

const linkClass = "text-primary-400 hover:text-primary-300 underline underline-offset-4";
const ctaClass = "inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]";

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
                            Every comparison quotes Shopify at ₹1,994/month. Almost none add the 18% GST that makes it
                            ₹2,353, and almost none mention that Shopify Payments does not operate in India — so Indian
                            sellers pay a surcharge on every single order that sellers in the US, UK or Singapore do not.
                            Those two facts change the whole calculation.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>Updated September 7, 2026</span><span>•</span><span>15 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/shopify-vs-woocommerce.svg" alt="Shopify and WooCommerce cost compared for Indian sellers" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Shopify plan prices,
                        the Shopify Payments country list and Razorpay&apos;s rate card were checked on 7 September 2026
                        against each company&apos;s own pages. Hosting prices are Hostinger India&apos;s current promotional
                        rates. All of these change — confirm before committing money.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The short answer</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Shopify Basic costs ₹1,769 a month in India</strong> once 18% GST
                            is added to the ₹1,499 annual-billed price — ₹2,353 if you pay monthly — plus an effective
                            2.36% of every order, because Shopify Payments is not available here.{" "}
                            <strong className="text-white">A WooCommerce store starts at about ₹176 a month</strong>, which
                            is ₹149 hosting plus GST, with the plugin itself genuinely free and no platform cut on any order.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            You still pay a payment gateway on both. The only structural difference is Shopify&apos;s own
                            surcharge on top — and the only thing you buy with it is not having to run a server.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href={REFERRAL_PRICING_URL} target="_blank" rel="nofollow sponsored noopener" className={ctaClass}>
                                See Current Hosting Plans →
                            </a>
                            <Link href="/tools/hosting-cost-calculator" className="inline-block border border-white/15 hover:border-primary-400/50 text-gray-200 font-semibold px-8 py-4 rounded-xl transition-all">
                                Run your own numbers
                            </Link>
                        </div>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The India-specific catch</h2>
                        <p className="text-gray-300 leading-8">
                            <strong className="text-white">Shopify Payments is not available in India.</strong> Shopify
                            publishes the supported-country list itself, and as of September 2026 it runs from Australia
                            through the United States without India appearing anywhere on it. Every Indian merchant
                            therefore uses a third-party gateway — Razorpay, PayU, Cashfree — and Shopify charges its own
                            transaction fee on top, precisely because you are not using their payment product. On the Basic
                            plan that is <strong className="text-white">2% of every order, 2.36% once GST is added</strong>,
                            in addition to whatever your gateway charges. A store doing ₹5 lakh a month pays ₹11,800 in
                            Shopify surcharge alone, before the subscription and before the gateway.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Shopify pricing in India 2026: all four plans, with GST</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Shopify Basic costs ₹1,769 a month in India once 18% GST is added to the ₹1,499 annual-billed
                            price, and ₹2,353 a month if you pay monthly. Annual billing saves about 25% on every tier, but
                            you pay twelve months upfront to get it. Here is the full lineup as it appears on Shopify&apos;s
                            India pricing page, checked 7 September 2026.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Annual ₹/mo</th>
                                        <th className="p-4">Monthly ₹/mo</th>
                                        <th className="p-4">Annual + 18% GST</th>
                                        <th className="p-4">3rd-party payment fee</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Basic", "₹1,499", "₹1,994", "₹1,769", "2%"],
                                        ["Grow", "₹5,599", "₹7,447", "₹6,607", "1%"],
                                        ["Advanced", "₹22,680", "₹30,164", "₹26,762", "0.6%"],
                                        ["Plus", "From ₹1,75,000", "From ₹1,75,000", "≈ ₹2,06,500", "0.2%"],
                                    ].map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">{r[0]}</td>
                                            <td className="p-4">{r[1]}</td>
                                            <td className="p-4">{r[2]}</td>
                                            <td className="p-4 text-amber-300">{r[3]}</td>
                                            <td className="p-4">{r[4]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Two corrections worth making, because a lot of Indian comparisons still get them wrong. The
                            middle plan is called <strong className="text-white">Grow</strong>, not &ldquo;Shopify&rdquo; —
                            that rename happened and most articles never caught up. And Grow and Advanced <em>do</em> have
                            annual billing at a genuine discount; pages that show a dash in that column are simply out of
                            date. Plus exists too, from ₹1,75,000 a month, and it is the only tier with a 0.2% third-party fee.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Shopify currently runs a 3-day free trial followed by ₹20/month for three months. That offer is
                            genuinely useful for validating a product, but it distorts every &ldquo;I started a store for
                            ₹20&rdquo; post you will read — month four is ₹1,769 whether or not you have made a sale. There
                            is no Starter tier on the India pricing page as of September 2026, whatever third-party
                            listicles claim.
                        </p>
                        <p className="mt-3 text-sm text-gray-500">[AFFILIATE_LINK: SHOPIFY]</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            How much is Shopify&apos;s transaction fee in India? 2% on Basic, 1% on Grow, 0.6% on Advanced
                        </h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            The ladder is 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. Add 18% GST and the
                            numbers you actually pay are 2.36%, 1.18%, 0.708% and 0.236%. This fee applies to every Indian
                            merchant and almost nobody else: it is charged when you use a third-party payment provider, and
                            because Shopify Payments does not operate in India, there is no version of an Indian Shopify
                            store that escapes it. A seller in the UK on Shopify Payments pays 0% here.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Put a real number on it. A store turning over ₹5,00,000 a month pays{" "}
                            <strong className="text-white">₹11,800 in Shopify surcharge on Basic</strong>, ₹5,900 on Grow and
                            ₹3,540 on Advanced — before the subscription, and before the payment gateway takes its own cut.
                            That is the single largest line item most Indian Shopify sellers never budget for, because it
                            does not appear on the pricing page next to the plan price.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The crossover follows directly. Grow costs ₹4,838 a month more than Basic on annual billing with
                            GST (₹6,607 − ₹1,769), and saves 1.18% of revenue. Divide: ₹4,838 ÷ 0.0118 ≈{" "}
                            <strong className="text-white">₹4.1 lakh a month</strong>. Above that, Grow is cheaper than
                            Basic despite costing nearly four times as much. Advanced costs ₹20,155 more than Grow and saves
                            a further 0.472%, so ₹20,155 ÷ 0.00472 ≈ <strong className="text-white">₹42.7 lakh a month</strong>.
                            Redo both sums with your own revenue rather than trusting a rule of thumb.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Which Shopify plan should an Indian store actually pick?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Stay on Basic below roughly ₹4 lakh of monthly revenue, move to Grow above it, and only look at
                            Advanced past roughly ₹42 lakh. That is a rupee threshold rather than a personality type, and it
                            is the only version of this advice that survives contact with a spreadsheet.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            There is a second reason to upgrade that has nothing to do with fees. Grow adds extra staff
                            accounts and lower-friction shipping rates, which matters the moment more than one person is
                            packing orders. Advanced adds custom report building and third-party calculated shipping rates,
                            which matters if a courier aggregator needs to quote live rates at checkout. If either of those
                            is blocking you operationally, upgrade before the maths says to.
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Do the maths yourself</h3>
                            <p className="text-gray-300 leading-8">
                                Compare <em>(monthly revenue × fee difference)</em> against{" "}
                                <em>(plan price difference including GST)</em>. If the first number is larger, upgrade. One
                                trap to avoid: annual billing locks in the ~25% discount but takes twelve months upfront, so
                                if you expect to cross into Grow within four months, do not prepay a year of Basic. You
                                cannot get that back.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The full fee stack on one ₹1,500 Indian order</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            On a ₹1,500 order, a Shopify Basic store in India loses about ₹71 to fees. The same order on
                            WooCommerce loses about ₹35. Here is where each rupee goes.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Razorpay&apos;s published standard rate card is a flat 2% platform fee across cards, netbanking,
                            wallets and UPI, plus 18% GST, with no setup fee and no annual maintenance charge. That last
                            detail catches people out: UPI carries zero MDR under RBI policy, so the <em>banks</em> take
                            nothing — but Razorpay still levies its 2% as a technology fee. &ldquo;UPI is free&rdquo; is
                            true at the network level and false on your settlement statement. Cashfree and PayU publish
                            their own rate cards and negotiate volume tiers, so shop around, but assume a similar order of
                            magnitude rather than a structural escape.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Payment method</th>
                                        <th className="p-4">Gateway (2% + GST)</th>
                                        <th className="p-4">Shopify Basic surcharge</th>
                                        <th className="p-4">Shopify total</th>
                                        <th className="p-4">WooCommerce total</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["UPI", "₹35.40", "₹35.40", "₹70.80", "₹35.40"],
                                        ["Debit / credit card", "₹35.40", "₹35.40", "₹70.80", "₹35.40"],
                                        ["Netbanking / wallet", "₹35.40", "₹35.40", "₹70.80", "₹35.40"],
                                    ].map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-medium text-white">{r[0]}</td>
                                            <td className="p-4">{r[1]}</td>
                                            <td className="p-4">{r[2]}</td>
                                            <td className="p-4 text-amber-300">{r[3]}</td>
                                            <td className="p-4 text-emerald-400">{r[4]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The point that matters:{" "}
                            <strong className="text-white">the gateway fee is identical on both platforms</strong>. Nothing
                            about WooCommerce gets you cheaper payment processing. The only structural difference is
                            Shopify&apos;s own surcharge layered on top, so WooCommerce&apos;s fee advantage is exactly your
                            Shopify plan&apos;s percentage and not one paisa more. On Grow the Shopify column falls to
                            ₹53.10; on Advanced to ₹46.02. Anyone selling you a bigger number than that is counting
                            something twice.
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
                                        ["Platform subscription", "₹1,769/mo annual · ₹2,353/mo monthly (GST-inc)", "₹0 — free plugin"],
                                        ["Hosting", "Included", "₹176–₹707/mo GST-inc"],
                                        ["Domain", "Extra", "About ₹117 first year for a .in"],
                                        ["SSL", "Included", "Free with most hosts"],
                                        ["Platform transaction fee", "2.36% of every order (GST-inc)", "₹0"],
                                        ["Payment gateway fee", "2% + GST (third-party)", "2% + GST (third-party)"],
                                        ["Theme", "Free, or paid themes $100–$420 one-off", "Free (Storefront, Astra) or a paid theme"],
                                        ["GST invoicing", "Usually a paid app, monthly", "Free and paid plugins both exist"],
                                        ["Apps / plugins", "Paid apps add up quickly", "Many free; some paid"],
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
                            Shopify&apos;s paid themes run $100 to $420 as a one-off purchase in its own theme store, which
                            is roughly ₹9,000 to ₹37,000 depending on the exchange rate — noticeably more than most
                            comparisons claim. Free themes exist on both platforms and are perfectly adequate to launch with.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What WooCommerce really costs in India, line by line</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            A working WooCommerce store in India starts at about{" "}
                            <strong className="text-white">₹176 a month all-in</strong> — ₹149 hosting plus 18% GST — and
                            the plugin itself is genuinely free. WooCommerce.com offers the core download at no cost and has
                            no subscription tier you are obliged to buy. What you are actually paying for is a server, a
                            domain and your own attention.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-5">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Line item</th>
                                        <th className="p-4">Promotional rate</th>
                                        <th className="p-4">With 18% GST</th>
                                        <th className="p-4">Renews at</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Hostinger Single (1 site, 10 GB SSD)", "₹69/mo", "₹81/mo", "₹289/mo"],
                                        ["Hostinger Premium (3 sites, 20 GB SSD)", "₹149/mo", "₹176/mo", "₹449/mo"],
                                        ["Hostinger Unlimited (50 GB NVMe)", "₹249/mo", "₹294/mo", "₹649/mo"],
                                        ["Hostinger Cloud Startup (100 GB NVMe)", "₹599/mo", "₹707/mo", "₹1,599/mo"],
                                        [".in domain, first year", "≈ ₹99/yr", "≈ ₹117/yr", "Higher on renewal"],
                                        [".com domain, first year", "≈ ₹149/yr", "≈ ₹176/yr", "≈ ₹1,000–₹1,400/yr"],
                                        ["WooCommerce plugin", "₹0", "₹0", "₹0"],
                                        ["Theme (Storefront, Astra)", "₹0", "₹0", "₹0"],
                                    ].map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-medium text-white">{r[0]}</td>
                                            <td className="p-4">{r[1]}</td>
                                            <td className="p-4 text-amber-300">{r[2]}</td>
                                            <td className="p-4">{r[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            Now the part most comparisons skip, because it makes their favourite platform look worse:{" "}
                            <strong className="text-white">the renewal cliff</strong>. Those promotional rates hold for the
                            48-month term you prepay, which means Premium costs ₹8,439 upfront with GST and works out to
                            ₹176 a month across years one to four. In year five it renews at ₹449 plus GST — ₹530 a month,
                            roughly triple. That is not a trick unique to Hostinger; every budget host prices this way. It
                            is simply a number you should see before you commit. I have written up the{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className={linkClass}>full renewal price picture separately</Link>{" "}
                            because it deserves more than a footnote.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Even so, the comparison is not close. Year one on WooCommerce with Premium hosting and a .in
                            domain is roughly <strong className="text-white">₹2,227</strong> GST-inclusive. Year five, after
                            hosting has tripled and the domain renews, is roughly{" "}
                            <strong className="text-white">₹7,760</strong>. Shopify Basic is{" "}
                            <strong className="text-white">₹21,228 a year</strong> GST-inclusive in both years — and that is
                            the subscription only, before a single rupee of transaction fee. If price is your deciding
                            factor, this section has already decided it.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Where the ₹176 figure comes from</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                Hostinger Premium at ₹149/month on the 48-month term, plus 18% GST at checkout, with a free
                                domain for year one, free SSL, free migration and a 30-day money-back window. The referral
                                link takes an extra 20% off the sale price on new purchases — never on renewals, and it is
                                worth being explicit about that. Compare the whole range in the{" "}
                                <Link href="/blog/hostinger-plans-pricing-india-2026" className={linkClass}>India plans and pricing breakdown</Link>{" "}
                                before you pick a term length.
                            </p>
                            <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener" className={ctaClass}>
                                Check Live Prices →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Does WooCommerce need special hosting? What a store actually requires</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Shared hosting is genuinely fine for a WooCommerce store with a modest catalogue and a few
                            hundred daily visitors. You need a VPS when traffic is sustained rather than spiky, or when
                            sale-day spikes start timing out checkout. That is the honest threshold, and it is a lot higher
                            than hosting companies would like you to believe.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Here is the mechanism no generic comparison bothers to explain. A blog is almost entirely
                            cacheable — one rendered page served to everyone. A store is not. Cart, checkout and
                            my-account <strong className="text-white">must be excluded from page cache</strong>, because
                            serving a cached cart to the wrong shopper is a catastrophe. So every logged-in shopper, every
                            add-to-cart, every checkout step hits PHP and MySQL directly. That is why a store is far heavier
                            than a blog with identical traffic, and why RAM and vCPU matter more than disk space when you
                            are choosing a plan.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            It also means configuration buys you more headroom than money often does. Redis object caching,
                            correct cache-exclusion rules for the four dynamic WooCommerce pages, a real system cron
                            replacing WP-Cron, and PHP 8.3 will frequently do more for checkout latency than jumping a tier.
                            Do those first, then upgrade if the numbers still say so.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-5">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Price</th>
                                        <th className="p-4">Specification</th>
                                        <th className="p-4">Right for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {HOSTING_PLANS.map((p) => (
                                        <tr key={p.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">{p.name}</td>
                                            <td className="p-4">₹{p.sale}/mo <span className="text-gray-500">· renews ₹{p.renew}</span></td>
                                            <td className="p-4">{p.spec}</td>
                                            <td className="p-4">{p.fit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            One thing to watch: <strong className="text-white">₹599 buys either Cloud Startup or KVM 1, and
                            they are completely different products</strong>. Cloud Startup is managed shared-style hosting
                            with dedicated resources and no server administration. KVM 1 is a virtual private server with
                            root access, which means you own the updates, the firewall and the backups. Pick Cloud Startup
                            unless you specifically want root. The{" "}
                            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className={linkClass}>KVM VPS plan breakdown</Link>{" "}
                            and the{" "}
                            <Link href="/blog/hostinger-cloud-hosting-india-2026" className={linkClass}>cloud hosting guide</Link>{" "}
                            go into each properly. All the VPS tiers run AMD EPYC in HPE and Dell servers with NVMe storage,
                            1 Gbps networking and the same 30-day money-back window.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <h3 className="text-xl font-bold text-white">My verdict on Hostinger for WooCommerce</h3>
                                <span className="text-sm font-bold text-amber-300 border border-amber-400/40 rounded-full px-3 py-1">4.5 / 5</span>
                            </div>
                            <p className="text-gray-300 leading-8 mb-5">
                                Best price-to-specification fit for a new Indian WooCommerce store, with NVMe from the
                                Unlimited tier upward and a clean upgrade path from shared into KVM VPS when checkout
                                outgrows shared resources. The reservation that keeps it off a 5: the promotional rate only
                                holds for the term you prepay, and shared plans roughly triple on renewal — the four-year
                                commitment is doing a lot of the work in that headline price. Go in knowing that.
                            </p>
                            <a href={REFERRAL_VPS_URL} target="_blank" rel="nofollow sponsored noopener" className={ctaClass}>
                                Compare Plans →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Speed and Core Web Vitals: Shopify wins by default, WooCommerce wins if you tune it</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Shopify is faster out of the box. That is not a controversial claim and I am not going to
                            pretend otherwise — Shopify owns the CDN, the server stack, the image pipeline and the theme
                            framework, and there is very little a non-technical seller can do to break any of it. Public
                            field-data comparisons of Core Web Vitals pass rates have consistently put hosted commerce
                            platforms ahead of self-hosted WordPress on mobile. But that gap is a hosting-and-configuration
                            gap, not a ceiling.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            What is genuinely useful is knowing how each side fails, because the failure modes are
                            completely different. <strong className="text-white">Shopify stores degrade from app
                            bloat</strong> — every review widget, upsell app, popup and analytics pixel injects JavaScript
                            you cannot remove without editing the theme, and the sellers who install fifteen apps end up
                            slower than a well-run WooCommerce site.{" "}
                            <strong className="text-white">WooCommerce stores degrade from cheap oversold shared
                            hosting</strong>, no object cache, unoptimised hero images and plugin sprawl.
                        </p>
                        <p className="text-gray-300 leading-8">
                            What actually closes the gap on WooCommerce is a short and boring list: NVMe storage, PHP 8.3,
                            Redis object caching, an image CDN, LiteSpeed or an equivalent server-level cache, and a lean
                            theme instead of a multipurpose one with a page builder bundled in. A ₹249 plan with all of that
                            in place will beat a ₹2,000 plan with none of it. Speed on WooCommerce is a configuration
                            problem far more often than a budget problem.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">COD and RTO: the cost that appears on neither pricing page</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Cash on delivery is the majority payment method for Indian ecommerce, and return-to-origin on
                            COD orders is, for a lot of small stores,{" "}
                            <strong className="text-white">a bigger line item than the platform subscription</strong>.
                            Neither Shopify nor WooCommerce puts it on a pricing page, because it is not their cost — it is
                            entirely yours.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            The mechanism is what makes it expensive. A prepaid order that is refused costs you a refund and
                            a reverse shipment. A COD order that is refused costs you forward freight, reverse freight,
                            packaging and handling with <strong className="text-white">zero revenue attached</strong> —
                            nothing was ever collected. Courier aggregators also charge a COD handling fee per delivered
                            order on top of freight. So the true cost of an RTO is roughly two shipping legs plus packaging,
                            and it lands on your margin rather than on your gross merchandise value.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Work it with your own numbers rather than mine: take your monthly orders, multiply by your COD
                            share, multiply by your RTO rate, then multiply by (forward freight + reverse freight +
                            packaging). For most stores doing a hundred orders a month that arithmetic produces a figure
                            several times larger than a ₹176 hosting bill, which is exactly why arguing about ₹176 versus
                            ₹1,769 while ignoring RTO is the wrong order of priorities.
                        </p>
                        <p className="text-gray-300 leading-8">
                            On the platform question specifically: Shopify has the deeper native ecosystem for RTO
                            suppression, and the specialist Indian checkout layers that predict and block risky COD orders
                            built for Shopify first. WooCommerce is not shut out — Razorpay ships an official WooCommerce
                            integration including its checkout product, COD is a built-in core payment method, and free
                            plugins restrict COD by pincode, cart value, product or shipping zone. Indian courier
                            aggregators publish WooCommerce plugins covering multiple carriers. The honest verdict:{" "}
                            <strong className="text-white">Shopify gives you this out of the box, WooCommerce matches most
                            of it with free plugins and a weekend of setup</strong>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">GST: what you pay on the platform vs what your store must issue</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Yes, 18% GST is added to your Shopify subscription and to Shopify&apos;s transaction fee — and
                            separately, your store must issue GST-compliant invoices to buyers. These are two entirely
                            different obligations, and most comparisons conflate them into one vague sentence.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Side one, what you pay.</strong> 18% on the Shopify subscription,
                            18% on Shopify&apos;s order surcharge, 18% on your payment gateway&apos;s platform fee, and 18%
                            on your hosting bill too. That is why every rupee figure in this article is stated
                            GST-inclusive. Quoting ₹1,499 as the price of Shopify Basic in India is quoting a number nobody
                            is ever invoiced.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Side two, what you issue.</strong> The invoice you owe your
                            customer needs your GSTIN, HSN or SAC codes against each line, and the correct tax split —
                            CGST plus SGST for an intra-state sale, IGST for inter-state — across the applicable slab.
                            Cross the turnover threshold and e-invoicing applies as well. Neither platform does this
                            natively: Shopify does not calculate Indian GST for you, so you configure tax rates manually and
                            most sellers end up installing a paid GST invoicing app. WooCommerce has both free and paid
                            plugins for the same job.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Note what that means for the comparison. A GST invoicing app is a{" "}
                            <em>recurring monthly cost on Shopify</em> that belongs in the monthly total and is almost
                            always left out of published comparisons. On WooCommerce it can be a free plugin. It is not a
                            huge amount of money either way, but it is one more small thing that moves in the same direction
                            as everything else on this page.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">SEO: what each platform lets you change, and what it locks</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            WooCommerce gives you more technical control; Shopify gives you fewer ways to break things. For
                            most Indian stores that difference is worth less than one genuinely good buying-guide page, so
                            do not let anyone sell you a platform migration on SEO grounds alone.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Being specific about what Shopify actually locks: URL segments are fixed. Products live under{" "}
                            <code className="text-primary-300">/products/</code>, categories under{" "}
                            <code className="text-primary-300">/collections/</code>, static pages under{" "}
                            <code className="text-primary-300">/pages/</code> and the blog under{" "}
                            <code className="text-primary-300">/blogs/</code>. That creates duplicate collection paths and
                            constrains how you architect a content hub around your catalogue. What Shopify no longer locks
                            is robots.txt — it exposes <code className="text-primary-300">robots.txt.liquid</code>, so the
                            old &ldquo;you cannot edit robots.txt on Shopify&rdquo; claim you will still read on plenty of
                            pages is out of date.
                        </p>
                        <p className="text-gray-300 leading-8">
                            WooCommerce gives you full URL control, Yoast or Rank Math, and — the one that actually matters
                            at scale — noindex control over faceted filter URLs. A store with many product attributes can
                            generate thousands of near-duplicate filtered URLs, and being able to shut that down is a real
                            technical advantage. Because it sits inside WordPress, you also get unlimited programmatic
                            content without a separate blogging system. Decision rule: if organic content is your primary
                            growth channel, that is the strongest single argument for WooCommerce anywhere on this page. If
                            you grow through paid ads and marketplaces, this section should not move your decision at all.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The 30-orders-a-day test: at what point does WooCommerce actually win?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Revenue bands are a useless way to think about this because nobody knows their monthly revenue
                            band off the top of their head — but everybody knows roughly how many orders a day they ship.
                            So: at <strong className="text-white">30 orders a day and ₹1,500 average order value</strong>,
                            about ₹13.5 lakh a month, Shopify Basic costs roughly{" "}
                            <strong className="text-white">₹33,600 a month</strong> in platform fees against roughly{" "}
                            <strong className="text-white">₹707</strong> for WooCommerce on Cloud Startup. That is around
                            ₹4 lakh a year.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Orders/day</th>
                                        <th className="p-4">Monthly revenue</th>
                                        <th className="p-4">Shopify Basic total</th>
                                        <th className="p-4">Cheapest Shopify plan</th>
                                        <th className="p-4">WooCommerce hosting</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["3", "₹1,35,000", "₹4,955", "Basic — ₹4,955", "Premium · ₹176"],
                                        ["10", "₹4,50,000", "₹12,389", "Grow — ₹11,917", "Unlimited · ₹294"],
                                        ["30", "₹13,50,000", "₹33,629", "Grow — ₹22,537", "Cloud Startup · ₹707"],
                                        ["100", "₹45,00,000", "₹1,07,969", "Advanced — ₹58,622", "KVM 2 · ₹943"],
                                    ].map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">{r[0]}</td>
                                            <td className="p-4">{r[1]}</td>
                                            <td className="p-4">{r[2]}</td>
                                            <td className="p-4 text-amber-300">{r[3]}</td>
                                            <td className="p-4 text-emerald-400">{r[4]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            All figures are GST-inclusive and assume ₹1,500 average order value, annual Shopify billing and
                            the third-party payment surcharge for each tier. The payment gateway&apos;s own 2% is excluded
                            because it is identical on both sides and would cancel out.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Now the counterweight, because a table like that is not an argument on its own. At three orders
                            a day the gap is about ₹4,800 a month and you are running a business that has not proven itself
                            yet — Shopify is very probably the right call, because your scarce resource is attention, not
                            cash. The crossover is not really about percentages. It is about the point where the annual fee
                            difference exceeds what a developer, or your own weekends, actually cost. For most people that
                            arrives somewhere between ten and thirty orders a day. Below it, pay Shopify and get on with
                            selling. Above it, the maths stops being close and starts being embarrassing.
                        </p>
                    </section>

                    <section className="mb-12" id="migration">
                        <h2 className="text-3xl font-bold text-white mb-4">Migrating from Shopify to WooCommerce (and back again)</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            A small catalogue moves in a weekend. A real D2C brand with apps, reviews and subscriptions
                            takes four to eight weeks. The difference is almost never the products — it is everything
                            bolted around them.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">What ports cleanly:</strong> products, variants, customers and
                            order history, via CSV export plus a free Shopify importer plugin, or a paid migration service
                            priced by catalogue size. <strong className="text-white">What does not port at all:</strong> the
                            theme, every app and the data inside it, discount codes, subscription contracts, and product
                            reviews unless you export them separately from whichever review app is holding them. Budget for
                            rebuilding, not porting.
                        </p>
                        <ol className="space-y-4 text-gray-300 leading-8 list-decimal list-inside mb-5">
                            {MIGRATION_STEPS.map((s) => (
                                <li key={s.name}>
                                    <strong className="text-white">{s.name}.</strong> {s.text}
                                </li>
                            ))}
                        </ol>
                        <p className="text-gray-300 leading-8">
                            The step most guides bury is step five, and it is the one that ruins migrations. Skip the 301
                            redirect map and you drop every ranking URL you own on cutover day. The reverse direction is a
                            real query too — Shopify publishes an official WooCommerce importer, and the same redirect
                            problem applies in mirror image. Either way, if you are moving hosts rather than platforms, the{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className={linkClass}>WordPress migration walkthrough</Link>{" "}
                            covers the DNS and staging mechanics in more detail.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Shopify alternatives Indian sellers actually consider</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            If your objection to Shopify is the 2% and your objection to WooCommerce is the maintenance,
                            there are India-first platforms sitting between them. Dukaan is built around fast mobile store
                            setup and WhatsApp-led selling, which suits local sellers and anyone whose orders already arrive
                            as WhatsApp messages. Instamojo grew out of payment links and is strongest for digital products,
                            courses and services rather than physical inventory. Bikayi is India-first with COD and UPI
                            treated as primary rather than bolted on.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Two feature gaps push sellers off Shopify specifically: no native WhatsApp ordering and no
                            native PhonePe, both of which are default expectations for a large share of Indian buyers. Wix
                            and Squarespace are worth a line each as design-led global builders, but India-specific
                            functionality on both arrives through add-ons rather than natively.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The honest close: none of these has Shopify&apos;s app ecosystem or WooCommerce&apos;s content
                            ceiling, and a store built on any of them is harder to migrate away from later because the
                            export paths are less well trodden. If you want the fourth path entirely — owning the frontend
                            and treating commerce as an API — the{" "}
                            <Link href="/blog/react-se-ecommerce-website-kaise-banaye" className={linkClass}>custom React ecommerce build</Link>{" "}
                            is a different trade again: maximum control, maximum ongoing responsibility.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which should you choose?</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                ["Choose Shopify", "You want to sell this week, you are not technical, and your margins can absorb ₹1,769/month plus 2.36% per order. The speed to launch is real and worth paying for while you are still proving the product works."],
                                ["Choose WooCommerce", "You are comfortable with WordPress, your volume makes the surcharge hurt, or organic content is your growth channel and you need URL and indexation control. Budget your own time as a real, recurring cost."],
                                ["Start Shopify, move later", "Perfectly reasonable, and common. Validate on Shopify, migrate once fees outgrow convenience — but build the redirect map properly when you do, and expect four to eight weeks if you have apps."],
                                ["Neither yet", "If you have not made a sale anywhere, sell on a marketplace, on Instagram or over WhatsApp first. A store is a distribution problem before it is a platform problem, and ₹20/month trials do not change that."],
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

                    <section className="mb-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                        <h2 className="text-2xl font-bold text-white mb-3">Ready to build the WooCommerce side?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Premium at ₹149/month before GST is the realistic starting point for a first store, Unlimited at
                            ₹249 if you want NVMe storage from day one, and Cloud Startup at ₹599 once checkout needs
                            dedicated resources. Free domain for year one, free SSL, free migration and 30 days to change
                            your mind. Check the renewal rate before you pick a term.
                        </p>
                        <a href={REFERRAL_PRICING_URL} target="_blank" rel="nofollow sponsored noopener" className={ctaClass}>
                            See Current Plans →
                        </a>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/shopify-review-india-2026" className={linkClass}>Shopify review for Indian sellers</Link> — the platform in detail.</li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className={linkClass}>Hostinger plans and pricing in India</Link> — every tier with renewal rates.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className={linkClass}>Cloud hosting for stores</Link> — when shared hosting stops coping.</li>
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className={linkClass}>KVM VPS plans compared</Link> — the step up from shared for a busy store.</li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className={linkClass}>Best web hosting in India</Link> — the wider field, not just one brand.</li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className={linkClass}>Hosting under ₹200 a month</Link> — where the ₹176 figure sits.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className={linkClass}>Domain prices in India</Link> — first year versus renewal.</li>
                            <li><Link href="/blog/migrate-wordpress-to-new-host" className={linkClass}>Migrating WordPress to a new host</Link> — the DNS and staging mechanics.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className={linkClass}>Hosting cost calculator</Link> — run your own four-year total.</li>
                            <li><Link href="/blog/react-se-ecommerce-website-kaise-banaye" className={linkClass}>Building an ecommerce site with React</Link> — the custom-build route.</li>
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
