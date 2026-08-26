import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
const CANONICAL = "https://mohitkoli.in/blog/migrate-wordpress-to-new-host";
const IMAGE = "https://mohitkoli.in/assets/blog/migrate-wordpress-to-new-host.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "How to Migrate WordPress to a New Host Without Downtime",
    description:
        "Three ways to move a WordPress site to new hosting — free host migration, a plugin, or manual transfer — plus the DNS order that avoids downtime.",
    keywords: [
        "migrate wordpress to new host",
        "how to move wordpress to new hosting",
        "transfer wordpress site to new host",
        "wordpress migration without downtime",
        "wordpress migration india",
        "free wordpress migration",
        "move website to new hosting",
        "wordpress migration plugin",
        "all in one wp migration",
        "duplicator wordpress migration",
        "change web hosting without losing data",
        "wordpress migration checklist",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "How to Migrate WordPress to a New Host Without Downtime",
        description:
            "Free host migration, plugin, or manual — the three real ways to move a WordPress site, and the DNS sequence that avoids downtime.",
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Migrating a WordPress site to a new host, step by step" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Migrate WordPress to a New Host Without Downtime",
        description:
            "Three migration methods compared, a pre-flight checklist, and the DNS sequence that keeps your site online.",
        images: [IMAGE],
    },
};

const METHODS = [
    {
        name: "Free host migration",
        who: "Almost everyone",
        effort: "Lowest",
        risk: "Lowest",
        time: "2–48 hours",
        cost: "Free with most hosts",
        note: "You submit a request; the new host's team moves the site for you.",
        best: true,
    },
    {
        name: "Migration plugin",
        who: "Small-to-medium sites, DIY",
        effort: "Medium",
        risk: "Medium",
        time: "30–90 min",
        cost: "Free tier available",
        note: "All-in-One WP Migration, Duplicator or Migrate Guru. Watch the free upload limits.",
        best: false,
    },
    {
        name: "Manual (files + database)",
        who: "Developers, unusual setups",
        effort: "Highest",
        risk: "Highest",
        time: "1–3 hours",
        cost: "Free",
        note: "FTP/SSH for files, phpMyAdmin for the database, then edit wp-config.php by hand.",
        best: false,
    },
];

const FAQ = [
    {
        q: "Will my site go down during a WordPress migration?",
        a: "It should not, if you migrate in the right order. Copy the site to the new host first, test it there using a temporary URL or a hosts-file entry, and only change your DNS once the copy works. Because the old host keeps serving traffic until DNS propagates, visitors move across gradually rather than hitting an outage.",
    },
    {
        q: "How long does a WordPress migration take?",
        a: "A managed migration handled by your new host typically takes between 2 and 48 hours depending on site size. A plugin migration on a small site takes 30 to 90 minutes of your own time. DNS propagation then adds up to 24-48 hours, though in practice most users see the new server within a few hours.",
    },
    {
        q: "Is WordPress migration really free?",
        a: "Usually, yes. Most hosts include free migration to win your business, and the main migration plugins have working free tiers. The real costs are your time and, if you use a plugin on a large site, possibly a paid upgrade to clear the free upload limit. Professional migration services exist but are rarely necessary for a standard site.",
    },
    {
        q: "Do I need to move my domain too?",
        a: "No. Hosting and domain registration are separate services. You can keep the domain where it is registered and simply point its nameservers or A record at the new host. Moving the domain as well is optional — worth doing only if your registrar's renewal pricing is poor.",
    },
    {
        q: "Will migrating hurt my SEO or rankings?",
        a: "A clean migration to the same domain should not affect rankings. Your URLs do not change, so there is nothing for Google to re-map. Problems only appear when something breaks in transit — missing pages, a stray noindex tag, a robots.txt that blocks crawling, or broken internal links. Check those after you switch.",
    },
    {
        q: "What is the maximum file size for All-in-One WP Migration?",
        a: "The free version caps uploads at 256MB. Sites larger than that either need the paid extension, a different plugin such as Duplicator, or a host-managed migration. This limit is the single most common reason a DIY plugin migration stalls halfway.",
    },
    {
        q: "Should I migrate during business hours?",
        a: "No. Pick your lowest-traffic window and avoid sale periods, campaign launches, and newsletter sends. Even a well-planned migration has a window where the old and new servers are briefly out of sync, and you want as few people as possible seeing that.",
    },
    {
        q: "What should I do if the migration goes wrong?",
        a: "Nothing is lost as long as you took a full backup before starting and did not cancel the old hosting. Revert your DNS to the old host, confirm the original site is serving normally, and then diagnose at your own pace. This is exactly why you keep the old plan running for a couple of weeks.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "How to Migrate WordPress to a New Host Without Downtime",
        description:
            "Three ways to move a WordPress site to new hosting — free host migration, a plugin, or a manual transfer — plus the DNS sequence that avoids downtime.",
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
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
        keywords:
            "migrate wordpress to new host, how to move wordpress to new hosting, wordpress migration without downtime, free wordpress migration, wordpress migration india",
        articleSection: "WordPress",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Migrate WordPress to a New Host", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to migrate a WordPress site to a new host without downtime",
        description:
            "Back up, copy the site to the new host, test it before touching DNS, then switch nameservers and verify.",
        totalTime: "PT2H",
        step: [
            { "@type": "HowToStep", name: "Back up everything", text: "Download a full copy of your files and database and store it outside both hosting accounts." },
            { "@type": "HowToStep", name: "Set up the new host", text: "Buy the plan, but do not point your domain at it yet. Add the domain inside the panel so the account is ready to receive the site." },
            { "@type": "HowToStep", name: "Copy the site across", text: "Use the new host's free migration service, a migration plugin, or a manual file and database transfer." },
            { "@type": "HowToStep", name: "Test before switching DNS", text: "Preview the copied site using a temporary URL or a local hosts-file entry and click through the important pages." },
            { "@type": "HowToStep", name: "Switch DNS", text: "Update the nameservers or A record at your registrar. The old host keeps serving traffic until propagation completes." },
            { "@type": "HowToStep", name: "Verify and keep the old host running", text: "Check forms, checkout, SSL and Search Console, and leave the old plan active for two weeks as a rollback." },
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

export default function MigrateWordPressToNewHost() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Migrate WordPress to a New Host</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">WordPress</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            How to Migrate WordPress to a New Host Without Downtime
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Moving hosts sounds risky and mostly is not — as long as you copy first and switch DNS last.
                            Here are the three real methods, which one fits your site, and the exact order that keeps
                            your site online while it moves.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span>
                            <span>•</span>
                            <span>August 24, 2026</span>
                            <span>•</span>
                            <span>11 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/migrate-wordpress-to-new-host.svg"
                            alt="Migrating a WordPress website to a new host, step by step"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        This article contains affiliate links. If you buy hosting through one of them I may earn a
                        commission at no extra cost to you — and in most cases you get a discount that is not on the
                        public price. Pricing was checked against Hostinger India in August 2026; always confirm the
                        current figure at checkout.
                    </p>

                    {/* Quick answer — featured snippet target */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The short answer</h2>
                        <p className="text-gray-300 leading-8">
                            Back up your site, copy it to the new host <em>before</em> touching your domain, test the copy
                            on a temporary URL, then change your nameservers. Because the old host keeps serving visitors
                            until DNS propagates, nobody sees an outage. Most hosts will do the whole copy for you free —
                            that is the easiest and safest route for the large majority of sites.
                        </p>
                    </section>

                    {/* Method comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The three ways to move a WordPress site</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Every migration guide online is really describing one of these three. Pick by how large your
                            site is and how much you want to touch.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Method</th>
                                        <th className="p-4">Best for</th>
                                        <th className="p-4">Effort</th>
                                        <th className="p-4">Risk</th>
                                        <th className="p-4">Time</th>
                                        <th className="p-4">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {METHODS.map((m) => (
                                        <tr key={m.name} className="border-t border-white/5">
                                            <td className="p-4 font-semibold text-white">
                                                {m.name}{m.best && <span className="ml-2 text-xs uppercase tracking-wider text-primary-400">recommended</span>}
                                            </td>
                                            <td className="p-4">{m.who}</td>
                                            <td className="p-4">{m.effort}</td>
                                            <td className="p-4">{m.risk}</td>
                                            <td className="p-4">{m.time}</td>
                                            <td className="p-4">{m.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            If you are unsure, take the first row. Hosts offer free migration because a customer whose
                            site moved smoothly is a customer who stays — the incentives are genuinely aligned, and it
                            costs you nothing.
                        </p>
                    </section>

                    {/* Pre-flight */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Before you start: the five-minute checklist</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Almost every migration horror story traces back to a skipped item on this list.
                        </p>
                        <ol className="space-y-4 text-gray-300 leading-8 list-decimal list-inside">
                            <li>
                                <strong className="text-white">Take a full backup and store it off-server.</strong> Files,
                                database, themes, plugins, uploads, and <span className="font-mono text-sm">wp-config.php</span>.
                                Download it to your own machine or cloud drive — a backup that only exists on the host you
                                are leaving is not a backup.
                            </li>
                            <li>
                                <strong className="text-white">Note your current PHP and WordPress versions.</strong> A site
                                running PHP 7.4 that lands on a PHP 8.3 server can throw fatal errors from old plugins.
                            </li>
                            <li>
                                <strong className="text-white">Lower your DNS TTL to 300 seconds, a day early.</strong> This
                                is the trick most guides skip. A low TTL means the internet picks up your nameserver change
                                in minutes instead of hours.
                            </li>
                            <li>
                                <strong className="text-white">Pick a genuinely quiet window.</strong> Not during a sale, a
                                campaign, a product launch, or a newsletter send.
                            </li>
                            <li>
                                <strong className="text-white">Do not cancel the old hosting.</strong> Keep it running for at
                                least two weeks. It is your rollback, and it costs a few hundred rupees.
                            </li>
                        </ol>
                    </section>

                    {/* Method 1 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Method 1: Let the new host move it (easiest)</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            You buy the plan, fill in a form with your old host&apos;s login details, and their migration
                            team copies the site across. You do not touch files, databases, or FTP at any point.
                        </p>
                        <p className="text-gray-300 leading-8 mb-5">
                            On Hostinger this lives in hPanel under <span className="font-mono text-sm">Account → Migrate Website</span>.
                            You submit the request and their team handles it end to end; the documentation says to allow
                            between 2 and 48 hours depending on how large the site is. Two things to sort out first: turn
                            off two-factor authentication and any anti-bot protection on the old host, and make sure there
                            is enough free disk space on the source server for the export to be built.
                        </p>

                        <div className="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-purple-900/25 to-indigo-900/15 p-7 mb-5">
                            <h3 className="text-xl font-bold text-white mb-3">If you are choosing the new host right now</h3>
                            <p className="text-gray-300 leading-8 mb-5">
                                Free managed migration, an India (Mumbai) data-centre option, a free domain for the first
                                year and a 30-day money-back window make Hostinger the low-risk default for a standard
                                WordPress site. Shared plans start at <strong className="text-white">₹149/mo</strong> on the
                                48-month term; if you are moving a store or a busy site, the{" "}
                                <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                    Cloud tier from ₹599/mo
                                </Link>{" "}
                                gives you dedicated CPU and RAM.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                Check Hostinger Plans →
                            </a>
                            <p className="mt-3 text-xs text-gray-500">
                                Referral link — applies an extra discount at checkout. Confirm the total before you pay.
                            </p>
                        </div>

                        <p className="text-gray-300 leading-8">
                            Not sold on Hostinger specifically? That is fair — compare the field in{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                best web hosting in India
                            </Link>{" "}
                            first, and read the{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                renewal pricing breakdown
                            </Link>{" "}
                            before committing to any host, because the intro rate is never the real rate.
                        </p>
                    </section>

                    {/* Method 2 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Method 2: Migrate it yourself with a plugin</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Good middle ground: you stay in control, and you do not need to touch a database. The three
                            plugins worth using are all in the official WordPress directory.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-5">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plugin</th>
                                        <th className="p-4">Free tier limit</th>
                                        <th className="p-4">Best for</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">All-in-One WP Migration</td>
                                        <td className="p-4">256MB upload cap</td>
                                        <td className="p-4">Small blogs and brochure sites. Easiest interface of the three.</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Duplicator</td>
                                        <td className="p-4">No hard cap on the free tier</td>
                                        <td className="p-4">Medium sites, and anyone who hit the 256MB wall above.</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Migrate Guru</td>
                                        <td className="p-4">Free, runs on their servers</td>
                                        <td className="p-4">Large sites — the transfer does not run through your browser.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">The sequence</h3>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside">
                            <li>Install the plugin on the <strong className="text-white">old</strong> site and export. You get one archive file.</li>
                            <li>On the new host, install a clean WordPress and the same plugin.</li>
                            <li>Import the archive. The plugin overwrites the fresh install with your real site.</li>
                            <li>Log in with your <em>old</em> credentials — the import replaced the new site&apos;s user table too. This surprises people every time.</li>
                            <li>Go to Settings → Permalinks and click Save twice to regenerate rewrite rules.</li>
                        </ol>
                        <p className="text-gray-300 leading-8 mt-5">
                            If the export stalls or the import times out, it is almost always the 256MB cap or a PHP
                            execution-time limit. Switch to Duplicator or Migrate Guru rather than fighting it.
                        </p>
                    </section>

                    {/* Method 3 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Method 3: Manual transfer</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            Only worth it if you have an unusual setup, a multisite, or you simply prefer knowing exactly
                            what moved. Four stages:
                        </p>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside mb-5">
                            <li><strong className="text-white">Files.</strong> Download everything in your WordPress root over FTP or SSH, then upload it to the new server.</li>
                            <li><strong className="text-white">Database.</strong> Export the database as SQL from phpMyAdmin on the old host, create an empty database on the new one, and import.</li>
                            <li><strong className="text-white">Reconnect.</strong> Edit <span className="font-mono text-sm">wp-config.php</span> with the new database name, user and password.</li>
                            <li><strong className="text-white">Fix URLs if the domain changed.</strong> Use a search-replace tool rather than a plain SQL find-and-replace — WordPress stores serialised data, and a naive replace corrupts it.</li>
                        </ol>
                        <p className="text-gray-300 leading-8">
                            That last point is the one that catches developers who have not done this in a while. Widget
                            settings and theme options are stored as PHP serialised strings with length prefixes; changing
                            the text without updating the length breaks them silently.
                        </p>
                    </section>

                    {/* DNS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The DNS switch — where downtime actually comes from</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            This is the part worth getting right, because it is the only step where visitors can be
                            affected.
                        </p>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside mb-5">
                            <li><strong className="text-white">Test the copy first.</strong> Preview it on the new host&apos;s temporary URL, or add an entry to your computer&apos;s hosts file pointing your real domain at the new server IP. You will see the new site while everyone else still sees the old one.</li>
                            <li><strong className="text-white">Click through the pages that matter.</strong> Homepage, a post, a category, the contact form, and checkout if you have one.</li>
                            <li><strong className="text-white">Then change nameservers</strong> at your registrar to the new host&apos;s.</li>
                            <li><strong className="text-white">Leave both servers running</strong> during propagation. Some visitors hit the old host and some the new one for a few hours — which is fine, and exactly why you do not cancel the old plan.</li>
                        </ol>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                            <h3 className="text-lg font-bold text-white mb-2">One real risk to plan around</h3>
                            <p className="text-gray-300 leading-8">
                                If your site takes orders, comments or form submissions, anything submitted to the
                                <em> old</em> server during propagation will not appear in the new database. For a normal
                                blog this does not matter. For a store, put the site in maintenance mode for the switch,
                                or migrate at 3am and accept the small gap.
                            </p>
                        </div>
                    </section>

                    {/* Post-migration */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">After the switch: what to check</h2>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">SSL certificate.</strong> Issue a fresh one on the new host. A mismatched certificate throws a browser warning that will scare off every visitor.</li>
                            <li><strong className="text-white">Email.</strong> If your email was on the old host, moving nameservers moves your MX records too. Check that mail still arrives — this is the most commonly forgotten item on the entire list.</li>
                            <li><strong className="text-white">Forms and payments.</strong> Submit a real test through every form and, if you have a store, run one test transaction.</li>
                            <li><strong className="text-white">robots.txt and indexing.</strong> Staging environments often ship a <span className="font-mono text-sm">Disallow: /</span> or a site-wide noindex. Confirm neither followed you across.</li>
                            <li><strong className="text-white">Search Console.</strong> Run a URL inspection on a few pages to confirm Google can still fetch them.</li>
                            <li><strong className="text-white">Speed.</strong> Re-test. If the new host is meant to be faster and is not, caching probably needs turning on.</li>
                        </ul>
                    </section>

                    {/* Cost */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What does this actually cost?</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Item</th>
                                        <th className="p-4">Cost</th>
                                        <th className="p-4">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Host-managed migration</td>
                                        <td className="p-4">₹0</td>
                                        <td className="p-4">Included by most hosts to win the signup.</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Migration plugin</td>
                                        <td className="p-4">₹0</td>
                                        <td className="p-4">Free tiers cover most sites; large sites may need a paid extension.</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">New hosting plan</td>
                                        <td className="p-4">From ₹149/mo</td>
                                        <td className="p-4">The actual cost of the move. Verify the current rate at checkout.</td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 font-semibold text-white">Overlap with the old host</td>
                                        <td className="p-4">2–4 weeks</td>
                                        <td className="p-4">Deliberate. This is your rollback insurance.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The other half of the equation is what you are moving away from. If you are leaving because of
                            a renewal spike, the numbers in{" "}
                            <Link href="/blog/godaddy-renewal-price-increase-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
                                why GoDaddy renewals jump 2–4×
                            </Link>{" "}
                            are worth reading before you commit to a new provider — and check what your new host renews
                            at, not just what it costs today.
                        </p>
                    </section>

                    {/* Common problems */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Five problems and their fixes</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                ["White screen after import", "Almost always a PHP version mismatch or a plugin conflict. Switch the new server's PHP to match the old one, then upgrade gradually."],
                                ["Cannot log in on the new site", "The import replaced the user table. Use your old site's username and password, not the ones from the clean install."],
                                ["Images show but links 404", "Permalink rewrite rules did not carry over. Settings → Permalinks → Save, twice."],
                                ["Mixed-content warnings", "Some URLs are still http. Run a search-replace for the http version of your domain, then reissue SSL."],
                                ["Email stopped working", "Nameserver change took your MX records with it. Re-add them at the new DNS host."],
                            ].map(([problem, fix]) => (
                                <div key={problem} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <h3 className="text-base font-semibold text-white mb-2">{problem}</h3>
                                    <p className="text-sm text-gray-300 leading-7">{fix}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — WordPress migration</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <summary className="cursor-pointer text-lg font-semibold text-white marker:text-primary-400">
                                        {item.q}
                                    </summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Verdict + final CTA */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Final verdict</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            For the overwhelming majority of WordPress sites, the right answer is the boring one: buy the
                            new plan, submit a free migration request, test on a temporary URL, switch DNS, keep the old
                            host running for a fortnight. No FTP, no phpMyAdmin, no downtime. Reach for a plugin if you
                            want to stay in control, and go manual only when the setup genuinely demands it.
                        </p>
                        <p className="text-gray-300 leading-8 mb-6">
                            The one rule that matters more than the method: <strong className="text-white">copy first,
                            switch last, and never cancel the old host until the new one has been serving cleanly for two
                            weeks.</strong> Get that order right and a migration is a boring afternoon rather than an
                            emergency.
                        </p>
                        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Ready to move?</h3>
                            <p className="text-gray-300 leading-8 mb-6">
                                Free managed migration, a Mumbai data-centre option, free SSL, a free domain for year one
                                and 30 days to change your mind. Shared plans from ₹149/mo, Cloud from ₹599/mo.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                            >
                                Start Your Migration with Hostinger →
                            </a>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-wordpress-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger WordPress hosting reviewed</Link> — what you are migrating onto.</li>
                            <li><Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best web hosting in India</Link> — if you have not picked a destination yet.</li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Every Hostinger plan and price</Link> — which tier fits your site.</li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cheap hosting under ₹200/mo</Link> — if budget is the reason you are moving.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Domain pricing in India</Link> — if you are moving the domain too.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title="How to Migrate WordPress to a New Host Without Downtime" />
                    </div>
                </article>
            </main>
        </>
    );
}
