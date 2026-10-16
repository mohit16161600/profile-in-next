import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://mohitkoli.in/services/app-deployment";

export const metadata: Metadata = {
    title: "App Deployment Service: Play Store & App Store, Fast",
    description:
        "Get your Android and iOS app published without the back-and-forth. Store listing, signing, builds, review forms and rejection fixes handled end to end from India.",
    keywords: [
        // PRIMARY
        "app deployment service",
        // SECONDARY
        "publish app on play store",
        "publish app on app store",
        "app store submission service india",
        // LONG-TAIL
        "how to publish android app on play store in india",
        "google play 14 day testing requirement",
        "app rejected by apple what to do",
        // SUPPORTING
        "play console setup",
        "app store connect setup",
        "aab signing keystore",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "App Deployment Service: Play Store & App Store, Fast",
        description:
            "Android and iOS publishing handled end to end — builds, signing, store listing, privacy forms, and the rejection fixes that cost most teams a week.",
        url: CANONICAL,
        type: "website",
        images: [{ url: "/assets/og-default.png", width: 1200, height: 630, alt: "App deployment service by Mohit Koli" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "App Deployment Service: Play Store & App Store, Fast",
        description: "Your app, live on both stores, without learning two consoles first.",
        images: ["/assets/og-default.png"],
    },
};

const INCLUDED = [
    {
        title: "Store account setup",
        body: "Google Play Console and Apple Developer account created and configured correctly the first time — the wrong account type here is what forces a restart later.",
    },
    {
        title: "Signed release builds",
        body: "Android App Bundle with a keystore you own and I hand over, and a signed iOS archive uploaded through App Store Connect.",
    },
    {
        title: "Store listing written",
        body: "Title, short and full description, keywords, category and content rating — written to be found in store search, not just to fill the boxes.",
    },
    {
        title: "Screenshots and graphics",
        body: "Every required size for both stores, plus the Play feature graphic and app icons. Wrong dimensions are the most common automatic rejection.",
    },
    {
        title: "Privacy and data forms",
        body: "Play Data Safety and Apple App Privacy filled to match what your app actually does, with a privacy policy URL in place. Both stores block submission without these.",
    },
    {
        title: "Rejection handling",
        body: "If a reviewer pushes back, I read the actual policy they cited, fix it, and resubmit. You do not spend a week decoding a rejection email.",
    },
];

const TIMELINE = [
    ["Day 1", "Accounts, keystore, bundle ID, builds produced and uploaded"],
    ["Day 2", "Listing copy, screenshots, graphics, privacy and data forms completed"],
    ["Day 2–3", "Submitted to Apple review and to Google Play review"],
    ["Day 3–4", "Apple decision — most submissions are reviewed within 24 to 48 hours"],
    ["Day 3–5", "Google Play decision on an existing or organisation account"],
];

const NEEDED = [
    "Your app source or a build that already compiles",
    "App name, and the bundle ID / package name if one is already decided",
    "Logo in a high resolution square, and your brand colours",
    "A short description of what the app does and who it is for",
    "Any login credentials a reviewer needs to test the app",
    "A privacy policy — I can write one if you do not have it",
];

const REJECTIONS = [
    {
        q: "Incomplete or wrong privacy declarations",
        a: "Apple and Google both compare your declared data collection against what the app actually does. A mismatch is rejected, and the fix has to go through review again.",
    },
    {
        q: "Missing demo account for reviewers",
        a: "If the app opens on a login screen and no test credentials are supplied, the reviewer cannot get in and rejects it as non-functional.",
    },
    {
        q: "Screenshots that do not match the app",
        a: "Marketing mockups with text overlays and device frames get flagged. Screenshots have to show the real interface at the exact required sizes.",
    },
    {
        q: "Crashes on the reviewer's device",
        a: "Reviewers test on current OS versions. A build that only works on your phone fails here, which is why testing goes before submission, not after.",
    },
];

const FAQ = [
    {
        q: "How fast can my app go live?",
        a: "Preparation takes one to two days. After that it is review time, which is not in anyone's control: Apple reviews most submissions within 24 to 48 hours, and Google Play usually decides in a few days. So an app with an existing developer account is commonly live within three to five days of starting.",
    },
    {
        q: "Is there any case where it takes longer?",
        a: "Yes, one. A Google Play personal developer account created after 13 November 2023 must run a closed test with at least 12 testers opted in for 14 continuous days before it can apply for production access. That is a Google policy and no service can shorten it. Organisation accounts are not subject to it, and the App Store has no equivalent rule — so your iOS app can still be live in days while Android runs its test window.",
    },
    {
        q: "Who owns the developer account and the signing key?",
        a: "You do. The accounts are registered in your name or your company's, and the Android keystore is handed over to you. If you lose the keystore you cannot update your own app ever again, so this is not something to leave with a contractor.",
    },
    {
        q: "What does it cost to publish, apart from the work?",
        a: "Google Play charges a one-time 25 USD registration fee. The Apple Developer Program is 99 USD per year and has to stay active for your app to remain on the App Store. Both are paid by you, directly to the store, from your own account.",
    },
    {
        q: "What if the app gets rejected?",
        a: "Rejections are normal and usually procedural rather than fatal. I read the specific guideline the reviewer cited, correct it, and resubmit. Most rejections I see come down to privacy declarations, missing reviewer credentials, or screenshot sizes — all fixable in hours.",
    },
    {
        q: "Can you publish an app someone else built?",
        a: "Yes. I do not need to have written the app. I need a build that compiles and runs, and access to whatever it depends on.",
    },
];

export default function AppDeploymentPage() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${CANONICAL}#service`,
                name: "App deployment to Google Play and the Apple App Store",
                serviceType: "Mobile app deployment and store publishing",
                description:
                    "End-to-end publishing of Android and iOS apps: developer account setup, signed release builds, store listing, screenshots, privacy and data safety forms, submission and rejection handling.",
                areaServed: "IN",
                provider: { "@id": "https://mohitkoli.in/#person" },
                url: CANONICAL,
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "What the service includes",
                    itemListElement: INCLUDED.map((item) => ({
                        "@type": "Offer",
                        itemOffered: { "@type": "Service", name: item.title, description: item.body },
                    })),
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${CANONICAL}#faq`,
                mainEntity: FAQ.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in" },
                    { "@type": "ListItem", position: 2, name: "Services", item: "https://mohitkoli.in/services" },
                    { "@type": "ListItem", position: 3, name: "App Deployment", item: CANONICAL },
                ],
            },
        ],
    };

    return (
        <main className="pt-28 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services" className="hover:text-white">Services</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-300">App Deployment</span>
                </nav>

                <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">App Deployment · Android &amp; iOS</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Your app on both stores, in days — not weeks
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Most app launches do not stall on code. They stall on two consoles nobody wants to learn, a signing
                    key that has to be right the first time, and a rejection email written in policy numbers. I handle
                    all of it — Google Play and the Apple App Store, from an empty developer account to a live listing.
                </p>
                <p className="mt-4 text-gray-400 leading-8">
                    Preparation takes a day or two. After that it is review time, and review time is honest: Apple
                    decides on most submissions within 24 to 48 hours. There is one case that genuinely takes longer,
                    and it is named plainly further down this page rather than discovered by you in week three.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-500"
                    >
                        Start your deployment
                    </Link>
                    <a
                        href="mailto:contact@mohitkoli.in?subject=App%20deployment"
                        className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-white/40 hover:text-white"
                    >
                        contact@mohitkoli.in
                    </a>
                </div>

                <h2 className="mt-16 text-3xl font-bold text-white">What the service includes</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {INCLUDED.map((item) => (
                        <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-gray-400 leading-7">{item.body}</p>
                        </article>
                    ))}
                </div>

                <h2 className="mt-16 text-3xl font-bold text-white">How the days actually go</h2>
                <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/[0.04] text-gray-300">
                            <tr>
                                <th className="p-4 font-semibold w-32">When</th>
                                <th className="p-4 font-semibold">What happens</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-400">
                            {TIMELINE.map(([when, what]) => (
                                <tr key={when} className="border-t border-white/5">
                                    <td className="p-4 font-medium text-white whitespace-nowrap">{when}</td>
                                    <td className="p-4">{what}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-sm text-gray-400 leading-7">
                    This holds for an existing or organisation developer account. A brand-new personal Google Play
                    account carries a 14-day closed-testing requirement — explained in the questions below, because you
                    should know it before you start, not after.
                </p>

                <h2 className="mt-16 text-3xl font-bold text-white">What I need from you</h2>
                <ul className="mt-8 space-y-3">
                    {NEEDED.map((item) => (
                        <li key={item} className="flex gap-3 text-gray-300 leading-8">
                            <span className="text-primary-400 shrink-0">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="mt-16 text-3xl font-bold text-white">The four rejections I see most</h2>
                <p className="mt-4 text-gray-400 leading-8">
                    Every one of these costs a resubmission and another review cycle. All four are prevented before
                    submission rather than discovered after it.
                </p>
                <div className="mt-8 space-y-4">
                    {REJECTIONS.map((item) => (
                        <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                            <p className="mt-2 text-gray-400 leading-7">{item.a}</p>
                        </div>
                    ))}
                </div>

                <section className="mt-16" aria-label="Frequently asked questions">
                    <h2 className="text-3xl font-bold text-white">Frequently asked questions</h2>
                    <div className="mt-8 space-y-4">
                        {FAQ.map((item) => (
                            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-xl text-white">{item.q}</h3>
                                <p className="mt-2 text-gray-300 leading-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-16 rounded-2xl border border-primary-500/30 bg-black/20 p-8">
                    <h2 className="text-2xl font-bold text-white">Ready to publish?</h2>
                    <p className="mt-4 text-gray-300 leading-8">
                        Send me what you have — a build, a repository, or just the app and what it does. I will tell you
                        which account type you need, what the realistic date is for your situation, and what it costs
                        before any work starts.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-500"
                        >
                            Get in touch
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-xl border border-primary-500/30 px-5 py-3 text-sm font-semibold text-primary-400 hover:border-primary-500 hover:text-white"
                        >
                            All services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
