import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/best-domain-registrars-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-domain-registrars-india-2026.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Best Domain Registrars 2026: 5-Year Cost Compared",
    description:
        "GoDaddy's $4.99 first year becomes $22.99 at renewal. Namecheap, Porkbun, Dynadot and Cloudflare compared on what a .com actually costs over five years.",
    keywords: [
        "best domain registrar", "best domain registrar india", "cheapest domain registrar",
        "domain renewal price comparison", "namecheap vs godaddy vs porkbun", "porkbun review",
        "dynadot review", "where to buy domain india", "cheapest .com domain", "domain price comparison 2026",
        "domain registrar with no price increase", "best place to buy domain",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Best Domain Registrars 2026: 5-Year Cost Compared",
        description: "First-year prices are marketing. Here is what a .com actually costs over five years at each registrar.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Best domain registrars compared on five-year cost" }],
    },
    twitter: {
        card: "summary_large_image", title: "Best Domain Registrars 2026: 5-Year Cost Compared",
        description: "The renewal price is the real price. Five registrars compared.", images: [IMAGE],
    },
};

const REGISTRARS = [
    { name: "Porkbun", first: "$10.08", renewal: "~$11", pattern: "Flat", note: "Registration and renewal priced almost identically. No surprises.", pick: true },
    { name: "Dynadot", first: "$10.88", renewal: "$10.88", pattern: "Flat", note: "Register, renew and transfer all the same price. The most transparent of the group.", pick: true },
    { name: "Namecheap", first: "$6.79", renewal: "$14.78", pattern: "2.2× jump", note: "Cheap year one with a code, then roughly double. Still reasonable at renewal.", pick: false },
    { name: "GoDaddy", first: "$4.99", renewal: "$22.99", pattern: "4.6× jump", note: "Cheapest headline, most expensive to actually own. The biggest gap here.", pick: false },
];

const FAQ = [
    { q: "Which domain registrar is cheapest overall?", a: "Over five years, the flat-priced registrars win. Porkbun and Dynadot price a .com at roughly $10-$11 for both registration and renewal, so five years costs around $55. Namecheap works out near $66 and GoDaddy near $97 for the identical domain — because its $4.99 first year renews at $22.99." },
    { q: "Why is the first year so cheap at GoDaddy?", a: "Because the first year is customer acquisition and the renewals are the business. A $4.99 registration that renews at $22.99 is a 4.6× increase, and most people never check — they just see the auto-renewal charge years later. It is legal and clearly disclosed; it is simply not what the advertising emphasises." },
    { q: "Does it matter which registrar I use?", a: "For the domain itself, barely — a .com is the same .com wherever you register it. What differs is renewal pricing, whether WHOIS privacy is free or paid, how painful transfers are, and how aggressively you get upsold at checkout. Over a domain's life, renewal pricing is the only one that costs real money." },
    { q: "Should I buy my domain from my hosting company?", a: "It is convenient and often free for the first year, which is a genuine saving. The trade-off is that your domain and hosting sit with one company, so moving hosts later means either transferring the domain too or managing DNS across two providers. Neither is difficult, but keeping them separate gives you more freedom." },
    { q: "Is WHOIS privacy free?", a: "At Namecheap, Porkbun and Cloudflare it is generally included free. Some registrars charge for it annually, which can quietly add several dollars a year to the real cost. Check before comparing headline prices — a cheap domain with paid privacy may not be cheap at all." },
    { q: "Can I transfer my domain to a cheaper registrar?", a: "Yes. Domains can be transferred after 60 days at the current registrar, and a transfer usually includes a year of renewal at the new registrar's price — so transferring away from an expensive renewal often pays for itself immediately. You need to unlock the domain and get an authorisation code first." },
    { q: "What about .in domains for Indian sites?", a: "A .in signals a local business clearly and is usually cheaper than a .com, though registrar pricing varies more widely on it. If your audience is entirely Indian a .in is a reasonable choice; if you might ever serve a wider market, a .com is the safer long-term asset." },
    { q: "Does the registrar affect my SEO?", a: "No. Google does not care where a domain is registered. What can affect you indirectly is downtime from bad DNS or losing a domain because a renewal notice went to an old email address — both operational risks, not ranking factors." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Best Domain Registrars 2026: 5-Year Cost Compared",
        description: "Namecheap, GoDaddy, Porkbun and Dynadot compared on what a .com actually costs over five years.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "best domain registrar, cheapest domain registrar, domain renewal price comparison, porkbun review, dynadot review",
        articleSection: "Domains", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Best Domain Registrars", item: CANONICAL },
        ],
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
                            <li className="text-gray-300">Best Domain Registrars</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Domains</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Best Domain Registrars in 2026: The Renewal Price Is the Real Price
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            GoDaddy will sell you a .com for $4.99. It renews at $22.99. Porkbun charges about $11 and
                            keeps charging about $11. Over five years that difference is larger than the domain itself
                            costs — and it is the only number worth comparing.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>10 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/best-domain-registrars-india-2026.svg" alt="Domain registrars compared on five-year cost" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Prices checked in
                        August 2026 and quoted in USD as registrars publish them. Promotional first-year prices often
                        require a code and change frequently — verify at checkout.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7 list-disc list-inside">
                            <li><strong className="text-white">Best overall:</strong> Porkbun or Dynadot — flat pricing, roughly $11/year forever.</li>
                            <li><strong className="text-white">Best known:</strong> Namecheap — cheap first year, doubles at renewal, still fair.</li>
                            <li><strong className="text-white">Avoid for long-term ownership:</strong> GoDaddy — a 4.6× renewal jump is the worst here.</li>
                            <li><strong className="text-white">Free first year:</strong> most hosting plans include a domain — worth taking if you are buying hosting anyway.</li>
                            <li><strong className="text-white">The only rule that matters:</strong> compare renewal prices, never first-year prices.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What a .com actually costs</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Registrar</th><th className="p-4">Year 1</th><th className="p-4">Renewal</th><th className="p-4">Pattern</th><th className="p-4">Notes</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {REGISTRARS.map((r) => (
                                        <tr key={r.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">
                                                {r.name}{r.pick && <span className="ml-2 text-xs uppercase tracking-wider text-primary-400">pick</span>}
                                            </td>
                                            <td className="p-4">{r.first}</td>
                                            <td className={`p-4 ${r.pattern === "Flat" ? "text-emerald-400" : "text-amber-300"}`}>{r.renewal}</td>
                                            <td className="p-4">{r.pattern}</td>
                                            <td className="p-4">{r.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Run that over five years and the ranking inverts completely. GoDaddy&apos;s five-year total for
                            a single .com lands near <strong className="text-white">$97</strong>; Namecheap around{" "}
                            <strong className="text-white">$66</strong>; the flat-priced registrars around{" "}
                            <strong className="text-white">$55</strong>. The registrar with the cheapest advertisement is
                            the most expensive to actually own from.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The two pricing models</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Flat pricing — Porkbun, Dynadot, Cloudflare</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Registration and renewal cost roughly the same. Nothing changes in year two. You pay
                                    slightly more on day one and considerably less over the domain&apos;s life. Cloudflare
                                    goes furthest, selling domains at wholesale cost with no markup at all — though you
                                    must use their DNS.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Loss-leader pricing — GoDaddy, Namecheap</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    A heavily discounted first year, recovered through renewals. This works fine if you
                                    genuinely track renewal dates and are willing to transfer away. It works badly if you
                                    set auto-renew and forget — which is what most people do, and what the model relies on.
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
                                    About $10-$11 to register and roughly the same to renew, with free WHOIS privacy and a
                                    genuinely pleasant interface. The catch is scale: it is a smaller company than GoDaddy,
                                    which matters to some buyers and not at all to others.
                                    <span className="text-gray-500"> [AFFILIATE_LINK: PORKBUN]</span>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Dynadot — most transparent</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    Register, renew and transfer all cost the same $10.88 for a .com. There is something
                                    refreshing about a registrar whose pricing page needs no footnotes. Interface is more
                                    utilitarian than Porkbun&apos;s.
                                    <span className="text-gray-500"> [AFFILIATE_LINK: DYNADOT]</span>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Namecheap — the reasonable mainstream choice</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    $6.79 first year with a code, $14.78 at renewal. That is a real jump but not an
                                    outrageous one, free WHOIS privacy is included, and the management interface is solid.
                                    If you want a large registrar without GoDaddy&apos;s renewal pricing, this is it.
                                    <a href="https://namecheap.pxf.io/c/7673063/1632743/5618" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Check Namecheap&apos;s current domain prices →</a>
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">GoDaddy — the one to be careful with</h3>
                                <p className="text-sm text-gray-300 leading-7">
                                    The largest registrar in the world, the cheapest first year, and the most expensive
                                    renewal in this comparison at $22.99. Checkout is also the most aggressive on upsells.
                                    Nothing here is dishonest — it is all disclosed — but you have to actually read it.
                                    I went through the numbers in detail in{" "}
                                    <Link href="/blog/godaddy-renewal-price-increase-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                        why GoDaddy renewals jump 2–4×
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The free-domain option</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            If you are buying hosting anyway, most plans include a domain free for the first year — which
                            beats every price in the table above for year one. From year two it renews at the host&apos;s
                            standard rate, so the same renewal question applies.
                        </p>
                        <p className="text-gray-300 leading-8">
                            I broke down what Indian hosts actually charge for domains and renewals in{" "}
                            <Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                domain pricing in India
                            </Link>. The short version: take the free year, then decide whether to keep it there or transfer.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — domain registrars</h2>
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
                        <h2 className="text-3xl font-bold text-white mb-4">Verdict</h2>
                        <p className="text-gray-300 leading-8">
                            Buy from <strong className="text-white">Porkbun or Dynadot</strong> if you intend to own the domain
                            for years — flat pricing removes the entire problem. <strong className="text-white">Namecheap</strong>{" "}
                            is the sensible mainstream option. Take a <strong className="text-white">free first year</strong> from
                            your host if you are buying hosting anyway. And whichever you choose, put the renewal date in
                            your calendar today — that one habit saves more money than picking the perfect registrar.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link> — the two biggest names head to head.</li>
                            <li><Link href="/blog/how-to-transfer-domain-from-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">How to transfer a domain from GoDaddy</Link> — step by step.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Domain prices in India</Link> — .in and .com rates from Indian hosts.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this comparison</h2>
                        <ShareButtons url={CANONICAL} title="Best Domain Registrars 2026: 5-Year Cost Compared" />
                    </div>
                </article>
            </main>
        </>
    );
}
