import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import CopyCode from "@/components/CopyCode";
import {
    HOSTINGER_CODE,
    VPS_OS_TEMPLATES,
    VPS_PLANS,
    VPS_REFERRAL_URL,
    VPS_REGIONS,
    VPS_VERIFIED,
    VPS_VERIFIED_ISO,
    inr,
    withCode,
} from "@/data/hostinger-vps";

const REFERRAL_URL = VPS_REFERRAL_URL;
const CANONICAL = "https://mohitkoli.in/blog/hostinger-kvm-vps-plans-india-2026";
const HINGLISH = "/blog/hostinger-vps-review-hindi-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-vps-hosting-india-2026.png";
const PUBLISHED = "2026-09-07T00:00:00.000Z";
const VERIFIED = VPS_VERIFIED;

export const metadata: Metadata = {
    title: "Hostinger KVM VPS India 2026: 69% Off, From ₹599/mo",
    description:
        "KVM 4 more than doubles at renewal — ₹1,099 to ₹2,399. Every Hostinger VPS plan's specs, real renewal rate, and which one is worth buying.",
    keywords: [
        "hostinger kvm vps",
        "hostinger vps price",
        "hostinger vps price india",
        "hostinger kvm 1",
        "hostinger kvm 2",
        "hostinger kvm 4",
        "hostinger kvm 8",
        "hostinger vps plans",
        "hostinger vps hosting india",
        "hostinger vps renewal price",
        "hostinger kvm vps review",
        "which hostinger vps plan is best",
        "hostinger vps specs",
        "kvm vps india price",
        "hostinger vps review",
        "hostinger vps coupon code",
        "hostinger vps one year price",
        "hostinger vps security features",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Hostinger KVM VPS India 2026: 69% Off, From ₹599/mo",
        description:
            "Every Hostinger KVM VPS plan priced for India — KVM 1 to KVM 8, sale price, renewal rate, specs and which one is actually worth buying.",
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: VPS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger KVM VPS plans and prices in India 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hostinger KVM VPS India 2026: From ₹599/mo",
        description: "KVM 1, 2, 4 and 8 compared — sale price, renewal rate, specs, and the plan most people should actually buy.",
        images: [IMAGE],
    },
};

/** Editorial text per plan; every number comes from src/data/hostinger-vps.ts. */
const PLAN_COPY: Record<string, { badge: string; best: string; take: string; highlight: boolean }> = {
    "KVM 1": {
        badge: "", best: "Testing, staging boxes, low-traffic personal projects",
        take: "Genuinely usable, but 4 GB fills up fast once a database and a build process share it.",
        highlight: false,
    },
    "KVM 2": {
        badge: "BEST STARTER", best: "A single production app, WordPress, small SaaS",
        take: "The cheapest plan I would put a real production app on. Most people should start here.",
        highlight: false,
    },
    "KVM 4": {
        badge: "BEST VALUE", best: "Growing apps, agencies, stores, several sites on one box",
        take: "The deepest discount in the range and the point where builds, backups and traffic stop competing.",
        highlight: true,
    },
    "KVM 8": {
        badge: "HIGH LOAD", best: "High traffic, large databases, multiple services on one server",
        take: "Buy this only when you already know why you need it — the renewal is ₹4,399/mo.",
        highlight: false,
    },
};

const PLANS = VPS_PLANS.map((p) => ({
    ...PLAN_COPY[p.name],
    name: p.name,
    sale: p.sale,
    regular: p.regular,
    off: `${p.off}%`,
    renewal: p.renewal,
    code: inr(withCode(p.sale)),
    vcpu: `${p.vcpu} vCPU core${p.vcpu > 1 ? "s" : ""}`,
    ram: `${p.ramGb} GB RAM`,
    disk: `${p.diskGb} GB NVMe`,
    bw: `${p.bandwidthTb} TB bandwidth`,
}));

const FAQ = [
    {
        q: "How much does Hostinger VPS cost in India?",
        a: "On the current sale, KVM 1 is ₹599/mo, KVM 2 is ₹799/mo, KVM 4 is ₹1,099/mo and KVM 8 is ₹2,199/mo. Those rates require paying the full term upfront and apply to your first purchase only — the plans renew at ₹999, ₹1,199, ₹2,399 and ₹4,399 per month respectively. Prices verified on Hostinger's India VPS page in September 2026.",
    },
    {
        q: "How much is Hostinger VPS for one year?",
        a: "At the sale rates, twelve months costs ₹7,188 on KVM 1, ₹9,588 on KVM 2, ₹13,188 on KVM 4 and ₹26,388 on KVM 8, before 18% GST. The same year at the renewal rates is ₹11,988, ₹14,388, ₹28,788 and ₹52,788. The cart shows the exact term and total before you pay.",
    },
    {
        q: "Which Hostinger KVM plan is best?",
        a: "KVM 2 for a first production app — 2 vCPU and 8 GB RAM handles a normal site or small SaaS comfortably. KVM 4 is the best value in the range: it carries the deepest discount (69%) and 16 GB RAM means a build, a backup and live traffic can happen at once without the box struggling. KVM 1 is for testing and staging; KVM 8 only when you already know you need it.",
    },
    {
        q: "What does KVM mean in Hostinger VPS?",
        a: "KVM stands for Kernel-based Virtual Machine — full hardware virtualisation. Your server gets its own kernel and genuinely dedicated vCPU and RAM, rather than sharing a host kernel with neighbours the way container-based virtualisation (OpenVZ, LXC) does. It is the difference between resources you actually own and resources that quietly disappear when the node gets busy.",
    },
    {
        q: "Is Hostinger VPS renewal price higher?",
        a: "Yes, substantially. KVM 1 goes from ₹599 to ₹999/mo, KVM 2 from ₹799 to ₹1,199, KVM 4 from ₹1,099 to ₹2,399 and KVM 8 from ₹2,199 to ₹4,399. KVM 4 more than doubles. No coupon or referral discount applies to a renewal, which is why the term length you pick at signup matters more than the headline rate.",
    },
    {
        q: "What hardware does Hostinger run its VPS on?",
        a: "Hostinger states AMD EPYC processors in HPE and Dell servers, NVMe SSD storage on every plan, and a 1 Gbps network across the range. The hardware is the same whether you buy KVM 1 or KVM 8 — what changes between plans is how much of it is allocated to you.",
    },
    {
        q: "What security features does Hostinger VPS include?",
        a: "Every KVM plan lists a malware scanner that automatically detects and removes malicious files, built-in firewall management, Wanguard DDoS filtering, free weekly backups and manual snapshots you can roll back to in minutes. Those tools reduce the work, but OS updates and your application's own security are still your job on an unmanaged server.",
    },
    {
        q: "Does Hostinger VPS have an uptime SLA?",
        a: "Hostinger's VPS plan page does not state an uptime percentage or SLA as of 17 September 2026, so treat any 99.9% figure quoted elsewhere as unconfirmed for VPS. If contractual uptime matters for your business, read Hostinger's current terms of service before relying on one.",
    },
    {
        q: "Does Hostinger VPS support Windows Server?",
        a: "No. Hostinger's KVM VPS plans are built for Linux — Ubuntu, Debian, AlmaLinux, Rocky Linux and CentOS are the usual choices. If you need Windows Server, this is not the provider for that workload.",
    },
    {
        q: "Which operating systems can I install on Hostinger VPS?",
        a: "Hostinger offers one-click templates for Linux distributions including Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS, Fedora and Alpine Linux, plus control panels and applications. The template list changes over time, so check the selector in hPanel if you need a specific distribution.",
    },
    {
        q: "Where are Hostinger VPS data centres?",
        a: "Hostinger lists VPS data centre regions in North America, Europe, Asia and South America. Pick the region closest to most of your visitors — latency to the server matters more for dynamic requests than any spec difference between neighbouring plans.",
    },
    {
        q: "Is Hostinger VPS managed or unmanaged?",
        a: "Unmanaged, in the sense that matters: you get root access and you own OS updates, server configuration, and whatever breaks at 3 AM. hPanel adds firewall management, a malware scanner, backups and the Hostinger Agent AI assistant, which makes the work much easier than a bare terminal, but nobody is patching your server for you. Budget the time or stay on managed shared hosting.",
    },
    {
        q: "How many visitors can a Hostinger VPS handle?",
        a: "There is no honest fixed number. Capacity depends on your application, caching, database queries, page weight and traffic pattern far more than on the plan name. Load-test your real app, watch CPU and RAM, and move up a tier when either stays pinned.",
    },
    {
        q: "Can I upgrade my Hostinger VPS plan later?",
        a: "Yes — moving up a tier is straightforward and adds CPU, RAM and storage. Downgrading is the harder direction and generally needs support involvement, which is a good reason not to over-buy on day one. Start at KVM 2, move to KVM 4 when the numbers say so.",
    },
    {
        q: "How much bandwidth do Hostinger VPS plans include?",
        a: "4 TB on KVM 1, 8 TB on KVM 2, 16 TB on KVM 4 and 32 TB on KVM 8, all on a 1 Gbps network. For context, a normal content site with 100,000 monthly visits rarely exceeds 1 TB — bandwidth is almost never the limit that pushes people up a tier. RAM is.",
    },
    {
        q: "Is there a money-back guarantee on Hostinger VPS?",
        a: "Yes, 30 days. That is genuinely enough time to deploy your actual application, put real traffic through it, and find out whether the plan you picked is the right size. Use it as a test window rather than guessing from spec sheets.",
    },
    {
        q: "Do I need a VPS, or is shared hosting enough?",
        a: "Stay on shared hosting unless one of three things is true: you need a runtime the shared panel does not offer (custom Node.js, Docker, background workers), your resource graph is pinned at its limit month after month, or you need root access for something specific. Buying a VPS 'for growth' mostly means paying more to become your own sysadmin.",
    },
    {
        q: "How does the extra 20% discount work?",
        a: "Opening Hostinger through a referral link applies an additional 20% on top of whatever sale price is showing, which is what turns ₹1,099 into roughly ₹879/mo on KVM 4. It applies to a fresh purchase, shows in the cart before you pay, and stacks on the sale rather than replacing it. It does not apply to renewals.",
    },
    {
        q: "How do I use the code MOHITKOLI?",
        a: "Open Hostinger through any button on this page and the discount is applied automatically. If the order summary does not show it, enter MOHITKOLI in the coupon field under the order summary. Only one code can be attached to an order, and no code applies to a renewal — confirm the discounted total before you pay.",
    },
    {
        q: "Is GST added on top of Hostinger VPS prices?",
        a: "Yes — 18% GST is added at checkout on Indian billing, so the invoice lands above the listed figure. If you have a GSTIN you can enter it during checkout. Factor it in when comparing against providers that quote in dollars.",
    },
];

const TOC = [
    ["plans", "Hostinger VPS price list"],
    ["features", "What every KVM plan includes"],
    ["renewal", "Renewal price — the year-two number"],
    ["which-plan", "Which KVM plan to buy"],
    ["kvm", "Why KVM matters"],
    ["vs-budget-vps", "Hostinger vs a typical budget VPS"],
    ["performance", "Hardware, network and security"],
    ["limits", "What Hostinger VPS does not do"],
    ["discount-code", "How to get the extra 20% off"],
    ["verdict", "Verdict, pros and cons"],
    ["faq", "FAQ"],
] as const;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            headline: "Hostinger KVM VPS Plans in India (2026): KVM 1, 2, 4 and 8 Compared",
            description:
                "Every Hostinger KVM VPS plan priced for India with real renewal rates, full specs, security features, and which plan is actually worth buying.",
            image: IMAGE,
            datePublished: PUBLISHED,
            dateModified: VPS_VERIFIED_ISO,
            inLanguage: "en-IN",
            author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in" },
            publisher: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in" },
            mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        },
        {
            "@type": "Product",
            "@id": CANONICAL + "#product",
            name: "Hostinger KVM VPS Hosting",
            description:
                "KVM-virtualised VPS hosting with dedicated vCPU and RAM, NVMe SSD storage, dedicated IP and full root access, sold in India as KVM 1, KVM 2, KVM 4 and KVM 8.",
            brand: { "@type": "Brand", name: "Hostinger" },
            image: IMAGE,
            offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: String(VPS_PLANS[0].sale),
                highPrice: String(VPS_PLANS[VPS_PLANS.length - 1].sale),
                offerCount: PLANS.length,
                availability: "https://schema.org/InStock",
                url: CANONICAL,
                offers: PLANS.map((p) => ({
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
                reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5" },
                author: { "@type": "Person", name: "Mohit Koli" },
                datePublished: PUBLISHED,
                reviewBody:
                    "Strong price-to-spec ratio across the KVM range with genuine KVM virtualisation and NVMe storage on every plan. The renewal rates are the real consideration — KVM 4 more than doubles at renewal — and there is no Windows Server support.",
            },
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
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
                { "@type": "ListItem", position: 3, name: "Hostinger KVM VPS Plans India", item: CANONICAL },
            ],
        },
    ],
};

const Cta = ({ label, note }: { label: string; note?: string }) => (
    <div className="my-8 text-center">
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

export default function HostingerKvmVpsPlans() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Hostinger KVM VPS Plans</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">
                        VPS Pricing · Verified {VERIFIED}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                        Hostinger KVM VPS Plans in India (2026): KVM 1, 2, 4 and 8 Compared
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-4">
                        Four plans, one hardware platform, and a price gap of nearly 4× between the cheapest and the
                        largest. This page lists{" "}
                        <strong className="text-white">every KVM plan&apos;s sale price, its renewal rate, and its full specs</strong>{" "}
                        — then says plainly which one most people should actually buy, and which one is a trap.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                        Disclosure: links on this page carry my referral code, which applies an extra discount for you
                        and pays me a commission at no extra cost. Every price was checked on Hostinger&apos;s India VPS
                        page on {VERIFIED} and can change — confirm in the cart before paying.
                    </p>
                    <p className="text-sm text-gray-400 mb-8">
                        Prefer Hinglish?{" "}
                        <Link href={HINGLISH} className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                            Read this guide in Hinglish →
                        </Link>
                    </p>

                    {/* ---------- Table of contents ---------- */}
                    <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">On this page</p>
                        <ol className="grid gap-2 sm:grid-cols-2 text-gray-300">
                            {TOC.map(([id, label], i) => (
                                <li key={id}>
                                    <a href={`#${id}`} className="hover:text-primary-300">
                                        <span className="mr-2 font-mono text-primary-400">{String(i + 1).padStart(2, "0")}</span>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* ---------- 30-second answer ---------- */}
                    <section className="mb-10 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">The 30-second answer</h2>
                        <ul className="space-y-3 text-gray-300 leading-7">
                            <li>
                                <strong className="text-white">Buying your first production VPS?</strong> KVM 2 at
                                ₹799/mo. Two cores and 8 GB is the smallest box I would put a real app on.
                            </li>
                            <li>
                                <strong className="text-white">Want the best value in the range?</strong> KVM 4 at
                                ₹1,099/mo. It carries the deepest discount (69% off ₹3,499) and 16 GB of RAM.
                            </li>
                            <li>
                                <strong className="text-white">Only testing?</strong> KVM 1 at ₹599/mo is enough for
                                staging and side projects.
                            </li>
                            <li>
                                <strong className="text-amber-300">The number that decides it all:</strong> renewals.
                                KVM 4 goes from ₹1,099 to ₹2,399/mo. Pick your term with that in mind, because no
                                discount applies to a renewal.
                            </li>
                        </ul>
                        <Cta label="See Live KVM VPS Prices →" note="Opens with the extra discount applied — verify the figure in the cart" />
                    </section>

                    {/* ---------- Best picks + quick links ---------- */}
                    <section className="mb-14">
                        <div className="grid gap-4 md:grid-cols-3 mb-6">
                            {[
                                ["Best budget pick", "KVM 2", "₹799/mo · 2 vCPU · 8 GB RAM — the realistic floor for a production app."],
                                ["Best overall value", "KVM 4", "₹1,099/mo · 4 vCPU · 16 GB RAM — the biggest discount in the range."],
                                ["Best for scale", "KVM 8", "₹2,199/mo · 8 vCPU · 32 GB RAM — for heavy databases and many services."],
                            ].map(([label, plan, why]) => (
                                <div key={plan} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-2">{label}</p>
                                    <p className="text-2xl font-bold text-white mb-2">{plan}</p>
                                    <p className="text-sm text-gray-300 leading-6">{why}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {PLANS.map((p) => (
                                <a
                                    key={p.name}
                                    href={REFERRAL_URL}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    className={`rounded-xl px-4 py-3 text-center transition ${p.highlight ? "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400" : "bg-white/10 hover:bg-white/20"}`}
                                >
                                    <span className="block font-bold text-white">Get {p.name}</span>
                                    <span className="block text-sm text-gray-200">{inr(p.sale)}/mo · {p.off} off</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* ---------- Plan cards ---------- */}
                    <section id="plans" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger VPS price list — every KVM plan</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Sale prices require the full term paid upfront. The green line is what the plan costs
                            through a referral link; the amber line is what it costs once that term ends.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            {PLANS.map((p) => (
                                <div
                                    key={p.name}
                                    className={`flex flex-col rounded-2xl border p-6 ${p.highlight ? "border-primary-500/60 bg-primary-500/[0.07] shadow-lg shadow-primary-900/30" : "border-white/10 bg-white/[0.03]"}`}
                                >
                                    {p.badge && (
                                        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-3 ${p.highlight ? "text-primary-400" : "text-gray-500"}`}>
                                            {p.badge}
                                        </p>
                                    )}
                                    <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                                    <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                                        <span className="text-4xl font-bold text-white">₹{p.sale.toLocaleString("en-IN")}</span>
                                        <span className="text-gray-400">/mo</span>
                                        <span className="text-sm text-gray-500 line-through">₹{p.regular.toLocaleString("en-IN")}</span>
                                        <span className="text-sm font-semibold text-green-400">{p.off} off</span>
                                    </div>
                                    <p className="mt-1 text-sm font-semibold text-emerald-400">{p.code}/mo through this site&apos;s link</p>
                                    <p className="mt-1 text-sm font-semibold text-amber-300">Renews at ₹{p.renewal.toLocaleString("en-IN")}/mo</p>
                                    <ul className="mt-5 space-y-2 text-sm text-gray-300 flex-1">
                                        <li>✓ {p.vcpu}</li>
                                        <li>✓ {p.ram}</li>
                                        <li>✓ {p.disk}</li>
                                        <li>✓ {p.bw}</li>
                                        <li>✓ Dedicated IP + full root access</li>
                                    </ul>
                                    <p className="mt-4 text-xs text-gray-500"><strong className="text-gray-400">Best for:</strong> {p.best}</p>
                                    <p className="mt-2 text-sm text-gray-300 italic">{p.take}</p>
                                    <a
                                        href={REFERRAL_URL}
                                        target="_blank"
                                        rel="nofollow sponsored noopener"
                                        className={`mt-5 text-center font-bold px-6 py-3 rounded-xl transition ${p.highlight ? "bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
                                    >
                                        Check {p.name} Price →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------- Included on every plan ---------- */}
                    <section id="features" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">What every Hostinger KVM plan includes</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            The plans differ only in how much CPU, RAM, storage and bandwidth you get. Everything below
                            comes with all four, as listed on Hostinger&apos;s VPS page on {VERIFIED}.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                ["Full root access", "Install any software, configure the server however you need, no restricted panel in the way."],
                                ["Dedicated IP address", "Every KVM client gets one — useful for SSL, email reputation and firewall allow-lists."],
                                ["NVMe SSD storage", "On every tier, not just the top one. Random database reads are where NVMe earns its keep."],
                                ["Free weekly backups", "Automated weekly backups at no extra cost, with daily backups available as an option."],
                                ["Manual snapshots", "Take a snapshot before a risky change and revert to it in minutes if something breaks."],
                                ["Malware scanner", "Automatically detects and removes malicious files on the server."],
                                ["Firewall management", "Built-in firewall management in hPanel to block unwanted traffic."],
                                ["Wanguard DDoS filtering", "Filters harmful traffic before it reaches your server."],
                                ["Hostinger Agent + public API", "An AI assistant in hPanel for server tasks, and a public API for automation."],
                                ["One-click templates", `Linux distributions (${VPS_OS_TEMPLATES.slice(0, 4).join(", ")} and more), control panels and apps.`],
                                ["Global data centres", `Regions in ${VPS_REGIONS.join(", ")}.`],
                                ["30-day money-back guarantee", "Enough time to deploy your real application and see whether the plan fits."],
                            ].map(([title, body]) => (
                                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                                    <p className="text-sm text-gray-300 leading-6">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------- Renewal math ---------- */}
                    <section id="renewal" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger VPS renewal price — the year-two number</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Every VPS comparison stops at the sale price. Here is the same plan priced across a full
                            year at both rates, because that gap is the actual cost of the decision.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Sale rate</th>
                                        <th className="p-4">Renewal rate</th>
                                        <th className="p-4">Jump</th>
                                        <th className="p-4">A year at sale</th>
                                        <th className="p-4">A year at renewal</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {PLANS.map((p, i) => (
                                        <tr key={p.name} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{p.name}</td>
                                            <td className="p-4 text-green-400">₹{p.sale.toLocaleString("en-IN")}/mo</td>
                                            <td className="p-4 text-red-400">₹{p.renewal.toLocaleString("en-IN")}/mo</td>
                                            <td className="p-4">+{Math.round(((p.renewal - p.sale) / p.sale) * 100)}%</td>
                                            <td className="p-4">₹{(p.sale * 12).toLocaleString("en-IN")}</td>
                                            <td className="p-4">₹{(p.renewal * 12).toLocaleString("en-IN")}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-3">
                            KVM 4 is the sharpest example: ₹13,188 for a year at the sale rate, ₹28,788 at the renewal
                            rate. Same server, same specs — the difference is entirely when you signed. Run the same
                            arithmetic for shared plans with my{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                hosting cost calculator
                            </Link>.
                        </p>
                    </section>

                    {/* ---------- Which plan ---------- */}
                    <section id="which-plan" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Which Hostinger KVM plan should you buy?</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-6">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">If this is you</th>
                                        <th className="p-4">Buy</th>
                                        <th className="p-4">Why</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Learning Linux, running a staging box", "KVM 1", "₹599/mo is cheap enough to treat as disposable. Rebuild it as often as you like."],
                                        ["First production app — WordPress, a small SaaS, a client site", "KVM 2", "8 GB RAM covers an app plus its database without swapping. The realistic entry point."],
                                        ["Agency hosting several client apps, or a store with a real database", "KVM 4", "16 GB and 4 cores means a deploy, a backup and live traffic can overlap. Also the biggest discount."],
                                        ["Heavy traffic, big database, multiple services on one box", "KVM 8", "32 GB of headroom — but check the ₹4,399/mo renewal before committing."],
                                        ["Not sure yet", "KVM 2", "Upgrading up a tier is easy. Downgrading a prepaid plan is a support conversation."],
                                    ].map(([who, plan, why], i) => (
                                        <tr key={who} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 text-white">{who}</td>
                                            <td className="p-4 font-semibold text-primary-300">{plan}</td>
                                            <td className="p-4">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Cta label="Compare KVM Plans on Hostinger →" note="Extra discount applies automatically — no code to type" />
                    </section>

                    {/* ---------- KVM vs OpenVZ ---------- */}
                    <section id="kvm" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Why &quot;KVM&quot; in the plan name actually matters</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            KVM stands for Kernel-based Virtual Machine, and it is the single most important spec on
                            this page — more important than the RAM figure, because it determines whether that RAM is
                            genuinely yours.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold"></th>
                                        <th className="p-4">KVM (what Hostinger uses)</th>
                                        <th className="p-4">Container-based (OpenVZ / LXC)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Kernel", "Your own", "Shared with every neighbour"],
                                        ["RAM", "Allocated to you", "Often burstable — vanishes when the node is busy"],
                                        ["Isolation", "Full hardware-level", "Process-level only"],
                                        ["Overselling", "Structurally limited", "Common at budget price points"],
                                        ["Custom kernel modules", "Supported", "Usually blocked"],
                                    ].map(([f, kvm, ovz], i) => (
                                        <tr key={f} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{f}</td>
                                            <td className="p-4 text-green-400">{kvm}</td>
                                            <td className="p-4 text-gray-400">{ovz}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            This is why a ₹399/mo VPS elsewhere can be slower than KVM 1 at ₹599 despite listing more
                            RAM. The cheaper box is frequently a container sharing a busy node. When you compare VPS
                            providers, ask which hypervisor they run before you compare any other number.
                        </p>
                    </section>

                    {/* ---------- vs typical budget VPS ---------- */}
                    <section id="vs-budget-vps" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger vs a typical budget VPS</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            At this price point most hosts cut something — the hypervisor, the disks, or the extras.
                            The right-hand column is what is common at the low end of the market, not a claim about
                            any one provider, so check it against whoever you are comparing.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Feature</th>
                                        <th className="p-4">Hostinger KVM VPS</th>
                                        <th className="p-4">Common at the budget end</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Virtualisation", "KVM, hardware-level isolation", "Often container-based (OpenVZ / LXC)"],
                                        ["Storage", "NVMe SSD on every plan", "SATA SSD is still common"],
                                        ["Resources", "vCPU and RAM allocated per plan", "Burstable or oversold resources"],
                                        ["Backups", "Free weekly backups + manual snapshots", "Often a paid add-on"],
                                        ["Security", "Malware scanner, firewall management, Wanguard DDoS filtering", "Frequently extra, or do-it-yourself"],
                                        ["Management", "hPanel, Hostinger Agent AI assistant, public API", "Bare SSH, or a paid control-panel licence"],
                                        ["Setup", "One-click OS, panel and app templates", "Manual installation"],
                                        ["Renewal", "₹999–₹4,399/mo after the sale term", "Varies — always check before buying"],
                                    ].map(([f, h, t], i) => (
                                        <tr key={f} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{f}</td>
                                            <td className="p-4 text-green-400">{h}</td>
                                            <td className="p-4 text-gray-400">{t}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ---------- Hardware ---------- */}
                    <section id="performance" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Hardware and network — what is under every plan</h2>
                        <div className="grid gap-6 md:grid-cols-2 mb-6">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Stated hardware</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7">
                                    <li>• AMD EPYC processors, in HPE and Dell servers</li>
                                    <li>• NVMe SSD storage on every tier, not SATA</li>
                                    <li>• 1 Gbps network speed across the range</li>
                                    <li>• Dedicated IP address on every plan</li>
                                    <li>• Full root access, any supported Linux distribution</li>
                                    <li>• Data centre regions: {VPS_REGIONS.join(", ")}</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Security and reliability</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7">
                                    <li>• Malware scanner that detects and removes malicious files</li>
                                    <li>• Built-in firewall management</li>
                                    <li>• Wanguard DDoS filtering</li>
                                    <li>• Free weekly backups, daily backups optional</li>
                                    <li>• Manual snapshots with roll-back in minutes</li>
                                    <li>• 30-day money-back guarantee</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            The hardware does not change between KVM 1 and KVM 8 — only your slice of it does. So the
                            performance question is never &quot;is the server good&quot;, it is &quot;did I buy enough
                            RAM&quot;. NVMe on every tier matters more than it sounds: database reads are random, and that
                            is exactly where NVMe pulls away from SATA SSD.
                        </p>
                        <p className="text-sm text-gray-400 leading-7 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-4">
                            <strong className="text-amber-300">On uptime:</strong> Hostinger&apos;s VPS plan page does not
                            state an uptime percentage or SLA (checked {VERIFIED}). Some reviews quote 99.9% — if
                            contractual uptime matters to your business, read Hostinger&apos;s terms of service before you
                            rely on a number.
                        </p>
                    </section>

                    {/* ---------- Honest limits ---------- */}
                    <section id="limits" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-4">Four things Hostinger VPS does not do</h2>
                        <ul className="space-y-4 text-gray-300 leading-7">
                            <li>
                                <strong className="text-white">No Windows Server.</strong> These are Linux boxes. If
                                your stack needs Windows, look elsewhere — this is not a limitation you can work around.
                            </li>
                            <li>
                                <strong className="text-white">Nobody manages it for you.</strong> Root access cuts both
                                ways. OS updates, server configuration, and the 3 AM outage are yours. The firewall
                                manager, malware scanner and AI assistant reduce the friction; they do not remove the
                                responsibility.
                            </li>
                            <li>
                                <strong className="text-white">The renewal is not a discount.</strong> KVM 4 more than
                                doubles. Every VPS provider does this, but it is worth planning for rather than
                                discovering.
                            </li>
                            <li>
                                <strong className="text-white">No phone support.</strong> Live chat and tickets only.
                                In practice chat is fast, but if you want a phone number this is not it.
                            </li>
                        </ul>
                    </section>

                    {/* ---------- Discount code ---------- */}
                    <section id="discount-code" className="mb-14 scroll-mt-28 rounded-3xl border border-primary-500/40 bg-gradient-to-br from-purple-900/40 to-indigo-900/30 p-6 sm:p-8">
                        <h2 className="text-3xl font-bold text-white mb-3 text-center">How to get the extra 20% off</h2>
                        <p className="text-gray-300 leading-8 mb-6 text-center max-w-2xl mx-auto">
                            Opening Hostinger through any button on this page applies an extra 20% on top of the sale
                            price automatically — KVM 4 drops from ₹1,099 to {inr(withCode(1099))}/mo. Nothing to type.
                        </p>
                        <CopyCode code={HOSTINGER_CODE} />
                        <ol className="mt-8 space-y-3 text-gray-300 leading-7 max-w-2xl mx-auto list-decimal list-inside">
                            <li>Open Hostinger through a button on this page.</li>
                            <li>Pick your KVM plan and the term you want.</li>
                            <li>Check that the order summary shows the discounted price.</li>
                            <li>
                                If it does not, enter <strong className="text-white">{HOSTINGER_CODE}</strong> in the coupon
                                field under the order summary.
                            </li>
                        </ol>
                        <p className="mt-6 text-sm text-gray-400 leading-7 max-w-2xl mx-auto">
                            Only one code can be attached to an order, and no code applies to a renewal. Referral
                            discounts are intended for new customers — if you already have a Hostinger account, confirm
                            the discount actually appears before you pay. 18% GST is added at checkout.
                        </p>
                        <Cta label="Open Hostinger VPS →" note="Discount applied automatically · 30-day money-back guarantee" />
                    </section>

                    {/* ---------- Verdict ---------- */}
                    <section id="verdict" className="mb-14 scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-white">Verdict</h2>
                            <div className="text-right">
                                <p className="text-4xl font-bold text-white">4.5<span className="text-xl text-gray-400"> / 5</span></p>
                                <p className="text-xs text-gray-500">My overall rating · specs and prices verified {VERIFIED}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Across the Indian market, this is a strong price-to-spec ratio with genuine KVM
                            virtualisation and NVMe on every tier — the two specs that most budget VPS providers quietly
                            compromise. The honest weaknesses are the renewal rates and the fact that nobody is
                            administering the server for you.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-green-400 mb-3">Pros</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>✓ Genuine KVM virtualisation with allocated vCPU and RAM</li>
                                    <li>✓ NVMe storage and a 1 Gbps network on every plan</li>
                                    <li>✓ Free weekly backups plus manual snapshots</li>
                                    <li>✓ Malware scanner, firewall management and DDoS filtering included</li>
                                    <li>✓ Dedicated IP, full root access and a public API</li>
                                    <li>✓ One-click OS, control-panel and app templates</li>
                                    <li>✓ 62–69% sale discounts, plus an extra 20% through a referral link</li>
                                    <li>✓ 30-day money-back guarantee</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-red-400 mb-3">Cons</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-6">
                                    <li>✗ Renewals jump sharply — KVM 4 goes from ₹1,099 to ₹2,399/mo</li>
                                    <li>✗ Unmanaged: OS updates and configuration are your job</li>
                                    <li>✗ No Windows Server</li>
                                    <li>✗ No uptime SLA stated on the VPS plan page</li>
                                    <li>✗ Sale prices need the whole term paid upfront</li>
                                    <li>✗ Live chat and tickets only — no phone support</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8">
                            <strong className="text-white">Buy KVM 2</strong> if this is your first production server.{" "}
                            <strong className="text-white">Buy KVM 4</strong> if you are running client work or a store
                            and want the plan you will not outgrow next year — it is also the deepest discount in the
                            range. Use the 30-day money-back window to load your real application and find out, rather
                            than deciding from a spec table.
                        </p>
                        <Cta label="Get Started With KVM VPS →" note="From ₹479.20/mo with the discount · 30-day money-back guarantee" />
                    </section>

                    {/* ---------- FAQ ---------- */}
                    <section id="faq" className="mb-14 scroll-mt-28">
                        <h2 className="text-3xl font-bold text-white mb-6">Hostinger VPS — frequently asked questions</h2>
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

                    {/* ---------- Related ---------- */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading</h2>
                        <ul className="space-y-3 text-gray-300 leading-7">
                            <li>
                                <Link href={HINGLISH} className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Hostinger VPS ki poori kundali
                                </Link>{" "}
                                — the same guide, written in Hinglish.
                            </li>
                            <li>
                                <Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Best VPS hosting in India 2026
                                </Link>{" "}
                                — how Hostinger compares against DigitalOcean, Vultr and Cloudways.
                            </li>
                            <li>
                                <Link href="/blog/nodejs-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Node.js hosting in India
                                </Link>{" "}
                                — which VPS specs actually matter for a Node app.
                            </li>
                            <li>
                                <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Hostinger renewal prices explained
                                </Link>{" "}
                                — the full renewal rate list across hosting and domains.
                            </li>
                            <li>
                                <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Every Hostinger plan and price
                                </Link>{" "}
                                — shared, cloud and agency tiers if a VPS is more than you need.
                            </li>
                        </ul>
                    </section>

                    <ShareButtons title="Hostinger KVM VPS Plans in India 2026" url={CANONICAL} />
                </article>
            </main>
        </>
    );
}
