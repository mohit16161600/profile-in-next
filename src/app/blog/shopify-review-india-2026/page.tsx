import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/shopify-review-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/shopify-review-india-2026.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Shopify Review India 2026: Costs, Fees and the Catch",
    description:
        "Shopify Basic is ₹1,994/mo, but Shopify Payments does not work in India so 2% goes on every order. What Indian sellers actually pay.",
    keywords: [
        "shopify review india", "shopify review 2026", "shopify india pricing", "is shopify worth it india",
        "shopify transaction fee india", "shopify payments india", "shopify basic plan india",
        "shopify pros and cons", "shopify for indian sellers", "shopify hidden costs",
        "shopify alternatives india", "start online store india",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Shopify Review India 2026: Costs, Fees and the Catch",
        description: "What Indian sellers actually pay once the transaction fee, gateway and GST are counted.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Shopify reviewed for Indian sellers in 2026" }],
    },
    twitter: {
        card: "summary_large_image", title: "Shopify Review India 2026: Costs, Fees and the Catch",
        description: "The real monthly cost for Indian sellers, honestly counted.", images: [IMAGE],
    },
};

const RATINGS: [string, string, string][] = [
    ["Ease of setup", "Strong", "A working store the same day, with no technical knowledge required."],
    ["Design and themes", "Strong", "Good free themes; premium ones are polished but a real one-off cost."],
    ["App ecosystem", "Strong", "Something exists for almost every need — and most of it is a monthly subscription."],
    ["Payments in India", "Weak", "Shopify Payments unavailable; third-party gateway plus a Shopify transaction fee."],
    ["Value for money", "Mixed", "Excellent at low effort, expensive at volume once fees compound."],
    ["SEO control", "Mixed", "Competent, but URL structures are partly fixed compared with WordPress."],
];

const FAQ = [
    { q: "How much does Shopify cost in India?", a: "Basic is ₹1,499/month on annual billing or ₹1,994/month billed monthly. The Shopify plan is around ₹7,447/month and Advanced around ₹30,164/month. Those are subscription figures only — the transaction fee, payment gateway charges, GST and apps are all additional." },
    { q: "Why do Indian sellers pay a Shopify transaction fee?", a: "Because Shopify Payments is not available in India. Shopify waives its transaction fee when you use their own payment product; since Indian merchants cannot, the fee applies to every order. On Basic that is 2%, on top of what Razorpay, PayU or Cashfree charge you separately." },
    { q: "Is Shopify worth it for a small Indian store?", a: "It depends on volume. Below roughly ₹1 lakh a month in revenue the fixed costs are a large share of your margin, and WooCommerce on cheap hosting is dramatically cheaper. Between ₹1 and ₹5 lakh the convenience genuinely earns its keep. Above that, the percentage fee becomes the thing to optimise." },
    { q: "What are Shopify's hidden costs?", a: "Not hidden exactly, but easy to underestimate: the transaction fee, paid apps (which add up fast — several at ₹1,000-₹2,000/month each), a premium theme, GST on the subscription, and your payment gateway's own percentage. Budget realistically at two to five times the sticker price." },
    { q: "Can I use Razorpay or PayU with Shopify?", a: "Yes — Shopify supports a range of Indian gateways and setting one up is straightforward. Just remember that using any third-party gateway is precisely what triggers Shopify's own transaction fee, so you are paying two percentages on each sale." },
    { q: "Is Shopify good for SEO?", a: "It is competent. You get editable titles, meta descriptions, alt text and a clean sitemap. The limitation is structural: Shopify enforces certain URL patterns (like /products/ and /collections/) that you cannot change. For most stores this matters far less than having good product pages and content." },
    { q: "What is the best Shopify alternative in India?", a: "WooCommerce on WordPress, if you can manage a site — free software, no transaction fee, and hosting from a few hundred rupees a month. It trades money for time and technical responsibility. For a comparison of what each really costs, see the dedicated breakdown." },
    { q: "Does GST apply to the Shopify subscription in India?", a: "Yes — 18% GST is added to the subscription invoice for Indian merchants, so Basic's ₹1,499 annual-billing rate lands around ₹1,769 a month on paper. It is claimable as input credit if you are GST-registered, but it is real cash flow either way. Factor it in whenever you compare plans." },
    { q: "Can I offer Cash on Delivery on Shopify in India?", a: "Yes. COD can be enabled as a manual payment method, and several apps add COD-specific controls like order verification and pincode rules. Just budget for the COD reality every Indian seller learns: return-to-origin rates are meaningfully higher than on prepaid orders, and each failed delivery costs you two-way shipping." },
    { q: "How long does it take to actually launch?", a: "The store itself is a one-day build — theme, products, pages. The real timeline is set by payment gateway approval, which typically takes a few working days of KYC review after you submit business and bank details. Start the gateway application on day one, in parallel with building the store." },
    { q: "Does Shopify have a free trial?", a: "Shopify typically offers a short free trial and has run promotional first-month pricing at various points. Terms change frequently, so check their India pricing page directly rather than trusting a figure quoted in an article — including this one." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Shopify Review India 2026: Costs, Fees and the Catch",
        description: "What Indian sellers actually pay on Shopify once transaction fees, gateways and GST are counted.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "shopify review india, shopify india pricing, shopify transaction fee india, is shopify worth it india",
        articleSection: "Ecommerce", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Shopify Review India", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function ShopifyReviewIndia() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Shopify Review India</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Ecommerce</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Shopify Review for Indian Sellers: Excellent Product, Awkward Pricing
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Shopify is the best-built ecommerce platform most people can buy. It is also structurally more
                            expensive in India than almost anywhere else, for a reason that has nothing to do with the
                            software. Here is the honest picture.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>10 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/shopify-review-india-2026.svg" alt="Shopify reviewed for Indian sellers" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Pricing checked against
                        Shopify&apos;s India pages in August 2026. This review is based on published pricing, documented
                        features and fee structures rather than a store of my own.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Verdict up front</h2>
                        <p className="text-gray-300 leading-8">
                            Use Shopify if you want to be selling this week and your margins can absorb roughly ₹6,000 to
                            ₹15,000 a month all-in. Do not use it if you are pre-revenue, if your margins are thin, or if
                            you are comfortable running WordPress — the 2% transaction fee Indian sellers cannot avoid
                            compounds into real money as you grow.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pricing in India</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Plan</th><th className="p-4">Annual billing</th><th className="p-4">Monthly billing</th><th className="p-4">Who it is for</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Basic</td><td className="p-4">₹1,499/mo</td><td className="p-4">₹1,994/mo</td><td className="p-4">New stores</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Shopify</td><td className="p-4">—</td><td className="p-4">₹7,447/mo</td><td className="p-4">Growing volume, lower fee %</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Advanced</td><td className="p-4">—</td><td className="p-4">₹30,164/mo</td><td className="p-4">High volume, lowest fee %</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Annual billing on Basic saves about 25%. The higher tiers exist mainly to reduce the
                            transaction fee, so above a certain revenue the expensive plan genuinely costs less overall —
                            do that arithmetic with your own numbers rather than assuming Basic is cheapest.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The payments problem</h2>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 mb-5">
                            <p className="text-gray-300 leading-8">
                                Shopify normally waives its transaction fee when you use Shopify Payments.{" "}
                                <strong className="text-white">Shopify Payments is not available in India.</strong> Every Indian
                                merchant therefore uses a third-party gateway, and the fee applies — 2% per order on Basic,
                                on top of the gateway&apos;s own charge.
                            </p>
                        </div>
                        <p className="text-gray-300 leading-8">
                            To put a number on it: at ₹5 lakh monthly revenue that is ₹10,000 a month in Shopify
                            transaction fees, plus ₹1,994 subscription, plus roughly 2% again to your gateway. The
                            software is excellent; the structure is simply less favourable here than in markets where
                            Shopify Payments operates.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What a real store pays: worked example</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Percentages hide the pain, so here is the arithmetic for a store doing{" "}
                            <strong className="text-white">₹2,00,000 a month</strong> in sales on the Basic plan with
                            annual billing. Assumptions are labelled — swap in your own numbers.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Cost line</th><th className="p-4">Monthly</th><th className="p-4">Basis</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Subscription (annual billing)</td><td className="p-4">₹1,499</td><td className="p-4">Basic plan, before GST</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">GST on subscription</td><td className="p-4">~₹270</td><td className="p-4">18% on the subscription invoice</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Shopify transaction fee</td><td className="p-4 text-amber-300">₹4,000</td><td className="p-4">2% of ₹2,00,000 — the India-specific cost</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Payment gateway fee</td><td className="p-4">~₹4,000</td><td className="p-4">Typically around 2%, varies by gateway and method</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-medium text-white">Apps (assume two paid)</td><td className="p-4">~₹2,000</td><td className="p-4">Reviews, bundles, marketing apps add up fast</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-bold text-white">Total</td><td className="p-4 font-bold text-red-300">~₹11,770</td><td className="p-4">≈ 5.9% of revenue, before shipping and ads</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Two things jump out. The subscription — the number everyone compares — is barely 15% of the
                            real monthly cost. And the two percentage fees scale with revenue, which is why the same
                            store at ₹5 lakh a month suddenly finds the mid-tier Shopify plan (lower transaction fee)
                            cheaper overall. Run this table with your own revenue before choosing a plan.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Starting a Shopify store in India: the 7 steps</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            The setup itself is genuinely a one-day job. The waiting is elsewhere — gateway approval and
                            your first stock photos. In order:
                        </p>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside mb-5">
                            <li><strong className="text-white">Start the trial</strong> and pick your store name — you can connect a proper domain later, so do not overthink it today.</li>
                            <li><strong className="text-white">Choose a free theme first.</strong> Dawn (the default) converts fine. Buy a premium theme after revenue, not before.</li>
                            <li><strong className="text-white">Add 5-10 products properly</strong> rather than 50 badly — sharp photos on a clean background, honest descriptions, GST-inclusive pricing.</li>
                            <li><strong className="text-white">Apply to a payment gateway</strong> — Razorpay, PayU or Cashfree. This is the step with a real wait: KYC review typically takes a few days, and they will ask for business and bank details, usually including GST information.</li>
                            <li><strong className="text-white">Set up shipping.</strong> Most Indian stores plug in an aggregator like Shiprocket or Delhivery through the app store rather than negotiating courier rates directly.</li>
                            <li><strong className="text-white">Configure taxes</strong> — enable India GST settings so invoices come out right, and confirm the details with your CA rather than a blog (including this one).</li>
                            <li><strong className="text-white">Place a real test order</strong> — pay, receive the emails, process the refund — before you spend a rupee on ads.</li>
                        </ol>
                        <p className="text-gray-300 leading-8">
                            If you get to step 4 and the fees make you hesitate, that is the moment to re-read the{" "}
                            <Link href="/blog/shopify-vs-woocommerce" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Shopify vs WooCommerce cost comparison
                            </Link>{" "}
                            — it is much cheaper to change your mind before the gateway paperwork than after.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Scorecard</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200"><tr><th className="p-4 font-semibold">Area</th><th className="p-4">Rating</th><th className="p-4">Why</th></tr></thead>
                                <tbody className="text-gray-300">
                                    {RATINGS.map(([area, score, why]) => (
                                        <tr key={area} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">{area}</td>
                                            <td className={`p-4 ${score === "Strong" ? "text-emerald-400" : score === "Weak" ? "text-red-300" : "text-amber-300"}`}>{score}</td>
                                            <td className="p-4">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pros and cons</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>Live store the same day, no technical skill needed</li>
                                    <li>Hosting, security, updates and SSL are not your problem</li>
                                    <li>Genuinely good free themes</li>
                                    <li>Huge app ecosystem for anything you need</li>
                                    <li>Reliable checkout that people already trust</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Not so good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>2% transaction fee Indian sellers cannot avoid</li>
                                    <li>App subscriptions accumulate quickly</li>
                                    <li>Real cost is 2–5× the advertised subscription</li>
                                    <li>URL structure partly fixed, limiting SEO control</li>
                                    <li>You are renting, not owning, the platform</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Who should use it</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                ["Use Shopify", "You have a product and want to sell now. You are not technical, your margins are healthy, and speed to market matters more than a few thousand rupees a month."],
                                ["Skip Shopify", "You are pre-revenue, margins are thin, or you already know WordPress. WooCommerce costs a fraction and the fee difference alone can fund your ads."],
                            ].map(([who, body]) => (
                                <div key={who} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">{who}</h3>
                                    <p className="text-sm text-gray-300 leading-7">{body}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-300 leading-8">
                            Full cost comparison against the alternative is in{" "}
                            <Link href="/blog/shopify-vs-woocommerce" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Shopify vs WooCommerce for Indian sellers
                            </Link>.
                            <span className="text-gray-500"> [AFFILIATE_LINK: SHOPIFY]</span>
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Shopify vs selling on marketplaces first</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The question Indian sellers should ask before &ldquo;Shopify or WooCommerce&rdquo; is
                            &ldquo;own store or marketplace?&rdquo; Amazon, Flipkart and Meesho bring you traffic on day
                            one — the single hardest thing about running your own store — and in exchange they take
                            commission, own the customer relationship, and can change terms whenever they like.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Shopify is the opposite trade: every rupee of margin and every customer email is yours, but
                            nobody visits until you bring them. The mature answer for most new sellers is sequencing,
                            not either/or — <strong className="text-white">validate demand on a marketplace, then build the
                            brand store once you know what sells</strong>. Plenty of established sellers run both, using
                            the marketplace for discovery and the Shopify store for repeat buyers and better margins.
                        </p>
                        <p className="text-gray-300 leading-8 mb-8">
                            If you are pre-revenue with an untested product, spending ₹12,000 a month on store
                            infrastructure is usually premature. That is not a knock on Shopify — it is a note about
                            timing.
                        </p>

                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Shopify in India</h2>
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
                            <li><Link href="/blog/shopify-vs-woocommerce" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Shopify vs WooCommerce</Link> — the full cost comparison.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting for stores</Link> — if you go the WooCommerce route.</li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best web hosting in India</Link> — where a self-hosted store lives.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this review</h2>
                        <ShareButtons url={CANONICAL} title="Shopify Review India 2026: Costs, Fees and the Catch" />
                    </div>
                </article>
            </main>
        </>
    );
}
