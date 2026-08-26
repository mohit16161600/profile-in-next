import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/cloudways-review-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/cloudways-review-2026.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Cloudways Review 2026: Worth $11/mo for Indian Users?",
    description:
        "What Cloudways actually is, real pricing across DigitalOcean and Vultr tiers, who it suits, who should skip it, and the rupee-vs-dollar maths for Indian buyers.",
    keywords: [
        "cloudways review", "cloudways review 2026", "cloudways pricing", "is cloudways worth it",
        "cloudways vs digitalocean", "cloudways india", "cloudways managed hosting review",
        "cloudways wordpress hosting", "cloudways alternatives", "cloudways referral credit",
        "managed cloud hosting review", "cloudways pros and cons",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Cloudways Review 2026: Worth $11/mo for Indian Users?",
        description: "Real pricing, what the management layer actually does, and who should skip it entirely.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Cloudways managed cloud hosting reviewed for 2026" }],
    },
    twitter: {
        card: "summary_large_image", title: "Cloudways Review 2026: Worth $11/mo for Indian Users?",
        description: "What you get, what you pay, and who should skip it.", images: [IMAGE],
    },
};

const RATINGS: [string, string, string][] = [
    ["Ease of use", "Strong", "The panel is genuinely simpler than managing a raw server."],
    ["Performance", "Strong", "You choose the underlying provider and size, so performance is largely your call."],
    ["Value for money", "Mixed", "2-3× the raw server cost. Excellent if you would not otherwise do the ops work."],
    ["Support", "Good", "24/7 chat on the managed layer, which is the whole point of paying extra."],
    ["Indian pricing", "Weak", "Dollar billing means forex markup on every invoice."],
    ["Flexibility", "Mixed", "Great across PHP apps; limited if you want arbitrary services or full root."],
];

const FAQ = [
    { q: "What exactly is Cloudways?", a: "A managed hosting layer that runs on top of other people's infrastructure. You choose DigitalOcean, Vultr, AWS, Google Cloud or Linode as the underlying provider, and Cloudways handles server setup, caching, SSL, staging, backups and updates. You are not buying hardware from Cloudways — you are buying the management of someone else's." },
    { q: "How much does Cloudways cost?", a: "Plans start around $11/month on DigitalOcean infrastructure, roughly $14/month on standard Vultr and about $16/month on Vultr high-frequency. Prices scale with the server size you pick. There is no free tier, though new users get $25 in credit through a referral link." },
    { q: "Is Cloudways worth it compared to raw DigitalOcean?", a: "It depends on one question: will you actually maintain a server? Cloudways costs roughly 2-3x the raw Droplet price. If that premium replaces hours of patching, caching setup, SSL renewal and backup configuration each month, it is cheap. If you enjoy that work and would do it anyway, you are paying for nothing." },
    { q: "Is Cloudways good for Indian users?", a: "Functionally yes — you can pick a Bangalore or Mumbai region through the underlying provider. Financially it is less attractive: billing is in US dollars, so every invoice carries a forex markup on an Indian card. For rupee-denominated budgets, an Indian-billed host is usually cheaper for equivalent resources." },
    { q: "Does Cloudways include a free domain or email?", a: "No. Cloudways sells hosting management only — no domains, and email is a paid add-on rather than an included mailbox. You register your domain separately and point DNS at the server, which is normal for cloud hosting but worth knowing if you are comparing against shared plans that bundle both." },
    { q: "Can I get root access on Cloudways?", a: "Not in the way an unmanaged VPS gives it. You get SSH and SFTP access at an application level, but the managed stack is theirs to maintain, so you cannot reconfigure it arbitrarily. If you need full root to install custom services, buy a plain VPS instead." },
    { q: "What is the Cloudways referral credit?", a: "New users receive $25 in hosting credit when they sign up through an existing customer's referral link, and the referrer receives $50 in credit once the new account spends a qualifying amount. Both sides get real credit rather than a one-sided commission." },
    { q: "Who should not use Cloudways?", a: "Anyone running a single WordPress blog — it is far more machinery than that needs. Anyone comfortable administering a server, who is simply paying a premium to avoid work they would happily do. And anyone whose budget is in rupees and tight, because dollar billing plus forex is a real ongoing cost." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Cloudways Review 2026: Worth $11/mo for Indian Users?",
        description: "What Cloudways is, real pricing, who it suits and who should skip it.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "cloudways review, cloudways pricing, is cloudways worth it, cloudways vs digitalocean, managed cloud hosting review",
        articleSection: "Hosting", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Cloudways Review", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function CloudwaysReview() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Cloudways Review</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Hosting</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            Cloudways Review 2026: What You Are Actually Paying For
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Cloudways does not own a single server. It rents them from DigitalOcean, Vultr, AWS, Google
                            Cloud and Linode, and sells you the management on top. Once you understand that, deciding
                            whether it is worth $11/month becomes a single honest question about yourself.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>9 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/cloudways-review-2026.svg" alt="Cloudways managed cloud hosting reviewed" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Pricing checked
                        against Cloudways&apos; official pages in August 2026. This review is based on published
                        specifications and pricing, not on a long-term deployment of my own.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Verdict up front</h2>
                        <p className="text-gray-300 leading-8">
                            Cloudways is worth it if you run client sites, want staging and backups without building them,
                            and would otherwise be the person patching a server at midnight. It is <strong className="text-white">not
                            worth it</strong> for a single blog, for anyone happy administering their own box, or for a
                            tight rupee budget — dollar billing plus forex makes it meaningfully more expensive in India
                            than the sticker price suggests.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Underlying provider</th><th className="p-4">Entry price</th><th className="p-4">Roughly in ₹</th><th className="p-4">Notes</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">DigitalOcean</td><td className="p-4">$11/mo</td><td className="p-4">~₹950</td><td className="p-4">Cheapest way in</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Vultr (standard)</td><td className="p-4">$14/mo</td><td className="p-4">~₹1,200</td><td className="p-4">More region choice</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Vultr (high frequency)</td><td className="p-4">$16/mo</td><td className="p-4">~₹1,400</td><td className="p-4">Faster CPU, better for busy stores</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">AWS / Google Cloud</td><td className="p-4">Higher</td><td className="p-4">—</td><td className="p-4">Enterprise tiers; rarely the right first choice</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Rupee figures are indicative conversions, not billed amounts — Cloudways charges in USD.</p>
                        <p className="text-gray-300 leading-8">
                            For context: the DigitalOcean Droplet underneath that $11 plan rents for about $6 directly. You
                            are paying roughly $5/month for the management layer. Whether that is good value is not a
                            pricing question — it is a question about how you want to spend your evenings.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What the management layer actually does</h2>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">Server provisioning</strong> — pick a provider, size and region; the stack is built for you.</li>
                            <li><strong className="text-white">Caching pre-configured</strong> — Varnish, Redis and Memcached set up rather than compiled by you.</li>
                            <li><strong className="text-white">One-click SSL</strong> and automatic renewal, instead of Certbot cron jobs you forget about.</li>
                            <li><strong className="text-white">Staging environments</strong> — clone production, break it safely, push back.</li>
                            <li><strong className="text-white">Automated backups</strong> included rather than a paid add-on.</li>
                            <li><strong className="text-white">Security patching</strong> at the OS and stack level, handled continuously.</li>
                        </ul>
                        <p className="text-gray-300 leading-8">
                            Every one of those is something you <em>can</em> do yourself on a $6 Droplet. The question is
                            whether you will still be doing all of them in month seven.
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
                        <p className="mt-4 text-sm text-gray-500">
                            Deliberately no decimal scores. Precise-looking numbers with no measurement behind them are
                            worth less than a sentence explaining the trade-off.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Pros and cons</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>Choose your own underlying provider and region</li>
                                    <li>Staging, backups and caching included, not add-ons</li>
                                    <li>No lock-in on hardware — the servers are standard</li>
                                    <li>Scales by resizing rather than migrating</li>
                                    <li>$25 signup credit through a referral link</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6">
                                <h3 className="text-lg font-bold text-white mb-3">Not so good</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>2-3× the raw server cost for the same hardware</li>
                                    <li>USD billing — forex markup on Indian cards</li>
                                    <li>No free domain, email is a paid add-on</li>
                                    <li>Not full root; built around PHP applications</li>
                                    <li>Overkill for a single small site</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The rupee question</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            This is where the review gets uncomfortable for Indian readers. $11/month is roughly ₹950
                            before your card&apos;s forex markup, and it buys a managed 1GB server. For similar money in
                            rupees you can get considerably more raw resource from an Indian-billed provider — though
                            without the managed layer.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7">
                            <h3 className="text-xl font-bold text-white mb-3">The rupee-billed comparison</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                Hostinger&apos;s KVM 1 is ₹599/mo for 4GB RAM and 50GB NVMe — more memory than Cloudways&apos;
                                entry plan, at roughly 60% of the price, billed in rupees with no forex. The trade-off is
                                real though: it is unmanaged, so the patching and backups are yours. If you want managed
                                and rupee-billed, their{" "}
                                <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud tier from ₹599/mo</Link>{" "}
                                is the closer match.
                            </p>
                            <a href={REFERRAL_URL} target="_blank" rel="nofollow sponsored noopener"
                               className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                                Compare Hostinger Plans →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">If you do sign up</h2>
                        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-6">
                            <p className="text-gray-300 leading-8">
                                Use a referral link rather than the plain homepage — new accounts receive{" "}
                                <strong className="text-white">$25 in hosting credit</strong>, roughly two months on the entry
                                plan. It costs you nothing extra and there is no reason to leave it on the table.
                            </p>
                            <p className="mt-3 text-sm text-gray-500">[AFFILIATE_LINK: CLOUDWAYS]</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Cloudways</h2>
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
                            <li><Link href="/blog/digitalocean-vs-vultr-vs-cloudways" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">DigitalOcean vs Vultr vs Cloudways</Link> — the three side by side.</li>
                            <li><Link href="/blog/best-vps-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best VPS hosting in India</Link> — including rupee-billed options.</li>
                            <li><Link href="/blog/nodejs-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Node.js hosting in India</Link> — why Cloudways will not run your Node app.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this review</h2>
                        <ShareButtons url={CANONICAL} title="Cloudways Review 2026: Worth $11/mo for Indian Users?" />
                    </div>
                </article>
            </main>
        </>
    );
}
