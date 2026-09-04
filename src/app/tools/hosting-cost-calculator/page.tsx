import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";

const CANONICAL = "https://mohitkoli.in/tools/hosting-cost-calculator";

export const metadata: Metadata = {
    title: "Hosting Cost Calculator India — Intro vs Renewal Price",
    description:
        "Free calculator: see what web hosting really costs over 1-10 years in India. Compares the discounted long-term price against standard renewal rates, with GST.",
    keywords: [
        "hosting cost calculator",
        "web hosting cost calculator india",
        "hostinger cost calculator",
        "hostinger renewal calculator",
        "hosting price calculator india",
        "how much does web hosting cost in india",
        "hosting renewal cost",
        "web hosting total cost of ownership",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hosting Cost Calculator India — Intro vs Renewal Price",
        description:
            "Pick a plan and a number of years. See the long-term price against the standard renewal rate, the upfront invoice, and GST — all with September 2026 India pricing.",
        url: CANONICAL,
        type: "website",
        images: [{ url: "/assets/blog/hostinger-renewal-price-india-2026.png", width: 1200, height: 630, alt: "Hosting cost calculator for India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hosting Cost Calculator India — Intro vs Renewal",
        description: "What hosting actually costs over 1-10 years, including the renewal rate nobody advertises.",
        images: ["/assets/blog/hostinger-renewal-price-india-2026.png"],
    },
};

const FAQ = [
    {
        q: "How much does web hosting cost per year in India?",
        a: "On the deepest long-term discount, shared hosting runs about ₹828 to ₹7,188 per year depending on the plan — but that rate only holds for your initial term. At standard renewal rates the same plans cost roughly ₹3,468 to ₹19,188 per year. The calculator on this page shows both numbers side by side for the number of years you actually plan to keep the site.",
    },
    {
        q: "Why is the hosting renewal price higher than what I paid?",
        a: "Intro pricing is a first-purchase discount, not a permanent rate. When your term expires the plan reverts to its standard price — commonly three to four times the intro rate. No coupon or referral discount applies to a renewal, which is why the longest first term saves the most money overall.",
    },
    {
        q: "Is hosting billed monthly or upfront in India?",
        a: "The advertised per-month rate is a division, not a billing cycle. A 48-month term at ₹149/mo is billed as a single upfront invoice of roughly ₹7,152, plus 18% GST at checkout. True month-to-month billing is available on some plans but carries no discount at all.",
    },
    {
        q: "Does GST apply to web hosting in India?",
        a: "Yes — 18% GST is added at checkout on Indian billing, on top of the listed price. Budget the invoice slightly above the sticker rate. If you have a GSTIN you can usually enter it during checkout for input credit.",
    },
    {
        q: "Is it cheaper to buy a 4-year hosting plan upfront?",
        a: "Almost always, yes — provided you are confident the site will still exist. The 48-month term carries the deepest discount of any option, and the intro rate is locked for the entire term rather than just the first year. The trade-off is a larger single payment and a 30-day window in which to change your mind.",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebApplication",
            name: "Hosting Cost Calculator (India)",
            url: CANONICAL,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
                "Calculates the total cost of web hosting in India over 1-10 years, comparing discounted long-term pricing against standard renewal rates, including GST.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in" },
        },
        {
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in" },
                { "@type": "ListItem", position: 2, name: "Tools", item: "https://mohitkoli.in/tools/hosting-cost-calculator" },
                { "@type": "ListItem", position: 3, name: "Hosting Cost Calculator", item: CANONICAL },
            ],
        },
    ],
};

export default function HostingCostCalculatorPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Hosting Cost Calculator</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Free Tool · India Pricing</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hosting Cost Calculator: What You&apos;ll Actually Pay
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-4">
                        Hosting is advertised at one price and renewed at another. Pick a plan and how long you
                        realistically plan to keep the site, and this works out{" "}
                        <strong className="text-white">both numbers</strong> — the discounted long-term price and
                        the standard renewal rate — so you can see the real gap before you commit.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        Disclosure: the button inside the calculator uses my referral code, which applies an extra
                        discount for you and pays me a commission at no additional cost. All prices were checked on
                        Hostinger&apos;s India storefront in September 2026 and can change at any time — always
                        confirm in the cart.
                    </p>

                    <Calculator />

                    {/* ---------------- Supporting content ---------------- */}
                    <section className="mt-14">
                        <h2 className="text-2xl font-bold text-white mb-4">How to read the two numbers</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The green figure assumes you buy the longest term available and pay it in one invoice.
                            The intro rate is locked for the whole term — not just the first year, which is the
                            single most misunderstood thing about hosting pricing.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The amber figure is what the same plan costs at its standard rate. That is what you pay
                            once a term expires, and what short-term buyers drift towards. Nothing about the server
                            changes between the two numbers — only when you signed.
                        </p>
                        <p className="text-gray-300 leading-8">
                            If the gap looks implausible, that is the point of the tool. A four-year commitment on
                            the Premium plan costs less than a single year and a half at the renewal rate. I broke
                            the same arithmetic down plan by plan in my{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger renewal price guide
                            </Link>.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-4">What this calculator does not include</h2>
                        <ul className="space-y-3 text-gray-300 leading-7">
                            <li>
                                <strong className="text-white">Your domain after year one.</strong> Most plans include
                                a domain free for the first year, then renew it at standard rates — commonly ₹1,000–1,400
                                for a .com. Budget for it separately.
                            </li>
                            <li>
                                <strong className="text-white">Migration or setup costs.</strong> Usually zero on shared
                                hosting, since migration tools are free, but worth checking if you are moving a large site.
                            </li>
                            <li>
                                <strong className="text-white">Paid plugins, themes, or email.</strong> Mailboxes are
                                typically free for the first year and chargeable after.
                            </li>
                            <li>
                                <strong className="text-white">Seasonal sales.</strong> Black Friday and New Year pricing
                                dips below the rates used here. If you can wait, wait.
                            </li>
                        </ul>
                        <p className="mt-5 text-gray-300 leading-8">
                            For the full feature-by-feature comparison of every tier — storage, websites, backups and
                            what each one is actually built for — see my{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                complete plans and pricing breakdown
                            </Link>{" "}
                            or, if budget is the deciding factor, the{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                guide to hosting under ₹200/month
                            </Link>.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {FAQ.map((f) => (
                                <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
                                        {f.q}
                                    </summary>
                                    <p className="mt-3 text-gray-300 leading-8">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
