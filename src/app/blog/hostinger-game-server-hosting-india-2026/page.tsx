import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import HostingerCta from "@/components/HostingerCta";
import RelatedPosts from "@/components/RelatedPosts";
import {
    GAME_PLANS,
    OFFERS_VERIFIED,
    OFFERS_VERIFIED_ISO,
    REF,
    inr,
    offWithCode,
    priceWithCode,
} from "@/data/hostinger-offers";

const CANONICAL = "https://mohitkoli.in/blog/hostinger-game-server-hosting-india-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/best-vps-hosting-india-2026.png";
const TITLE = "Minecraft Server Sirf ₹519/mo: Game Panel Ka Poora Hisaab";
const DESCRIPTION =
    "Game Panel 1 ₹519.20/mo, Panel 4 par 66% off + extra 20%. Kitne players jhelega, renewal par bill kitna, aur kaunsa plan lena bekaar hai — Sept 2026 verified.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        "hostinger game server hosting",
        "minecraft server hosting india",
        "minecraft server hosting price india",
        "hostinger game panel price",
        "sasta minecraft server india",
        "minecraft server kaise banaye",
        "game server hosting india 2026",
        "hostinger minecraft vps",
        "game panel 2 price",
        "minecraft hosting kitne ka hai",
        "india me game server hosting",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        type: "article",
        publishedTime: OFFERS_VERIFIED_ISO,
        modifiedTime: OFFERS_VERIFIED_ISO,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Hostinger Game Panel plans aur Minecraft server ka price India me" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Minecraft Server Sirf ₹519/mo: Game Panel Ka Hisaab",
        description: "Game Panel 1 se 8 tak — price, RAM, renewal aur kaunsa plan kitne players jhelega.",
        images: [IMAGE],
    },
};

/** Hinglish copy per plan; har number src/data/hostinger-offers.ts se aata hai. */
const PLAN_COPY: Record<string, { badge: string; best: string; take: string; highlight: boolean }> = {
    "Game Panel 1": {
        badge: "",
        best: "Dost-yaar ka chhota Minecraft world, 5-10 players",
        take: "Vanilla Minecraft ke liye theek hai. Mods daale to 4 GB RAM turant kam pad jaati hai.",
        highlight: false,
    },
    "Game Panel 2": {
        badge: "SABSE POPULAR",
        best: "Modded Minecraft, 15-25 players, ya do chhote servers",
        take: "Hostinger khud isko sabse popular batata hai, aur wajah hai — 8 GB RAM par modpack chalta hai.",
        highlight: true,
    },
    "Game Panel 4": {
        badge: "SABSE BADA DISCOUNT",
        best: "Bade modpacks, community server, ek box par kai games",
        take: "Poori range ka sabse gehra discount (66%). 16 GB RAM matlab world generate hote waqt bhi lag nahi.",
        highlight: false,
    },
    "Game Panel 8": {
        badge: "HEAVY LOAD",
        best: "Public server, 50+ players, heavy plugins",
        take: "Tabhi lein jab pakka pata ho zaroorat hai — renewal ₹4,399/mo hai.",
        highlight: false,
    },
};

const PLANS = GAME_PLANS.map((p) => ({ ...PLAN_COPY[p.name], ...p, code: priceWithCode(p), codeOff: offWithCode(p) }));

const FAQ = [
    {
        q: "Hostinger par Minecraft server ka price kitna hai India me?",
        a: "Game Panel 1 ₹649/mo, Game Panel 2 ₹849/mo, Game Panel 4 ₹1,199/mo aur Game Panel 8 ₹2,399/mo hai. Ye 24-month term ka rate hai aur sirf pehli kharid par milta hai. Referral code lagane par yahi ₹519.20, ₹679.20, ₹959.20 aur ₹1,919.20 ho jaate hain. Prices 20 September 2026 ko Hostinger ke India game server page se check kiye gaye, aur GST alag lagta hai.",
    },
    {
        q: "Kaunsa Game Panel plan kitne players jhel lega?",
        a: "Hostinger official player count nahi batata, isliye RAM se chalna sahi hai. 4 GB (Panel 1) vanilla Minecraft ke chhote group ke liye, 8 GB (Panel 2) modded setup ya medium group ke liye, 16 GB (Panel 4) bade modpack aur community server ke liye. Apne game aur modpack ki official RAM requirement pehle padh lein — wahi asli jawab hai.",
    },
    {
        q: "Game Panel aur normal KVM VPS me kya fark hai?",
        a: "Hardware bilkul same hai — dono AMD EPYC aur NVMe SSD par chalte hain, aur specs bhi milte-julte hain. Fark control panel ka hai: Game Panel plans game server ke liye pehle se configure aate hain, jabki KVM VPS khali server deta hai jahan aap sab khud install karte hain. Agar aapko Linux command line aati hai to KVM VPS sasta padega.",
    },
    {
        q: "Renewal par kitna dena padega?",
        a: "Panel 1 ₹649 se ₹999/mo, Panel 2 ₹849 se ₹1,199, Panel 4 ₹1,199 se ₹2,399 aur Panel 8 ₹2,399 se ₹4,399 ho jaata hai. Panel 4 ka bill doguna ho jaata hai. Renewal par koi coupon ya referral discount nahi chalta — isliye signup ke waqt term length headline price se zyada matter karti hai.",
    },
    {
        q: "Kya Minecraft ke alawa aur games chal sakte hain?",
        a: "Haan. Hostinger apne support article me supported game servers ki poori list deta hai, aur Minecraft unme sabse upar hai. Kyunki andar ek full VPS hai, technically aap koi bhi Linux game server install kar sakte hain — par official list se bahar wale games ke liye support aapko khud sambhalna padega.",
    },
    {
        q: "Payment India se kaise karein?",
        a: "Hostinger India page par UPI, RuPay, Visa, Mastercard aur PayPal saare listed hain. UPI hone ki wajah se international card ke bina bhi payment ho jaata hai — ye Indian gamers ke liye sabse badi suvidha hai kyunki zyadatar foreign game hosts sirf card lete hain.",
    },
    {
        q: "24 mahine ka pura paisa ek saath dena padta hai?",
        a: "Haan. ₹649/mo wala rate 24-month term ka hai, aur poora ₹15,576 upfront jaata hai (GST alag). Chhote term par per-month rate zyada hota hai. Ye seedha bol dena zaroori hai kyunki ad me ₹649/mo dikhta hai, par card se ek saath poora amount katega.",
    },
    {
        q: "Paise wapas mil sakte hain?",
        a: "Hostinger 30-day money-back guarantee deta hai. Matlab pehle mahine me server test karke dekh sakte hain ki aapka modpack theek chalta hai ya nahi. Domain jaise kuch items refund se bahar hote hain — kharidne se pehle current refund policy ek baar padh lein.",
    },
    {
        q: "Kya server India me host hota hai?",
        a: "Hostinger ke VPS region North America, Europe, Asia aur South America hain. Iska matlab Asia region chun sakte hain, par 20 September 2026 tak Hostinger apne page par India-specific data centre ka dawa nahi karta. Ping matter karti hai to purchase ke baad 30-day window me test kar lein.",
    },
    {
        q: "Referral code se kitna sasta padta hai?",
        a: "Sale price par extra 20% milta hai. Game Panel 4 ka example: ₹3,499 ka regular rate, ₹1,199 sale me, aur code lagane par ₹959.20 — yaani regular se 73% kam. Ye sirf nayi kharid par lagta hai, renewal par nahi.",
    },
];

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESCRIPTION,
        image: IMAGE,
        datePublished: OFFERS_VERIFIED_ISO,
        dateModified: OFFERS_VERIFIED_ISO,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        articleSection: "Hosting",
        inLanguage: "hi-Latn",
    },
    {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Hostinger Game Panel Server Hosting (India)",
        description: "Hostinger ke game server plans — Minecraft aur doosre game servers ke liye pehle se configured VPS.",
        brand: { "@type": "Brand", name: "Hostinger" },
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: GAME_PLANS[0].sale,
            highPrice: GAME_PLANS[GAME_PLANS.length - 1].sale,
            offerCount: GAME_PLANS.length,
            offers: GAME_PLANS.map((p) => ({
                "@type": "Offer",
                name: p.name,
                price: p.sale,
                priceCurrency: "INR",
                url: REF.gameServer,
                availability: "https://schema.org/InStock",
            })),
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Hostinger Game Server", item: CANONICAL },
        ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function HostingerGameServer() {
    const cheapest = PLANS[0];
    const bestValue = PLANS[2];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Hostinger Game Server</li>
                        </ol>
                    </nav>

                    <header className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                            Game Server · India · {OFFERS_VERIFIED} ko verified
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                            Minecraft Server Sirf ₹519/mo: Hostinger Game Panel Ka Poora Hisaab
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Dost bolte hain “server bana le yaar”, aur phir pata chalta hai ki foreign hosts
                            sirf card lete hain, prices dollar me hain, aur renewal par bill doguna. Yahan Hostinger ke
                            chaaron Game Panel plans ka seedha hisaab hai — asli price, asli renewal, aur kaunsa plan
                            aapke modpack ke liye kaafi hai.
                        </p>
                    </header>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">30 second ka jawab</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Sabse sasta shuruaat:</strong> {cheapest.name} — {inr(cheapest.sale)}/mo, code ke saath <strong className="text-white">{cheapest.code}/mo</strong> ({cheapest.codeOff}% off regular {inr(cheapest.regular)} se).</li>
                            <li><strong className="text-white">Zyadatar logon ke liye:</strong> Game Panel 2 — 8 GB RAM, modded Minecraft aaram se chalta hai.</li>
                            <li><strong className="text-white">Sabse bada discount:</strong> {bestValue.name} par {bestValue.off}% off, code ke baad {bestValue.code}/mo.</li>
                            <li><strong className="text-amber-300">Catch:</strong> renewal par rate lagbhag dogune ho jaate hain, aur poora 24-month amount upfront dena padta hai.</li>
                            <li><strong className="text-white">India plus point:</strong> UPI aur RuPay dono chalte hain — international card ki zaroorat nahi.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Saare Game Panel plans — price aur specs</h2>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {PLANS.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-6 ${p.highlight ? "border-primary-500/50 bg-primary-500/5" : "border-white/10 bg-white/5"}`}
                                >
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h3 className="text-xl font-bold text-white">{p.name}</h3>
                                        {p.badge && (
                                            <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-bold text-primary-300">{p.badge}</span>
                                        )}
                                    </div>
                                    <p className="mb-1">
                                        <span className="text-3xl font-bold text-white">{inr(p.sale)}</span>
                                        <span className="text-gray-400">/mo</span>{" "}
                                        <span className="text-gray-500 line-through">{inr(p.regular)}</span>{" "}
                                        <span className="text-primary-300 font-semibold">{p.off}% off</span>
                                    </p>
                                    <p className="text-sm text-primary-300 font-semibold mb-4">
                                        Code ke saath {p.code}/mo — regular se {p.codeOff}% kam
                                    </p>
                                    <ul className="space-y-1 text-sm text-gray-300 mb-4">
                                        <li>{p.vcpu} vCPU core{p.vcpu > 1 ? "s" : ""}</li>
                                        <li>{p.ramGb} GB RAM</li>
                                        <li>{p.diskGb} GB NVMe</li>
                                        <li>{p.bandwidthTb} TB bandwidth</li>
                                    </ul>
                                    <p className="text-sm text-gray-400 mb-2"><strong className="text-gray-200">Kiske liye:</strong> {p.best}</p>
                                    <p className="text-sm text-gray-400 mb-2">{p.take}</p>
                                    <p className="text-sm text-amber-300/90">
                                        Renewal {inr(p.renewal)}/mo · 24 mahine ka total {inr(p.termTotal ?? 0)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Saare rate 24-month term ke hain aur GST se pehle ke hain — Hostinger ka apna footer bhi yahi
                            likhta hai. Regular price wahi hai jo Hostinger apne page par kaat kar dikhata hai.
                        </p>
                    </section>

                    <HostingerCta
                        href={REF.gameServer}
                        heading="Game Panel par extra 20% lagana ho to"
                        sub="Checkout par code daalne se sale price par aur 20% kat jaata hai. Game Panel 1 ₹649 se ₹519.20, Game Panel 4 ₹1,199 se ₹959.20."
                        buttonLabel="Game Panel plans dekhein"
                    />

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">RAM kitni chahiye — seedha jawab</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Sabse common galti ye hai ki log player count dekh kar plan chunte hain. Hostinger official
                            player number deta hi nahi, aur deta bhi to woh modpack par depend karta. Sahi tareeka ye hai:
                            apne game ki official RAM requirement dekhein, usme mods ka overhead jodein, phir plan chunein.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Setup</th>
                                        <th className="p-4">RAM jo chahiye</th>
                                        <th className="p-4">Plan</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4">Vanilla Minecraft, chhota group</td><td className="p-4">4 GB</td><td className="p-4 text-white">Game Panel 1</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Modded Minecraft ya medium group</td><td className="p-4">8 GB</td><td className="p-4 text-white">Game Panel 2</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Bada modpack, community server</td><td className="p-4">16 GB</td><td className="p-4 text-white">Game Panel 4</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4">Public server, heavy plugins</td><td className="p-4">32 GB</td><td className="p-4 text-white">Game Panel 8</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Ye mapping plan ki RAM par based hai, kisi Hostinger player-count dawe par nahi. Aapka modpack
                            zyada maangta ho to ek step upar jao.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Game Panel lein ya normal KVM VPS?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            Dhyan se dekhoge to Game Panel aur{" "}
                            <Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger ke KVM VPS plans</Link>{" "}
                            ki specs bilkul ek jaisi hain — wahi 1/2/4/8 vCPU, wahi 4/8/16/32 GB RAM, wahi AMD EPYC aur
                            NVMe. Par KVM 1 ₹599/mo par milta hai jabki Game Panel 1 ₹649/mo par. Woh ₹50 ka fark game
                            panel ke liye hai.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Game Panel lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                                    <li>Linux command line se dar lagta hai</li>
                                    <li>Ek click me server start/stop karna hai</li>
                                    <li>Dost ke saath manage karna hai aur setup me time nahi dena</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-bold text-white mb-2">KVM VPS lein agar…</h3>
                                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                                    <li>SSH, Docker, screen — sab aata hai</li>
                                    <li>Wahi server game ke alawa aur kaam bhi karega</li>
                                    <li>Har mahine ₹50 bachana matter karta hai</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Kharidne se pehle ye 4 baatein</h2>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside leading-8">
                            <li><strong className="text-white">Poora paisa ek saath jaata hai.</strong> ₹649/mo dikhta hai, par 24 mahine ka ₹15,576 ek hi baar card se katega.</li>
                            <li><strong className="text-white">GST alag hai.</strong> Hostinger ka footer khud kehta hai &ldquo;Prices are listed without GST&rdquo; — 18% upar jodkar sochiye.</li>
                            <li><strong className="text-white">Renewal par discount nahi milta.</strong> Na coupon, na referral. Isliye lamba term hi asli bachat hai.</li>
                            <li><strong className="text-white">Uptime SLA ka dawa nahi hai.</strong> 20 September 2026 tak Hostinger apne game server page par koi uptime percentage nahi likhta — kahin aur likha 99.9% iske liye confirmed mat maaniye.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — Hostinger game server</h2>
                        <div className="space-y-4">
                            {FAQ.map((item) => (
                                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <summary className="cursor-pointer font-semibold text-white marker:text-primary-400">{item.q}</summary>
                                    <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            <li><Link href="/blog/hostinger-kvm-vps-plans-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger KVM VPS plans</Link> — wahi hardware, ₹50 sasta, par setup khud karna padta hai.</li>
                            <li><Link href="/blog/hostinger-n8n-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">VPS par n8n self-host</Link> — wahi server game ke alawa automation bhi chala sakta hai.</li>
                            <li><Link href="/blog/hostinger-renewal-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Renewal price ka poora sach</Link> — har Hostinger product ka dusre term ka bill.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title={TITLE} />
                    </div>
                    <RelatedPosts slug="hostinger-game-server-hosting-india-2026" />
                </article>
            </main>
        </>
    );
}
