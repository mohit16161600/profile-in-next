import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in/pricing?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-business-plan";
const IMAGE = "https://mohitkoli.in/assets/blog/hostinger-business-plan.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Hostinger Business Plan 2026: It's Now Called Unlimited",
    description:
        "Hostinger renamed Business to Unlimited in July 2026. What changed, the real ₹199.20/mo price with a referral code, and whether it's still the tier to buy.",
    keywords: [
        "hostinger business plan",
        "hostinger business plan price",
        "hostinger business hosting",
        "hostinger business plan india",
        "hostinger business vs premium",
        "hostinger unlimited plan",
        "hostinger unlimited vs business",
        "hostinger business plan review",
        "is hostinger business plan worth it",
        "hostinger business plan renewal price",
        "hostinger business plan features",
        "what happened to hostinger business plan",
        "hostinger business plan for woocommerce",
        "hostinger business plan discount",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger Business Plan 2026: It's Now Called Unlimited",
        description:
            "Business was renamed Unlimited in July 2026. What changed, the real ₹199.20/mo price, and whether it's still the plan to buy.",
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger Business plan renamed to Unlimited in 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger Business Plan 2026: It's Now Called Unlimited",
        description: "The rename explained, the real price, and who should still buy it.",
        images: [IMAGE],
    },
};

/**
 * Prices read off Hostinger India's pricing page on 24 Aug 2026 with the referral code
 * applied. The code takes exactly 20% off the live sale price (₹249 -> ₹199.20).
 */
const COMPARE = [
    {
        name: "Premium", sale: "₹149", referral: "₹119.20", renews: "₹449",
        sites: "3", storage: "20 GB SSD", backups: "Weekly", cdn: false, ecom: false,
        ai: false, node: false, priority: false, mail: "2 per site",
    },
    {
        name: "Unlimited", sale: "₹249", referral: "₹199.20", renews: "₹649",
        sites: "Unlimited", storage: "50 GB NVMe", backups: "Daily + easy restore", cdn: true, ecom: true,
        ai: true, node: true, priority: true, mail: "Unlimited", highlight: true,
    },
    {
        name: "Cloud Startup", sale: "₹599", referral: "₹479.20", renews: "₹1,599",
        sites: "Unlimited", storage: "100 GB NVMe", backups: "Daily + on demand", cdn: true, ecom: true,
        ai: true, node: true, priority: true, mail: "Unlimited",
    },
];

const CHANGES = [
    ["Plan name", "Business", "Unlimited"],
    ["Websites", "Capped", "Unlimited (fair usage)"],
    ["Mailboxes, free 1 yr", "Fixed number", "Unlimited per website"],
    ["Horizons AI credits", "Not included", "15 credits"],
    ["AI email marketing", "Not included", "Free for 1 year"],
    ["Storage", "NVMe", "50 GB NVMe"],
    ["Downgrade allowed", "Yes", "No — you can't move to a lower tier"],
];

const FAQ = [
    { q: "Does Hostinger still have a Business plan?", a: "Not under that name on the main hosting pages. Since July 2026 the plan is sold as Unlimited, which is a rebrand of Business rather than a new product. Business is still offered on a few select landing pages such as the Website Builder pages, so you may occasionally still see the old name floating around." },
    { q: "What is the Hostinger Business plan price in India?", a: "The plan that replaced it — Unlimited — is ₹249/mo on the 48-month term, which becomes ₹199.20/mo once a referral code is applied. That's ₹9,561.60 charged upfront for the full four years, against a regular price of ₹33,552. It renews at ₹649/mo." },
    { q: "What happens to my existing Hostinger Business plan?", a: "Nothing. Existing Business customers keep their plan and their existing limits — Hostinger didn't migrate anyone off it. You carry on exactly as before, and your renewal terms are the ones you originally agreed to. The rename only affects what new customers can buy." },
    { q: "Is Unlimited the same as the old Business plan?", a: "Broadly yes, with some upgrades. It keeps the NVMe storage, daily backups, CDN and priority support that made Business worth buying, and adds unlimited websites, unlimited mailboxes for the first year, 15 Horizons AI credits and free AI email marketing for a year. The one restriction added is that you can't downgrade an Unlimited plan to a lower tier." },
    { q: "Hostinger Business vs Premium — which should I buy?", a: "Unlimited (formerly Business) for ₹80/mo more than Premium, in almost every case. That ₹80 buys NVMe storage instead of SSD, daily backups instead of weekly, a CDN, integrated ecommerce, Node.js support and priority support. Premium only wins if you genuinely run one small brochure site and never will need those." },
    { q: "Is the Hostinger Business plan good for WooCommerce?", a: "Yes — it's the entry point where a store starts making sense. NVMe keeps admin pages and checkout responsive under load, integrated ecommerce is included, and daily backups mean a broken plugin update is a ten-minute problem rather than a disaster. Premium can technically run WooCommerce but will feel slow as the catalogue grows." },
    { q: "What does 'unlimited websites' actually mean?", a: "It means no hard cap on how many sites you add, subject to Hostinger's fair usage policy. It does not mean unlimited resources — all those sites share the same 50 GB of NVMe storage and the plan's CPU and memory allocation. Ten small brochure sites are fine. Ten busy stores are not." },
    { q: "What is the renewal price?", a: "Unlimited renews at ₹649/mo against the ₹249 promotional rate — roughly 2.6x. Buying the 48-month term is how you delay that for four years, which is exactly why the long term carries the advertised price. Put a reminder in your calendar six weeks before the term ends." },
    { q: "Can I upgrade from Premium to Unlimited later?", a: "Yes, upgrading inside hPanel is straightforward and you pay the difference for the remaining term. What you can't do is go the other way — Hostinger doesn't allow downgrading an Unlimited plan. Buy the tier you need rather than assuming you can step back down." },
    { q: "Does the Business plan include a free domain?", a: "Yes. Unlimited includes a domain free for the first year, along with free SSL, a free CDN and free website migration. From year two the domain renews at standard registry rates, so budget roughly ₹1,000-₹1,400 for a .com in your second year." },
    { q: "How many email accounts do I get?", a: "Unlimited mailboxes per website, free for the first year — one of the genuine upgrades over the old Business plan, which capped the number. After year one, email moves to Hostinger's standard pricing, so check that rate before you build a workflow around fifty mailboxes." },
    { q: "Is there a money-back guarantee?", a: "Hostinger offers a 30-day money-back guarantee on hosting plans. Domain registration fees are generally non-refundable, so if you claim the free domain and then cancel, expect that cost to be deducted from your refund. Test the service properly inside those 30 days." },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Hostinger Business Plan 2026: It's Now Called Unlimited",
        description: "Hostinger renamed Business to Unlimited in July 2026. What changed, the real price, and whether it's still the right plan.",
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: {
            "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile",
            jobTitle: "Senior Full Stack Developer",
            sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"],
        },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "hostinger business plan, hostinger business plan price, hostinger unlimited plan, hostinger business vs premium, hostinger business hosting",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Business Plan", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
    },
];

const Tick = ({ on }: { on: boolean }) => (
    <span className={on ? "text-emerald-400" : "text-gray-600"} aria-label={on ? "included" : "not included"}>{on ? "✓" : "—"}</span>
);

/** Reusable CTA so the wording can vary by placement without duplicating markup. */
const Cta = ({ label, note }: { label: string; note?: string }) => (
    <div>
        <a
            href={REFERRAL_URL}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
        >
            {label}
        </a>
        {note && <p className="mt-3 text-xs text-gray-500">{note}</p>}
    </div>
);

export default function HostingerBusinessPlan() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Hostinger Business Plan</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Hosting</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Hostinger Business Plan in 2026: New Name, Better Deal
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            You went looking for Hostinger&apos;s Business plan and it isn&apos;t there. You&apos;re not
                            imagining it — in July 2026 they renamed it <strong className="text-white">Unlimited</strong>.
                            Same plan underneath, a few things added, and right now it&apos;s{" "}
                            <strong className="text-white">₹199.20/mo</strong> with a referral code instead of ₹249.
                        </p>
                        <p className="mt-4 text-lg text-gray-300 leading-8">
                            Here&apos;s the full story: what actually changed, what every plan costs, and whether this is
                            still the tier I&apos;d point you at.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>14 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/hostinger-business-plan.svg" alt="Hostinger Business plan renamed to Unlimited in 2026" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        This article has affiliate links. If you buy through one I earn a commission at no extra cost to
                        you — and the referral code knocks 20% off your price, so it cuts both ways. Every number here was
                        read off Hostinger India&apos;s pricing page on 24 August 2026 with the code applied. Hosting
                        prices move; check at checkout.
                    </p>

                    {/* Quick answer */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Short answer</h2>
                        <p className="text-gray-300 leading-8">
                            The Business plan still exists — it&apos;s just called{" "}
                            <strong className="text-white">Unlimited</strong> now. It&apos;s a rebrand, not a replacement.
                            NVMe storage, daily backups, CDN and priority support all carried over, and Hostinger threw in
                            unlimited websites, unlimited mailboxes for a year, and 15 Horizons AI credits. If you already
                            had Business, nothing happened to your account.
                        </p>
                    </section>

                    {/* Offer strip + CTA #1 */}
                    <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7">
                        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">What it costs today</p>
                        <div className="flex flex-wrap items-baseline gap-4 mb-4">
                            <span className="text-gray-500 line-through text-2xl">₹699</span>
                            <span className="text-4xl font-bold text-white">₹199.20</span>
                            <span className="text-gray-400">/mo</span>
                            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">72% off</span>
                        </div>
                        <p className="text-gray-300 leading-8 mb-6">
                            The sale price is ₹249/mo. A referral code takes another 20% off that, landing at{" "}
                            <strong className="text-white">₹199.20/mo</strong> on the 48-month term — that&apos;s{" "}
                            <strong className="text-white">₹9,561.60 paid upfront</strong> for four years, against a regular
                            price of ₹33,552. Yes, upfront. I&apos;ll come back to that, because it matters.
                        </p>
                        <Cta label="Check This Price Yourself →" note="Opens with the code applied — look for the 'Referral code applied' badge" />
                    </section>

                    {/* What changed */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Business → Unlimited: what actually changed</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Most articles you&apos;ll find still describe the Business plan like nothing happened. Here&apos;s
                            the real diff.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Feature</th><th className="p-4">Old &ldquo;Business&rdquo;</th><th className="p-4">New &ldquo;Unlimited&rdquo;</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {CHANGES.map((r) => (
                                        <tr key={r[0]} className="border-t border-white/5">
                                            <td className="p-4 font-medium text-white">{r[0]}</td>
                                            <td className="p-4 text-gray-400">{r[1]}</td>
                                            <td className="p-4 text-emerald-300">{r[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            On balance the rename made it better. There is one real catch though:{" "}
                            <strong className="text-white">you can&apos;t downgrade an Unlimited plan any more.</strong> Buy the
                            tier you actually need, not the one you might grow into and then want to step back from.
                        </p>
                    </section>

                    {/* Comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Premium vs Business (Unlimited) vs Cloud</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            The question everyone actually asks is whether the Business tier justifies the jump from
                            Premium. Here&apos;s the whole range with the referral price applied.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Feature</th>
                                        {COMPARE.map((p) => (
                                            <th key={p.name} className={`p-4 ${p.highlight ? "text-primary-300" : ""}`}>
                                                {p.name}{p.highlight && <span className="block text-[10px] uppercase tracking-wider text-primary-400">was Business</span>}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Price with code</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4 font-bold text-emerald-400">{p.referral}/mo</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Sale price</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4">{p.sale}/mo</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Renews at</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4 text-amber-300">{p.renews}/mo</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Websites</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4">{p.sites}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Storage</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4">{p.storage}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Backups</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4">{p.backups}</td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">CDN</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4"><Tick on={p.cdn} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Integrated ecommerce</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4"><Tick on={p.ecom} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Node.js</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4"><Tick on={p.node} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">AI tools</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4"><Tick on={p.ai} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Priority 24/7 support</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4"><Tick on={p.priority} /></td>)}
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Free mailboxes, 1 yr</td>
                                        {COMPARE.map((p) => <td key={p.name} className="p-4">{p.mail}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-6">
                            Look at the first row. <strong className="text-white">₹80/mo</strong> separates Premium from the
                            Business tier — and that ₹80 buys NVMe instead of SSD, daily backups instead of weekly, a CDN,
                            ecommerce, Node.js and priority support. That&apos;s the best-value step in Hostinger&apos;s
                            entire range, and it&apos;s why Business was always their most popular plan.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Decided it&apos;s the Business tier?</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                ₹199.20/mo with the code, free domain for year one, and 30 days to change your mind if
                                you&apos;re wrong about it.
                            </p>
                            <Cta label="Get Unlimited at 72% Off →" />
                        </div>
                    </section>

                    {/* What you get */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What you&apos;re actually paying for</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Feature lists are easy to skim past. Here&apos;s what each one changes in practice.
                        </p>
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                ["50 GB NVMe storage", "NVMe is genuinely faster than the SSD on Premium, and you notice it exactly where it hurts — WordPress admin, WooCommerce checkout, anything that hammers the database. It's not marketing; it's a different class of drive."],
                                ["Daily backups + one-click restore", "Weekly backups mean a bad plugin update can cost you six days. Daily backups turn that into ten minutes and a mild swear. If your site makes money, this line alone pays for the upgrade."],
                                ["Free CDN", "Static files get served from an edge location instead of one data centre. If any of your visitors are outside your region, that's free speed you'd otherwise pay Cloudflare for."],
                                ["Unlimited websites", "The old Business plan capped this. Now there's no hard limit — subject to fair usage. Genuinely useful if you run client sites or half-finished side projects like the rest of us."],
                                ["Integrated ecommerce", "Store functionality without bolting on another platform. Paired with NVMe, this is the cheapest sensible place to start a WooCommerce store."],
                                ["Node.js support", "Single and Premium can't run Node at all. This is the tier where deploying something that isn't PHP becomes possible."],
                                ["Priority 24/7 support", "You skip the queue. Worth exactly as much as an hour of downtime costs you — which for a hobby blog is nothing, and for a store is a lot."],
                                ["Unlimited mailboxes, free 1 year", "A real upgrade over old Business, which capped the count. Just remember it's free for a year, then it moves to standard email pricing."],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="text-base font-semibold text-white mb-2">{t}</h3>
                                    <p className="text-sm text-gray-300 leading-7">{d}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Honest section on "unlimited" */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s be honest about &ldquo;unlimited&rdquo;</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Unlimited websites doesn&apos;t mean unlimited resources, and any host that implies otherwise
                            is being slippery. What you get is no <em>hard cap</em> on how many sites you add — but all of
                            them share the same 50 GB of NVMe and the same CPU and memory allocation, under a fair usage
                            policy.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            In practice: ten small brochure sites, no problem. Ten busy WooCommerce stores, absolutely not
                            — you&apos;d be looking at{" "}
                            <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting</Link>{" "}
                            or a{" "}
                            <Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">VPS</Link>{" "}
                            long before that.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The useful way to read &ldquo;unlimited&rdquo; here is: <em>stop counting</em>. You&apos;re no
                            longer choosing which three sites deserve a slot. That&apos;s the actual benefit, and it&apos;s
                            a real one.
                        </p>
                    </section>

                    {/* Real scenarios */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Three situations, three answers</h2>
                        <div className="space-y-5">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">You&apos;re starting a WooCommerce store</h3>
                                <p className="text-gray-300 leading-8">
                                    Buy this tier. Not because the store needs it on day one — it doesn&apos;t — but because
                                    the day it does, you&apos;ll be mid-sale with a slow checkout and no recent backup.
                                    NVMe plus daily backups plus integrated ecommerce for ₹199.20/mo is the cheapest version
                                    of &ldquo;I don&apos;t want to think about this.&rdquo;
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">You&apos;re a freelancer with client sites</h3>
                                <p className="text-gray-300 leading-8">
                                    Also buy this tier, for a different reason: unlimited sites and daily backups mean one
                                    plan covers your whole roster, and when a client breaks something you restore it before
                                    they finish typing the panicked WhatsApp message. Priority support helps here too.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-2">You have one blog with modest traffic</h3>
                                <p className="text-gray-300 leading-8">
                                    Don&apos;t buy this tier.{" "}
                                    <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Premium at ₹119.20/mo</Link>{" "}
                                    is genuinely enough, and you can upgrade in about two minutes the day it isn&apos;t.
                                    I&apos;d rather you spend the ₹80 difference on anything else.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Cost math + CTA #3 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The upfront thing, and the four-year maths</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            ₹199.20/mo is not a monthly bill. Hostinger charges the whole term at once — so it&apos;s{" "}
                            <strong className="text-white">₹9,561.60 today</strong>, and the monthly figure is just that
                            total divided by 48. Their pricing page says so plainly, but the big number on the card is the
                            monthly one, so it&apos;s worth repeating.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">How you buy</th><th className="p-4">Effective rate</th><th className="p-4">4-year cost</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">48-month term, code applied</td>
                                        <td className="p-4">₹199.20/mo locked</td>
                                        <td className="p-4 font-semibold text-emerald-300">₹9,561.60</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-medium text-white">Short term, then renew</td>
                                        <td className="p-4">₹649/mo after intro</td>
                                        <td className="p-4 font-semibold text-red-300">Roughly ₹28,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-6">
                            That gap is the whole reason Hostinger advertises 48-month pricing. It isn&apos;t a trick —
                            it&apos;s a genuine trade of commitment for price. If four years is realistic, take it. If it
                            isn&apos;t, buy a shorter term and set a reminder, because ₹649/mo shows up quietly. I went
                            through the full pattern in the{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">renewal price guide</Link>.
                        </p>
                        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7">
                            <h3 className="text-xl font-bold text-white mb-3">Lock the ₹199.20 rate for four years</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                ₹9,561.60 upfront instead of roughly ₹28,000 the slow way. Free domain, free SSL, free
                                migration, 30-day refund window.
                            </p>
                            <Cta label="Compare Hostinger Plans →" note="Referral discount applies automatically — no code to type" />
                        </div>
                    </section>

                    {/* Existing customers */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Already on the old Business plan?</h2>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-gray-300 leading-8">
                                Do nothing. Hostinger didn&apos;t migrate existing Business customers — you keep your plan,
                                your limits and your original renewal terms. The rename only affects what new customers can
                                buy. If you&apos;re happy, stay put. If your renewal is coming up and the new Unlimited
                                pricing looks better, that&apos;s a separate decision to make on the numbers, not on the
                                name.
                            </p>
                        </div>
                    </section>

                    {/* Mistakes */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Four ways people overpay for this plan</h2>
                        <ul className="space-y-4 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">Not opening it through a referral link.</strong> That&apos;s ₹249 instead of ₹199.20 — around ₹2,390 over four years, for nothing.</li>
                            <li><strong className="text-white">Leaving the checkout add-ons ticked.</strong> Hostinger pre-selects extras. This is where a good deal quietly turns average. Untick everything you didn&apos;t come for.</li>
                            <li><strong className="text-white">Buying a 12-month term to &ldquo;try it.&rdquo;</strong> You get 30 days to decide anyway. A short term just means renewing at ₹649 sooner.</li>
                            <li><strong className="text-white">Forgetting the renewal date.</strong> Four years is long enough to forget completely. Set the calendar reminder the same day you buy.</li>
                        </ul>
                    </section>

                    {/* How to get it + CTA #4 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How to get ₹199.20 instead of ₹249</h2>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside mb-6">
                            <li>Open Hostinger India <strong className="text-white">through a referral link</strong> — the 20% only applies that way.</li>
                            <li>Check the <strong className="text-white">&ldquo;Referral code applied&rdquo;</strong> badge is showing above the plan cards.</li>
                            <li>Pick the <strong className="text-white">48-month term</strong> — that&apos;s where the advertised rate comes from.</li>
                            <li>Choose <strong className="text-white">Unlimited</strong>, the plan that was Business. Confirm it reads ₹199.20/mo.</li>
                            <li><strong className="text-white">Untick the pre-selected extras.</strong></li>
                            <li>Claim the free domain, then set that renewal reminder.</li>
                        </ol>
                        <p className="text-gray-300 leading-8 mb-6">
                            If the discount doesn&apos;t show up, clear cookies and open the link in a fresh tab — an
                            earlier visit without a code can stick. More on what actually works in{" "}
                            <Link href="/blog/hostinger-discount-code-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger discount codes</Link>{" "}
                            and the entry-level{" "}
                            <Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">₹55/mo offer</Link>.
                        </p>
                        <Cta label="Start Your Website With Hostinger →" note="₹199.20/mo · Free domain · 30-day money-back" />
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger Business plan</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <summary className="cursor-pointer text-lg font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Verdict + CTA #5 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Verdict</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Business was always Hostinger&apos;s sweet spot, and renaming it to Unlimited didn&apos;t change
                            that — it improved it. For ₹80/mo more than Premium you get the three things that actually make
                            a site fast and safe: NVMe storage, daily backups and a CDN. Ecommerce and Node.js support come
                            along for the ride, and the lower tiers simply don&apos;t offer either.
                        </p>
                        <p className="text-gray-300 leading-8 mb-6">
                            At ₹199.20/mo with a referral code, this is the plan I&apos;d point most people at — a store, a
                            business site, or anyone juggling more than one project. Buy the long term, untick the add-ons,
                            diary the renewal. Skip it only if you genuinely run one small blog, in which case Premium does
                            the job for less and you can upgrade later.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Get the Business tier at ₹199.20/mo</h3>
                            <p className="text-gray-300 leading-8 mb-6">
                                Unlimited websites, 50 GB NVMe, daily backups, free CDN, integrated ecommerce, Node.js,
                                priority support, and a free domain for year one. 30-day money-back guarantee, free
                                migration if you&apos;re moving an existing site.
                            </p>
                            <Cta label="Claim 72% Off Unlimited Hosting →" />
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Every Hostinger plan compared</Link> — the full range with prices.</li>
                            <li><Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">The ₹55/mo entry offer</Link> — if budget is the deciding factor.</li>
                            <li><Link href="/blog/hostinger-review-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger review</Link> — is it actually any good?</li>
                            <li><Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger for WordPress</Link> — which tier suits a WordPress site.</li>
                            <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting explained</Link> — the tier above this one.</li>
                            <li><Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Migrating an existing site</Link> — moving across without downtime.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title="Hostinger Business Plan 2026: It's Now Called Unlimited" />
                    </div>
                </article>
            </main>
        </>
    );
}
