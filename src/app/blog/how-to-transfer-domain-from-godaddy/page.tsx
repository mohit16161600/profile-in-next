import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/how-to-transfer-domain-from-godaddy";
const IMAGE = "https://mohitkoli.in/assets/blog/how-to-transfer-domain-from-godaddy.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "Transfer Domain From GoDaddy: 6 Steps, ₹969, No Downtime",
    description:
        "Move your domain off GoDaddy in 6 steps and 5–7 days. ₹969 at Hostinger plus GST — and the nameserver step that keeps your site and email online.",
    keywords: [
        "transfer domain from godaddy", "how to transfer domain from godaddy", "godaddy domain transfer",
        "godaddy transfer authorization code", "move domain away from godaddy", "godaddy to namecheap transfer",
        "domain transfer 60 day rule", "domain transfer without downtime", "godaddy epp code",
        "domain transfer cost", "unlock domain godaddy", "godaddy alternative registrar",
        "can you transfer domain from godaddy", "transfer domain from godaddy to namecheap",
        "transfer domain from godaddy to hostinger", "how to transfer my domain from godaddy",
        "transfer my domain away from godaddy", "godaddy domain transfer authorization code",
        "godaddy domain transfer cost india", "godaddy domain renewal price india",
        "godaddy 60 day transfer lock", "how to avoid godaddy 60 day transfer lock",
        "transfer domain to another godaddy account", "godaddy domain push",
        "move domain from godaddy without interrupting email",
        "godaddy privacy protection blocking transfer", "domains by proxy cancel",
        "domain transfer stuck or pending", "clienttransferprohibited meaning",
        "cancel godaddy domain transfer refund", "bulk transfer domains from godaddy",
        "how long does a godaddy domain transfer take", "transfer .in domain from godaddy",
        "hostinger domain transfer price india", "godaddy domain transfer status",
        "godaddy domain transfer without downtime india", "domain transfer mx records email",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Transfer Domain From GoDaddy: 6 Steps, ₹969, No Downtime",
        description: "Six steps, 5–7 days, ₹969 at Hostinger — plus the nameserver step that keeps your site and email online.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Transferring a domain away from GoDaddy, step by step" }],
    },
    twitter: {
        card: "summary_large_image", title: "Transfer Domain From GoDaddy: 6 Steps, ₹969, No Downtime",
        description: "Step by step, in rupees, with the timing rules that actually matter.", images: [IMAGE],
    },
};

const FAQ = [
    { q: "Can you transfer any domain away from GoDaddy?", a: "Yes, with one exception: domains registered or whose owner contact details were changed within the last 60 days are locked by an ICANN rule and must wait it out. Everything else can be moved — GoDaddy cannot refuse a valid transfer request, though it may show you a retention offer on the way out." },
    { q: "Does transferring a domain cause downtime?", a: "Only in one specific case, and it is the most common one. If your domain still uses GoDaddy's default nameservers (the nsXX.domaincontrol.com pair), those nameservers stop answering queries once the domain leaves, and the site and email go dark until you rebuild the records elsewhere. The fix takes ten minutes: build the DNS zone at your new host first, point the nameservers there, wait 24 hours, then transfer. If the domain already uses Cloudflare or your host's own nameservers, nothing breaks." },
    { q: "How long does a GoDaddy domain transfer take?", a: "Usually five to seven days. ICANN allows the losing registrar up to five days to release the domain, and GoDaddy generally uses that window. You can speed it up by approving the transfer from the GoDaddy side rather than waiting for it to time out and auto-approve." },
    { q: "Can I transfer a domain I just registered?", a: "No. ICANN rules impose a 60-day lock after registration, and also after any change to the registrant's contact details. If you have just bought or just edited the domain, you have to wait out the 60 days — there is no way around this at any registrar." },
    { q: "How much does it cost to transfer a domain?", a: "You pay one year of registration at the new registrar's price, and that year is added to your existing expiry rather than replacing it. In India that is ₹969 for a .com at Hostinger, about ₹1,143 once 18% GST is added, against a GoDaddy renewal that typically sits between ₹1,000 and ₹1,400 before tax. Because you get the same twelve months either way, the move pays for itself immediately." },
    { q: "What is an EPP or authorisation code?", a: "A password proving you own the domain, issued by your current registrar. At GoDaddy you request it from the domain settings and it arrives by email. The new registrar asks for it to confirm the transfer is legitimate. It expires, so start the transfer promptly after requesting it." },
    { q: "Will I lose the remaining time on my registration?", a: "No. Transfer adds a year on top of whatever you had left. If your domain expires in eight months and you transfer today, the new expiry is twenty months away. This is the single most misunderstood part of transfers and the reason people wrongly delay." },
    { q: "Should I transfer before or after renewal?", a: "Before — but not at the last minute. Start the transfer at least two to three weeks before expiry. Transferring adds a year anyway, so paying GoDaddy's renewal first and then transferring simply means paying the higher price for no reason." },
    { q: "Can I transfer my domain from GoDaddy to Hostinger?",
      a: "Yes. Hostinger accepts domain transfers — a .com costs ₹969, which includes a year added to your current expiry, and free WHOIS privacy is included on eligible domains. The process is identical: unlock the domain at GoDaddy, get the authorisation code, then start the transfer from Hostinger's domain transfer page. It completes in up to seven days. It makes most sense when your hosting is already on Hostinger, so the domain and site live in one dashboard." },
    { q: "Do I need to move my hosting too?", a: "No. Domain registration and hosting are separate services. You can transfer your domain to a cheaper registrar and leave the website exactly where it is — just make sure the DNS records still point at your host after the move." },
    { q: "Does GoDaddy charge a fee to transfer my domain away?", a: "No. GoDaddy does not bill you for releasing a domain, and it does not charge for the authorisation code either. The only money that changes hands is one year of registration paid to the registrar you are moving to — ₹969 for a .com at Hostinger, plus 18% GST at an Indian checkout. That year stacks onto your existing expiry instead of replacing it, so you are buying time, not just paying an exit toll." },
    { q: "Do I have to turn off privacy protection to transfer a domain from GoDaddy?", a: "Yes. Namecheap's transfer documentation states GoDaddy's policy plainly: while privacy protection is active, transfer requests are declined. Turn off both things GoDaddy sells here — the paid Domain Protection plan and the free Domains By Proxy service. Be aware that cancelling private registration at GoDaddy is irreversible, so re-enable free WHOIS privacy at the new registrar the day the transfer lands." },
    { q: "Will my website go down while the domain transfers?", a: "Only if the domain is still on GoDaddy's default nameservers. Those stop responding to DNS queries once the domain leaves GoDaddy, which takes the site and email with them. Rebuild your DNS zone at the destination first, switch the nameservers there, confirm the site still loads after 24 hours, and only then start the transfer. Domains already pointed at Cloudflare or a host's own nameservers are unaffected." },
    { q: "Will my email stop working after I transfer my domain from GoDaddy?", a: "Your mailboxes survive, but mail stops if the MX records do not come across. Copy every MX record with its exact priority number, recreate the SPF, DKIM and DMARC TXT records, and delete any stale MX entries at the destination. One thing catches people out: a GoDaddy Professional Email or Microsoft 365 mailbox bought through GoDaddy is a separate subscription that does not travel with the domain." },
    { q: "How much does it cost to transfer a .com domain from GoDaddy in India?", a: "₹969 at Hostinger for a .com, which becomes about ₹1,143 on the invoice once 18% GST is added. GoDaddy charges nothing to release the domain, so that is the whole cost — and it buys a year that is added to your current expiry date. A typical GoDaddy .com renewal in India sits in the ₹1,000–₹1,400 band, so the transfer year is usually cheaper than simply renewing where you are." },
    { q: "How do I transfer a domain to another GoDaddy account?", a: "That is an account change, not a registrar transfer. It is free, needs no authorisation code and completes the moment the recipient accepts. From your Domain Portfolio open the domain, choose the option to transfer it to another GoDaddy account, and enter the recipient's GoDaddy email. They accept from the emailed link or from Pending Account Changes. The request lapses if it is not accepted within about ten days." },
    { q: "Can I cancel a GoDaddy domain transfer after starting it?", a: "While the request is still pending, yes. Once it flips to In Progress, the gaining registrar can no longer stop it — GoDaddy's own guidance is that an In Progress transfer must be cancelled at the registrar that currently holds the domain. Rejecting it there returns the domain with its original expiry intact, and the year you paid for goes back to the original payment method if the cancellation is approved." },
    { q: "What does clientTransferProhibited mean?", a: "It means the registrar lock is still switched on, so the registry will reject any transfer request. It is not an error and not a punishment — it is the default anti-hijacking status, and the registry also applies it automatically for 60 days after a registration or a transfer. If you set it yourself, unlock the domain in GoDaddy's settings, wait a few minutes and re-check WHOIS until the status reads ok." },
    { q: "How long is a GoDaddy authorisation code valid?", a: "GoDaddy does not publish an expiry window, and in practice codes issued there tend to keep working until the domain's settings change. Other registrars do expire them, commonly after around 30 days. Treat it as a reason to move promptly rather than a hard deadline — and if the new registrar rejects the code, request a fresh one rather than retyping the old one." },
    { q: "Can I transfer a domain that has already expired?", a: "Sometimes, but do not count on it. GoDaddy allows a grace period of roughly 18 days on most gTLDs during which a transfer can still work; country-code domains often have no grace period at all. Once the domain enters redemption you must recover it at GoDaddy, with a redemption fee, before any transfer is possible. Renew first, then transfer — and if GoDaddy renewed an expired domain for you, wait out its 45-day window or the renewal year can be revoked." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Transfer Domain From GoDaddy: 6 Steps, ₹969, No Downtime",
        description: "Point nameservers first, turn off privacy, unlock, get the auth code, transfer and approve — with Indian rupee pricing and the timing rules that matter.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "transfer domain from godaddy, godaddy domain transfer, godaddy epp code, domain transfer without downtime, godaddy domain transfer cost india, godaddy 60 day transfer lock, transfer domain to another godaddy account",
        articleSection: "Domains", inLanguage: "en-IN",
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
            { "@type": "ListItem", position: 3, name: "Transfer a Domain From GoDaddy", item: CANONICAL },
        ],
    },
    {
        "@context": "https://schema.org", "@type": "HowTo",
        name: "How to transfer a domain away from GoDaddy",
        description: "Check eligibility, rebuild DNS at the new host, disable privacy, unlock the domain, get the authorisation code, start the transfer and approve it.",
        totalTime: "PT7D",
        step: [
            { "@type": "HowToStep", name: "Check the 60-day rule", text: "Confirm the domain was registered or had its contact details changed more than 60 days ago, otherwise it cannot be transferred." },
            { "@type": "HowToStep", name: "Save your DNS records", text: "Screenshot or export every A, CNAME, MX and TXT record so nothing is lost in the move." },
            { "@type": "HowToStep", name: "Point the nameservers at the new host first", text: "Rebuild the DNS zone at the destination, change the nameservers at GoDaddy and allow up to 24 hours, so GoDaddy's default nameservers are no longer answering queries when the domain leaves." },
            { "@type": "HowToStep", name: "Turn off privacy protection", text: "Disable GoDaddy's paid domain protection plan and the Domains By Proxy service, because transfer requests are declined while privacy is active." },
            { "@type": "HowToStep", name: "Unlock the domain", text: "In GoDaddy domain settings, turn off the registrar lock." },
            { "@type": "HowToStep", name: "Request the authorisation code", text: "Request the EPP/auth code from GoDaddy; it arrives by email and expires, so use it promptly." },
            { "@type": "HowToStep", name: "Start the transfer at the new registrar", text: "Enter the domain and the authorisation code, and pay one year of registration which is added to your existing expiry." },
            { "@type": "HowToStep", name: "Approve and verify", text: "Approve the transfer from GoDaddy to speed it up, then confirm DNS records and the live site after it completes." },
        ],
    },
    {
        "@context": "https://schema.org", "@type": "Product",
        "@id": CANONICAL + "#hostinger-domain-transfer",
        name: "Hostinger .com Domain Transfer (India)",
        description:
            "Transferring a .com domain in to Hostinger from another registrar such as GoDaddy. The transfer fee includes a one-year renewal added to the domain's existing expiry date, and free WHOIS privacy is included on eligible domains. Billed in Indian rupees with 18% GST added at checkout.",
        brand: { "@type": "Brand", name: "Hostinger" },
        category: "Domain name transfer",
        image: IMAGE,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "969",
            highPrice: "1400",
            offerCount: 2,
            availability: "https://schema.org/InStock",
            url: "https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli",
            offers: [
                {
                    "@type": "Offer",
                    name: "Transfer in a .com domain (includes one year added to your existing expiry)",
                    price: "969",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli",
                },
                {
                    "@type": "Offer",
                    name: "Typical .com renewal in India after the transfer year",
                    price: "1400",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli",
                },
            ],
        },
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) },
];

export default function TransferDomainFromGoDaddy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="pt-28 pb-20">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-primary-400">Home</Link></li><li>/</li>
                            <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li><li>/</li>
                            <li className="text-gray-300">Transfer a Domain From GoDaddy</li>
                        </ol>
                    </nav>

                    <header className="mb-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Domains</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                            How to Transfer a Domain Away From GoDaddy
                        </h1>
                        <p className="text-lg text-gray-300 leading-8">
                            Six steps, about ten minutes of your time, then five to seven days of waiting. ₹969 for a
                            .com at Hostinger against a GoDaddy India renewal of ₹1,000–₹1,400 — and your site stays
                            online throughout, provided you do one thing first that most guides never mention.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>14 min read</span>
                        </div>
                    </header>

                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <Image src="/assets/blog/how-to-transfer-domain-from-godaddy.svg" alt="Transferring a domain away from GoDaddy" fill className="object-cover" priority />
                    </div>

                    <p className="mb-10 text-sm text-gray-500 border-l-2 border-primary-500/40 pl-4">
                        Contains affiliate links; I may earn a commission at no extra cost to you. Registrar interfaces
                        change — the sequence below is stable, but exact menu names may differ slightly from what you see.
                    </p>

                    <section className="mb-12 rounded-2xl border border-primary-500/30 bg-primary-500/[0.06] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Can you transfer a domain from GoDaddy?</h2>
                        <p className="text-gray-300 leading-8">
                            <strong className="text-white">Yes.</strong> Any domain registered more than 60 days ago can be
                            transferred away from GoDaddy to another registrar. You unlock the domain, request the
                            authorisation (EPP) code, and start the transfer at the new registrar — it completes in five
                            to seven days, and a year gets added to your existing expiry date. GoDaddy cannot refuse a
                            valid transfer and charges nothing to release the domain — you only pay one year of
                            registration to whoever you move to, which for a .com at Hostinger is{" "}
                            <strong className="text-white">₹969</strong> (about ₹1,143 once 18% GST is added at an
                            Indian checkout).
                        </p>
                        <p className="text-gray-300 leading-8 mt-4">
                            Two things have to happen <em>before</em> you request the authorisation code, and most
                            guides leave both out: point your nameservers at the new
                            host, and switch GoDaddy&apos;s privacy protection off. Skip the first and your site and
                            email go dark the moment the transfer lands. Skip the second and GoDaddy declines the
                            request outright.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-4">
                            <a href="https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli" target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                                Check Live Transfer Prices →
                            </a>
                            <span className="text-xs text-gray-500">₹969 for a .com · a year added to your expiry · GST extra at checkout</span>
                        </div>
                    </section>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="text-2xl font-bold text-white mb-3">Two rules before you start</h2>
                        <ul className="space-y-2 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">The 60-day lock.</strong> A domain cannot be transferred within 60 days of registration, or within 60 days of changing the registrant&apos;s contact details. This is an ICANN rule, not a GoDaddy one — no registrar can waive it.</li>
                            <li><strong className="text-white">Transferring adds a year; it does not replace one.</strong> If your domain expires in eight months, transferring today makes the new expiry twenty months away. So there is never a reason to pay GoDaddy&apos;s renewal first and transfer afterwards.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Point your nameservers at the new host before you transfer</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">A transfer only causes downtime if your domain is still using
                            GoDaddy&apos;s default nameservers</strong> — the <code className="text-primary-300">nsXX.domaincontrol.com</code>{" "}
                            pair. Namecheap&apos;s own transfer documentation is blunt about it: those nameservers stop
                            responding to queries once the domain is transferred away. Your DNS zone lived on GoDaddy&apos;s
                            infrastructure, and when the domain leaves, the zone stops being served. The website, the
                            email and every subdomain go down together, and stay down until you rebuild the records at
                            the new registrar.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            That is a ten-minute problem to avoid and a bad afternoon to fix afterwards. Do this first:
                        </p>
                        <ol className="space-y-3 text-gray-300 leading-8 list-decimal list-inside mb-5">
                            <li><strong className="text-white">Create the DNS zone at the destination and rebuild every record there.</strong> A records, CNAMEs, MX records with their priority numbers, and every TXT record — SPF, DKIM, DMARC and any verification strings for Google, Microsoft or a payment gateway.</li>
                            <li><strong className="text-white">Change the nameservers at GoDaddy.</strong> Domain Portfolio → the three-dot menu next to the domain → Edit DNS → Nameservers → Change Nameservers. Hostinger&apos;s are <code className="text-primary-300">ns1.dns-parking.com</code> and <code className="text-primary-300">ns2.dns-parking.com</code>; your own host will list theirs in the control panel.</li>
                            <li><strong className="text-white">Wait up to 24 hours and verify.</strong> Load the site, send yourself a mail from an outside address, and check anything that depends on a TXT record. Propagation is usually much faster, but 24 hours is the honest upper bound.</li>
                            <li><strong className="text-white">Only now request the authorisation code and start the transfer.</strong> With DNS already answering from somewhere other than GoDaddy, the registrar change becomes a billing event and nothing more.</li>
                        </ol>
                        <p className="text-gray-300 leading-8">
                            If your domain already points at Cloudflare, at your host&apos;s nameservers, or anywhere that
                            is not GoDaddy, none of this applies — skip straight to unlocking. And if you are moving the
                            website as well as the domain, do the site first:{" "}
                            <Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">migrating WordPress to a new host</Link>{" "}
                            covers that half of the job.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Turn off WHOIS privacy first — GoDaddy declines transfers while it is on</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Yes, you have to disable privacy, and it is policy rather than
                            a glitch.</strong> Namecheap&apos;s transfer guide states it directly: while GoDaddy privacy
                            protection is enabled, transfer requests are declined. This is the single most common reason
                            a transfer &ldquo;fails for no reason&rdquo; — and it is why the Shopify and Wix support
                            forums are full of identical threads.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            GoDaddy sells privacy as two separate things, and both have to be off:
                        </p>
                        <ul className="space-y-2 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">The paid protection plans</strong> — Full Domain Protection or Ultimate Domain Protection &amp; Security. Downgrade to basic privacy in the domain&apos;s settings.</li>
                            <li><strong className="text-white">Domains By Proxy</strong>, the free privacy service that ships with registration. Turn it off from the same privacy panel; it is a separate switch from the paid plan.</li>
                        </ul>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 mb-5">
                            <p className="text-gray-300 leading-8">
                                <strong className="text-white">This is a one-way door.</strong> Namecheap&apos;s guide warns
                                that private registration cancellations at GoDaddy are irreversible — once cancelled, it
                                cannot be switched back on. That is fine if you are leaving anyway, and a problem if you
                                change your mind halfway.
                            </p>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The consequence nobody mentions: with privacy off, your registrant name, email and phone
                            number sit in public WHOIS for the whole transfer window, and public WHOIS records are
                            routinely harvested for &ldquo;your domain is expiring&rdquo; renewal scams — the kind that
                            arrive as an official-looking invoice from a company you have never dealt with. Treat
                            anything that lands in those few days with suspicion, and re-enable WHOIS privacy at the new
                            registrar on the day the transfer completes —
                            it is free at Namecheap, Porkbun and Dynadot, and included on eligible Hostinger domains.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The six steps</h2>
                        <ol className="space-y-6 text-gray-300 leading-8 list-decimal list-inside">
                            <li>
                                <strong className="text-white">Save your DNS records first.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    Open the DNS management page at GoDaddy and screenshot or export everything — A records,
                                    CNAMEs, MX records for email, TXT records for verification and SPF. In most transfers
                                    these carry across, but if anything is going to go wrong, this is the file that saves you.
                                </p>
                            </li>
                            <li>
                                <strong className="text-white">Unlock the domain.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    In GoDaddy&apos;s domain settings, find the registrar lock and turn it off. The lock
                                    exists to prevent unauthorised transfers, so nothing will proceed until this is done.
                                </p>
                            </li>
                            <li>
                                <strong className="text-white">Request the authorisation code.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    Also called an EPP code or transfer key. GoDaddy emails it to the registrant address on
                                    file — which is worth checking is an address you still control. GoDaddy does not
                                    publish an expiry window for its codes, but plenty of registrars do expire theirs
                                    after about a month, so use it promptly rather than saving it for the weekend. If the
                                    new registrar rejects it, request a fresh one instead of retyping the old one.
                                </p>
                            </li>
                            <li>
                                <strong className="text-white">Start the transfer at your new registrar.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    Enter the domain, paste the authorisation code, and pay for one year of registration at
                                    their price. That year is added to your existing expiry date.
                                </p>
                            </li>
                            <li>
                                <strong className="text-white">Approve it from the GoDaddy side.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    GoDaddy will email asking you to confirm. Approving actively takes days off the process —
                                    if you ignore it, the transfer still completes, but only after the full five-day window
                                    expires. Expect a retention offer in that email; whether it is worth taking is your call.
                                </p>
                            </li>
                            <li>
                                <strong className="text-white">Verify after it completes.</strong>
                                <p className="mt-2 ml-6 text-base">
                                    Check the site loads, check email still arrives, and compare the DNS records against the
                                    ones you saved in step one. Then set a calendar reminder six weeks before the new expiry.
                                </p>
                            </li>
                        </ol>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">The timing mistake that costs a year</h2>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                            <p className="text-gray-300 leading-8">
                                Do not wait until the week your domain expires. Transfers take five to seven days, and a
                                domain in its expiry or redemption window either cannot be transferred or costs a
                                redemption fee to recover. Equally, do not renew at GoDaddy first &ldquo;to be safe&rdquo; —
                                you would be paying a full Indian .com renewal, typically ₹1,000–₹1,400, for a year you
                                get anyway by transferring. Start two to three weeks out and both problems disappear.
                            </p>
                            <p className="text-gray-300 leading-8 mt-4">
                                One exception worth knowing: if the domain already expired and GoDaddy auto-renewed it
                                for you, wait out the 45 days from the original expiry date before transferring.
                                Transfer inside that window and GoDaddy can revoke the renewal year you just paid for.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Will your email keep working? What happens to MX records</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Your mailboxes survive the transfer, but your mail stops if
                            the MX records do not come across.</strong> Nothing about a registrar change touches the
                            mailbox itself — it changes where the world looks up your MX records, and if the answer
                            comes back empty, mail bounces or silently queues at the sender. Google Workspace and
                            Microsoft 365 support forums are full of &ldquo;email stopped working after I transferred my
                            domain&rdquo; threads, and the fix is almost always in DNS rather than in the mailbox.
                        </p>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-5">
                            <li><strong className="text-white">Copy MX records with their priority numbers exactly.</strong> Priority is not decoration — Google Workspace expects its primary record to carry the lowest number, and getting the order wrong makes delivery erratic rather than broken, which is far harder to diagnose.</li>
                            <li><strong className="text-white">Delete stale MX entries at the destination.</strong> Many hosts pre-create their own mail records on a new zone. Leave those alongside your real ones and mail splits between two providers depending on which server a sender happens to reach.</li>
                            <li><strong className="text-white">Recreate SPF, DKIM and DMARC.</strong> These are TXT records and they do not move themselves. Miss them and mail still &ldquo;works&rdquo; — it just starts landing in spam, which people usually notice a week later after a lost invoice.</li>
                            <li><strong className="text-white">Test from outside.</strong> Allow up to 48 hours, then send from an address on a completely different provider. Mailing yourself from your own domain proves almost nothing.</li>
                        </ul>
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                            <p className="text-gray-300 leading-8">
                                <strong className="text-white">The part almost nobody states.</strong> If you bought
                                GoDaddy Professional Email or Microsoft 365 <em>through</em> GoDaddy, that mailbox is a
                                separate subscription that does not travel with the domain. Transferring the registration
                                does not move the mailboxes, the messages or the licences. You either migrate the mail to
                                a new provider yourself, or you keep paying GoDaddy for email alone after the domain has
                                gone. Decide which before you start, not after.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Check the real status with WHOIS, not the dashboard</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">Run a WHOIS lookup on your domain and read the &ldquo;Domain
                            Status&rdquo; line.</strong> It comes from the registry itself, which is the only party whose
                            opinion counts, and it will tell you the truth faster than either registrar&apos;s dashboard —
                            both of which lag and both of which are optimistic.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-5">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Status code</th><th className="p-4">What it means</th><th className="p-4">What to do</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">clientTransferProhibited</td><td className="p-4">The registrar lock is still on, so the registry will reject the request</td><td className="p-4">Go back and unlock the domain — the transfer will never start until this clears</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">pendingTransfer</td><td className="p-4">The request is live and the ICANN clock is running</td><td className="p-4">Nothing. Approve it at GoDaddy to finish sooner</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">ok</td><td className="p-4">Unlocked and transferable</td><td className="p-4">Request the auth code and go</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">autoRenewPeriod / redemptionPeriod</td><td className="p-4">The domain is past its expiry date</td><td className="p-4">Deal with the expiry at GoDaddy first; no transfer is possible from redemption</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Worth knowing that <code className="text-primary-300">clientTransferProhibited</code> is not
                            an error. It is the standard anti-hijacking status, and the registry also applies it
                            automatically for 60 days after a registration or a transfer — which is the same 60-day rule,
                            seen from the registry&apos;s side.
                        </p>
                        <p className="text-gray-300 leading-8">
                            On timing: ICANN gives the losing registrar up to five days to release the domain and
                            GoDaddy generally uses the full window, which is why &ldquo;five to seven days&rdquo; is the
                            realistic answer. Approve it actively from the GoDaddy side and the remainder collapses to
                            roughly a quarter of an hour at the receiving registrar. When a transfer genuinely sticks,
                            it is almost always one of two causes: the confirmation email went to a registrant address
                            the owner no longer controls, or there is a registry-level lock that only the losing
                            registrar&apos;s support team can remove.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How to avoid triggering the 60-day lock in the first place</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">You cannot lift a lock that has already fired, but you can
                            avoid causing one.</strong> The lock is triggered by a change to the registrant&apos;s first
                            name, last name, organisation or email address. Edit any of those and the domain is frozen
                            for outbound transfers for 60 days from the edit — not from registration.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            So the sequence matters more than anything else. Namecheap&apos;s guidance is the practical
                            workaround: <strong className="text-white">edit the Administrative contact rather than the
                            Registrant</strong>, which does not trigger the lock. Better still, do the transfer first and
                            correct the registrant details at the new registrar afterwards — the details follow the
                            domain, and you avoid a two-month wait for no benefit.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Once it has fired, be sceptical of anyone promising a workaround. Namecheap&apos;s
                            documentation does mention that GoDaddy operates a review address for 60-day lock opt-outs,
                            available only with domain privacy disabled — but it is discretionary, not a right, and plenty of
                            people are simply refused. There is no coupon, no escalation and no support ticket that
                            reliably removes it. Plan around it instead: if you
                            know you are leaving, do not touch the registrant fields on your way out.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Moving more than one domain: the bulk method</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">You do not have to click through domains one at a time.</strong>{" "}
                            GoDaddy&apos;s Domain Portfolio has an export option that downloads your domains as a CSV, which
                            at least gives you the list, the expiry dates and the lock status in one file instead of
                            forty browser tabs. Whether the authorisation codes come with it depends on the account, so
                            check the file before assuming you still have to request them one by one.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            At the receiving end, Namecheap&apos;s Transfer to Us page has a bulk tab that takes one
                            domain per line with the auth code after it, separated by a comma and a space —{" "}
                            <code className="text-primary-300">example.com, AUTHCODE</code> — and accepts up to 50
                            domains in a single order. More than that means splitting it into several orders.
                        </p>
                        <p className="text-gray-300 leading-8">
                            The part that catches people out is what <em>isn&apos;t</em> bulk: each domain still has to
                            be unlocked individually at GoDaddy and have its privacy disabled individually, and each has
                            its own auth code. And check expiry dates before you submit — a domain expiring within the
                            next week or two can be rejected mid-transfer, so renew those at GoDaddy and move them on the
                            next cycle rather than losing the request and the fee.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Cancelling a transfer and getting your money back</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">You can cancel while the request is pending, but once it is
                            In Progress the gaining registrar cannot stop it.</strong> GoDaddy documents this rule for
                            transfers coming in to GoDaddy, and it works the same way in reverse: an In Progress transfer
                            has to be cancelled at the registrar that currently holds the domain. Moving away from
                            GoDaddy, that means rejecting it from the GoDaddy side, not from the new registrar&apos;s
                            dashboard.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            Reject it and the domain simply stays where it is, with its original expiry date untouched.
                            The year you paid for at the new registrar is refunded to the original payment method if the
                            cancellation is approved — but the authorisation code is burned and has to be requested
                            fresh, and you may have to wait before the registry will accept a fresh request.
                        </p>
                        <p className="text-gray-300 leading-8">
                            There is really only one good reason to pull the handle: you started the transfer before
                            pointing your nameservers, realised the site and email were about to go dark, and would
                            rather spend an evening on DNS than take the outage. That is a sensible cancellation.
                            Cancelling because the transfer is &ldquo;taking too long&rdquo; on day three is not — the
                            five-day window is normal and restarting resets the clock.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Transferring a domain to another GoDaddy account (a &ldquo;push&rdquo;)</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">Moving a domain between two GoDaddy accounts is not a
                            registrar transfer at all.</strong> It is an account change: free, no authorisation code, no
                            five-day ICANN window. It completes the moment the recipient accepts, which is usually
                            minutes rather than days.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            You would do this when you sell a domain, when you hand a client the domain you registered on
                            their behalf, or when you split a portfolio across accounts. The sender opens the domain in
                            Domain Portfolio, chooses the option to transfer it to another GoDaddy account, and enters
                            the recipient&apos;s GoDaddy account email — adding their customer number is optional and
                            speeds things up. The recipient accepts from the emailed link or from Pending Account Changes
                            in their own account. If nobody accepts, the request lapses after about ten days and you
                            start again.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Two caveats buyers get caught by. A push does <strong className="text-white">not</strong> add
                            a year or change the expiry date — no registration is being purchased, so whatever time was
                            left is what you get. And it does not clear the 60-day out-transfer lock: that lock sits on
                            the domain at the registry, not on the account, so if you buy a recently registered or
                            recently transferred domain by push, the receiving account still cannot move it to a
                            different registrar until the original 60 days are up.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What a GoDaddy domain transfer actually costs in India</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            <strong className="text-white">A transfer costs one year at the new registrar&apos;s price,
                            and nothing at all to GoDaddy.</strong> There is no exit fee, no charge for the authorisation
                            code, no penalty for leaving mid-term. The number below is the whole bill — and it buys a
                            year that is added to your existing expiry, not a year that replaces it.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Where the domain goes</th><th className="p-4">.com transfer-in</th><th className="p-4">On an Indian invoice</th><th className="p-4">What you are actually buying</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white"><a href="https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger</a></td><td className="p-4 text-emerald-400">₹969</td><td className="p-4">≈ ₹1,143 with 18% GST</td><td className="p-4">Rupee billing, no forex; domain sits in the same hPanel as the hosting</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Namecheap</td><td className="p-4">$14.78</td><td className="p-4">USD card charge + your bank&apos;s forex markup</td><td className="p-4">Free WHOIS privacy for life, bulk transfer tooling</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white"><a href="https://www.dynadot.com/?s7f7O16308s7px" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Dynadot</a></td><td className="p-4">$10.88</td><td className="p-4">USD card charge + forex markup</td><td className="p-4">Same price to register, renew or transfer — no renewal cliff</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Porkbun</td><td className="p-4">~$11</td><td className="p-4">USD card charge + forex markup</td><td className="p-4">Flat pricing, free privacy, no upsell checkout</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Stay at GoDaddy</td><td className="p-4 text-amber-300">₹1,000–₹1,400 renewal</td><td className="p-4">≈ ₹1,180–₹1,652 with GST</td><td className="p-4">No DNS work, and a renewal rate that varies by account and promo history</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8 mb-4">
                            Two things that make this table honest and that most comparison pages skip.{" "}
                            <strong className="text-white">First, GST.</strong> Every price an Indian registrar publishes
                            is pre-tax, and 18% is added at checkout — so the ₹969 becomes about ₹1,143 on the invoice
                            and a ₹1,400 GoDaddy renewal becomes about ₹1,652. Compare like with like or the gap looks
                            bigger than it is. <strong className="text-white">Second, forex.</strong> The dollar
                            registrars bill in USD, so an Indian card adds a foreign-currency markup and the rupee cost
                            moves with the exchange rate every year. A $10.88 domain is genuinely cheap; it is just not
                            as cheap in rupees as the sticker suggests, and it is never a number you can budget exactly.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The caveat that matters more than the headline: <strong className="text-white">only the
                            transfer price is published anywhere.</strong> The renewal price a year later is the number
                            that decides whether the move was worth it, and .com renewals sit in a similar band at most
                            registrars because the registry sets a wholesale floor. Check the renewal rate on the
                            checkout page before you commit, not the transfer rate.
                        </p>
                        <p className="text-gray-300 leading-8">
                            Full five-year comparison in{" "}
                            <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">best domain registrars for India</Link>,
                            the reason renewals jump in{" "}
                            <Link href="/blog/godaddy-renewal-price-increase-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">why GoDaddy renewals rise 2–4×</Link>,
                            and the head-to-head in{" "}
                            <Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link>.
                            If hosting is moving too, the{" "}
                            <Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">hosting cost calculator</Link>{" "}
                            adds up the whole bill.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Where the domain can go</h2>

                        <h3 className="text-xl font-bold text-white mt-6 mb-3">Transfer a domain from GoDaddy to Hostinger</h3>
                        <p className="text-gray-300 leading-8 mb-5">
                            ₹969 for a .com, billed in rupees, a year added to your existing expiry, and free WHOIS
                            privacy on eligible domains. The honest qualifier: this is the right call when your site
                            already lives on Hostinger, because the domain then sits in the same hPanel as the hosting
                            and the DNS zone is already there — which also removes the nameserver problem described
                            above entirely. If your site is hosted somewhere else and you have no plans to move it,
                            a registrar-only destination is the cleaner choice. Background in the{" "}
                            <Link href="/blog/hostinger-review-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger review</Link>{" "}
                            and{" "}
                            <Link href="/blog/hostinger-plans-pricing-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">current India pricing</Link>.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Transfer a domain from GoDaddy to Namecheap</h3>
                        <p className="text-gray-300 leading-8 mb-5">
                            The default registrar-only move, and the one most guides assume. Free WHOIS privacy for the
                            life of the domain, proper bulk transfer tooling if you are moving a portfolio, and a
                            checkout that does not fight you. The downside for an Indian buyer is simply that it is
                            billed in dollars, so your bank&apos;s forex markup rides along every year.{" "}
                            <a href="https://namecheap.pxf.io/c/7673063/1632743/5618" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Start a transfer to Namecheap →</a>
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Transfer a domain from GoDaddy to Dynadot or Porkbun</h3>
                        <p className="text-gray-300 leading-8 mb-5">
                            The pure-cost play: both price registration, renewal and transfer at roughly the same figure,
                            year after year, so there is no renewal cliff to remember. Interfaces are utilitarian rather
                            than friendly, and support is thinner than at the big brands — which is a fair trade if the
                            domain is parked and you touch it twice a year.{" "}
                            <a href="https://www.dynadot.com/?s7f7O16308s7px" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Transfer to Dynadot →</a>
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Transfer a domain from GoDaddy to Cloudflare</h3>
                        <p className="text-gray-300 leading-8 mb-5">
                            Cloudflare Registrar sells at what it pays the registry — its own documentation promises no
                            markup and no surprise fees — which makes it the cheapest long-run home for a domain you
                            intend to keep for a decade. Two real constraints, though. You must add the domain to
                            Cloudflare and move it onto Cloudflare&apos;s nameservers first, because Cloudflare only
                            accepts transfers of domains already active on a full setup. And it supports a large but not
                            universal list of extensions, so check yours is on the list before you plan around it.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Transfer a domain from GoDaddy to Shopify or Wix</h3>
                        <p className="text-gray-300 leading-8">
                            Both accept transfers, but only for domains you actually use on their platform — they are
                            store and site builders that happen to hold your registration, not registrars you would
                            choose on price. Their support forums are full of &ldquo;transfer failed&rdquo; threads, and the cause is
                            nearly always the same one: GoDaddy privacy protection was
                            still switched on. Turn it off, wait for the WHOIS record to update, then retry.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Should you pick Hostinger for the transfer?</h2>
                        <p className="text-gray-300 leading-8 mb-5">
                            The steps are identical wherever you go — unlock, auth code, paste, pay — so the only real
                            question is which destination suits your setup. Here is the honest split rather than the
                            sales pitch:
                        </p>
                        <div className="grid gap-5 md:grid-cols-2 mb-6">
                            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.05] p-6">
                                <h3 className="text-base font-semibold text-white mb-2">Transfer to Hostinger if…</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>Your hosting is already there — one hPanel, one renewal calendar, no cross-provider DNS</li>
                                    <li>You want rupee billing instead of a forex-marked dollar charge every year</li>
                                    <li>You are mid-way through moving your whole site off GoDaddy anyway</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-base font-semibold text-white mb-2">Pick a flat-price registrar instead if…</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>You deliberately keep domain and hosting separate for flexibility</li>
                                    <li>Pure long-term cost is the only criterion — check Hostinger&apos;s renewal rate at checkout before assuming, since only the transfer price is published</li>
                                    <li>You manage many domains and want registrar-focused tooling</li>
                                </ul>
                            </div>
                        </div>
                        <a href="https://www.hostinger.com/in/domain-transfer?REFERRALCODE=mohitkoli" target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:scale-[1.02]">
                            Transfer Your Domain to Hostinger →
                        </a>
                        <p className="mt-3 text-xs text-gray-500">₹969 for a .com, includes a year added to your expiry · Free WHOIS privacy on eligible domains</p>
                    </section>

                    <section className="mb-12 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-900/25 to-amber-900/10 p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to move your domain?</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Namecheap transfers a .com in at $14.78 with free WHOIS privacy included, and the transfer
                            adds a full year to your existing expiry rather than replacing it — so in the year you move,
                            you are paying less than a GoDaddy India renewal for the same twelve months. It is billed in
                            dollars, so factor in your card&apos;s forex markup before comparing it with the ₹969
                            rupee-billed option above.
                        </p>
                        <a href="https://namecheap.pxf.io/c/7673063/1632743/5618" target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 hover:scale-[1.02]">
                            Transfer to Namecheap →
                        </a>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Is it worth transferring away from GoDaddy?</h2>
                        <p className="text-gray-300 leading-8 mb-4">
                            <strong className="text-white">In the year you move, almost always yes — and the honest
                            answer for the years after that is &ldquo;it depends on where you move to.&rdquo;</strong>{" "}
                            The transfer year is the clear win: ₹969 at Hostinger against a GoDaddy India renewal that
                            typically lands between ₹1,000 and ₹1,400, and the year you buy stacks onto your existing
                            expiry instead of replacing it. You are getting the same twelve months for less money, so
                            the move pays for itself immediately.
                        </p>
                        <p className="text-gray-300 leading-8 mb-4">
                            The part most affiliate pages will not tell you: <strong className="text-white">.com renewals
                            are not wildly different between mainstream registrars</strong>, because the registry sets a
                            wholesale floor that nobody sells far below. Hostinger&apos;s own .com renewals sit in
                            roughly the same ₹1,000–₹1,400 band as GoDaddy&apos;s. If you are chasing a recurring saving
                            rather than a one-off one, the flat-price registrars — Dynadot, Porkbun, Cloudflare at
                            registry cost — are the honest recommendation, not a hosting company. Anyone quoting you a
                            large permanent saving on a .com is quoting the transfer price and hoping you do not check
                            the renewal.
                        </p>
                        <div className="grid gap-5 md:grid-cols-2 mb-6">
                            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.05] p-6">
                                <h3 className="text-base font-semibold text-white mb-2">Worth doing</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>You hold five or more domains — the per-domain saving is small, the portfolio saving is not, and one afternoon covers all of them</li>
                                    <li>You are already moving hosting, so the DNS work is happening anyway</li>
                                    <li>You want the domain and the site in one panel and one renewal calendar</li>
                                    <li>Your GoDaddy checkout keeps adding protection plans you did not ask for</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-base font-semibold text-white mb-2">Not worth doing</h3>
                                <ul className="space-y-2 text-sm text-gray-300 leading-7 list-disc list-inside">
                                    <li>One domain, site already hosted at GoDaddy, everything working — a few hundred rupees does not buy back the afternoon or justify the outage risk</li>
                                    <li>Your email is a GoDaddy Professional Email or Microsoft 365 subscription you are not migrating</li>
                                    <li>The site runs on GoDaddy Website Builder, which you would have to rebuild elsewhere first</li>
                                    <li>The domain is inside its 60-day lock — there is nothing to decide until that clears</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-8">
                            The non-price reasons people actually cite are worth taking seriously too: a checkout that
                            upsells hard, renewal pricing that differs from account to account depending on the promo you
                            originally signed up under, and simply wanting DNS in the same panel as the hosting. If
                            hosting is part of the decision, the numbers are in{" "}
                            <Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost</Link>{" "}
                            and{" "}
                            <Link href="/blog/best-web-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">best web hosting in India</Link>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">If the transfer fails</h2>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">&ldquo;Domain is locked&rdquo;</strong> — the registrar lock is still on. Go back to step two.</li>
                            <li><strong className="text-white">&ldquo;Invalid authorisation code&rdquo;</strong> — it has expired or was copied with a trailing space. Request a fresh one.</li>
                            <li><strong className="text-white">&ldquo;Domain is within 60 days of registration&rdquo;</strong> — nothing to be done but wait it out.</li>
                            <li><strong className="text-white">No confirmation email</strong> — check the registrant contact address on the domain, not just your usual inbox. Old email addresses on WHOIS records are the most common cause.</li>
                            <li><strong className="text-white">Privacy protection blocking it</strong> — the most common cause of all. GoDaddy declines transfer requests while privacy is active, so both the paid protection plan and Domains By Proxy have to be off before you retry.</li>
                            <li><strong className="text-white">Site or email went down mid-transfer</strong> — the domain was still on GoDaddy&apos;s default nameservers. Rebuild the DNS zone at the new registrar immediately; the records are recoverable from the export you took in step one.</li>
                        </ul>
                    </section>

                    <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">The whole thing in eight lines</h2>
                        <ol className="space-y-2 text-gray-300 leading-8 list-decimal list-inside">
                            <li>Check the domain is more than 60 days past registration or its last registrant-detail change.</li>
                            <li>Export every DNS record from GoDaddy — A, CNAME, MX with priorities, and all TXT records.</li>
                            <li>Rebuild that zone at the new host, then change the nameservers at GoDaddy and wait up to 24 hours.</li>
                            <li>Turn off both GoDaddy privacy products: the paid protection plan and Domains By Proxy.</li>
                            <li>Unlock the domain in GoDaddy&apos;s domain settings.</li>
                            <li>Request the authorisation (EPP) code — it goes to the registrant email on file.</li>
                            <li>Start the transfer at the new registrar, paste the code, pay one year (₹969 for a .com at Hostinger, plus 18% GST). That year is added to your existing expiry.</li>
                            <li>Approve the confirmation email from GoDaddy, or lose five days waiting for it to time out. Then verify the site, the email and the WHOIS status.</li>
                        </ol>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">FAQ — domain transfers</h2>
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
                            <li><Link href="/blog/godaddy-renewal-price-increase-india" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Why GoDaddy renewals jump 2–4×</Link> — the numbers behind the decision.</li>
                            <li><Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Best domain registrars</Link> — five-year cost compared.</li>
                            <li><Link href="/blog/migrate-wordpress-to-new-host" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Migrating WordPress to a new host</Link> — if you are moving hosting as well.</li>
                            <li><Link href="/blog/hostinger-domain-price-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger domain prices in India</Link> — registration, transfer and renewal, in rupees.</li>
                            <li><Link href="/blog/hostinger-vs-godaddy-vs-bluehost-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hostinger vs GoDaddy vs Bluehost</Link> — if the hosting is moving too, not just the domain.</li>
                            <li><Link href="/tools/hosting-cost-calculator" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Hosting cost calculator</Link> — total cost over the term, GST included.</li>
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title="Transfer Domain From GoDaddy: 6 Steps, ₹969, No Downtime" />
                    </div>
                </article>
            </main>
        </>
    );
}
