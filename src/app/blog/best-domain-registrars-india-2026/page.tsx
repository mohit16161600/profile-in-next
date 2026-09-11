import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/best-domain-registrars-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-domain-registrars-india-2026.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";
const UPDATED = "2026-09-07T00:00:00.000Z";
const TITLE = "Best Domain Registrar India 2026: .in ₹99, .com ₹149";

const HOSTINGER = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const HOSTINGER_TRANSFER = "https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli";
const DYNADOT = "https://www.dynadot.com/?s7f7O16308s7px";
const NAMECHEAP = "https://namecheap.pxf.io/c/7673063/1632743/5618";

export const metadata: Metadata = {
    title: TITLE,
    description:
        "Year one is cheap everywhere. Only a few registrars keep the price flat at renewal — 8 compared on five-year cost, GST, UPI billing and .in e-KYC.",
    keywords: [
        "best domain registrar", "best domain registrar india", "cheapest domain registrar",
        "domain renewal price comparison", "namecheap vs godaddy vs porkbun", "porkbun review",
        "dynadot review", "where to buy domain india", "cheapest .com domain", "domain price comparison 2026",
        "domain registrar with no price increase", "best place to buy domain",
        "cheapest domain registrar in india", "domain price in india",
        "how much does a .com domain cost in india", "best domain registrar for .in domains",
        "flat renewal domain registrar", "domain renewal price comparison india",
        "cheapest .in domain registration", "gst on domain registration india",
        "does godaddy support upi payments in india", "domain registrar that accepts upi",
        "in domain kyc verification nixi", "e-kyc for .in domain",
        "can i register a .in domain from outside india", ".in vs .com which is better for seo in india",
        "transfer domain from godaddy", "how long does a domain transfer take",
        "what happens if i forget to renew my domain", "domain redemption fee india",
        "free domain with hosting india", "is porkbun safe", "dynadot flat pricing",
        "spaceship domain registrar review", "cloudflare registrar at-cost pricing",
        "is cloudflare registrar actually free", "namecheap vs godaddy price india",
        "bigrock domain price renewal", "whois privacy free registrar",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: "The renewal is the bill. .in from ₹99, .com from ₹149 in year one — and what eight registrars actually cost an Indian buyer over five years.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: UPDATED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Best domain registrars in India compared on five-year rupee cost" }],
    },
    twitter: {
        card: "summary_large_image", title: TITLE,
        description: "The renewal price is the real price. Eight registrars compared in rupees, with GST, e-KYC and UPI.", images: [IMAGE],
    },
};

/* Prices checked 7 September 2026 against each registrar's own pricing page. Dollar
   figures are the registrar's published price; rupee equivalents are converted at
   roughly ₹94.5 to the dollar and exclude GST. "Check live" marks registrars whose
   pricing pages refuse automated checks — no unverified number is printed here. */
const REGISTRARS = [
    {
        name: "Dynadot", url: DYNADOT, badge: "Flat pick",
        comFirst: "$10.88 (~₹1,030)", comRenew: "$10.88 (~₹1,030)",
        inFirst: "$6.35 (~₹600)", inRenew: "$6.35 (~₹600)",
        pattern: "Flat", flat: true,
    },
    {
        name: "Porkbun", url: "", badge: "Flat pick",
        comFirst: "$11.08 (~₹1,045)", comRenew: "$11.08 (~₹1,045)",
        inFirst: "$7.83 (~₹740)", inRenew: "$7.83 (~₹740)",
        pattern: "Flat", flat: true,
    },
    {
        name: "Hostinger", url: HOSTINGER, badge: "Year-one pick",
        comFirst: "~₹149", comRenew: "~₹1,000–1,400",
        inFirst: "~₹99", inRenew: "Standard rate",
        pattern: "Loss-leader", flat: false,
    },
    {
        name: "Namecheap", url: NAMECHEAP, badge: "",
        comFirst: "Check live", comRenew: "Check live",
        inFirst: "Check live", inRenew: "Check live",
        pattern: "Promo-led", flat: false,
    },
    {
        name: "GoDaddy India", url: "", badge: "",
        comFirst: "Check live", comRenew: "Check live",
        inFirst: "Check live", inRenew: "Check live",
        pattern: "Loss-leader", flat: false,
    },
    {
        name: "Cloudflare", url: "", badge: "",
        comFirst: "Registry cost", comRenew: "Registry cost",
        inFirst: "Check TLD list", inRenew: "Check TLD list",
        pattern: "At cost", flat: true,
    },
    {
        name: "Spaceship", url: "", badge: "",
        comFirst: "Check live", comRenew: "Check live",
        inFirst: "Check live", inRenew: "Check live",
        pattern: "Promo-led", flat: false,
    },
    {
        name: "BigRock", url: "", badge: "",
        comFirst: "Check live", comRenew: "Check live",
        inFirst: "Check live", inRenew: "Check live",
        pattern: "Loss-leader", flat: false,
    },
];

const PAYMENTS = [
    { name: "GoDaddy India", inr: "Bills in INR", upi: "Indian checkout", gst: "Yes", phone: "Yes" },
    { name: "Hostinger India", inr: "Bills in INR", upi: "Indian checkout", gst: "Yes", phone: "Chat only" },
    { name: "BigRock", inr: "Bills in INR", upi: "Indian checkout", gst: "Yes", phone: "Yes" },
    { name: "Namecheap", inr: "Displays INR, bills USD", upi: "No — cards, PayPal, crypto", gst: "No", phone: "No" },
    { name: "Porkbun", inr: "Bills in USD", upi: "No", gst: "No", phone: "No" },
    { name: "Dynadot", inr: "Bills in USD", upi: "No", gst: "No", phone: "No" },
    { name: "Cloudflare", inr: "Bills in USD", upi: "No", gst: "No", phone: "No" },
    { name: "Spaceship", inr: "Bills in USD", upi: "No", gst: "No", phone: "No" },
];

const SCORES = [
    { name: "Dynadot", score: 4.7, bestFor: "Flat pricing on register, renew and transfer alike — the least surprising bill in this comparison, and the cheapest .in.", offers: { price: "10.88", priceCurrency: "USD" } },
    { name: "Porkbun", score: 4.6, bestFor: "Flat pricing plus the friendliest control panel and free WHOIS privacy on every domain.", offers: { price: "11.08", priceCurrency: "USD" } },
    { name: "Cloudflare Registrar", score: 4.3, bestFor: "At-cost renewals with zero markup, if you are willing to run your DNS on Cloudflare permanently.", offers: null },
    { name: "Spaceship", score: 4.1, bestFor: "Free lifetime WHOIS privacy and honest ICANN-fee disclosure, from a newer brand with a shorter track record.", offers: null },
    { name: "Namecheap", score: 4.0, bestFor: "The mainstream overseas option: rupees on screen, dollars on the card, free privacy included.", offers: null },
    { name: "Hostinger", score: 3.9, bestFor: "Cheapest first year in rupees and a free domain with hosting — ordinary renewals from year two.", offers: { price: "99", priceCurrency: "INR" } },
    { name: "BigRock", score: 3.2, bestFor: "Indian billing, GST invoice and .in support, undercut by some of the steepest renewal jumps in the market.", offers: null },
    { name: "GoDaddy", score: 3.0, bestFor: "The only major registrar with an Indian phone line, and the most expensive way to own a domain long term.", offers: null },
];

const FAQ = [
    { q: "Which domain registrar is cheapest overall?", a: "Over five years the flat-priced registrars win on a .com. Dynadot charges $10.88 to register, renew and transfer, which is about ₹5,150 over five years; Porkbun charges $11.08 flat, about ₹5,240. Hostinger is far cheaper in year one at roughly ₹149 but renews at roughly ₹1,000-1,400, so the five-year totals end up closer than the headline prices suggest." },
    { q: "What is the cheapest domain registrar in India?", a: "For the first year, Hostinger: about ₹99 for a .in and ₹149 for a .com, billed in rupees, and free for year one if you take a hosting plan. For the long run, Dynadot is cheapest on a .in at $6.35 a year flat, roughly ₹600. Cheapest in year one and cheapest to own are almost never the same registrar." },
    { q: "How much does a .com domain cost in India per year?", a: "In year one, anywhere from about ₹149 on an Indian promotional offer to roughly ₹1,050 at a flat-price registrar. At renewal, expect roughly ₹1,000-1,400 from an Indian host, or about ₹1,030 a year at Dynadot and ₹1,045 at Porkbun forever. Add 18% GST on Indian invoices and about ₹19 a year in ICANN fees." },
    { q: "Do domain prices in India include GST?", a: "No. Indian registrars advertise prices exclusive of GST and add 18% at checkout, so a ₹949 renewal is about ₹1,120 to pay. GST applies to registration, renewal and transfer, because a domain is sold as a service. Overseas registrars do not charge Indian GST, but your card issuer usually adds a foreign-transaction fee instead." },
    { q: "Can I claim GST input credit on a domain purchase?", a: "If you are GST-registered and the domain is used for your business, the tax on an Indian invoice is normally creditable — but only if your GSTIN appears on the invoice. Add it to your registrar profile before you buy, not after. Overseas registrars issue no Indian GST invoice at all, so there is nothing to claim. Confirm the treatment with your accountant." },
    { q: "Does GoDaddy support UPI payments in India?", a: "GoDaddy operates an Indian entity, bills in rupees and issues a GST invoice, so its Indian checkout carries the usual local payment options. Overseas registrars do not: Namecheap's own payment documentation lists Visa, Mastercard, Discover, American Express, Diners Club, JCB, UnionPay, PayPal and cryptocurrency, with no UPI. Confirm the options on the live checkout before planning around them." },
    { q: "Is e-KYC mandatory for .in domains?", a: "Yes. Under NIXI rules in force since August 2025, every .IN registrant must complete e-KYC within 7 days of registration. Registrars document non-compliance as SERVERHOLD, which stops DNS resolution and takes the website and email offline until verification is submitted and accepted. It applies to NIXI-managed extensions such as .CO.IN and .ORG.IN too." },
    { q: "Can I register a .in domain if I live outside India?", a: "It is possible but no longer casual. Registrars implementing the NIXI rule require non-residents to submit a passport, a government ID or driving licence, and a signed declaration of a genuine business connection to India — clients there, services delivered to Indian residents, or an India-focused project. Without that declaration the domain can be held at the registry." },
    { q: "Should I buy a .in and a .com, or just one?", a: "Buy both only if you can afford a second renewal every year. At a flat-price registrar that is roughly ₹600-₹740 a year for the .in on top of your .com. Register the pair, build on one, and 301-redirect the other. If the budget is tight, buy the one you will actually build on — usually the .com, because it is the reversible choice." },
    { q: "Why is the first year so cheap at GoDaddy?", a: "Because the first year is customer acquisition and the renewals are the business. A deeply discounted registration that renews at several times the price is a well-established model, and most people never check — they just see the auto-renewal charge years later. It is legal and clearly disclosed; it is simply not what the advertising emphasises." },
    { q: "Does it matter which registrar I use?", a: "For the domain itself, barely — a .com is the same .com wherever you register it. What differs is renewal pricing, whether WHOIS privacy is free or paid, whether you get a GST invoice, how painful transfers are, and how aggressively you get upsold at checkout. Over a domain's life, renewal pricing is the only one that costs real money." },
    { q: "Should I buy my domain from my hosting company?", a: "It is convenient and often free for the first year, which is a genuine saving. The trade-off is that your domain and hosting sit with one company, so moving hosts later means either transferring the domain too or managing DNS across two providers. Neither is difficult, but keeping them separate gives you more freedom." },
    { q: "Is WHOIS privacy free?", a: "At Namecheap, Porkbun, Dynadot, Cloudflare and Spaceship it is included at no charge — Porkbun says outright that privacy should not come at a price, and Spaceship gives it free for life on eligible domains. Some registrars charge for it annually, which can quietly rival the cost of the domain itself. Check before comparing headline prices." },
    { q: "Is Porkbun safe to use from India?", a: "Porkbun is an ICANN-accredited registrar and states on its own site that USA Today named it the number one domain registrar for 2023 through 2025. The practical limitations for an Indian buyer are billing rather than safety: it charges in dollars, issues no GST invoice, takes no UPI, and offers no Indian phone support." },
    { q: "Is Cloudflare Registrar actually free, or is there a catch?", a: "It is not free, it is at cost. Cloudflare says it adds no markup and passes on only what the registry and ICANN charge, and that renewals stay at the registry list price. The catch is real: every domain bought there must use Cloudflare nameservers and its own documentation says you cannot switch DNS providers, the extension list is limited, and there is no phone support." },
    { q: "Can I transfer my domain to a cheaper registrar?", a: "Yes. A domain can move 60 days after registration or a previous transfer, and under ICANN rules a gTLD transfer costs the same as a one-year renewal and adds a year to your registration — so transferring away from an expensive renewal often pays for itself immediately. Unlock the domain and request the authorisation code first." },
    { q: "How long does a domain transfer take, and does it cost extra?", a: "Budget five to seven days. The wait is a registry-level process neither registrar controls, and your site stays online throughout as long as you do not change nameservers. It does not cost extra in the usual sense: the transfer fee equals a year of renewal at the new registrar, and that year is added to your existing expiry date." },
    { q: "What happens if I forget to renew my domain name?", a: "Most gTLDs give a renewal grace period of roughly 35-45 days where you can still renew at the normal price, though your site may be pulled from the zone well before that ends. The domain is then deleted and enters a 30-day Redemption Grace Period, where recovery costs a registry-set redemption fee on top of the renewal. Then about five days of Pending Delete, and the name is released." },
    { q: "What about .in domains for Indian sites?", a: "A .in signals a local business clearly and is cheaper to renew than a .com — Dynadot charges $6.35 a year flat and Porkbun $7.83. The catches are the mandatory NIXI e-KYC inside 7 days, and the fact that a country-code domain ties you to India in Google's eyes in a way a .com does not. If you might ever sell abroad, own the .com too." },
    { q: "Does the registrar affect my SEO?", a: "No. Google does not care where a domain is registered. What can affect you indirectly is downtime from bad DNS, a .in suspended for missed e-KYC, or losing a domain because a renewal notice went to an old email address — all operational risks, not ranking factors." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: TITLE,
        description: "Eight domain registrars compared in rupees on first-year price, renewal price and five-year cost for Indian buyers, with GST, .in e-KYC and UPI billing covered.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: UPDATED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "best domain registrar india, cheapest domain registrar in india, domain price in india, gst on domain registration india, in domain kyc verification nixi, flat renewal domain registrar",
        articleSection: "Domains", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Best Domain Registrars India", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org", "@type": "Product",
        name: "Domain registration in India (.in and .com)",
        description: "First-year and renewal pricing for .in and .com domains as sold to Indian buyers, checked 7 September 2026. Prices exclude 18% GST.",
        category: "Domain registration",
        url: CANONICAL,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "99",
            highPrice: "1400",
            offerCount: REGISTRARS.length,
            url: CANONICAL,
            availability: "https://schema.org/InStock",
        },
    },
    {
        "@context": "https://schema.org", "@type": "ItemList",
        name: "Best domain registrars for Indian buyers in 2026",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: SCORES.length,
        itemListElement: SCORES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Product",
                name: s.name + " domain registration",
                description: s.bestFor,
                category: "Domain registration",
                ...(s.offers ? { offers: { "@type": "Offer", price: s.offers.price, priceCurrency: s.offers.priceCurrency, availability: "https://schema.org/InStock", url: CANONICAL } } : {}),
                review: {
                    "@type": "Review",
                    name: s.name + " for Indian domain buyers",
                    reviewBody: s.bestFor,
                    reviewRating: { "@type": "Rating", ratingValue: s.score, bestRating: 5, worstRating: 1 },
                    author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile" },
                    datePublished: "2026-09-07",
                },
            },
        })),
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function BestDomainRegistrars() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Best Domain Registrars India</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Domains</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Best Domain Registrar in India 2026: The Renewal Price Is the Real Price
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Hostinger will sell an Indian buyer a .in for about ₹99 and a .com for about ₹149. That .com
                            renews at roughly ₹1,000–1,400. Dynadot charges $10.88 — about ₹1,030 — and charges exactly
                            that again every year, forever. Add 18% GST to every Indian invoice. The first-year price is
                            an advertisement; the renewal is the bill, and it is the only number worth comparing.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>Updated September 7, 2026</span><span>•</span><span>20 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/best-domain-registrars-india-2026.svg" alt="Domain registrars compared on five-year cost for Indian buyers" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Prices checked on
                        7 September 2026 against each registrar&apos;s own pricing page. Rupee equivalents of dollar
                        prices are converted at roughly ₹94.5 to the dollar and exclude 18% GST. Where a registrar
                        blocks automated price checks, this page says &quot;check live&quot; instead of printing a
                        number I could not confirm.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7 list-disc list-inside">
                            <li><strong className="text-white">Cheapest to own long term:</strong>{" "}
                                <a href={DYNADOT} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Dynadot</a>{" "}
                                at $10.88 flat for a .com and $6.35 flat for a .in, or Porkbun at $11.08 and $7.83.</li>
                            <li><strong className="text-white">Cheapest year one in rupees:</strong> Hostinger — about ₹99 for a .in, ₹149 for a .com, and ₹0 if you are buying hosting anyway.</li>
                            <li><strong className="text-white">Buying a .in:</strong> finish NIXI e-KYC within 7 days or the domain is suspended. Buy it where the reminder will actually reach you.</li>
                            <li><strong className="text-white">Avoid for long-term ownership:</strong> loss-leader registrars whose renewal is several times the first year — GoDaddy is the loudest example, BigRock&apos;s near-free .in offers the steepest.</li>
                            <li><strong className="text-white">The rule:</strong> compare renewals, never first-year prices, and add 18% GST before you compare anything.</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a href={HOSTINGER} target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40">
                                Check live domain prices →
                            </a>
                            <a href={DYNADOT} target="_blank" rel="nofollow sponsored noopener" className="inline-block border border-white/15 hover:border-primary-400/60 text-gray-200 font-semibold px-6 py-3 rounded-xl transition-all">
                                Compare flat pricing →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What a .com and a .in actually cost in India</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            A .com costs an Indian buyer roughly <strong className="text-white">₹150 to ₹1,050 in year one</strong>{" "}
                            and roughly <strong className="text-white">₹1,000 to ₹1,400 a year at renewal</strong>, before 18% GST.
                            A .in is cheaper on both counts — about ₹99 in year one on an Indian promotion, and about
                            ₹600–₹740 a year at a flat-price registrar. Those two sentences are the whole comparison.
                            Everything below is the detail behind them.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Registrar</th>
                                        <th className="p-4">.com year 1</th>
                                        <th className="p-4">.com renewal</th>
                                        <th className="p-4">.in year 1</th>
                                        <th className="p-4">.in renewal</th>
                                        <th className="p-4">Pattern</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {REGISTRARS.map((r) => (
                                        <tr key={r.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white whitespace-nowrap">
                                                {r.url ? <a href={r.url} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">{r.name}</a> : r.name}
                                                {r.badge && <span className="ml-2 text-xs uppercase tracking-wider text-primary-400">{r.badge}</span>}
                                            </td>
                                            <td className="p-4 whitespace-nowrap">{r.comFirst}</td>
                                            <td className={`p-4 whitespace-nowrap ${r.flat ? "text-emerald-400" : "text-amber-300"}`}>{r.comRenew}</td>
                                            <td className="p-4 whitespace-nowrap">{r.inFirst}</td>
                                            <td className={`p-4 whitespace-nowrap ${r.flat ? "text-emerald-400" : "text-amber-300"}`}>{r.inRenew}</td>
                                            <td className="p-4">{r.pattern}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mb-5">
                            Checked 7 September 2026. Dollar figures are each registrar&apos;s own published price;
                            rupee equivalents use roughly ₹94.5 to the dollar and exclude GST. &quot;Check live&quot;
                            marks registrars whose pricing pages refuse automated checks — Namecheap, GoDaddy, Spaceship
                            and BigRock all do — so rather than repeat a figure from a coupon blog, open their checkout
                            and read it yourself. Cloudflare sells at registry cost but only across a limited extension
                            list, so confirm your TLD is on it. Hostinger&apos;s rupee figures are vendor-confirmed for
                            this update.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Run it over five years and the picture is more interesting than the usual &quot;flat always
                            wins&quot; line. Five years of a .com costs about{" "}
                            <strong className="text-white">₹5,150</strong> at Dynadot and about{" "}
                            <strong className="text-white">₹5,240</strong> at Porkbun. Hostinger, at ₹149 up front plus
                            four renewals of ₹1,000–1,400, lands somewhere between{" "}
                            <strong className="text-white">₹4,150 and ₹5,750</strong> — genuinely competitive at the
                            bottom of that band and worse at the top, which is a more honest answer than the one this
                            page used to give. On a .in the flat registrars pull clear: five years at Dynadot is about
                            ₹3,000 and at Porkbun about ₹3,700, and no Indian promotional first year makes up that gap.
                            So for a .com the choice is close and turns on which renewal band you land in; for a .in,
                            flat pricing wins outright.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Add 18% GST and the ICANN fee to every price you see</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Every domain price advertised in India is quoted exclusive of GST, and 18% is added at
                            checkout. A ₹949 renewal is ₹1,120 to pay. It applies to registration, renewal and transfer
                            alike, because a domain name is sold as a service rather than a good — there is no version
                            of this where the advertised number is the number on your card.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            On top of that, every gTLD — .com, .net, .org and the rest — carries a small annual ICANN
                            fee on each registration, renewal and transfer. Spaceship states it plainly on its own site
                            at $0.20 a year, roughly ₹19. It is trivial money, but it is why a &quot;$10&quot; .com is
                            never exactly $10, and Cloudflare is one of the few registrars that shows it as a separate
                            line rather than folding it in.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The consequence nobody puts in a comparison table: an Indian invoice carries GST that a
                            registered business can reclaim as input credit, while a dollar invoice carries a
                            foreign-transaction fee your card issuer charges and nobody advertises. So the ₹1,030 you
                            &quot;pay&quot; Dynadot is a little more than ₹1,030 once your bank is finished, and the
                            ₹1,120 you pay an Indian registrar is effectively ₹949 if your GSTIN is on the invoice.
                            Compare post-tax, post-fee numbers or you are not comparing anything.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The two pricing models</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Flat pricing — Porkbun, Dynadot, Cloudflare</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Registration and renewal cost the same, and nothing changes in year two. You pay more
                                    on day one and less over the domain&apos;s life. Cloudflare goes furthest, selling at
                                    registry cost with no markup — at the price of running your DNS on Cloudflare.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Loss-leader pricing — GoDaddy, BigRock, Hostinger</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    A heavily discounted first year, recovered through renewals. Fine if you genuinely
                                    track renewal dates and will transfer away. Expensive if you set auto-renew and
                                    forget — which is what most people do, and what the model is built on.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Registrar by registrar</h2>
                        <div className="space-y-5">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Porkbun — best all-round</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    $11.08 to register a .com and $11.08 to renew it; $7.83 either way on a .in. WHOIS
                                    privacy is free — Porkbun&apos;s own line is that privacy should not come at a price
                                    — and the control panel is the most pleasant of this group. It is ICANN-accredited
                                    and says USA Today named it the number one registrar for 2023 through 2025. The
                                    catch for an Indian buyer is not safety, it is billing: dollars only, no GST invoice,
                                    no UPI, no Indian phone line.
                                    <span className="text-gray-500"> [AFFILIATE_LINK: PORKBUN]</span>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Dynadot — most transparent, and the cheapest .in</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Register, renew and transfer a .com all cost the same $10.88, and a .in costs $6.35
                                    on all three. That makes Dynadot the cheapest long-term .in here by a clear margin —
                                    about ₹600 a year against ₹740 at Porkbun. There is something refreshing about a
                                    pricing page that needs no footnotes. The interface is more utilitarian than
                                    Porkbun&apos;s, and like every overseas registrar on this page it bills in dollars
                                    with no GST invoice and no local payment options.
                                    {" "}<a href={DYNADOT} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Check Dynadot pricing →</a>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Namecheap — the reasonable mainstream choice</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Namecheap runs the classic promotional first year with a higher standing renewal, and
                                    the promo depends on whichever code is live that week — which is exactly why no
                                    figure is printed here. Free WHOIS privacy is included, the management interface is
                                    solid, and prices display in rupees. Read that last point carefully: it{" "}
                                    <em>displays</em> INR and <em>bills</em> USD, accepting cards, PayPal and
                                    cryptocurrency but not UPI. Head-to-head detail in{" "}
                                    <Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link>.
                                    {" "}<a href={NAMECHEAP} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Check Namecheap&apos;s current domain prices →</a>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">GoDaddy India — the one to be careful with</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    The largest registrar in the world, the loudest first-year discount, and the widest
                                    gap between what you pay to start and what you pay to stay. Checkout is also the most
                                    aggressive on upsells. It has one advantage no other registrar here matches: it is
                                    the only major registrar with an Indian phone support line, and it bills in rupees
                                    with a GST invoice. If you want a human in your timezone when something breaks, that
                                    is worth real money. The renewal maths is in{" "}
                                    <Link href="/blog/godaddy-renewal-price-increase-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                        why GoDaddy renewals jump 2–4×
                                    </Link>.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Hostinger — best if you are buying hosting anyway</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Not a registrar-first company, but for Indian buyers it is often the cheapest door
                                    in: a .com at about ₹149 and a .in at about ₹99 for the first year, billed in rupees
                                    with a GST invoice, and free for year one on its main hosting plans. Transferring a
                                    .com in costs ₹969. The honest caveat is the same as GoDaddy&apos;s — renewals run
                                    at standard rates, roughly ₹1,000–1,400 for a .com — so this is cheap-first-year
                                    pricing, not flat pricing. Full breakdown in{" "}
                                    <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain prices in India</Link>.
                                    {" "}<a href={HOSTINGER} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Check Hostinger domain prices →</a>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Spaceship — the newcomer most roundups leave out</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Spaceship gives free WHOIS privacy for life on eligible domains — registrations and
                                    transfers alike — adds a full year of registration to every transfer, and is
                                    unusually straight about the ICANN fee, publishing it as $0.20 a year rather than
                                    burying it in a total. Two honest caveats: its pricing pages block automated checks,
                                    so no figure is quoted here, and it is a young brand with a much shorter track
                                    record than the registrars above. Check its live price before assuming it undercuts
                                    Dynadot.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Cloudflare Registrar — at cost, with one hard condition</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Cloudflare says it does not mark up domains at all: you pay what the registry and
                                    ICANN charge, and renewals stay at the registry list price. Free WHOIS redaction is
                                    included. The condition is not a detail — every domain bought there uses Cloudflare
                                    nameservers, and Cloudflare&apos;s own documentation says you cannot switch to
                                    another DNS provider while the domain lives there. The supported extension list is
                                    limited and there is no phone support. If Cloudflare is already your DNS, this is
                                    the cheapest renewal you will find anywhere. If it is not, it is a bigger commitment
                                    than a domain purchase should be.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">BigRock — Indian billing, steep renewals</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    BigRock is the Indian registrar most people meet first, and it earns its place here
                                    on billing rather than price: rupees, GST invoice, Indian support, and .in handled
                                    by a company that lives inside NIXI&apos;s rules. It is also the clearest
                                    illustration of this page&apos;s whole thesis — its .in promotions are known for a
                                    near-free first year on a multi-year term followed by a renewal many times higher,
                                    a gap wider than anything GoDaddy runs. Read the renewal price on the same screen
                                    as the offer price, every single time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Mid-article CTA */}
                    <aside className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-gray-300 leading-7 mb-4 sm:mb-0">
                            If you are buying hosting in the same month anyway, the cheapest domain in India is the one
                            bundled with it — ₹0 for year one on Hostinger&apos;s main shared plans, renewing at
                            standard rates from year two. Check which extensions qualify on the live checkout.
                        </p>
                        <a
                            href={HOSTINGER}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block flex-shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40"
                        >
                            See free-domain plans →
                        </a>
                    </aside>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">.IN domains now require e-KYC within 7 days</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Since August 2025, NIXI requires every .IN registrant to complete e-KYC verification within
                            7 days of registration. Miss the window and registrars document the outcome bluntly: the
                            domain goes to <strong className="text-white">SERVERHOLD</strong>, DNS stops resolving, and
                            the website and email go dark until the paperwork is submitted and accepted. This is the
                            single most important thing to know before buying a .in in 2026, and almost none of the
                            pages ranking for &quot;best domain registrar india&quot; mention it at all.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            It covers the .IN country-code domain and the NIXI-managed extensions alongside it — .CO.IN,
                            .ORG.IN, .NET.IN, .FIRM.IN and .IND.IN. Indian registrants verify with a standard government
                            document: Aadhaar through the government single sign-on, PAN, passport, voter ID or driving
                            licence, with a certificate of incorporation plus a signatory ID for organisations.
                            Non-residents have a heavier lift — a passport is mandatory, plus a government ID or driving
                            licence, plus a signed declaration describing a genuine business connection to India, such
                            as Indian clients, services delivered to Indian residents, or an India-focused project.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Here is the part that turns this from trivia into a buying decision. The KYC request arrives
                            by email from your registrar and you have about a week to act on it. If you bought the .in
                            from an Indian registrar, that message lands in a channel you watch, in a format you
                            recognise, from a company you can phone. If you bought it from an overseas registrar at
                            3 a.m. IST with a throwaway contact address, that is exactly where people miss the window
                            and discover a fortnight later that their site is offline. Dynadot&apos;s $6.35 .in is
                            genuinely the cheapest on this page — just make sure the registrant email on it is one you
                            actually read.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">.in or .com for an Indian website?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            If you sell only in India, a .in is a mild local-relevance signal and is cheaper to renew —
                            about ₹600 a year at Dynadot against about ₹1,030 for a .com. If there is any chance you
                            will sell outside India, .com is the safer long-term asset. That much is the standard
                            advice, and it is right as far as it goes.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The part most comparisons miss is that the decision is not symmetrical. A .com is neutral:
                            you can geo-target it to India in Search Console if you want, and un-target it later if your
                            market changes. A country-code domain like .in cannot be un-targeted away from India — the
                            geographic association comes with the extension. So the real question is not &quot;which is
                            cheaper&quot; but &quot;am I confident this business never sells abroad&quot;. Price is the
                            small variable here; reversibility is the large one.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The common Indian pattern is to register both and 301-redirect the .in to the .com. Priced
                            from the table above, that costs roughly one extra renewal a year — about ₹600–₹740 at a
                            flat-price registrar, or ₹99 in year one if you grab the .in on an Indian promotion and move
                            it later. That is cheap insurance for a brand you intend to keep. And to kill the myth
                            before it starts: the registrar itself has no effect on rankings. Google does not care where
                            a domain is registered, only whether it resolves.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Which registrars accept UPI, and which bill you in dollars</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Only the registrars that operate an Indian entity — GoDaddy India, Hostinger India and
                            BigRock among the ones here — bill in rupees, offer the local payment methods you expect at
                            an Indian checkout, and issue a GST invoice. Namecheap, Porkbun, Dynadot, Cloudflare and
                            Spaceship do none of those three. Namecheap is the one that trips people up, because it puts
                            rupee prices on screen: its own payment documentation lists Visa, Mastercard, Discover,
                            American Express, Diners Club, JCB, UnionPay, PayPal and cryptocurrency — and no UPI.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Registrar</th>
                                        <th className="p-4">Billing currency</th>
                                        <th className="p-4">Indian payment methods</th>
                                        <th className="p-4">GST invoice</th>
                                        <th className="p-4">Indian phone support</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {PAYMENTS.map((p) => (
                                        <tr key={p.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white whitespace-nowrap">{p.name}</td>
                                            <td className="p-4">{p.inr}</td>
                                            <td className="p-4">{p.upi}</td>
                                            <td className={`p-4 ${p.gst === "Yes" ? "text-emerald-400" : "text-amber-300"}`}>{p.gst}</td>
                                            <td className="p-4">{p.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            &quot;Displays INR&quot; and &quot;charges INR&quot; are not the same thing, and the gap
                            between them is your card&apos;s foreign-transaction fee plus the exchange spread — neither
                            of which appears in any comparison table, including the one above. For a GST-registered
                            business the gap widens further, because the Indian invoice comes with tax you can reclaim
                            and the dollar invoice comes with a fee you cannot. And GoDaddy holding the only Indian
                            phone line in this group deserves stating plainly even on a page that is otherwise
                            unenthusiastic about GoDaddy: when a domain is stuck, being able to call someone is not a
                            small feature.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The four costs that never appear in the comparison table</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            The advertised price is most of what a domain costs, but never all of it. Four line items do
                            the damage.
                        </p>
                        <div className="space-y-5">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">1. WHOIS privacy</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Free and automatic at Namecheap, Porkbun, Dynadot, Cloudflare and Spaceship. Charged
                                    annually by some registrars, where it becomes a recurring line you did not plan for.
                                    Check whether it is included before comparing headline prices — a cheap domain with
                                    paid privacy is not a cheap domain.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">2. Transfer pricing</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Here is the rule almost nobody states: under ICANN policy a gTLD transfer costs the
                                    same as a one-year renewal and adds a year to your registration. A transfer is never
                                    wasted money — you buy a year you needed anyway and change supplier for free.
                                    Dynadot charges $10.88 to transfer a .com, identical to its renewal; Hostinger
                                    charges ₹969.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">3. Auto-renewal markup</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    The renewal price quoted at signup is not a contract. Registrars raise renewals, and
                                    the increase lands silently on a card you set up years earlier. Flat-price
                                    registrars are not immune — registry price rises get passed through — but they pass
                                    through a small percentage rather than a multiple.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">4. Redemption</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Miss the renewal and getting the name back costs a registry-set redemption fee on
                                    top of the renewal itself. It is the most expensive line on this list and the
                                    easiest one to avoid entirely. The next section has the timeline.
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8 mt-5">
                            One habit beats all four: register for the shortest term at a flat-price registrar rather
                            than the longest term at a loss-leader. A ten-year prepayment at a cheap-first-year
                            registrar is not a discount, it is a lock-in to the registrar you are least likely to want
                            in five years.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What happens if you miss the renewal date</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The timeline for most gTLDs runs like this. On the expiry date the domain enters a{" "}
                            <strong className="text-white">renewal grace period of roughly 35 to 45 days</strong>, during
                            which you can still renew at the ordinary price — though after the first week or so the
                            registrar may pull the domain from the zone or point it at a parking page, so your site goes
                            down well before your ownership does. After that the domain is deleted and enters a{" "}
                            <strong className="text-white">30-day Redemption Grace Period</strong>, where you can still
                            get it back but only by paying a redemption fee on top of the renewal. Then comes roughly{" "}
                            <strong className="text-white">five days of Pending Delete</strong>, during which nothing can
                            be done, and the name is released to the open market.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The redemption fee is set by the registry and passed on by your registrar, so it is neither
                            negotiable nor refundable, and it is always far more than a renewal — often several times
                            more. Rather than quote a figure that varies by registry and by registrar, open your
                            registrar&apos;s published fee page once and find out what yours charges, because the moment
                            you need that number you will already be paying it.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The fix takes two minutes and prevents all of it: expiry notices go to the{" "}
                            <strong className="text-white">registrant email on the domain record</strong>, not the
                            address you log into the registrar with. Those two are often different, and the registrant
                            address is the one people leave on an old company domain or a college mail account. Open
                            your registrar right now, check the registrant contact, and put the expiry date in your
                            calendar with a month&apos;s warning. For a .in, that same address is where the NIXI e-KYC
                            request will arrive.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How to move a domain to a cheaper registrar</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Transferring away from an expensive renewal usually pays for itself in the same year,
                            because under ICANN rules the transfer fee equals one year of renewal at the new registrar
                            and that year is added to your existing expiry date. You are not paying to move; you are
                            paying for a year you already owed and changing supplier as a side effect. If you are moving
                            off GoDaddy specifically, the click-by-click version is in{" "}
                            <Link href="/blog/how-to-transfer-domain-from-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                how to transfer a domain from GoDaddy
                            </Link>.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The mechanics, in order. A domain cannot move in the{" "}
                            <strong className="text-white">first 60 days</strong> after registration or after a previous
                            transfer — and changing the registrant name or email starts its own separate 60-day lock,
                            which is how people accidentally block a transfer they were about to make. Unlock the domain
                            in the registrar panel and switch off any &quot;domain protection&quot; add-on. Request the
                            authorisation code, now standardised as a TAC and functionally the old EPP or auth code; it
                            is emailed to the registrant address rather than shown on screen. Paste it at the new
                            registrar, pay, then approve the confirmation email. Completion takes{" "}
                            <strong className="text-white">five to seven days</strong> — a registry-level wait neither
                            registrar can speed up. Your site stays online throughout, as long as you do not change
                            nameservers mid-move.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Two India-specific notes. A .in transfer is governed by NIXI rather than ICANN and starts a
                            fresh e-KYC clock at the gaining registrar, so schedule it for a week when you are actually
                            reading your email. And on cost: moving a .com into Dynadot is $10.88, the same as its
                            renewal, which buys a year and flat pricing forever after. Moving one into Hostinger is{" "}
                            <strong className="text-white">₹969</strong>, which is the sensible choice if you are
                            consolidating the domain onto the same account as your hosting rather than chasing the
                            lowest renewal. Moving the site itself is a separate job —{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">migrating WordPress to a new host</Link>{" "}
                            covers that half.{" "}
                            <a href={HOSTINGER_TRANSFER} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">See Hostinger transfer pricing →</a>
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The free-domain-with-hosting route, priced honestly</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            A free domain with hosting saves you one year of registration and nothing after that. It is
                            worth taking if you were buying hosting anyway, and worth nothing at all if you are buying
                            hosting <em>because</em> of it. That is the entire calculation; everything else is detail.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Concretely, on Hostinger&apos;s 48-month shared terms:{" "}
                            <strong className="text-white">Premium at ₹149/mo</strong> (75% off ₹599, renewing at
                            ₹449/mo) and <strong className="text-white">Unlimited at ₹249/mo</strong> (64% off ₹699,
                            renewing at ₹649/mo), with 18% GST added at checkout and the domain free for year one on
                            both. Premium covers three websites on 20 GB SSD; Unlimited covers unlimited sites on 50 GB
                            NVMe. A referral takes a further 20% off the sale price on new purchases only — ₹119.20 and
                            ₹199.20 respectively — and never applies to renewals, which is the number that actually
                            decides whether a host is cheap. The full ladder, including Single at ₹69/mo and Cloud
                            Startup at ₹599/mo, is in{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger plans and pricing</Link>{" "}
                            and the year-two side is in{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">what Hostinger costs at renewal</Link>.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Now the trade, stated honestly. You get year one free, then pay roughly ₹1,000–1,400 to
                            renew that .com every year, against about ₹1,030 flat at Dynadot or ₹1,045 at Porkbun. So
                            the free year is genuinely free money and the renewals are ordinary at best. The good news
                            is that the free domain does not trap you: once the 60-day lock passes you can move it
                            whenever you like, and the transfer buys a year at the new registrar&apos;s price. Take the
                            free year, diarise the renewal, and decide again in twelve months. If you are still weighing
                            hosts, the{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">hosting cost calculator</Link>{" "}
                            does the multi-year arithmetic including renewals,{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">best web hosting in India</Link>{" "}
                            covers who else bundles a domain, and{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">cheap hosting under ₹200</Link>{" "}
                            lists the plans the free domain usually rides on.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href={HOSTINGER} target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40">
                                See current plans →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — buying domains in India</h2>
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
                        <h2 className="text-3xl font-bold text-white mb-4">Verdict and scores</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Buy from <strong className="text-white">
                                <a href={DYNADOT} target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Dynadot</a> or Porkbun
                            </strong>{" "}
                            if you intend to own the domain for years — flat pricing removes the entire problem, and
                            Dynadot&apos;s $6.35 .in is the cheapest long-term Indian domain in this comparison.{" "}
                            <strong className="text-white">Hostinger</strong> wins year one outright and is the right
                            answer if you are buying hosting in the same month.{" "}
                            <strong className="text-white">GoDaddy</strong> earns its place on Indian phone support and
                            little else. Whichever you choose, check the registrant email today — that one habit saves
                            more money than picking the perfect registrar, and on a .in it is what keeps the domain out
                            of SERVERHOLD.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Registrar</th><th className="p-4">Score</th><th className="p-4">Best for</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {SCORES.map((s) => (
                                        <tr key={s.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white whitespace-nowrap">{s.name}</td>
                                            <td className="p-4 text-primary-400 font-semibold whitespace-nowrap">{s.score} / 5</td>
                                            <td className="p-4">{s.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Scores are my editorial judgement for an Indian buyer, weighting renewal price, billing and
                            GST handling, .in support and reachability of support — not a lab test.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link> — the two biggest names head to head.</li>
                            <li><Link href="/blog/how-to-transfer-domain-from-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">How to transfer a domain from GoDaddy</Link> — step by step, with the TAC.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain prices in India</Link> — .in and .com rates, first year and renewal.</li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger plans and pricing 2026</Link> — which plans include the free domain.</li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger renewal prices</Link> — the year-two number that decides everything.</li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cheap web hosting under ₹200</Link> — the plans a free domain usually comes with.</li>
                            <li><Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Migrating WordPress to a new host</Link> — the other half of moving a site.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hosting cost calculator</Link> — multi-year totals with renewals included.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this comparison</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
