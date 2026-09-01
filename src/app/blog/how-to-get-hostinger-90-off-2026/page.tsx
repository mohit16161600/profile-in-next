import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/how-to-get-hostinger-90-off-2026";

export const metadata: Metadata = {
    title: "How to Get Up to 90% OFF Hostinger in 2026 (Deal Guide)",
    description:
        "Get up to 90% OFF Hostinger in 2026 by stacking the sale price with a 20% referral discount. Real prices, savings tables and a 7-step buying guide.",
    keywords: [
        "hostinger 90 off",
        "hostinger 90 percent off",
        "hostinger referral code 2026",
        "hostinger maximum discount",
        "how to buy hostinger hosting",
        "hostinger extra 20 percent off",
        "hostinger free domain offer",
        "hostinger lowest price india",
        "hostinger deal 2026",
        "hostinger referral discount stack",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "How to Get Up to 90% OFF Hostinger in 2026 (Deal Guide)",
        description:
            "Stack Hostinger's sale price with an extra 20% referral discount and pay the lowest possible price. Real prices, real math, step-by-step.",
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/how-to-get-hostinger-90-off-2026.png", width: 1200, height: 630, alt: "How to get 90% OFF on Hostinger in 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Get Up to 90% OFF Hostinger in 2026",
        description: "The exact discount-stacking method: sale price + extra 20% referral discount + free domain. Step-by-step with real prices.",
        images: ["/assets/blog/how-to-get-hostinger-90-off-2026.png"],
    },
};

const FAQ = [
    {
        q: "How do I actually get the maximum Hostinger discount?",
        a: "Stack two discounts: Hostinger's own sale (64–83% off, running almost year-round) plus the extra 20% referral discount that applies automatically when you buy through a referral link. On the Premium plan that turns ₹599/mo into roughly ₹119/mo — about 81% off. During mega sales like Black Friday the same stack reaches up to 90%.",
    },
    {
        q: "Do I need to type a coupon code manually?",
        a: "No. When you open Hostinger through the referral link, the extra discount is applied automatically at checkout on top of the current sale price. If you ever want to double-check, the code MOHITKOLI can be entered manually, but the link does it for you.",
    },
    {
        q: "Is the referral discount legit and safe?",
        a: "Yes. The referral program is run by Hostinger itself — the link goes straight to hostinger.com, payment happens on Hostinger's official checkout, and your discount is shown on the order summary before you pay. Hostinger reports 5M+ clients and 10M+ websites created on its platform.",
    },
    {
        q: "Which plan and billing term gives the biggest discount?",
        a: "The 48-month term always carries the deepest per-month discount. As of September 2026, Premium is ₹149/mo on the 48-month term (77% off ₹599) before the extra referral discount. Shorter terms (1–12 months) get much smaller discounts, and monthly billing gets almost none.",
    },
    {
        q: "Do I get a free domain with the discount?",
        a: "Yes — Premium, Business, and Cloud plans include a free domain for the first year (worth around ₹799). That is on top of free SSL certificates, so a complete website can start at roughly the price of a coffee per month.",
    },
    {
        q: "What happens after my first term — will renewal cost more?",
        a: "Yes, and no honest guide should hide it: Premium renews around ₹449/mo after the intro term. That is exactly why locking the 48-month term at ₹149/mo (or lower with referral) is the smart move — you freeze the discounted rate for 4 years.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "How to Get Up to 90% OFF Hostinger in 2026 (Deal Guide)",
        description:
            "Stack Hostinger's sale price with the extra 20% referral discount to pay the lowest possible price in 2026. Real prices, savings tables, and a 7-step buying walkthrough.",
        image: "https://mohitkoli.in/assets/blog/how-to-get-hostinger-90-off-2026.png",
        datePublished: "2026-07-02T00:00:00.000Z",
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
        keywords: "hostinger 90 off, hostinger referral code 2026, hostinger maximum discount, hostinger lowest price india",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "How to Get Up to 90% OFF Hostinger in 2026", item: CANONICAL },
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

function DealButton({ label }: { label: string }) {
    return (
        <a
            href={REFERRAL_URL}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
        >
            {label}
        </a>
    );
}

const STEPS = [
    {
        title: "Open Hostinger through the referral link",
        detail:
            "Click the button above (or any button on this page). It opens hostinger.com/in with the referral code MOHITKOLI attached — this is what unlocks the extra 20% discount on top of the public sale price. If you go directly to hostinger.com instead, you pay more for the exact same plan.",
        tip: "Bookmark the link if you are not buying today — the extra discount only applies through it.",
    },
    {
        title: "Pick your plan (Premium is right for most people)",
        detail:
            "Premium (₹149/mo on sale) hosts up to 3 websites with 20 GB SSD and a free domain — perfect for a blog, portfolio, or small business. Choose Business (₹199/mo) if you need 50 websites, NVMe storage, and daily backups. Cloud Startup (₹599/mo) is for high-traffic projects.",
        tip: "Not sure? Read my full plan-by-plan breakdown linked at the end of this guide.",
    },
    {
        title: "Select the 48-month term — this is where the discount lives",
        detail:
            "The advertised 77% OFF applies only to the 48-month term. Pick 12 months and the discount shrinks; pay monthly and it almost disappears. Four years locked at the lowest rate also protects you from the higher renewal price for four full years.",
        tip: "48 months at ₹149/mo costs less than 18 months at the renewal rate.",
    },
    {
        title: "Verify the referral discount at checkout",
        detail:
            "On the checkout page, look at the order summary. You should see the sale discount already applied, plus the extra referral discount lowering the total again. If you do not see it, enter code MOHITKOLI in the coupon field manually.",
        tip: "The final per-month price should land near ₹119/mo for Premium — cheaper than the public ₹149 sale price.",
    },
    {
        title: "Create your account and pay in INR",
        detail:
            "Hostinger India accepts UPI, all major cards, and net banking, billed in rupees. Use an email you check often — your domain and hosting renewals are managed there.",
        tip: "Pay with UPI to skip international-card issues completely.",
    },
    {
        title: "Claim your free domain (worth ~₹799)",
        detail:
            "After payment, the setup wizard asks you to claim your free 1-year domain. Do it immediately — the free-domain credit is part of the deal, and skipping the wizard means paying for a domain you could have gotten free.",
        tip: "A .com or .in — pick a short name; you can host it on the same plan.",
    },
    {
        title: "Install WordPress or deploy your site (5 minutes)",
        detail:
            "hPanel's one-click installer sets up WordPress, or you can use the AI website builder included with your plan. Free SSL activates automatically, so your site starts with https from day one.",
        tip: "Your 30-day money-back guarantee starts now — test everything risk-free.",
    },
];

export default function Hostinger90OffGuide() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Hostinger 90% OFF Guide</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">Hosting Deal · Updated September 1, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        How to Get Up to 90% OFF Hostinger in 2026 (Deal Guide)
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        Most people pay the &quot;sale price&quot; on Hostinger and think they got the best deal. They did not.
                        There is a second discount — an <strong className="text-white">extra 20% referral discount</strong> — that stacks
                        on top of the public sale and brings the total savings to <strong className="text-white">up to 90%</strong> depending
                        on the plan, term, and sale window. This guide shows the exact stacking method with prices re-checked in September 2026.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: this post contains my referral link. If you buy through it I earn a commission at no extra cost to you —
                        and you get the extra referral discount that a direct visit does not. Prices below were checked on September 1, 2026 and
                        change with Hostinger&apos;s sale cycles.
                    </p>

                    {/* Hero image */}
                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/how-to-get-hostinger-90-off-2026.svg"
                            alt="How to get 90% OFF on Hostinger in 2026 — discount stacking guide"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Coupon card */}
                    <section aria-label="Hostinger deal summary" className="mb-12">
                        <div className="rounded-3xl border-2 border-dashed border-purple-400/50 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-black/40 p-8 text-center">
                            <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">Active Deal · September 2026</p>
                            <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">UP TO 90% OFF</p>
                            <p className="text-gray-300 mb-1">
                                Sale price (64–83% off) <span className="text-white font-semibold">+ extra 20% referral discount</span> · Free domain · Free SSL
                            </p>
                            <p className="text-gray-400 text-sm mb-6">
                                Referral code <span className="bg-white/10 text-white px-2 py-1 rounded font-mono">MOHITKOLI</span> auto-applies through the button below
                            </p>
                            <DealButton label="Activate the Stacked Discount →" />
                            <p className="mt-4 text-xs text-gray-500">30-day money-back guarantee · Pay in INR (UPI, cards, net banking)</p>
                        </div>
                    </section>

                    {/* The math */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The discount math (real prices, checked July 2, 2026)</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Hostinger&apos;s Monsoon Sale is live right now. Here is what each plan costs at the regular price, at the public
                            sale price, and after the extra referral discount is stacked on top:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm md:text-base">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan (48-mo term)</th>
                                        <th className="p-4">Regular</th>
                                        <th className="p-4">Public Sale</th>
                                        <th className="p-4 text-purple-300 font-semibold">With Referral Stack</th>
                                        <th className="p-4 text-green-400 font-semibold">Total OFF</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5 bg-white/[0.02]">
                                        <td className="p-4 font-medium text-white">Premium <span className="text-xs text-purple-300">(most popular)</span></td>
                                        <td className="p-4 text-red-400 line-through">₹599/mo</td>
                                        <td className="p-4">₹149/mo <span className="text-xs text-gray-500">(75% off)</span></td>
                                        <td className="p-4 text-purple-300 font-bold">~₹119/mo</td>
                                        <td className="p-4 text-green-400 font-bold">~81%</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Business</td>
                                        <td className="p-4 text-red-400 line-through">₹699/mo</td>
                                        <td className="p-4">₹199/mo <span className="text-xs text-gray-500">(72% off)</span></td>
                                        <td className="p-4 text-purple-300 font-bold">~₹199/mo</td>
                                        <td className="p-4 text-green-400 font-bold">~77%</td>
                                    </tr>
                                    <tr className="border-t border-white/5 bg-white/[0.02]">
                                        <td className="p-4 font-medium text-white">Cloud Startup</td>
                                        <td className="p-4 text-red-400 line-through">₹1,699/mo</td>
                                        <td className="p-4">₹599/mo <span className="text-xs text-gray-500">(65% off)</span></td>
                                        <td className="p-4 text-purple-300 font-bold">~₹479/mo</td>
                                        <td className="p-4 text-green-400 font-bold">~72%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mb-8">
                            During peak sale windows (Black Friday, New Year), base discounts run deeper and the same referral stack pushes
                            the total to 90%. The referral portion is always there — the base sale is what moves.
                        </p>

                        {/* CSS bar chart */}
                        <h3 className="text-xl font-semibold text-white mb-4">What you actually pay per month (Premium plan)</h3>
                        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Regular price</span>
                                    <span className="text-red-400 font-semibold">₹599/mo</span>
                                </div>
                                <div className="h-4 rounded-full bg-white/5"><div className="h-4 rounded-full bg-red-500/70" style={{ width: "100%" }} /></div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Public sale price</span>
                                    <span className="text-yellow-300 font-semibold">₹149/mo</span>
                                </div>
                                <div className="h-4 rounded-full bg-white/5"><div className="h-4 rounded-full bg-yellow-400/80" style={{ width: "23%" }} /></div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300 font-medium">Sale + referral stack (this page)</span>
                                    <span className="text-green-400 font-bold">~₹119/mo</span>
                                </div>
                                <div className="h-4 rounded-full bg-white/5"><div className="h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: "18.5%" }} /></div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Over the full 48-month term that difference is not small: <strong className="text-white">₹28,752 at regular price
                            vs roughly ₹5,300 with the stack — about ₹23,000 saved</strong>, plus a free domain (~₹799) and free SSL on top.
                        </p>
                    </section>

                    <div className="text-center mb-12">
                        <DealButton label="Lock the 48-Month Price Now →" />
                    </div>

                    {/* Steps */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">The 7-step walkthrough (5–10 minutes total)</h2>
                        <div className="space-y-6">
                            {STEPS.map((step, i) => (
                                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold flex items-center justify-center text-lg">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-300 leading-7 mb-3">{step.detail}</p>
                                            <p className="text-sm text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2 inline-block">
                                                💡 {step.tip}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mistakes */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">5 mistakes that silently cost you the discount</h2>
                        <div className="space-y-4">
                            {[
                                ["Buying the 1-month or 12-month term", "The deep discount is exclusive to the 48-month term. A 12-month Premium term costs noticeably more per month, and monthly billing costs nearly full price. If you can only stretch to 24 months, that is still far better than 12."],
                                ["Visiting hostinger.com directly", "Direct visits get the public sale price only. The extra 20% referral layer exists only through a referral link — same website, same checkout, lower total."],
                                ["Waiting months for a “bigger” sale", "Hostinger rotates sales year-round and the floor price barely moves between them. Every month you wait is a month your site does not exist, does not rank, and does not earn."],
                                ["Skipping the free domain claim", "The wizard offers your free 1-year domain right after checkout. Skip it and buy a domain separately later, and you have donated ~₹799 back."],
                                ["Ignoring the renewal price", "Premium renews around ₹449/mo after your term. This is normal for the industry — but it is exactly why the 48-month lock is the rational choice: you push the expensive renewal four years away."],
                            ].map(([title, body]) => (
                                <div key={title} className="rounded-xl border border-red-500/20 bg-red-500/[0.06] p-5">
                                    <h3 className="font-semibold text-red-300 mb-1">⚠️ {title}</h3>
                                    <p className="text-gray-300 leading-7 text-sm md:text-base">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why this deal is safe to take</h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                                <p className="text-4xl font-extrabold text-white">5M+</p>
                                <p className="text-gray-400 text-sm mt-1">clients trust Hostinger, per Hostinger&apos;s own published count</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                                <p className="text-4xl font-extrabold text-white">10M+</p>
                                <p className="text-gray-400 text-sm mt-1">websites created on the platform</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                                <p className="text-4xl font-extrabold text-white">30 days</p>
                                <p className="text-gray-400 text-sm mt-1">full money-back guarantee — test everything, refund if unhappy</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                                <p className="text-4xl font-extrabold text-white">🇮🇳 Mumbai</p>
                                <p className="text-gray-400 text-sm mt-1">India data center for fast loading with Indian visitors</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8">
                            I use Hostinger for my own client projects — my detailed{" "}
                            <Link href="/blog/hostinger-vps-hosting-review-discount" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                Hostinger KVM VPS review
                            </Link>{" "}
                            covers the heavier plans. The worst case here is genuinely limited: if the speed or dashboard disappoints you,
                            the 30-day refund returns your money and you keep the experience.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger 90% OFF deal</h2>
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

                    {/* Final CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Ready? The stack takes 5 minutes.</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Sale price + extra 20% referral discount + free domain + free SSL + 30-day refund window.
                                That is the complete deal — no coupon hunting, no fine print surprises.
                            </p>
                            <DealButton label="Get Hostinger at ~₹119/mo →" />
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading (hosting series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/hostinger-review-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Review 2026 — honest verdict after a year of client sites</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — lock the discount before it matters</Link></li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing India 2026 — which plan should you actually buy?</Link></li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Domain Price India 2026 — .com, .in &amp; .store real costs</Link></li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost — 2026 India comparison with scores</Link></li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="hover:text-primary-300 underline underline-offset-4">7 Best Web Hosting Services in India (2026) — tested &amp; ranked</Link></li>
                            <li><Link href="/blog/hostinger-discount-code-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Discount Code 2026 — do coupon codes actually work?</Link></li>
                            <li><Link href="/blog/how-to-make-money-blogging-for-beginners-2026" className="hover:text-primary-300 underline underline-offset-4">How to Make Money from Blogging — put your new hosting to work</Link></li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Deal</h3>
                        <ShareButtons url={CANONICAL} title="How to Get Up to 90% OFF Hostinger in 2026 (Deal Guide)" />
                    </div>
                </article>
            </main>
        </>
    );
}
