import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";

const CANONICAL = "https://mohitkoli.in/blog/gemini-3-1-chhupe-features-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/chatgpt-hidden-features-hacks.png";
const PUBLISHED = "2026-10-04T00:00:00.000Z";
const VERIFIED = "4 October 2026";

const TITLE = "Gemini 3.1 Pro Ke 7 Chhupe Feature: Thinking Max Aur Vision";
const DESCRIPTION =
    "Gemini 3.1 Pro me Canvas, Gems, Agentic Vision aur thinking_level max — wo feature jo 90% log kholte hi nahi. Copy-paste prompts ke saath, Oct 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    // Keyword tiers. Meta keywords do not rank on their own — this exists so the page has
    // one explicit PRIMARY term, which the title, H1 and intro are then written around.
    keywords: [
        // PRIMARY
        "gemini 3.1 pro features",

        // SECONDARY — H2s and body
        "gemini hidden features", "gemini 3.1 kya hai", "gemini gems kya hai", "agentic vision gemini",
        "gemini thinking level", "gemini chhupe features", "google gemini hacks hindi",

        // LONG-TAIL — FAQ and specific sections
        "gemini tips and tricks 2026", "gemini canvas kaise use kare", "gemini 3.1 pro vs chatgpt",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: PUBLISHED,
        modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Gemini 3.1 Pro ke chhupe features 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gemini 3.1 Ke 7 Chhupe Feature",
        description: "Canvas, Gems, Agentic Vision aur thinking_level max — jo 90% log use hi nahi karte.",
        images: [IMAGE],
    },
};

/**
 * Har fact 4 October 2026 ko Gemini 3.1 Pro ki public coverage se check kiya gaya.
 * Jaan-boojh kar nahi likha: koi benchmark score jo maine khud verify na kiya ho,
 * aur koi aisa feature jo sirf announcement me ho, shipped na ho.
 */
const FEATURES = [
    {
        n: 1,
        name: "Agentic Vision",
        what: "Image ko sirf 'dekhta' nahi — uspar kaam karta hai. Visual reasoning ke saath code execution jodta hai, isliye crop, zoom, annotate aur complex visual samajhna sab ek hi step me ho jaata hai.",
        use: "Screenshot daal kar poochiye: ye dashboard kya keh raha hai, aur jo sabse bada problem area hai usko annotate karke dikhaiye.",
        who: "Designers, analysts, jinke paas screenshots aur charts aate rehte hain",
    },
    {
        n: 2,
        name: "Canvas",
        what: "Alag shared workspace jahan brainstorming aur project planning hoti hai — chat ki tarah scroll hokar gayab nahi hoti. Google khud isko underutilized feature batata hai.",
        use: "Lambe kaam (content plan, project scope) chat me mat kijiye. Canvas kholiye — wahan dobara aakar edit kar sakte hain.",
        who: "Jo planning aur drafts par kaam karte hain",
    },
    {
        n: 3,
        name: "Gems",
        what: "Google Docs ke saath judta hai aur ek real-time knowledge base banata hai. Matlab aapke apne documents Gemini ka source ban jaate hain.",
        use: "Apni service list ya pricing doc ko Gem bana dijiye. Phir har client reply me wahi sach use hoga, har baar paste nahi karna padega.",
        who: "Freelancers, support teams, jinke paas fix information baar-baar chahiye",
    },
    {
        n: 4,
        name: "Files in this chat",
        what: "Ek hi chat me daali hui saari files ek jagah dikh jaati hain — poora chat scroll karne ki zaroorat nahi.",
        use: "Lambi chat me file dhoondhne me jo 2 minute jaate hain, wo bach jaate hain. Chhota feature hai, par roz kaam aata hai.",
        who: "Sabke liye",
    },
    {
        n: 5,
        name: "Animated SVG aur interactive dashboard",
        what: "Gemini 3.1 Pro poora output code ke roop me de sakta hai — animated SVG aur interactive dashboards. Ye video se bahut chhote hote hain aur zoom karne par quality nahi girti.",
        use: "Presentation ke liye chart maangiye, par SVG me. Blog ya site par daalne ke liye ye image se behtar padta hai.",
        who: "Developers, content banane wale",
    },
    {
        n: 6,
        name: "65,536 token ka output",
        what: "Output limit badhkar 65,536 token ho gayi hai. Pehle bada code refactor ya lamba content beech me kat jaata tha — wo problem khatam.",
        use: "Poori file ek saath refactor karwaiye. Pehle ise tukdon me todna padta tha.",
        who: "Developers",
    },
    {
        n: 7,
        name: "thinking_level — API wala asli switch",
        what: "API me naya parameter hai: low, medium (3.1 me naya), high aur max. Gemini 3.1 Pro default high par chalta hai, aur isme 'minimal' support hi nahi karta.",
        use: "Mushkil reasoning par max, aur simple classification par low — cost aur speed dono sambhal jaate hain.",
        who: "Sirf developers — ye app me nahi, API me milta hai",
    },
];

const FAQ = [
    {
        q: "Gemini 3.1 Pro kab aaya?",
        a: "19 February 2026 ko. Tab se ismein kaafi kuch juda hai jo zyadatar log abhi tak nahi jaante — Agentic Vision, badi output limit, aur API me naya thinking_level parameter.",
    },
    {
        q: "Agentic Vision normal image upload se kaise alag hai?",
        a: "Normal image upload me model bas dekh kar bata deta hai ki kya hai. Agentic Vision visual reasoning ke saath code execution jodta hai, isliye wo crop kar sakta hai, zoom kar sakta hai, annotate kar sakta hai aur complex visual ko step-by-step samajh sakta hai. Farak ye hai ki ek dekhta hai, doosra kaam karta hai.",
    },
    {
        q: "thinking_level app me kahan milega?",
        a: "App me nahi milega. Ye API ka parameter hai, matlab developers ke liye hai. Agar aap Gemini app use karte hain to ye switch aapko nahi dikhega — Gemini 3.1 Pro waise bhi default high par chalta hai, jo zyadatar kaam ke liye theek hai.",
    },
    {
        q: "Canvas aur Gems me kya fark hai?",
        a: "Canvas ek shared workspace hai — wahan aap likhte, plan karte aur edit karte hain. Gems Google Docs se judkar ek knowledge base banata hai — wahan aapke apne documents Gemini ka source ban jaate hain. Seedhe shabdon me: Canvas me aap kaam karte hain, Gems me Gemini aapka data padhta hai.",
    },
    {
        q: "Gemini 3.1 Pro ChatGPT se behtar hai?",
        a: "Ye kaam par depend karta hai, aur dono har kuch mahine me aage-peeche hote rehte hain. Isliye kisi ek ko hamesha ke liye 'behtar' kehna theek nahi. Jo kaam aap roz karte hain, usi ke 3-4 prompt dono par chala kar khud dekh lijiye — yahi sabse bharosemand tareeka hai.",
    },
    {
        q: "Animated SVG ka faayda kya hai?",
        a: "Video file bhaari hoti hai aur zoom karne par phat jaati hai. SVG code hota hai, isliye file chhoti rehti hai aur kisi bhi size par saaf dikhti hai. Website par daalne ke liye isse behtar kuch nahi — page bhi tez rehta hai.",
    },
    {
        q: "Gemini se bani app ko host kaise karein?",
        a: "Gemini code de deta hai, par chalane ke liye server chahiye. Simple site ya static page shared hosting par chal jaata hai. Node.js app, background job ya database chahiye to VPS lena padta hai — wahan root access milta hai aur aap jo chahein install kar sakte hain.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESCRIPTION,
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { "@id": "https://mohitkoli.in/#person" },
        publisher: { "@id": "https://mohitkoli.in/#person" },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        articleSection: "AI Tools",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Gemini 3.1 Chhupe Features", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function Gemini31HiddenFeatures() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Gemini 3.1 Chhupe Features</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            AI Tools · {VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            Gemini 3.1 Ke 7 Chhupe Feature — Jo 90% Log Kabhi Kholte Hi Nahi
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Gemini 3.1 Pro 19 February 2026 ko aaya tha. Zyadatar log ise ek chat box ki tarah use
                            karte hain — sawaal poochte hain, jawab lete hain, band kar dete hain. Par iske andar kuch cheezein aisi hain jo
                            aapka kaam aadha kar sakti hain, aur Google ne khud maana hai ki log unhe use hi nahi
                            karte. Neeche saat hain, har ek ke saath ye ki use kab kholna hai.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Jaldi me hain? Ye teen kholiye</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Gems</strong> — apne documents ko Gemini ka source bana dijiye. Baar-baar wahi cheez paste karna band.</li>
                            <li><strong className="text-white">Canvas</strong> — lamba kaam chat me mat kijiye, wahan wo gum ho jaata hai.</li>
                            <li><strong className="text-white">Agentic Vision</strong> — screenshot dijiye, kaam karwaiye, sirf &ldquo;ye kya hai&rdquo; mat poochiye.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Saat chhupe feature</h2>
                        <div className="space-y-5">
                            {FEATURES.map((f) => (
                                <div key={f.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        <span className="text-primary-400 mr-2">{f.n}.</span>{f.name}
                                    </h3>
                                    <p className="text-gray-300 leading-8 mb-4">{f.what}</p>
                                    <div className="rounded-xl border border-primary-500/25 bg-primary-500/5 p-4 mb-3">
                                        <p className="text-xs font-bold uppercase tracking-wide text-primary-300 mb-2">Aise use kijiye</p>
                                        <p className="text-sm text-gray-300 leading-7">{f.use}</p>
                                    </div>
                                    <p className="text-sm text-gray-400"><strong className="text-gray-200">Kiske liye:</strong> {f.who}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Ek baat seedhi</h2>
                        <p className="text-gray-300 leading-8">
                            Feature list padhna aasan hai, aadat badalna mushkil. Ek saath saat cheezein mat shuru
                            kijiye — ek hafta sirf <strong className="text-white">Gems</strong> par lagaiye. Jo
                            information aap har hafte paste karte hain, usko ek Gem bana dijiye. Agar wo ek cheez
                            chipak gayi, to baaki apne aap aa jaayengi. Aur agar nahi chipki, to baaki six kholne ka
                            koi matlab hi nahi tha.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Gemini se code mil gaya — ab host kahan karein?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Ye wo sawaal hai jo har banda poochta hai aur koi feature list jawab nahi deti. Gemini
                            poora code likh deta hai, par wo code kisi server par chalna chahiye. Seedha hisaab:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Aapne banaya</th><th className="p-4">Kya chahiye</th><th className="p-4">Kahan padhein</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5">
                                        <td className="p-4">Static site, portfolio, landing page</td>
                                        <td className="p-4">Shared hosting</td>
                                        <td className="p-4"><Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Plans aur price</Link></td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4">Node.js app, API, background job</td>
                                        <td className="p-4">VPS (root access)</td>
                                        <td className="p-4"><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">KVM VPS plans</Link></td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4">AI workflow, automation</td>
                                        <td className="p-4">VPS + n8n</td>
                                        <td className="p-4"><Link href="/blog/hostinger-n8n-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">n8n self-hosting</Link></td>
                                    </tr>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4">Code likhna hi nahi hai</td>
                                        <td className="p-4">AI website builder</td>
                                        <td className="p-4"><Link href="/blog/hostinger-ai-builder-se-website-kaise-banaye" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">AI Builder ka sach</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Gemini 3.1 Pro</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <summary className="cursor-pointer font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <RelatedPosts slug="gemini-3-1-chhupe-features-2026" />

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                </article>
            </main>
        </>
    );
}
