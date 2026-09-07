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
const MODIFIED = "2026-09-07T00:00:00.000Z";

const TITLE = "Hostinger ₹55/mo: Cheapest Plan at 86% Off (2026)";

export const metadata: Metadata = {
    title: TITLE,
    description:
        "Hostinger's cheapest plan is ₹69/mo, or ₹55.20 with a code. The real upfront total with GST, the ₹289 renewal, and whether Single is enough for you.",
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
        "hostinger cheapest plan",
        "hostinger single plan price india",
        "hostinger 69 per month plan",
        "is hostinger single plan enough",
        "hostinger single vs premium",
        "cheapest web hosting india 2026",
        "hostinger price with gst india",
        "hostinger monthly plan",
        "hostinger yearly plan price",
        "hostinger single plan free domain",
        "hostinger single plan limits",
        "how many visitors hostinger single plan",
        "hostinger single plan renewal price 289",
        "hostinger plans india",
        "hostinger cheapest hosting plan for beginners",
        "hostinger single plan wordpress",
        "hostinger upgrade single to premium",
        "hostinger total cost 48 months india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description:
            "Single at ₹55.20/mo, Premium ₹119.20, Unlimited ₹199.20 — the real prices with the code, the upfront total after 18% GST, and the renewals.",
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: MODIFIED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger hosting at ₹55 per month with referral discount" }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: "The real price after the code, what you pay upfront once GST is added, and whether Single is enough.",
        images: [IMAGE],
    },
};

/**
 * Prices re-read off Hostinger's India pricing page on 7 Sep 2026 with the referral code
 * applied (the page shows a "Referral code applied" badge). The referral discount is
 * exactly 20% on top of the live sale price — ₹69 becomes ₹55.20, ₹149 becomes ₹119.20.
 *
 * The ram/cpu/db/mailboxes/bandwidth/inodes figures are NOT from the marketing pages —
 * they come from Hostinger's own plan-limits documentation, which is the only place the
 * hard caps are published. `withGst` is my arithmetic: term total × 1.18, because India's
 * GST on hosting services is 18% and it is added at checkout, never on the plan card.
 */
const PLANS = [
    {
        id: "single",
        name: "Single", regular: "₹399", sale: "₹69", referral: "₹55.20", off: "86%",
        upfront: "₹2,649.60", withGst: "₹3,126.53", perMonthGst: "₹65.14",
        regularTotal: "₹19,152", renews: "₹289",
        sites: "1", storage: "10 GB SSD", domain: false, cdn: false, ecom: false,
        ai: false, priority: false, node: false, backups: "Weekly", mail: "1",
        ram: "1 GB", cpu: "1 core", db: "2", bandwidth: "100 GB/mo", inodes: "200,000",
        best: "A first site, a portfolio, or something you just need online cheaply.",
        highlight: false,
    },
    {
        id: "premium",
        name: "Premium", regular: "₹599", sale: "₹149", referral: "₹119.20", off: "80%",
        upfront: "₹5,721.60", withGst: "₹6,751.49", perMonthGst: "₹140.66",
        regularTotal: "₹28,752", renews: "₹449",
        sites: "3", storage: "20 GB SSD", domain: true, cdn: false, ecom: false,
        ai: false, priority: false, node: false, backups: "Weekly", mail: "2",
        ram: "2 GB", cpu: "1 core", db: "10", bandwidth: "Unlimited", inodes: "400,000",
        best: "A blog or small business site that wants a free domain and room for two more sites.",
        highlight: false,
    },
    {
        id: "unlimited",
        name: "Unlimited", regular: "₹699", sale: "₹249", referral: "₹199.20", off: "72%",
        upfront: "₹9,561.60", withGst: "₹11,282.69", perMonthGst: "₹235.06",
        regularTotal: "₹33,552", renews: "₹649",
        sites: "Unlimited", storage: "50 GB NVMe", domain: true, cdn: true, ecom: true,
        ai: true, priority: true, node: true, backups: "Daily + easy restore", mail: "5",
        ram: "3 GB", cpu: "2 cores", db: "150", bandwidth: "Unlimited", inodes: "600,000",
        best: "The one most people should actually buy. NVMe, CDN, daily backups, Node.js.",
        highlight: true,
    },
    {
        id: "cloud-startup",
        name: "Cloud Startup", regular: "₹1,699", sale: "₹599", referral: "₹479.20", off: "72%",
        upfront: "₹23,001.60", withGst: "₹27,141.89", perMonthGst: "₹565.46",
        regularTotal: "₹81,552", renews: "₹1,599",
        sites: "Unlimited", storage: "100 GB NVMe", domain: true, cdn: true, ecom: true,
        ai: true, priority: true, node: true, backups: "Daily + on demand", mail: "10",
        ram: "4 GB", cpu: "4 cores", db: "300", bandwidth: "Unlimited", inodes: "2,000,000",
        best: "Agencies and high-traffic projects that need dedicated resources.",
        highlight: false,
    },
];

const FAQ = [
    {
        q: "Is Hostinger really ₹55 per month?",
        a: "Yes, with two conditions. ₹55.20/mo is the Single plan on a 48-month term with a referral code applied — the sale price is ₹69/mo and the referral takes 20% more off. And Hostinger bills the whole term upfront, so you pay ₹2,649.60 once, or ₹3,126.53 after 18% GST, not ₹55 a month. The monthly figure is the total divided by 48.",
    },
    {
        q: "How do I get the ₹55 price?",
        a: "Open Hostinger through a referral link, choose the Single plan and select the 48-month term. The page should show a 'Referral code applied' badge and the price should read ₹55.20/mo before you enter any details. If it still says ₹69, clear your cookies and open the link again in a fresh tab.",
    },
    {
        q: "What do I actually pay today?",
        a: "Before tax: ₹2,649.60 for Single across 48 months, ₹5,721.60 for Premium, ₹9,561.60 for Unlimited, ₹23,001.60 for Cloud Startup. Add 18% GST at checkout and Single becomes ₹3,126.53, Premium ₹6,751.49, Unlimited ₹11,282.69 and Cloud Startup ₹27,141.89. Every plan is charged upfront for the full term.",
    },
    {
        q: "Does the ₹55 Single plan include a free domain?",
        a: "No. Hostinger's own web hosting FAQ states it plainly: with the exception of the Single plan, all its hosting options include a free domain on terms longer than a year. Some plan cards render a shared 'Free domain' bullet across every tier, so ignore the card and read the order summary. A .com promo is around ₹149 for the first year anyway, so this is a small gap, not a dealbreaker.",
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
        a: "Yes — 30 days, on shared hosting and on the KVM VPS range. It is a genuine guarantee rather than a credit, so use it as a trial: put the real site on it, run your slowest page, and watch the resource graph in hPanel at your busiest hour. If Single cannot carry the site, you will know inside a fortnight, which is exactly what the window is for.",
    },
    {
        q: "Can I upgrade later if I outgrow the plan?",
        a: "Yes, upgrading inside hPanel is straightforward and you pay the difference for the remaining term. Starting on Single or Premium and moving up when traffic justifies it is sensible. What you cannot do is downgrade and get money back, so do not over-buy on the assumption you will scale next month.",
    },
    {
        q: "Does Hostinger charge GST in India?",
        a: "Yes. Hosting is a service taxed at 18% GST in India, and it is added at checkout on top of the price shown on the plan card — the card never includes it. So ₹55.20/mo is ₹2,649.60 for the term but ₹3,126.53 on your card. If your business is GST-registered, tick 'Add company details' at checkout and enter your GSTIN so the invoice is tax-compliant and the 18% becomes input credit rather than cost.",
    },
    {
        q: "Is the Hostinger Single plan good enough for a business website?",
        a: "For a brochure site, a portfolio or a service business with a contact form, yes. For anything that takes money, no. Single gives you 1 GB RAM, one CPU core and two MySQL databases — enough for a lean WordPress site, not enough for WooCommerce checkout or a page-builder-heavy build. The bigger constraint is that it is capped at one website, so a second brand or a staging copy forces an upgrade.",
    },
    {
        q: "How many visitors can the Hostinger Single plan handle?",
        a: "Hostinger does not publish a visitor number, and anyone quoting one is guessing. What it does publish is the cap that actually bites: Single is the only shared plan with metered bandwidth, at 100 GB a month. If your pages weigh 1 MB, that is roughly 100,000 pageviews; at 2 MB it is roughly 50,000. In practice 1 GB of RAM runs out under concurrent traffic long before the bandwidth does.",
    },
    {
        q: "Is 10 GB of storage enough for a WordPress site?",
        a: "For most sites, comfortably. A clean WordPress install with a theme and a dozen plugins sits under 1 GB, which leaves roughly 9 GB for media — thousands of properly compressed images. Storage is almost never the wall on Single. The 200,000-file inode cap and the 1 GB RAM ceiling are what you hit first, usually when a plugin generates thumbnails or an editor loads.",
    },
    {
        q: "Should I buy Hostinger for 12 months or 48 months?",
        a: "48 months if you are confident the project survives four years, because the headline rate only exists on that term and every shorter term costs more per month. 12 months if you are not — the extra you pay per month is cheaper than writing off three unused years. The one term to avoid is monthly, which carries the worst rate on the page. There is no instalment option either way; you prepay the whole term.",
    },
    {
        q: "Can I host two websites on the ₹69 Single plan?",
        a: "No. Single is a hard one-website plan and there is no add-on that lifts it — a subdomain used as a second site still counts. Premium at ₹119.20/mo is the cheapest tier that allows three. If you are already on Single, upgrading in hPanel costs only the prorated difference for the months left on your term, so buying Single first is not a costly mistake.",
    },
    {
        q: "What resource limits will I actually hit on the Single plan?",
        a: "The four that matter, from Hostinger's own plan-limits documentation: 1 GB RAM, 1 CPU core, 2 MySQL databases and 200,000 inodes, plus 100 GB of monthly bandwidth. RAM goes first — opening a heavy page builder or running WooCommerce checkout on 1 GB is where 503s come from. The 2-database cap means WordPress plus one staging copy and nothing else.",
    },
    {
        q: "Does the referral discount also apply to my renewal?",
        a: "No. The extra 20% is a new-purchase discount only. It applies once, to the term you buy today, and never to a renewal — your Single plan renews at the standard ₹289/mo whether you bought it through a code or not. Anyone telling you a code holds your renewal price is wrong. The only lever on renewal cost is the length of term you buy now.",
    },
    {
        q: "Can I get a refund if I cancel a 48-month Hostinger plan?",
        a: "Hosting is covered by a 30-day money-back guarantee, so cancel inside 30 days and the hosting portion comes back. Two things do not: domain registration fees, which sit on a much shorter separate window and are effectively non-refundable, and add-ons bought at signup, which are charged for the whole term and are not returned pro-rata. Test the service properly inside those 30 days.",
    },
];

const AUTHOR = {
    "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile",
    jobTitle: "Senior Full Stack Developer",
    sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"],
};

// Numeric price per month with the referral code applied, pulled straight off the PLANS
// table so the schema can never drift away from what the page actually shows.
const priceOf = (v: string) => Number(v.replace(/[₹,]/g, ""));

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description:
            "Hostinger's cheapest plan is ₹69/mo, or ₹55.20 with a referral code. The real upfront total with GST, the ₹289 renewal, and whether Single is enough.",
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: {
            "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile",
            jobTitle: "Senior Full Stack Developer",
            sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"],
        },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "hostinger cheapest plan, hostinger single plan price india, hostinger 55 per month, hostinger price with gst india, cheapest web hosting india 2026",
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
        "@type": "Product",
        "@id": `${CANONICAL}#product`,
        name: "Hostinger Shared Web Hosting (India)",
        description:
            "Hostinger India shared hosting. Single ₹69/mo (₹55.20 with a referral code) through Cloud Startup ₹599/mo (₹479.20), on a 48-month term billed upfront, before 18% GST.",
        image: IMAGE,
        brand: { "@type": "Brand", name: "Hostinger" },
        category: "Web Hosting",
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: 55.20,
            highPrice: 479.20,
            offerCount: PLANS.length,
            availability: "https://schema.org/InStock",
            url: REFERRAL_URL,
            offers: PLANS.map((p) => ({
                "@type": "Offer",
                name: `Hostinger ${p.name}`,
                price: priceOf(p.referral),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: REFERRAL_URL,
                eligibleQuantity: { "@type": "QuantitativeValue", value: 48, unitCode: "MON" },
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: priceOf(p.referral),
                    priceCurrency: "INR",
                    valueAddedTaxIncluded: false,
                    unitCode: "MON",
                    referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
            })),
        },
        review: {
            "@type": "Review",
            "@id": `${CANONICAL}#review`,
            name: "Hostinger's cheapest plan, reviewed on price",
            author: AUTHOR,
            datePublished: MODIFIED,
            reviewRating: { "@type": "Rating", ratingValue: 4.5, bestRating: 5, worstRating: 1 },
            reviewBody:
                "Single at ₹55.20/mo is the cheapest honest entry point in Indian shared hosting, but it is one website, 1 GB of RAM, two databases and 100 GB of bandwidth, billed four years upfront before 18% GST, and it renews at ₹289/mo. Correct for a single lean site; the wrong purchase for WooCommerce or a second project.",
            itemReviewed: { "@id": `${CANONICAL}#product` },
        },
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
                            Hostinger&apos;s Cheapest Plan at ₹55/mo: The Real Price, and Whether It Is Enough
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            ₹55.20 a month is genuine — it is the Single plan on a 48-month term with a referral code
                            applied, 86% off the ₹399 regular rate. It is also charged as{" "}
                            <strong className="text-white">₹3,126.53 today</strong> once 18% GST goes on, not ₹55 a
                            month. Here is every plan&apos;s real number, the hard resource caps Hostinger only publishes
                            in its support docs, and an honest answer to whether the cheapest plan is the right one.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>Updated September 7, 2026</span><span>•</span><span>14 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/hostinger-55-per-month-offer.svg" alt="Hostinger hosting at ₹55 per month with referral discount applied" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        This article contains affiliate links. Buying through one earns me a commission at no extra cost
                        to you — and the referral code takes 20% off your price, so it is not a one-sided arrangement.
                        Prices were re-read directly off Hostinger&apos;s India pricing page on 7 September 2026 with
                        the code applied; the RAM, CPU, database and bandwidth caps come from Hostinger&apos;s own
                        plan-limits documentation. GST figures are my arithmetic, not Hostinger&apos;s. Sale pricing
                        changes constantly; the order summary at checkout is the only number that binds.
                    </p>

                    {/* Early CTA — the first affiliate link used to sit most of the way down
                        the page, which is no use to a reader who already knows what they want. */}
                    <div className="mb-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <div className="mb-4 sm:mb-0">
                            <p className="font-semibold text-white leading-6">Here to buy? The ₹55.20 price is live right now</p>
                            <p className="mt-1 text-sm text-gray-400 leading-6">Open with the code applied and check the badge before you pay anything</p>
                        </div>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:scale-[1.02] whitespace-nowrap"
                        >
                            Open Hostinger With Code →
                        </a>
                    </div>

                    {/* Offer box */}
                    <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7">
                        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">Live offer</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">₹69 becomes ₹55.20 with the code</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Hostinger&apos;s sale already cuts Single from ₹399 to ₹69/mo. A referral code takes a further
                            20% off that — <strong className="text-white">₹69 × 0.8 = ₹55.20</strong>. The same 20% applies to
                            every plan, which is why Premium reads ₹119.20 and <Link href="/blog/hostinger-business-plan" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Unlimited</Link> ₹199.20 once the code is on.
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
                                        <th className="p-4">Term total (pre-GST)</th>
                                        <th className="p-4">Card charged (+18% GST)</th>
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
                                            <td className="p-4 text-gray-400">{p.upfront}</td>
                                            <td className="p-4 font-semibold text-white">{p.withGst}</td>
                                            <td className="p-4 text-amber-300">{p.renews}/mo</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500">
                            48-month term. Hostinger charges the full term upfront — the monthly figure is the total
                            divided by the number of months, which is stated on their own pricing page. Prices read
                            7 September 2026 with the code applied. The GST column is my arithmetic (term total × 1.18),
                            not a figure Hostinger prints anywhere.
                        </p>
                    </section>

                    {/* GST — the single biggest omission on almost every Indian Hostinger page */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What ₹55.20/mo actually costs after 18% GST</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">₹55.20/mo is ₹3,126.53 charged today, not ₹2,649.60.</strong>{" "}
                            Web hosting is a service, services carry 18% GST in India, and Hostinger adds it at checkout.
                            It appears in the order summary, never on the plan card — which is why so many people report
                            a bill that does not match the price they clicked.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">48-month total</th>
                                        <th className="p-4">GST at 18%</th>
                                        <th className="p-4">What your card is charged</th>
                                        <th className="p-4">True cost per month</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {PLANS.map((p) => (
                                        <tr key={p.name} className={`border-t border-white/5 ${p.highlight ? "bg-primary-500/[0.06]" : ""}`}>
                                            <td className="p-4 font-semibold text-white">{p.name}</td>
                                            <td className="p-4">{p.upfront}</td>
                                            <td className="p-4">
                                                ₹{(priceOf(p.withGst) - priceOf(p.upfront)).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </td>
                                            <td className="p-4 font-semibold text-white">{p.withGst}</td>
                                            <td className="p-4 text-emerald-400">{p.perMonthGst}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            Run the same sum without the code and the discount stops being abstract. Single at the plain
                            sale price is ₹69 × 48 = <strong className="text-white">₹3,312</strong>, or{" "}
                            <strong className="text-white">₹3,908.16</strong> with GST. With the code it is ₹3,126.53.
                            The 20% is worth <strong className="text-emerald-400">₹781.63</strong> in real money on the
                            cheapest plan — not life-changing, but it is the difference between paying ₹81.42 and ₹65.14
                            a month for the same server.
                        </p>
                        <p className="text-gray-300 leading-8">
                            One exception worth knowing: if you are GST-registered, tick{" "}
                            <strong className="text-white">&ldquo;Add company details&rdquo;</strong> at checkout and enter
                            your GSTIN. Hostinger issues a tax-compliant invoice against it, the 18% becomes input credit
                            rather than a cost, and the pre-GST column above is your real number. Do it at the first
                            purchase — Hostinger&apos;s own billing docs say an issued invoice cannot be changed afterwards.
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

                    {/* Is Single enough — the question the page exists to answer */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Is the ₹69 Single plan actually enough?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Yes for one brochure site, a portfolio or a blog. No for
                            WooCommerce, a page-builder-heavy build, or anything that will need a second website.</strong>{" "}
                            That is the honest answer, and the reason sits in numbers Hostinger does not print on the
                            plan cards at all — they live in its plan-limits support documentation, which is the only
                            place the hard caps are published.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Hard limit</th>
                                        {PLANS.map((p) => <th key={p.name} className="p-4">{p.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">RAM</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.ram}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">CPU</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.cpu}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">MySQL databases</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.db}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Monthly bandwidth</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.bandwidth}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Inodes (files)</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.inodes}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Mailboxes</td>
                                        {PLANS.map((p) => <td key={p.name} className="p-4">{p.mail}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mb-5">
                            Caps from Hostinger&apos;s published plan-limits documentation for plans bought under the
                            current generation. Mailbox counts are the hPanel caps; email is included free for the first
                            year on longer terms and billed after that.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Read that table and the thing people worry about — storage — turns out to be the wrong worry.
                            A clean WordPress install with a theme and a dozen plugins sits comfortably under 1 GB, so
                            10 GB holds a few thousand properly compressed images. You will not run out of disk on a
                            normal site.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">What actually breaks first is RAM.</strong> One gigabyte is
                            fine for a lean WordPress site serving cached pages. It is not fine the moment you open the
                            Elementor or Divi editor, run a WooCommerce checkout, or take a burst of concurrent visitors —
                            that is where the 503s and &ldquo;resource limit reached&rdquo; notices in hPanel come from.
                            The one CPU core is shared, too, so a badly behaved plugin can eat your whole allocation.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            The second squeeze is the <strong className="text-white">two-database cap</strong>. That is
                            WordPress plus one staging copy and nothing else — no second app, no separate forum, no
                            experiment. And Single is the only shared plan with{" "}
                            <strong className="text-white">metered bandwidth at 100 GB a month</strong>; Premium and above
                            are unmetered. If your pages weigh 1 MB, 100 GB is roughly 100,000 pageviews; at 2 MB it is
                            roughly 50,000. In practice RAM gives out before bandwidth does, but it is a real ceiling and
                            it is the one nobody mentions.
                        </p>
                        <p className="text-gray-300 leading-8">
                            So: if the project is one lean site you control, Single is genuinely enough and paying more is
                            paying for headroom you will not use. If it is a store, a client project, or a business that
                            will want a landing page and a staging copy inside a year, you are buying the wrong plan to
                            save ₹64 a month. There is more on how the tiers behave under WordPress specifically in my{" "}
                            <Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger WordPress hosting guide
                            </Link>.
                        </p>
                    </section>

                    {/* Single vs Premium */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Single vs Premium: the ₹64/mo that decides it</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Premium costs ₹64/mo more with the code — ₹3,072 over the full
                            term, ₹3,624.96 once GST goes on — and it doubles your RAM, triples your sites and multiplies
                            your databases by five.</strong> Here is the whole comparison in one place.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">&nbsp;</th>
                                        <th className="p-4">Single</th>
                                        <th className="p-4">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Price with code</td><td className="p-4 text-emerald-400 font-bold">₹55.20/mo</td><td className="p-4 text-emerald-400 font-bold">₹119.20/mo</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Charged today (with GST)</td><td className="p-4">₹3,126.53</td><td className="p-4">₹6,751.49</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Websites</td><td className="p-4">1</td><td className="p-4">3</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Storage</td><td className="p-4">10 GB SSD</td><td className="p-4">20 GB SSD</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">RAM</td><td className="p-4">1 GB</td><td className="p-4">2 GB</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">MySQL databases</td><td className="p-4">2</td><td className="p-4">10</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Bandwidth</td><td className="p-4 text-amber-300">100 GB/mo</td><td className="p-4">Unlimited</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Mailboxes</td><td className="p-4">1</td><td className="p-4">2</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Free domain (1 yr)</td><td className="p-4 text-gray-500">No</td><td className="p-4 text-emerald-400">Yes</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Renews at</td><td className="p-4 text-amber-300">₹289/mo</td><td className="p-4 text-amber-300">₹449/mo</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            The decision rule is simple. <strong className="text-white">If you will ever host a second
                            site, buy Premium.</strong> The upgrade is worth it for the 2 GB of RAM alone, and going from
                            two databases to ten is what turns the account from a single site into somewhere you can
                            actually work. <strong className="text-white">If it is genuinely one site, buy Single.</strong>{" "}
                            Premium is over-buying, and over-buying on a four-year prepaid term is expensive because you
                            cannot downgrade for a refund.
                        </p>
                        <p className="text-gray-300 leading-8">
                            I want to correct something this page used to say, and that a lot of Indian hosting pages still
                            say: that Premium&apos;s free domain closes most of the price gap. It does not. A first-year
                            .com promo runs around ₹149 and a .in around ₹99, against a ₹3,624.96 gap over the term. The
                            free domain is a nice extra, not an argument. Buy Premium for the RAM, the databases and the
                            unmetered bandwidth, or do not buy it. Domain pricing in detail is in my{" "}
                            <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger domain price guide
                            </Link>{" "}
                            and{" "}
                            <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                best domain registrars in India
                            </Link>.
                        </p>
                    </section>

                    {/* Mid-page CTA */}
                    <div className="mb-12 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <div className="mb-4 sm:mb-0">
                            <p className="font-semibold text-white leading-6">Decided on Single, or on Premium?</p>
                            <p className="mt-1 text-sm text-gray-400 leading-6">
                                Open both side by side with the discount applied and check the order summary total against
                                the GST table above
                            </p>
                        </div>
                        <a
                            href={REFERRAL_URL}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:scale-[1.02] whitespace-nowrap"
                        >
                            Compare Live Prices →
                        </a>
                    </div>

                    {/* Billing terms */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Single&apos;s price on every billing term (₹55, ₹69 or ₹289?)</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">₹69/mo — ₹55.20 with the code — is the 48-month rate and only
                            the 48-month rate.</strong> Every shorter term costs more per month. That is not a trick, it is
                            how the whole industry prices, but it catches people who assume ₹55 is a monthly plan they can
                            cancel in March.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            The mechanic most readers get wrong: Hostinger&apos;s &ldquo;per month&rdquo; figure is the
                            whole-term total divided by the number of months.{" "}
                            <strong className="text-white">There is no monthly instalment.</strong> You prepay the entire
                            term on day one — ₹3,126.53 for four years of Single with GST — and the advertised monthly rate
                            is arithmetic after the fact. Commit to less time and the per-month number goes up.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            I am deliberately not printing a 1/12/24-month price table here. Hostinger&apos;s India pricing
                            page only renders the 48-month figures without an interactive term selector, and I would rather
                            leave a gap than publish four numbers I could not read off the vendor myself. Use the term
                            dropdown on the pricing page and read them live — they move with every sale.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The practical rule, which does not depend on the exact figures:{" "}
                            <strong className="text-white">if four years upfront is not realistic, take the 12-month term,
                            not the 1-month one.</strong> Monthly billing carries the worst rate on the page and buys you
                            flexibility you will almost certainly not use — you are not going to move hosts in month three.
                            Twelve months is the honest compromise between cash flow and price. If you want to model this
                            against other hosts before committing, my{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                hosting cost calculator
                            </Link>{" "}
                            does the term maths for you.
                        </p>
                    </section>

                    {/* Eight-year cost of ownership */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The four-year bill nobody adds up</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">₹55.20/mo is cheap for exactly 48 months. Years five to eight
                            cost roughly five times as much.</strong> This is the single most important paragraph on the
                            page and it is the one the ads leave out.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Period</th>
                                        <th className="p-4">What you pay</th>
                                        <th className="p-4">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Hosting, years 1-4</td>
                                        <td className="p-4">₹55.20/mo with the code, prepaid</td>
                                        <td className="p-4 text-emerald-400 font-semibold">₹3,126.53</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Hosting, years 5-8</td>
                                        <td className="p-4">₹289/mo renewal × 48</td>
                                        <td className="p-4 text-amber-300 font-semibold">₹16,368.96</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Domain, year 1</td>
                                        <td className="p-4">.com promo (not included on Single)</td>
                                        <td className="p-4">~₹149</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Domain, years 2-8</td>
                                        <td className="p-4">.com renewal, roughly ₹1,000-₹1,400 a year</td>
                                        <td className="p-4 text-amber-300">₹7,000-₹9,800</td>
                                    </tr>
                                    <tr className="border-t border-white/5 bg-white/5">
                                        <td className="p-4 font-bold text-white">Eight-year total</td>
                                        <td className="p-4">Before add-ons and GST on the domain</td>
                                        <td className="p-4 font-bold text-white">~₹26,600-₹29,500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-5">
                            Look at the second row against the first. Four years of promo hosting costs ₹3,126.53; the next
                            four years cost ₹16,368.96 at today&apos;s renewal rate. Same server, same plan, five times the
                            money. Email is the same shape — free for the first year, billed after — and if you ever move
                            the domain away, a .com transfer-in runs about ₹969.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The takeaway to hold on to:{" "}
                            <strong className="text-white">the discount is a four-year loan against a much higher
                            steady-state price.</strong> When you compare Hostinger to a rival, compare renewal to renewal,
                            not promo to promo, because the promo is the part that expires. Renewal rates also change, so
                            treat ₹289 as today&apos;s figure rather than a contract. The full picture, including how to
                            negotiate at renewal, is in my{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger renewal price guide
                            </Link>.
                        </p>
                    </section>

                    {/* The honest catches */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Three things the ad does not say</h2>
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">1. It is paid upfront, all four years of it, plus GST</h3>
                                <p className="text-gray-300 leading-8">
                                    ₹55.20/mo is ₹2,649.60 before tax and ₹3,126.53 charged to your card today. Hostinger
                                    states the upfront part plainly on their pricing page — &ldquo;all plans are paid
                                    upfront&rdquo; — but the big number on the card is the monthly one, and the 18% GST
                                    only appears in the order summary. Shorter terms exist and cost more per month.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">2. Single has no free domain</h3>
                                <p className="text-gray-300 leading-8">
                                    Every other plan includes a domain free for the first year. Single does not — Hostinger
                                    says so in its own hosting FAQ. Budget about ₹149 for a first-year .com or ₹99 for a
                                    .in. That is a small line item, not a reason to jump to Premium; jump to Premium for
                                    the RAM and the databases if you need them.
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

                    {/* Free domain question */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Does the ₹69 Single plan include a free domain?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">No.</strong> Hostinger&apos;s own web hosting FAQ puts it in one
                            sentence: with the exception of the Single plan, all its hosting options include a free domain
                            when you buy a term longer than a year. Single is the exception, and it has been the exception
                            for as long as the tier has existed.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            Worth flagging, because it will confuse you at some point: the plan cards on some Hostinger
                            India landing pages render a shared feature list across all four tiers, so a{" "}
                            <strong className="text-white">&ldquo;Free domain&rdquo;</strong> bullet can appear on the
                            Single card even though the FAQ on the same site says otherwise. Do not argue with the card.
                            Put Single in the cart and read the order summary — if a domain is genuinely included it will
                            be itemised there at ₹0.00.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Three things to know whichever way it lands for you.{" "}
                            <strong className="text-white">One:</strong> a free domain is always first year only — a .com
                            renews at roughly ₹1,000-₹1,400 a year afterwards, so the &ldquo;free&rdquo; part is a ₹149
                            discount, not a permanent saving. <strong className="text-white">Two:</strong> buying one
                            yourself is cheap anyway, around ₹149 for a .com promo or ₹99 for a .in.{" "}
                            <strong className="text-white">Three:</strong> the domain sits outside the 30-day hosting
                            money-back guarantee on a much shorter refund window, so if you claim a free domain and then
                            cancel the hosting, expect the domain cost to be deducted from your refund. That last one is
                            the trap, and it is worth ₹149 to avoid it by registering the domain separately.
                        </p>
                    </section>

                    {/* Checkout add-ons */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What gets added at checkout</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Add-ons are billed for the whole term upfront too, so a ₹99/mo
                            extra on a 48-month order is ₹4,752 — more than the hosting itself.</strong> This is where a
                            ₹3,126 order quietly becomes a ₹9,000 one, and it is the only part of the process where you can
                            genuinely lose money by clicking through too fast.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            I am not going to tell you exactly which boxes are ticked on the day you buy, because that
                            rotates and I would be guessing. What I can tell you is the shape of what gets offered: domain
                            privacy protection, extended or daily backups, priority support, website-builder and AI
                            credits, security extras, and the business email upgrade that starts billing once the free
                            first year ends. None of them are scams. All of them are optional, and all of them are charged
                            for the full four years at once.
                        </p>
                        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6">
                            <p className="text-gray-300 leading-8">
                                <strong className="text-white">The check that takes ten seconds:</strong> before you pay,
                                expand the order summary and compare the grand total against the with-GST figure from the
                                table above. Single on 48 months should read ₹3,126.53. If your total is higher, something
                                is on that you did not choose — go back and untick it. Add-ons bought at signup are charged
                                for the full term and are not refunded pro-rata if you drop them later.
                            </p>
                        </div>
                    </section>

                    {/* Which to buy */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Which plan should you buy?</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {PLANS.map((p) => (
                                <div key={p.name} id={p.id} className={`scroll-mt-28 flex flex-col rounded-2xl border p-6 ${p.highlight ? "border-primary-500/50 bg-primary-500/[0.07]" : "border-white/10 bg-white/[0.03]"}`}>
                                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-white">{p.name}</h3>
                                        <span className="text-sm font-bold text-emerald-400">{p.referral}/mo</span>
                                        <span className="text-xs text-gray-500">{p.off} off</span>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-7 mb-3">{p.best}</p>
                                    <p className="text-xs text-gray-500 leading-6 mb-4">
                                        {p.sites} {p.sites === "1" ? "website" : "websites"} · {p.storage} · {p.ram} RAM ·{" "}
                                        {p.db} databases · {p.bandwidth} bandwidth · {p.withGst} today with GST · renews {p.renews}/mo
                                    </p>
                                    <a
                                        href={REFERRAL_URL}
                                        target="_blank"
                                        rel="nofollow sponsored noopener"
                                        className={`mt-auto inline-block text-center font-semibold px-5 py-2.5 rounded-xl transition-all ${p.highlight
                                            ? "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white shadow-lg shadow-purple-900/30"
                                            : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`}
                                    >
                                        Check {p.name} Price →
                                    </a>
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

                    {/* Rival comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Cheapest hosting in India: how ₹55 compares</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Hostinger does not have the lowest headline number in India —
                            it ties with it.</strong> MilesWeb&apos;s entry plan advertises the same ₹69/mo. What separates
                            them is the 20% code, which pulls Hostinger to ₹55.20, and what happens at renewal, where the
                            comparison flips completely.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Entry plan</th>
                                        <th className="p-4">Intro price</th>
                                        <th className="p-4">Term you must buy</th>
                                        <th className="p-4">Renews at</th>
                                        <th className="p-4">Storage / RAM</th>
                                        <th className="p-4">Sites</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5 bg-primary-500/[0.06]">
                                        <td className="p-4 font-semibold text-white">Hostinger Single</td>
                                        <td className="p-4 text-emerald-400 font-bold">₹69 (₹55.20 with code)</td>
                                        <td className="p-4">48 months</td>
                                        <td className="p-4 text-amber-300">₹289/mo</td>
                                        <td className="p-4">10 GB SSD / 1 GB</td>
                                        <td className="p-4">1</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">MilesWeb Starter</td>
                                        <td className="p-4">₹69</td>
                                        <td className="p-4">36 months + 3 free</td>
                                        <td className="p-4 text-emerald-400">Same price, per their guarantee</td>
                                        <td className="p-4">10 GB NVMe / 756 MB</td>
                                        <td className="p-4">1</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Bluehost India Starter</td>
                                        <td className="p-4">₹199</td>
                                        <td className="p-4">36 months</td>
                                        <td className="p-4 text-amber-300">₹349/mo</td>
                                        <td className="p-4">10 GB NVMe / not published</td>
                                        <td className="p-4">10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mb-5">
                            All figures read off each vendor&apos;s own India pricing page on 7 September 2026, before GST.
                            GoDaddy and BigRock also compete at this tier, but I could not read their live India prices at
                            the time of writing, so I am not quoting numbers for them.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            The honest read across those rows. Over the promo period{" "}
                            <strong className="text-white">Hostinger wins on price only because of the code</strong> —
                            ₹2,649.60 for 48 months against roughly ₹3,312 for the same period at MilesWeb&apos;s ₹69.
                            That is a ₹662 gap over four years, which is real but small. MilesWeb gives you NVMe storage at
                            that price where Hostinger gives you SSD, and less RAM: 756 MB against 1 GB.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Renewal is where they diverge, and not in Hostinger&apos;s
                            favour.</strong> Hostinger Single goes to ₹289/mo. MilesWeb advertises a &ldquo;same price at
                            renewal&rdquo; guarantee, which if it holds means year five costs what year one did. Judged
                            renewal-to-renewal rather than promo-to-promo, MilesWeb is the cheaper long-term host at this
                            tier and it is not close. Bluehost sits in a different bracket — ₹199/mo, but ten websites and
                            NVMe, so per site it is arguably the best value of the three if you actually need ten.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Where Hostinger earns the recommendation is everything that is not the price tag: hPanel is
                            genuinely the easiest control panel in this bracket, LiteSpeed and the India data centre in
                            Mumbai are a real speed advantage for Indian traffic, free unlimited migration is included on
                            every tier, and the range above Single scales further than either rival&apos;s. Buy on the
                            four-year total and Hostinger wins; buy on the eight-year total and you should look hard at
                            MilesWeb. Fuller comparisons in{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                cheap web hosting under ₹200
                            </Link>{" "}
                            and{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                the best web hosting in India
                            </Link>.
                        </p>
                    </section>

                    {/* Upgrade path */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">When to upgrade from Single — and what it costs mid-term</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">You pay only the prorated difference for the months left on your
                            term, and the upgrade takes a few minutes in hPanel with the site staying live.</strong> That
                            single fact is why buying Single first is a low-risk decision and buying Cloud Startup
                            &ldquo;to be safe&rdquo; is not.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">Four signs you have outgrown Single, in the order you will meet them:</p>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">The resource usage graph in hPanel keeps hitting its ceiling</strong>, or visitors start seeing 503s at your busiest hour. That is the 1 GB of RAM, not your theme.</li>
                            <li><strong className="text-white">The WordPress admin crawls while the front end is fine.</strong> Cached pages are cheap to serve; the editor is not. This is the classic 1 GB symptom.</li>
                            <li><strong className="text-white">You need a second site or a staging copy.</strong> Single caps you at one website and two databases, and there is no add-on that lifts either.</li>
                            <li><strong className="text-white">You want daily backups before you start taking money.</strong> Single is weekly. Losing six days of orders is a worse outcome than the upgrade cost.</li>
                        </ul>
                        <p className="text-gray-300 leading-8 mb-5">
                            The mechanics are undramatic. In hPanel, go to your website or billing section and choose the
                            upgrade; files, databases and email carry over, and the billing system charges the difference
                            against the time remaining rather than restarting your term.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Two traps worth naming. <strong className="text-white">First, upgrade while your promo term is
                            still running</strong> — the difference is calculated against promo rates, so it is meaningfully
                            cheaper than waiting for renewal and buying the higher tier at ₹449 or ₹649.{" "}
                            <strong className="text-white">Second, you cannot downgrade for a refund.</strong> Money spent
                            on a tier you did not need is gone for four years. Both point the same way: start at the plan
                            you need today, upgrade when the graph tells you to.
                        </p>
                    </section>

                    {/* Shared vs VPS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">₹55 shared vs ₹479 VPS: when the cheap plan is the wrong purchase</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">If your project needs Node, Laravel, a staging pair or root
                            access, the KVM 1 VPS at ₹599/mo — ₹479.20 with the code — is the correct buy and Single is a
                            false economy.</strong> You will spend a month fighting a plan that was never built for it.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            The specs make the point without much commentary. Single gives you 1 GB of RAM and a share of
                            one CPU core on a machine you share with other customers. KVM 1 gives you 1 dedicated vCPU,{" "}
                            <strong className="text-white">4 GB of RAM</strong>, 50 GB of NVMe and 4 TB of transfer on AMD
                            EPYC hardware. Four times the RAM for roughly nine times the price — but dedicated rather than
                            shared, which is the part that matters when your own code is the thing consuming it.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Be honest with yourself about the trade, though. A VPS is unmanaged: you patch it, you secure
                            it, you fix it at 2am. And the renewal is ₹999/mo against Single&apos;s ₹289, so the long-term
                            gap is wider than the promo gap. The rule of thumb I use:{" "}
                            <strong className="text-white">shared hosting for WordPress you do not want to administer, a
                            VPS the moment you are running your own application code.</strong> The whole KVM range, with
                            renewals, is in my{" "}
                            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger KVM VPS guide
                            </Link>.
                        </p>
                    </section>

                    {/* What's included that isn't on the card */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What ₹55 buys that isn&apos;t printed on the price card</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Even the cheapest plan includes free automatic SSL, free
                            unlimited website migration and a Mumbai data centre</strong> — the things people assume are
                            paid extras and then budget for twice.
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">LiteSpeed</strong> web server, plus the LiteSpeed cache plugin for WordPress. On a 1 GB plan, caching is doing most of the work keeping you inside the limits.</li>
                            <li><strong className="text-white">hPanel, not cPanel</strong>, with one-click WordPress installation. Faster to learn and it does not carry a cPanel licence cost.</li>
                            <li><strong className="text-white">Free SSL, installed automatically.</strong> No certificate to buy, renew or configure.</li>
                            <li><strong className="text-white">Free unlimited migration with no downtime</strong> — on Single too, not just the expensive tiers. If you are moving an existing site, this is the line item you were expecting to pay for.</li>
                            <li><strong className="text-white">India (Mumbai) data centre, chosen at signup.</strong> For Indian traffic this is the single biggest speed decision you make, and it costs nothing. If you picked wrong, hPanel has a free self-transfer.</li>
                            <li><strong className="text-white">Weekly automatic backups and 24/7 chat support</strong>, on the cheapest plan.</li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            And the counter-list, because it matters just as much:{" "}
                            <strong className="text-white">Single does not get a CDN, daily backups, a staging environment
                            or the priority support queue, and its storage is SSD rather than NVMe.</strong> Those are the
                            things you are giving up to sit at ₹55.20, and for a small site none of them are fatal. For a
                            site that earns money, the backup frequency is the one I would not compromise on. If you are
                            bringing a site over from another host, the process is in my{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                WordPress migration guide
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
                            <li><strong className="text-white">Expand the order summary and check the total.</strong> Single on 48 months should read ₹3,126.53 with 18% GST. Anything higher means an add-on is still on. GST-registered? Tick &ldquo;Add company details&rdquo; and enter your GSTIN before you pay.</li>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Hostinger&apos;s cheapest plan at ₹55.20/mo</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            86% off Single — ₹3,126.53 for four years once GST goes on — or ₹199.20/mo for Unlimited with
                            NVMe, a CDN, daily backups and a free domain. Free SSL, free migration and 30 days to change
                            your mind on every tier. The code applies itself; check the badge before you pay, and check the
                            order summary total against the table above.
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
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS plans</Link> — when shared hosting is the wrong purchase.</li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best web hosting in India</Link> — the wider field, not just Hostinger.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hosting cost calculator</Link> — model the term and renewal maths yourself.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this offer</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
