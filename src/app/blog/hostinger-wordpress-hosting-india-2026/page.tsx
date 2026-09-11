import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const REFERRAL_URL = "https://www.hostinger.com/in?REFERRALCODE=mohitkoli";
// Every plan card gets its own cart link now — a reader who has already decided on
// Unlimited should not have to hunt for the right product on Hostinger's site.
const CART_SINGLE_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_single&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CART_PREMIUM_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CART_UNLIMITED_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_unlimited&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CART_CLOUD_48 = "https://www.hostinger.com/in/cart?product=hosting%3Ahostinger_cloud_startup&period=48&referral_type=cart_link&REFERRALCODE=mohitkoli&referral_id=01a06612-907a-715a-826c-c2ae423f3289";
const CANONICAL = "https://mohitkoli.in/blog/hostinger-wordpress-hosting-india-2026";

const TITLE = "Hostinger WordPress Hosting India — 83% OFF, from ₹69/mo";
const DESCRIPTION =
    "Premium handles a normal blog; WooCommerce it does not. Hostinger WordPress hosting India — PHP-worker limits per plan, real renewals, free migration.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "hostinger wordpress hosting india",
        "hostinger wordpress hosting price in india",
        "hostinger wordpress hosting",
        "is hostinger good for wordpress in india",
        "which hostinger plan is best for wordpress",
        "hostinger wordpress hosting review 2026",
        "best wordpress hosting india 2026",
        "hostinger litespeed wordpress",
        "hostinger woocommerce hosting",
        "hostinger woocommerce hosting india",
        "hostinger free wordpress migration",
        "wordpress hosting price india",
        "how many visitors can hostinger premium handle",
        "hostinger managed wordpress vs shared hosting",
        "hostinger india server location mumbai",
        "hostinger wordpress migration how long",
        "hostinger price with gst india",
        "hostinger unlimited plan wordpress",
        "hostinger single plan wordpress",
        "hostinger vs bluehost wordpress india",
        "hostinger vs godaddy which is better in india",
        "hostinger object cache wordpress",
        "hostinger wp-cli ssh git wordpress",
        "hostinger wordpress staging",
        "hostinger litespeed cache settings wordpress",
        "hostinger resource limit reached wordpress",
        "hostinger wordpress ttfb india",
        "hostinger yearly plan price",
        "hostinger monthly plan wordpress",
        "hostinger cloud startup wordpress",
        "hostinger wordpress multisite",
        "hostinger ai website builder wordpress",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        images: [{ url: "/assets/blog/hostinger-wordpress-hosting-india-2026.png", width: 1200, height: 630, alt: "Hostinger WordPress hosting India 2026 review" }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: "Premium is enough for a blog. WooCommerce needs more — PHP-worker limits, real renewal rates and which Hostinger plan actually fits.",
        images: ["/assets/blog/hostinger-wordpress-hosting-india-2026.png"],
    },
};

// Sale prices verified on hostinger.com/in/wordpress-hosting, 7 September 2026.
// Resource limits from Hostinger's own "Parameters and limits of hosting plans" support doc.
const PLANS = [
    {
        name: "Single",
        price: "₹69/mo",
        off: "83% off ₹399",
        renew: "₹289/mo",
        verdict: "Runs one WordPress blog properly — and deliberately nothing more.",
        specs: ["1 website", "10 GB SSD", "1 free mailbox", "Weekly backups", "20 PHP workers · 1 GB RAM · 1 core"],
        body: "The cheapest real WordPress plan Hostinger sells in India. One site, 10 GB of SSD and 20 PHP workers is genuinely enough for a text-and-images blog that is still finding its audience. What you give up matters though: no object cache, no staging, daily backups are not an option, and the one-website cap is hard — the moment you want a second project you are paying to upgrade, not paying to add.",
        cta: "Check Single Price",
        href: CART_SINGLE_48,
        tone: "border-white/10 bg-white/[0.03]",
    },
    {
        name: "Premium",
        price: "₹149/mo",
        off: "75% off ₹599",
        renew: "₹449/mo",
        verdict: "The default blog pick, and the plan most readers of this page should buy.",
        specs: ["3 websites", "20 GB SSD", "2 mailboxes per site", "Weekly backups", "40 PHP workers · 2 GB RAM · 1 core"],
        body: "Double the PHP workers and double the RAM of Single for ₹80 more a month, plus room for three sites — which in practice means your blog, a client test site and something you are still deciding about. Free domain for year one on 12-month-plus terms. The honest gap: backups are still weekly, there is no object cache and no staging, so a risky plugin update has to be tested on a copy you make yourself.",
        cta: "Check Premium Price",
        href: CART_PREMIUM_48,
        tone: "border-primary-500/40 bg-primary-500/[0.07]",
    },
    {
        name: "Unlimited",
        price: "₹249/mo",
        off: "64% off ₹699",
        renew: "₹649/mo",
        verdict: "The one to buy the moment the site earns money — this is the plan Hostinger renamed from Business in July 2026.",
        specs: ["Unlimited websites", "50 GB NVMe", "Unlimited mailboxes per site", "Daily + on-demand backups", "60 PHP workers · 3 GB RAM · 2 cores"],
        body: "If you searched for the Hostinger Business plan and could not find it, this is it — same tier, new name since July 2026, and half the internet still calls it Business. The ₹100/mo over Premium buys four specific things: NVMe instead of SSD, daily instead of weekly backups, one-click staging, and object cache. It also doubles the CPU cores and raises the MySQL query timeout from 60 to 120 seconds, which is the limit that actually kills slow WooCommerce reports.",
        cta: "Check Unlimited Price",
        href: CART_UNLIMITED_48,
        tone: "border-emerald-500/30 bg-emerald-500/[0.06]",
    },
    {
        name: "Cloud Startup",
        price: "₹599/mo",
        off: "65% off ₹1,699",
        renew: "₹1,599/mo",
        verdict: "For WooCommerce with steady daily orders, or any site where the shared tiers keep hitting their ceiling.",
        specs: ["Unlimited websites", "100 GB NVMe", "Unlimited mailboxes per site", "Daily + on-demand backups", "100 PHP workers · 4 GB RAM · 4 cores"],
        body: "The jump from Unlimited is not marketing: 100 PHP workers instead of 60, four cores instead of two, 2,000,000 inodes instead of 600,000, and a MySQL query timeout of 1,800 seconds instead of 120. That last number is why big stores and LMS sites live here — long-running admin queries simply stop being killed mid-flight. It is also the point where you should genuinely compare a VPS instead of assuming shared is cheaper.",
        cta: "Check Cloud Startup Price",
        href: CART_CLOUD_48,
        tone: "border-white/10 bg-white/[0.03]",
    },
];

const FAQ = [
    {
        q: "Is Hostinger good for WordPress in India?",
        a: "Yes — WordPress is Hostinger's strongest use case in India. Every shared plan includes one-click WP install, managed auto-updates, LiteSpeed server with the LSCache plugin, and free SSL, and there is now a Mumbai data centre so Indian visitors are not routed to Europe. For blogs, business sites and small WooCommerce stores it is one of the best value-for-money WP hosts in 2026. It is not an enterprise managed host like WP Engine — and doesn't pretend to be at this price.",
    },
    {
        q: "Which Hostinger plan should I buy for WordPress?",
        a: "For a normal blog, Premium (₹149/mo on the 48-month term) is enough: 3 websites, 20 GB SSD, 40 PHP workers, free domain year one and weekly backups. Buy Unlimited — the plan formerly called Business — at ₹249/mo once the site earns money, because NVMe storage, daily backups, object cache and staging are cheap insurance. WooCommerce stores should treat Unlimited as the floor, not the upgrade.",
    },
    {
        q: "How much does Hostinger WordPress hosting cost in India?",
        a: "On the current sale it runs ₹69/mo (Single), ₹149/mo (Premium), ₹249/mo (Unlimited) and ₹599/mo (Cloud Startup) on the 48-month term. Those are per-month figures on a term billed in one upfront payment, so Premium is about ₹7,152 before tax and roughly ₹8,439 after 18% GST. Renewals are the real cost: ₹289, ₹449, ₹649 and ₹1,599 per month respectively.",
    },
    {
        q: "Is 18% GST included in Hostinger's ₹149/mo price?",
        a: "No. The advertised ₹149/mo is the pre-tax price; 18% GST is added once you enter an Indian billing address at checkout, so the four-year Premium term goes from ₹7,152 to roughly ₹8,439. Budget about 1.18x whatever the cart first shows you. If you enter a GSTIN, Hostinger issues a tax invoice — talk to your accountant about claiming that GST back as input credit.",
    },
    {
        q: "Can the ₹69/mo Hostinger Single plan run a WordPress blog?",
        a: "Yes, comfortably, for a blog that is still growing. Single gives you one website, 10 GB SSD, 1 GB RAM, one CPU core and 20 PHP workers — plenty for a cached, text-heavy WordPress site. The limits to know before you buy: one site only, weekly backups, no object cache and no staging environment. If you expect a second project within the year, Premium is the cheaper decision.",
    },
    {
        q: "How many visitors can Hostinger Premium handle?",
        a: "Monthly totals are the wrong unit — concurrency is what breaks sites. Premium gives you 40 PHP workers, 2 GB RAM and one CPU core, which means 40 simultaneous uncached PHP requests before visitors start queueing. A fully LSCache'd blog serves static HTML and barely touches those workers, so it absorbs very large monthly numbers; an uncached WooCommerce checkout burns one worker per shopper and hits the ceiling far sooner.",
    },
    {
        q: "Does Hostinger have a data centre in India for WordPress?",
        a: "Yes — Hostinger runs a Tier-3 data centre in Mumbai, alongside locations in Indonesia, Malaysia, Europe, North America and Brazil. The catch is that the region is picked during setup and most Indian buyers never check it, so sites aimed at Indian readers end up on European hardware. If yours is wrong, you can move it yourself from the Plan Details page in hPanel — the self-transfer is automatic and free.",
    },
    {
        q: "Is Hostinger's managed WordPress hosting different from its shared hosting?",
        a: "They are the same product. The web hosting and WordPress hosting pages sell identical Single, Premium, Unlimited and Cloud Startup plans at identical prices — there is no separate WordPress tier and no WordPress price premium. What the WordPress label adds is automation on top of shared hosting: auto-updates with version pinning, LiteSpeed and LSCache pre-wired, auto-renewing SSL and a malware scanner.",
    },
    {
        q: "How long does Hostinger's free WordPress migration take?",
        a: "Minutes, in most cases. Hostinger states that 85% of migrations finish in under 5 minutes through the automatic wizard, and that assisted transfers are completed within 24 hours. Migrations are free and unlimited on every plan including Single. Before you submit, switch off two-factor authentication and any CAPTCHA on your current wp-admin — the wizard signs in the same way a person does and will fail otherwise.",
    },
    {
        q: "Can I migrate my existing WordPress site to Hostinger for free?",
        a: "Yes — free, unlimited migrations are included on every plan. Start the request in hPanel with your old host's login details or an archive containing a .sql database file, and disable 2FA and CAPTCHA on the source site first. Switch DNS only after you have verified the copied site on Hostinger, and downtime is effectively zero.",
    },
    {
        q: "Which Hostinger plan should a WooCommerce store use?",
        a: "Unlimited (formerly Business) is the floor. Cart and checkout pages bypass page cache by design, so every shopper consumes a PHP worker and writes to the database — Unlimited's 60 workers, NVMe disks, daily backups and 120-second MySQL query limit all matter there. For steady daily orders move to Cloud Startup, which raises that to 100 workers, four cores and a 1,800-second query limit.",
    },
    {
        q: "Does Hostinger include object caching (LSMCD) for WordPress?",
        a: "Yes, on Unlimited and above — it uses LiteSpeed Memcached and you toggle it per site in hPanel. There is a trap nobody mentions: object cache is wired to the LiteSpeed Cache plugin. Deactivate that plugin or replace it with WP Rocket or W3 Total Cache and your object cache quietly stops working, usually while you are congratulating yourself on the new caching setup.",
    },
    {
        q: "Does Hostinger support WP-CLI, SSH and Git for WordPress?",
        a: "Yes. Hostinger lists WP-CLI, SSH access, Git integration and PHP version control together as its WordPress development toolkit. In practice that means you can run wp plugin update or wp search-replace over SSH instead of clicking through wp-admin, deploy a theme from a repository, and change the PHP version per site from hPanel. It is a genuine developer setup at shared-hosting prices.",
    },
    {
        q: "Can I run WordPress multisite on Hostinger?",
        a: "Yes — WordPress multisite is listed as supported, and Hostinger points agencies at its higher tiers for multisite work. Practically, run multisite on Unlimited or above: a network shares one set of PHP workers, inodes and databases across every subsite, so Single's 200,000 inodes and 20 workers disappear fast. Unlimited gives you 600,000 inodes, 150 databases and 60 workers to spread around.",
    },
    {
        q: "How do I install WordPress on Hostinger?",
        a: "hPanel → Websites → Add website → WordPress. The wizard asks for site name, admin email and password, then installs in about a minute — SSL is issued automatically. If you're migrating an existing site, use the free migration wizard instead; Hostinger says 85% of those finish in under five minutes.",
    },
    {
        q: "Does Hostinger WordPress hosting include LiteSpeed cache?",
        a: "Yes — Hostinger's servers run LiteSpeed, and new WP installs come with the LiteSpeed Cache plugin. Turn on page caching, browser caching and image optimisation inside the plugin and a normal blog scores noticeably faster in PageSpeed without any paid tools. On Unlimited and above, keeping this plugin active is also what keeps object cache alive.",
    },
    {
        q: "Is Hostinger or Bluehost better for WordPress in India?",
        a: "For price per unit of performance and for latency to Indian readers, Hostinger — it has a Mumbai data centre and its entry tiers start at ₹69/mo. Bluehost's real advantages are its long-standing listing on WordPress.org's recommended hosts page and phone support with Indian-language help, which matters if you want a human on a call rather than a chat window. Price both on the day you buy; their India pricing moves.",
    },
    {
        q: "What are the real limitations of Hostinger for WordPress?",
        a: "Four honest ones: renewal pricing roughly triples after your term, support is general hosting support rather than WordPress specialists and there is no phone line, daily backups on Unlimited are only retained for seven days, and shared PHP-worker limits mean membership sites, LMS platforms and busy stores outgrow these plans. The upgrade path — Cloud Startup, then KVM VPS — lives in the same hPanel account.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESCRIPTION,
        image: "https://mohitkoli.in/assets/blog/hostinger-wordpress-hosting-india-2026.png",
        datePublished: "2026-08-09T00:00:00.000Z",
        dateModified: "2026-09-07T00:00:00.000Z",
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
        keywords: "hostinger wordpress hosting india, hostinger wordpress hosting price in india, is hostinger good for wordpress in india, which hostinger plan is best for wordpress, how many visitors can hostinger premium handle, hostinger price with gst india, hostinger india server location mumbai, best wordpress hosting india 2026, hostinger woocommerce, litespeed wordpress",
        articleSection: "Hosting",
        inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger WordPress Hosting India 2026", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Hostinger WordPress Hosting (India)",
        description:
            "Hostinger shared WordPress hosting sold in India — Single, Premium, Unlimited and Cloud Startup — priced per month on the 48-month term, before 18% GST.",
        image: "https://mohitkoli.in/assets/blog/hostinger-wordpress-hosting-india-2026.png",
        brand: { "@type": "Brand", name: "Hostinger" },
        category: "WordPress Hosting",
        url: CANONICAL,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "69",
            highPrice: "599",
            offerCount: 4,
            availability: "https://schema.org/InStock",
            priceValidUntil: "2026-12-31",
            offers: [
                {
                    "@type": "Offer",
                    name: "Hostinger Single — WordPress hosting India",
                    price: "69",
                    priceCurrency: "INR",
                    priceValidUntil: "2026-12-31",
                    availability: "https://schema.org/InStock",
                    url: CANONICAL,
                    description: "Per month on the 48-month term, before 18% GST. 1 website, 10 GB SSD. Renews at ₹289/mo.",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Premium — WordPress hosting India",
                    price: "149",
                    priceCurrency: "INR",
                    priceValidUntil: "2026-12-31",
                    availability: "https://schema.org/InStock",
                    url: CANONICAL,
                    description: "Per month on the 48-month term, before 18% GST. 3 websites, 20 GB SSD. Renews at ₹449/mo.",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Unlimited (formerly Business) — WordPress hosting India",
                    price: "249",
                    priceCurrency: "INR",
                    priceValidUntil: "2026-12-31",
                    availability: "https://schema.org/InStock",
                    url: CANONICAL,
                    description: "Per month on the 48-month term, before 18% GST. Unlimited websites, 50 GB NVMe, daily backups, staging, object cache. Renews at ₹649/mo.",
                },
                {
                    "@type": "Offer",
                    name: "Hostinger Cloud Startup — WordPress hosting India",
                    price: "599",
                    priceCurrency: "INR",
                    priceValidUntil: "2026-12-31",
                    availability: "https://schema.org/InStock",
                    url: CANONICAL,
                    description: "Per month on the 48-month term, before 18% GST. 100 GB NVMe, 4 CPU cores, 100 PHP workers. Renews at ₹1,599/mo.",
                },
            ],
        },
        review: {
            "@type": "Review",
            name: "Hostinger WordPress hosting in India — a developer's review",
            datePublished: "2026-09-07",
            reviewBody:
                "Hostinger is shared hosting with genuine WordPress automation layered on top, priced far below dedicated managed WordPress hosts. LiteSpeed with LSCache, a Mumbai data centre, free unlimited migrations and WP-CLI, SSH and Git make it a strong pick for blogs and small WooCommerce stores. The trade-offs are real: renewal prices roughly triple, support is general hosting support with no phone line, daily backups are retained for only seven days, and shared PHP-worker limits mean membership, LMS and busy stores need Cloud Startup or a KVM VPS.",
            author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile" },
            reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5", worstRating: "1" },
        },
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

export default function HostingerWordpressHosting() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
                            <li>/</li>
                            <li className="text-gray-300">Hostinger WordPress Hosting</li>
                        </ol>
                    </nav>

                    <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-3">WordPress Guide · Updated September 7, 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Hostinger WordPress Hosting in India (2026): A Developer&apos;s Real Review
                    </h1>
                    <p className="text-lg text-gray-300 leading-8 mb-3">
                        I run client WordPress sites on Hostinger — blogs, business sites, and a couple of WooCommerce
                        stores. So instead of a copied feature list, this is the answer I&apos;d give a friend:{" "}
                        <strong className="text-white">what WordPress on Hostinger is genuinely like</strong> — every plan
                        with its own price (₹69 to ₹599/mo), what you actually pay once 18% GST lands, how many PHP workers
                        each tier gives you, measured speed numbers rather than adjectives, and the site types that should
                        not buy shared hosting at all.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 border-l-2 border-white/10 pl-3">
                        Disclosure: links use my referral code — you get an extra discount, I earn a small commission at no extra cost to you.
                        Prices checked September 7, 2026 on Hostinger&apos;s India site; sales rotate, verify at checkout.
                    </p>

                    {/* Early CTA — the first affiliate link used to sit most of the way down
                        the page, which is no use to a reader who already knows what they want. */}
                    <div className="mb-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <div className="mb-4 sm:mb-0">
                            <p className="font-semibold text-white leading-6">Just want the answer? Premium at ₹119.20/mo runs WordPress fine</p>
                            <p className="mt-1 text-sm text-gray-400 leading-6">Free domain for a year · free SSL · free migration if you are moving a site across · GST added at checkout</p>
                        </div>
                        <a
                            href={CART_PREMIUM_48}
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block shrink-0 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/30 hover:scale-[1.02] whitespace-nowrap"
                        >
                            Get Premium — ₹119.20/mo →
                        </a>
                    </div>

                    <div className="relative w-full aspect-[1200/630] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/assets/blog/hostinger-wordpress-hosting-india-2026.svg"
                            alt="Cover card reading 'Hostinger for WordPress: Worth It?' — this Hostinger WordPress hosting guide for India 2026 by developer Mohit Koli"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 30-sec */}
                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">The 30-second answer</h2>
                        <ul className="space-y-2 text-gray-300 leading-7">
                            <li>✅ <strong className="text-white">Yes for:</strong> blogs, portfolios, business sites, small WooCommerce — best value WP hosting in the Indian budget band, and there is now a Mumbai data centre.</li>
                            <li>💰 <strong className="text-white">Prices:</strong> Single ₹69/mo · Premium ₹149/mo · Unlimited ₹249/mo · Cloud Startup ₹599/mo, all on the 48-month term and all <em>before</em> 18% GST.</li>
                            <li>⚡ <strong className="text-white">Speed:</strong> EXPERTE&apos;s six-week test measured 0.305s TTFB and a 0.46s Largest Contentful Paint — the fastest LCP of the 14 hosts it tested.</li>
                            <li>📊 <strong className="text-white">Plan pick:</strong> blog → Premium · money site or store → Unlimited (the plan formerly called Business) · steady daily orders → Cloud Startup.</li>
                            <li>⚠️ <strong className="text-white">Not for:</strong> membership sites, LMS platforms and anything where logged-in users bypass page cache — those burn PHP workers and belong on Cloud or a VPS.</li>
                        </ul>
                    </section>

                    {/* Every plan, priced */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Every Hostinger WordPress plan in India, priced (September 2026)</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            There is no separate &ldquo;WordPress plan&rdquo; to buy — these four shared plans are what Hostinger
                            sells on both its web hosting and WordPress hosting pages, at the same prices. Every figure below is
                            the sale price on the 48-month term, checked on Hostinger&apos;s India site on 7 September 2026, and
                            every one of them is before GST. The renewal number matters more than the sale number, so it is on
                            every card.
                        </p>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {PLANS.map((plan) => (
                                <div key={plan.name} className={`rounded-2xl border p-6 flex flex-col ${plan.tone}`}>
                                    <div className="flex items-baseline justify-between gap-3 mb-1">
                                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                        <span className="text-2xl font-bold text-white whitespace-nowrap">{plan.price}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-3">{plan.off} · renews {plan.renew} · before 18% GST</p>
                                    <p className="text-sm text-white font-medium leading-6 mb-3">{plan.verdict}</p>
                                    <ul className="text-sm text-gray-300 space-y-1 mb-3">
                                        {plan.specs.map((spec) => (
                                            <li key={spec}>· {spec}</li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-gray-300 leading-6 mb-5">{plan.body}</p>
                                    <a
                                        href={plan.href}
                                        target="_blank"
                                        rel="nofollow sponsored noopener"
                                        className="mt-auto inline-block text-center bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow shadow-purple-900/30"
                                    >
                                        {plan.cta} →
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                            <h3 className="font-semibold text-white mb-2">Past Cloud Startup? The VPS line is the next rung</h3>
                            <p className="text-sm text-gray-300 leading-7">
                                When a store outgrows shared hosting entirely, Hostinger&apos;s KVM VPS plans run on AMD EPYC
                                hardware with NVMe storage on every tier: KVM 1 at ₹599/mo (1 vCPU, 4 GB RAM, 50 GB NVMe),
                                KVM 2 at ₹799/mo (2 vCPU, 8 GB RAM, 100 GB NVMe) and KVM 4 at ₹1,099/mo (4 vCPU, 16 GB RAM,
                                200 GB NVMe), all with a 30-day money-back window. You manage them from the same hPanel account,
                                so moving up later is not a re-migration. Full specs are in my{" "}
                                <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger KVM VPS plans in India</Link>{" "}
                                breakdown, and the{" "}
                                <Link href="/tools/hosting-cost-calculator" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">hosting cost calculator</Link>{" "}
                                will do the four-year arithmetic for you.
                            </p>
                            <a
                                href={REFERRAL_URL}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="mt-4 inline-block bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
                            >
                                See Current VPS Plans →
                            </a>
                        </div>
                    </section>

                    {/* GST + real checkout cost */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What you actually pay at checkout: 48 months upfront plus 18% GST</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The ₹149/mo on the pricing page is not what leaves your bank account. Hostinger bills the entire
                            48-month term in a single upfront payment, and 18% GST is added once you enter an Indian billing
                            address — so the real number is roughly 1.18× the term total. Almost nobody writing about Hostinger
                            in India lays this out, and it is the single most common checkout surprise I get asked about.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Plan</th>
                                        <th className="p-4">Sale price</th>
                                        <th className="p-4">48-month total</th>
                                        <th className="p-4">With 18% GST</th>
                                        <th className="p-4">Renews at</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Single", "₹69/mo", "₹3,312", "~₹3,908", "₹289/mo"],
                                        ["Premium", "₹149/mo", "₹7,152", "~₹8,439", "₹449/mo"],
                                        ["Unlimited (was Business)", "₹249/mo", "₹11,952", "~₹14,103", "₹649/mo"],
                                        ["Cloud Startup", "₹599/mo", "₹28,752", "~₹33,927", "₹1,599/mo"],
                                    ].map(([plan, price, total, gst, renew], i) => (
                                        <tr key={plan} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{plan}</td>
                                            <td className="p-4">{price}</td>
                                            <td className="p-4">{total}</td>
                                            <td className="p-4">{gst}</td>
                                            <td className="p-4">{renew}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Run the referral discount on the same basis and Premium comes down to about ₹119.20/mo — roughly
                            ₹5,722 for the term, or about ₹6,752 once GST is on it. Two things to be clear about: that extra
                            20% applies to new purchases only, and it never applies to a renewal. Renewal is where budget
                            hosting stops being cheap — Premium roughly triples to ₹449/mo, Unlimited goes to ₹649/mo and Cloud
                            Startup to ₹1,599/mo. That is the entire argument for the long term, and I have put every tier&apos;s
                            numbers side by side in the{" "}
                            <Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger renewal price in India</Link>{" "}
                            breakdown.
                        </p>
                        <p className="text-gray-300 leading-8">
                            One thing worth doing if you bill through a company: enter your GSTIN at checkout. Hostinger issues a
                            proper tax invoice against it, and the 18% then behaves like GST on any other business expense —
                            which, subject to your accountant&apos;s view of your input-credit position, can make hosting
                            materially cheaper than the sticker price. Freelancers who are not registered simply pay the 18% and
                            move on. If you are comparing the total four-year outlay across hosts rather than the monthly
                            headline, the{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger plans &amp; pricing in India 2026</Link>{" "}
                            guide has the full tier-by-tier maths.
                        </p>
                    </section>

                    {/* Which plan */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Which Hostinger plan is best for WordPress in India?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Match the plan to what the site does, not to the feature list. This is the decision table I use with
                            my own clients:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Your site</th>
                                        <th className="p-4">Buy this</th>
                                        <th className="p-4">Why</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["First blog, one site, tight budget", "Single (₹69/mo)", "10 GB SSD and 20 PHP workers carry a cached blog fine. The cap that bites is one website, not performance."],
                                        ["Personal blog / portfolio", "Premium (₹149/mo)", "40 PHP workers, 2 GB RAM, three sites and the free year-one domain. The default answer for most readers."],
                                        ["Income blog / business site", "Unlimited (₹249/mo)", "NVMe, daily backups, staging and object cache — ₹100/mo of insurance once the site earns."],
                                        ["Small WooCommerce store", "Unlimited (₹249/mo)", "Cart pages bypass cache and write to the DB constantly; 60 workers and a 120s query limit absorb that."],
                                        ["Store with steady daily orders", "Cloud Startup (₹599/mo)", "100 PHP workers, 4 cores, 2,000,000 inodes and a 1,800s MySQL query limit for long admin reports."],
                                        ["Membership, LMS or heavy multilingual", "Cloud Startup or KVM VPS", "Logged-in traffic skips page cache entirely, so every visitor costs a PHP worker. Shared tiers stall here."],
                                    ].map(([site, plan, why], i) => (
                                        <tr key={site} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{site}</td>
                                            <td className="p-4">{plan}</td>
                                            <td className="p-4">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The ₹100/mo gap between Premium and Unlimited buys four things a money site actually uses: NVMe
                            instead of SSD, daily instead of weekly backups, one-click staging, and object cache. A hobby blog can
                            skip all four. If you&apos;re still comparing hosts rather than plans, my{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">best web hosting in India 2026</Link>{" "}
                            comparison puts Hostinger next to its rivals, the{" "}
                            <Link href="/blog/cheap-web-hosting-under-200-india" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">cheap web hosting under ₹200</Link>{" "}
                            roundup covers the full budget band, and the{" "}
                            <Link href="/blog/hostinger-business-plan" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger Business plan guide</Link>{" "}
                            explains the tier that is now called Unlimited.
                        </p>
                    </section>

                    {/* Visitors / resource limits */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How many visitors can each Hostinger plan handle?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The honest answer is that &ldquo;monthly visitors&rdquo; is the wrong unit, and every page quoting a
                            round number is guessing. What actually breaks a WordPress site on shared hosting is{" "}
                            <strong className="text-white">concurrency</strong> — how many PHP requests need executing at the same
                            instant. Hostinger publishes those limits in its own parameters-and-limits documentation, and they are
                            the numbers you should be shopping on:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Limit</th>
                                        <th className="p-4">Single</th>
                                        <th className="p-4">Premium</th>
                                        <th className="p-4">Unlimited</th>
                                        <th className="p-4">Cloud Startup</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["PHP workers", "20", "40", "60", "100"],
                                        ["CPU cores", "1", "1", "2", "4"],
                                        ["RAM", "1 GB", "2 GB", "3 GB", "4 GB"],
                                        ["Inodes (files)", "200,000", "400,000", "600,000", "2,000,000"],
                                        ["PHP memory limit", "1,024 MB", "1,536 MB", "2,048 MB", "3,072 MB"],
                                        ["Databases", "2", "10", "150", "300"],
                                        ["Max MySQL query time", "60s", "60s", "120s", "1,800s"],
                                    ].map(([label, s, p, u, c], i) => (
                                        <tr key={label} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{label}</td>
                                            <td className="p-4">{s}</td>
                                            <td className="p-4">{p}</td>
                                            <td className="p-4">{u}</td>
                                            <td className="p-4">{c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Read the PHP-worker row as &ldquo;simultaneous uncached requests before visitors start queueing&rdquo;.
                            That is why the same plan can look infinite for one site and hopeless for another. A fully
                            LSCache&apos;d blog serves static HTML to almost every visitor and barely touches a worker, so
                            Premium&apos;s 40 absorb a very large monthly number without complaining. A WooCommerce cart, a
                            logged-in membership area or an open Elementor editing session each occupy a worker for the whole
                            duration of the request — so a store with a few dozen shoppers browsing checkout at once is doing
                            more damage than a blog post that went mildly viral.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The failure signs are specific, and worth recognising before you start blaming your theme.
                            &ldquo;Resource limit reached&rdquo; and 503 errors during a spike mean workers are exhausted.
                            &ldquo;Error establishing a database connection&rdquo; under load usually means you have hit the
                            MySQL connection ceiling. And an admin report or a bulk import that dies silently on Single or Premium
                            is very often the 60-second MySQL query limit killing it — that limit doubles to 120 seconds on
                            Unlimited and goes to 1,800 seconds on Cloud Startup, which is the real reason big stores end up
                            there. Inodes are the quiet one: they count files, not gigabytes, so a site with tens of thousands of
                            cached thumbnails can exhaust 200,000 inodes on Single while using barely 3 GB of disk.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Before you upgrade on a hunch, open hPanel and look at the resource-usage graph for the site. If your
                            PHP-worker line is spiking to the ceiling daily, upgrading is the fix. If it is flat and your pages are
                            still slow, the problem is your theme, your images or a plugin doing uncached database work on every
                            page load — and no amount of money spent on hosting will fix that.
                        </p>
                    </section>

                    {/* Mid-article CTA */}
                    <aside className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-gray-300 leading-7 mb-4 sm:mb-0">
                            If those numbers already told you what you need — Premium for a blog, Unlimited for a store — both
                            open straight into the 48-month cart with the discount applied.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <a
                                href={CART_PREMIUM_48}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block text-center bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow shadow-purple-900/40 whitespace-nowrap"
                            >
                                Get Premium →
                            </a>
                            <a
                                href={CART_UNLIMITED_48}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="inline-block text-center bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
                            >
                                Get Unlimited →
                            </a>
                        </div>
                    </aside>

                    {/* Managed or not */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Is Hostinger really &ldquo;managed&rdquo; WordPress hosting, or shared hosting with a WordPress label?
                        </h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            On Hostinger they are the same product. The web hosting page and the WordPress hosting page sell
                            identical Single, Premium, Unlimited and Cloud Startup plans at identical prices — there is no
                            separate WordPress tier to buy and no WordPress price premium to pay. Anyone telling you to
                            &ldquo;get the WordPress version instead of the normal one&rdquo; is describing a product that does
                            not exist.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            What the WordPress label genuinely adds is automation layered on shared hosting: WordPress core,
                            plugin and theme updates handled for you with per-site version pinning when a plugin is fragile;
                            LiteSpeed with the LSCache plugin pre-wired rather than something you configure from scratch; SSL
                            issued and renewed automatically; a WordPress malware scanner, a web application firewall and DDoS
                            mitigation; and one-click staging on Unlimited and above. That list is not marketing — it is the
                            boring maintenance work that otherwise lands on you every Tuesday.
                        </p>
                        <p className="text-gray-300 leading-8">
                            What it is not: support here is general hosting support, not a team of WordPress engineers, and there
                            is no phone line — everything runs through chat, which in 2026 means an AI assistant first. There are
                            no guaranteed per-site PHP workers, because you are on shared infrastructure by definition, and
                            nobody is going to profile your plugin stack for you. Dedicated managed WordPress hosts charge
                            several times more precisely because they staff for that. The right way to read Hostinger is: shared
                            hosting with real WordPress automation on top, at a fraction of managed-host pricing. That is an
                            excellent trade for a blog or a small store, and the wrong trade for a site where an hour of downtime
                            costs you money.
                        </p>
                    </section>

                    {/* Features table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The WordPress features Hostinger includes that most reviews never list</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Feature</th>
                                        <th className="p-4">Single ₹69</th>
                                        <th className="p-4">Premium ₹149</th>
                                        <th className="p-4">Unlimited ₹249</th>
                                        <th className="p-4">Cloud ₹599</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Websites", "1", "3", "Unlimited", "Unlimited"],
                                        ["Storage", "10 GB SSD", "20 GB SSD", "50 GB NVMe", "100 GB NVMe"],
                                        ["1-click WordPress install", "✅", "✅", "✅", "✅"],
                                        ["Managed auto-updates", "✅", "✅", "✅", "✅"],
                                        ["LiteSpeed + LSCache plugin", "✅", "✅", "✅", "✅"],
                                        ["Free SSL, auto-renewing", "✅", "✅", "✅", "✅"],
                                        ["Free mailboxes (year 1)", "1", "2 per site", "Unlimited per site", "Unlimited per site"],
                                        ["Backups", "Weekly", "Weekly", "Daily + on demand", "Daily + on demand"],
                                        ["Object cache (LSMCD)", "—", "—", "✅", "✅"],
                                        ["One-click staging", "—", "—", "✅", "✅"],
                                    ].map(([label, s, p, u, c], i) => (
                                        <tr key={label} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{label}</td>
                                            <td className="p-4">{s}</td>
                                            <td className="p-4">{p}</td>
                                            <td className="p-4">{u}</td>
                                            <td className="p-4">{c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl font-semibold text-white mt-8 mb-2">Object cache — and the trap that silently disables it</h3>
                        <p className="text-gray-300 leading-8 mb-4">
                            Object cache on Hostinger uses LiteSpeed Memcached, it is available from Unlimited upwards, and you
                            toggle it per site in hPanel. It keeps frequently-read database results in memory, which is the
                            single biggest win for anything that queries the database on every page load — WooCommerce, a
                            membership area, a site with heavy custom fields. The trap: it is wired to the LiteSpeed Cache plugin.
                            Deactivate that plugin, or swap it for WP Rocket or W3 Total Cache, and your object cache quietly
                            stops doing anything. I have watched people migrate to a &ldquo;better&rdquo; caching plugin and lose
                            performance for exactly this reason, then blame the host.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Staging, WP-CLI, SSH and Git</h3>
                        <p className="text-gray-300 leading-8 mb-4">
                            One-click staging on Unlimited and above is the feature I would not give up: clone the live site,
                            test the risky plugin or theme update on the copy, push to production only when it works. It has
                            saved client sites from more than one broken update. Alongside it, Hostinger lists WP-CLI, SSH
                            access, Git integration and PHP version control together as its WordPress development toolkit — so
                            you can run <code className="text-primary-300">wp plugin update --all</code> or a{" "}
                            <code className="text-primary-300">wp search-replace</code> over SSH instead of clicking through
                            wp-admin, deploy a theme from a repository, and set the PHP version per site. That is a genuinely
                            developer-grade setup at ₹149/mo, and it is the part of the product that budget-host reviews almost
                            never mention.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Backups: read the retention, not the frequency</h3>
                        <p className="text-gray-300 leading-8 mb-4">
                            This is where I will contradict the marketing. Weekly backups are retained for six weeks; daily
                            backups are retained for seven days. Read that twice, because it means the &ldquo;better&rdquo;
                            daily-backup tier actually gives you a <em>shorter</em> window to notice a problem — if a malware
                            infection or a bad database migration goes unnoticed for eight days on Unlimited, there is no clean
                            restore point left. Whichever plan you buy, add your own offsite copy: UpdraftPlus to Google Drive
                            costs nothing and takes ten minutes to set up.
                        </p>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Multisite, llms.txt and the small stuff</h3>
                        <p className="text-gray-300 leading-8">
                            WordPress multisite is supported, though I would only run a network on Unlimited or above since every
                            subsite shares one pool of inodes, databases and PHP workers. Cron jobs are configurable from hPanel,
                            which lets you do the standard production fix of disabling WordPress&apos;s built-in wp-cron and
                            running a real server cron on a schedule instead — on a low-traffic site that stops scheduled posts
                            from firing late, and on a busy one it stops wp-cron from running on every page load. And a genuinely
                            2026 addition nobody in the Indian search results has written about: Hostinger auto-generates an{" "}
                            <code className="text-primary-300">llms.txt</code> file so AI agents can find, understand and
                            reference your site — which, given how much traffic now originates in an AI answer rather than a blue
                            link, is worth more than it sounds.
                        </p>
                    </section>

                    {/* Speed + data centre */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Real speed numbers, and picking the right data centre for Indian traffic</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Independent numbers beat adjectives, so here are someone else&apos;s. EXPERTE ran a six-week
                            real-world test across 14 WordPress hosts and measured Hostinger at{" "}
                            <strong className="text-white">0.305s time to first byte</strong> (8th of 14),{" "}
                            <strong className="text-white">0.46s Largest Contentful Paint</strong> — the fastest of all 14 — and{" "}
                            <strong className="text-white">99.932% uptime</strong> (11th of 14). That is the honest read of
                            Hostinger&apos;s performance: genuinely fast at delivering a page, mid-pack on staying up. If you need
                            an uptime SLA you can wave at a client, this is the number to look at rather than the marketing page.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The India-specific point matters more than the benchmark, though, and almost nobody covers it.
                            Hostinger runs a Tier-3 data centre in <strong className="text-white">Mumbai</strong>, alongside
                            locations in Indonesia and Malaysia, several across Europe, three in North America and one in Brazil.
                            Your server region is chosen during setup — and most Indian buyers click straight past that screen,
                            which is how a site written for readers in Delhi and Bengaluru ends up served from Lithuania. No
                            amount of caching recovers the round trip you pay on every uncached request when the server is on
                            another continent.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            So test rather than trust. Run a TTFB check from an Indian test node against your own URL. If the
                            region is wrong, you can fix it yourself: hPanel exposes a self-transfer on the plan details page that
                            moves your hosting to a different server, and it is automatic and free. It triggers a short migration,
                            so do it before you have real traffic rather than after. Two caveats worth knowing — a VPS location is
                            fixed once the server is built (you would back up and reinstall in the new region instead), and the
                            change is not yet available on Agency plans.
                        </p>
                        <p className="text-gray-300 leading-8">
                            My boring speed formula on Hostinger has not changed: correct data centre, a lightweight theme
                            (Astra, Blocksy or GeneratePress rather than a 40 MB multipurpose theme), LSCache configured once
                            properly, WebP images, and no page builder on money pages. That combination beats expensive hosting
                            running a bloated setup, every single time. The thing that slows WordPress down is almost never the
                            host — it is a heavy theme, thirty plugins and unoptimised 4 MB images.
                        </p>
                    </section>

                    {/* Setup walkthrough */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Setting up WordPress on Hostinger (5 minutes, start to finish)</h2>
                        <ol className="space-y-4">
                            {[
                                ["Buy a plan and claim the free domain", "Premium or above on a 12+ month term includes the domain free for year one. Claim it in the post-purchase wizard — and check the renewal price, because a .com typically renews at roughly ₹1,000–1,400 a year."],
                                ["Choose the Mumbai data centre at setup", "This screen is easy to click past and expensive to get wrong. If your readers are in India, pick India. You can change it later from hPanel, but that means a migration you did not need."],
                                ["hPanel → Websites → Add website → WordPress", "Fill site title, admin email, strong password. The installer handles database creation, config and SSL automatically."],
                                ["Pick a lightweight theme", "Astra, Blocksy or GeneratePress — not a 40MB multipurpose theme. Theme choice affects speed more than any plugin tweak."],
                                ["Configure LiteSpeed Cache once", "LSCache plugin → enable page cache, browser cache, and image optimisation (WebP). This is the single biggest speed lever on Hostinger — and on Unlimited and above, leaving this plugin active is what keeps object cache working."],
                                ["Set up backup habits you control", "Hostinger backs up per your plan, but daily copies are only kept for seven days. Connect UpdraftPlus to Google Drive for your own offsite copy. Two backup systems, zero regrets."],
                            ].map(([title, body], i) => (
                                <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 font-bold flex items-center justify-center">{i + 1}</span>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                                        <p className="text-sm text-gray-300 leading-6">{body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Migration */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Free WordPress migration to Hostinger: the real timeline and what breaks</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Minutes, not days — and if you have read elsewhere that this takes 24 to 48 hours, that advice is
                            out of date, including on an earlier version of this page. Hostinger states that{" "}
                            <strong className="text-white">85% of migrations complete in under five minutes</strong> through the
                            automatic wizard, and that assisted transfers are completed within 24 hours. Migrations are free and
                            unlimited on every plan, including the ₹69/mo Single tier — you do not have to buy up to move a site
                            across.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The failure modes are boringly consistent, and they are almost all on the source side. The wizard
                            signs into your old site the same way a person does, so{" "}
                            <strong className="text-white">two-factor authentication and CAPTCHA on the source wp-admin must be
                                switched off before you submit the request</strong> — that single step accounts for most failed
                            migrations I have seen. Be aware that disabling 2FA may still not be enough if your old host
                            challenges logins from an unfamiliar IP address, since Hostinger is connecting from theirs, not yours.
                            If you are uploading an archive instead of handing over credentials, it has to contain a{" "}
                            <code className="text-primary-300">.sql</code> database file or the wizard will not let you continue.
                            And make sure the old server has enough free disk space to write a backup in the first place.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The DNS sequence is what makes downtime genuinely zero, and the order is not negotiable:
                            (1) migrate first and leave the old site running; (2) verify the copy on Hostinger&apos;s temporary
                            domain, or via a hosts-file entry on your own machine, clicking through checkout and forms rather than
                            just the homepage; (3) lower your domain&apos;s TTL to 300 seconds a day in advance so the change
                            propagates fast; (4) only then repoint the nameservers. Reverse steps three and four and you will
                            spend a day watching half your visitors hit the old server.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Finally, the things that do not come across automatically and will bite you a week later: email
                            accounts (recreate them on the new host and re-add MX records), cron jobs, any custom{" "}
                            <code className="text-primary-300">php.ini</code> directives you had set, and hard-coded old-domain
                            URLs sitting in the database — run a proper search-replace rather than a raw SQL find-and-replace, or
                            you will corrupt serialised option values. The step-by-step version of all of this lives in my{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">guide to migrating WordPress to a new host</Link>.
                        </p>
                    </section>

                    {/* AI tools */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger&apos;s AI WordPress tools in 2026: what they do and what to ignore</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Hostinger has pushed harder into AI than any other budget host, and the results are genuinely mixed
                            rather than uniformly good. The <strong className="text-white">AI Website Builder</strong> generates a
                            starting site from a prompt — useful for a first draft or a client mock-up, less useful if you intend
                            to maintain the site in WordPress afterwards, because you end up rebuilding it properly anyway. The{" "}
                            <strong className="text-white">AI Website Troubleshooter</strong> is the one I have come around on;
                            Hostinger claims it resolves 70% of issues within minutes, and for the class of problem that is
                            actually a misconfiguration rather than a bug, that is believable.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The <strong className="text-white">AI Website Optimizer</strong> is claimed to improve site
                            performance by up to 20% through code minification and automatic image optimisation — and here is the
                            practical warning: that overlaps heavily with what LSCache is already doing. Turn on both and you get
                            double-minified CSS and broken layouts. Pick one. On a WordPress site I would keep LSCache and leave
                            the Optimizer off, because LSCache is the thing wired into the server.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Two more worth knowing. <strong className="text-white">Hostinger Reach</strong> is an AI email
                            marketing tool with a free tier of 200 emails a month to 100 unique subscribers, free for the first
                            year — not enough to run a business on, but genuinely enough for a new blog to start collecting a list
                            without paying Mailchimp from day one. And for developers: the{" "}
                            <strong className="text-white">Hostinger Connector / MCP integration</strong> lets an AI agent such as
                            Claude or Cursor manage the hosting account directly — domains, DNS records and snapshots, VPS
                            operations. You authorise it through the browser via OAuth, there are no API keys to store, and you can
                            revoke access from your account settings. It is a niche feature today and almost nobody in the Indian
                            market has written about it, but if you already work in an agentic editor it removes a lot of hPanel
                            clicking.
                        </p>
                    </section>

                    {/* Comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Hostinger vs Bluehost vs GoDaddy for WordPress in India</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            The short version: Hostinger wins on price per unit of performance and on latency to Indian readers,
                            Bluehost wins on human support and its WordPress.org listing, and GoDaddy wins only if you are already
                            deep in their domain ecosystem and value one login over one good decision. I am deliberately not
                            quoting Bluehost and GoDaddy rupee prices here — their India pricing and add-on bundling change often
                            enough that any number I print will be wrong by the time you read it. Price them both on the day you
                            buy.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">India-relevant factor</th>
                                        <th className="p-4">Hostinger</th>
                                        <th className="p-4">Bluehost / GoDaddy</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {[
                                        ["Entry price", "₹69/mo (Single), ₹149/mo (Premium)", "Check current India pricing — both bundle add-ons at checkout"],
                                        ["Renewal transparency", "Published: ₹289 / ₹449 / ₹649 / ₹1,599 per month", "Verify before you buy; renewal jumps are the industry norm"],
                                        ["Server near Indian users", "Tier-3 Mumbai data centre, selectable at setup", "Confirm each host's current India presence yourself"],
                                        ["Storage type", "NVMe from Unlimited upwards", "Varies by tier — check SSD vs NVMe explicitly"],
                                        ["Published resource limits", "PHP workers, inodes and RAM documented per plan", "Rarely published in this detail"],
                                        ["WordPress.org recommended host", "Not listed", "Bluehost has long carried this listing"],
                                        ["Phone support", "No phone line — chat only", "Bluehost India offers phone support"],
                                        ["Free migration", "Free and unlimited on every plan", "Often limited in count or tier-gated"],
                                    ].map(([factor, h, other], i) => (
                                        <tr key={factor} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                                            <td className="p-4 font-medium text-white">{factor}</td>
                                            <td className="p-4">{h}</td>
                                            <td className="p-4">{other}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            One-line verdicts. Buy <strong className="text-white">Hostinger</strong> if you want the most
                            performance per rupee and your audience is in India — the Mumbai region and the published per-plan
                            limits are the two things that make it easy to plan around. Buy{" "}
                            <strong className="text-white">Bluehost</strong> if being able to phone a human, in an Indian language,
                            matters more to you than the price difference — that is a legitimate reason to pay more, and I would
                            rather say so than pretend it is not. Buy <strong className="text-white">GoDaddy</strong> only if
                            consolidating with domains you already own there is worth more than the money. The full head-to-head,
                            with the current numbers, is in my{" "}
                            <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger vs GoDaddy vs Bluehost comparison</Link>{" "}
                            — and if it is the domain rather than the hosting you are shopping for, the{" "}
                            <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">best domain registrars in India</Link>{" "}
                            roundup is the better page.
                        </p>
                    </section>

                    {/* When it is wrong */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">When Hostinger is the wrong choice — and what to move to</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Shared hosting has a shape, and some WordPress builds simply do not fit it. Nearly all of them fail for
                            the same underlying reason: <strong className="text-white">logged-in users bypass page cache</strong>,
                            so every request executes PHP and consumes a worker. Name the site types plainly:
                        </p>
                        <div className="space-y-4 mb-6">
                            {[
                                ["Membership and LMS sites", "LearnDash, MemberPress, TutorLMS. Every logged-in student is an uncached request, and course pages are heavy. Twenty concurrent learners on Premium's 40 workers is not a comfortable place to be."],
                                ["Multilingual builds (WPML and friends)", "Translation layers multiply database queries and post rows. Add a store on top and you are querying far more than the plan was priced for."],
                                ["Elementor-heavy sites", "The editor itself holds a PHP worker open for the whole editing session, and a page built from forty widgets is doing real work on every uncached load. Fine for a brochure site, painful on a busy one."],
                                ["Booking and appointment systems", "Availability checks are live database reads that cannot be cached, by definition. This is the same problem as a checkout page, all day long."],
                                ["Stores with steady daily orders", "Cart, checkout and My Account are all uncached. Once orders are constant rather than occasional, you are buying PHP workers, not disk space."],
                            ].map(([title, body]) => (
                                <div key={title} className="rounded-2xl border border-yellow-500/30 bg-yellow-500/[0.05] p-5">
                                    <h3 className="font-semibold text-white mb-1">⚠️ {title}</h3>
                                    <p className="text-sm text-gray-300 leading-6">{body}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            The upgrade ladder, with real prices rather than hand-waving: Unlimited at ₹249/mo (60 workers, 2
                            cores) → Cloud Startup at ₹599/mo (100 workers, 4 cores, 100 GB NVMe, a 1,800-second MySQL query
                            limit) → KVM 2 at ₹799/mo (2 vCPU, 8 GB RAM, 100 GB NVMe) or KVM 4 at ₹1,099/mo (4 vCPU, 16 GB RAM,
                            200 GB NVMe) on AMD EPYC hardware. All of it lives in the same hPanel account, so moving up is an
                            upgrade rather than a re-migration. If you are weighing the shared-to-cloud step specifically, the{" "}
                            <Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 underline underline-offset-4 hover:text-primary-300">Hostinger cloud hosting in India</Link>{" "}
                            guide goes deeper on where that money actually goes.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The other honest limitations, stated once and not buried: renewal pricing roughly triples when your
                            term ends, which is why the 48-month buy is rational rather than greedy. Support is 24/7 chat with an
                            AI layer in front of it and no phone number, so deep technical problems sometimes need a second
                            escalation — fine for a developer, occasionally frustrating for a beginner. Uptime measured 99.932% in
                            EXPERTE&apos;s six-week test, which is decent rather than exceptional. And daily backups are retained
                            for only seven days, which is a genuine gap if nobody is watching the site closely.
                        </p>
                        <p className="text-gray-300 leading-8">
                            On the way out: there is a 30-day money-back guarantee, and it is worth reading the refund terms
                            around the free domain specifically before you claim one, because that is the detail people get caught
                            by. Beyond that, committing to four years is less of a trap than it looks — WordPress is portable, a
                            full site copy is a plugin away, and every host on earth will migrate you in for free. You are buying
                            four years of a price, not four years of a prison.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="mb-12">
                        <div className="rounded-3xl border border-primary-500/40 bg-gradient-to-br from-primary-900/40 to-indigo-900/30 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-3">Start your WordPress site today</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Premium from ~₹119.20/mo with the discount stacked — free domain, SSL, LiteSpeed, managed
                                WordPress and free migration. 18% GST is added at checkout, and there is a 30-day money-back
                                guarantee, so trying it is genuinely low-risk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href={CART_PREMIUM_48}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                                >
                                    Get Premium for WordPress →
                                </a>
                                <a
                                    href={CART_UNLIMITED_48}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    className="inline-block bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold px-8 py-4 rounded-xl transition-all"
                                >
                                    Get Unlimited for a Store →
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger + WordPress</h2>
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

                    {/* Sources */}
                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                        <h2 className="text-lg font-bold text-white mb-2">Where these numbers come from</h2>
                        <p className="text-sm text-gray-400 leading-7">
                            Plan prices, mailbox counts, migration claims, the AI-tool figures and llms.txt generation are from
                            Hostinger&apos;s own India WordPress hosting page, checked 7 September 2026. PHP workers, inodes, RAM,
                            CPU cores, database counts and MySQL query limits are from Hostinger&apos;s published
                            parameters-and-limits documentation. Backup retention and data-centre locations are from
                            Hostinger&apos;s support articles. The TTFB, LCP and uptime figures are EXPERTE&apos;s six-week test of
                            14 WordPress hosts. Where I could not verify a number, I have left it out rather than round it up.
                        </p>
                    </section>

                    {/* Related */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">Keep reading (hosting series)</h2>
                        <ul className="space-y-3 text-primary-400">
                            <li><Link href="/blog/hostinger-review-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Review 2026 — the full verdict after a year of client sites</Link></li>
                            <li><Link href="/blog/hostinger-plans-pricing-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Plans &amp; Pricing in India 2026 — which plan to buy</Link></li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger Renewal Price in India — the real cost after year one</Link></li>
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS Plans in India — when shared hosting is not enough</Link></li>
                            <li><Link href="/blog/cheap-web-hosting-under-200-india" className="hover:text-primary-300 underline underline-offset-4">Cheap Web Hosting Under ₹200/Month in India — what&apos;s actually good</Link></li>
                            <li><Link href="/blog/how-to-get-hostinger-90-off-2026" className="hover:text-primary-300 underline underline-offset-4">How to Get 90% OFF on Hostinger — discount-stacking walkthrough</Link></li>
                        </ul>
                    </section>
                    {/* Cluster links — added so these articles are not internal-link orphans. */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Migrating WordPress to a new host</Link> — moving your site across safely.</li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost</Link> — the full three-way comparison for India.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hosting cost calculator</Link> — four-year totals including renewal.</li>
                            <li><Link href="/blog/hostinger-55-per-month-offer" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger at ₹55/mo</Link> — the current offer across every plan.</li>
                        </ul>
                    </section>


                    <div className="glass rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4">Share This Guide</h3>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
