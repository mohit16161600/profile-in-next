import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/how-to-transfer-domain-from-godaddy";
const IMAGE = "https://mohitkoli.in/assets/blog/how-to-transfer-domain-from-godaddy.png";
const PUBLISHED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
    title: "How to Transfer a Domain From GoDaddy (2026 Guide)",
    description:
        "Unlock, get the auth code, start the transfer, approve it — with the 60-day rule and the timing mistake that costs you a year of renewal.",
    keywords: [
        "transfer domain from godaddy", "how to transfer domain from godaddy", "godaddy domain transfer",
        "godaddy transfer authorization code", "move domain away from godaddy", "godaddy to namecheap transfer",
        "domain transfer 60 day rule", "domain transfer without downtime", "godaddy epp code",
        "domain transfer cost", "unlock domain godaddy", "godaddy alternative registrar",
    ],
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "How to Transfer a Domain From GoDaddy (2026 Guide)",
        description: "The full process, the 60-day rule, and the timing mistake that costs you a year of renewal.",
        url: CANONICAL, type: "article", publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
        images: [{ url: IMAGE, width: 1200, height: 630, alt: "Transferring a domain away from GoDaddy, step by step" }],
    },
    twitter: {
        card: "summary_large_image", title: "How to Transfer a Domain From GoDaddy (2026 Guide)",
        description: "Step by step, with the timing rules that actually matter.", images: [IMAGE],
    },
};

const FAQ = [
    { q: "Does transferring a domain cause downtime?", a: "It should not. A transfer moves who bills you for the domain, not where it points — your DNS records travel with the domain in most cases, and the site keeps resolving throughout. Downtime only happens if you change nameservers at the same time or let DNS records get dropped, which is why you copy them down first." },
    { q: "How long does a GoDaddy domain transfer take?", a: "Usually five to seven days. ICANN allows the losing registrar up to five days to release the domain, and GoDaddy generally uses that window. You can speed it up by approving the transfer from the GoDaddy side rather than waiting for it to time out and auto-approve." },
    { q: "Can I transfer a domain I just registered?", a: "No. ICANN rules impose a 60-day lock after registration, and also after any change to the registrant's contact details. If you have just bought or just edited the domain, you have to wait out the 60 days — there is no way around this at any registrar." },
    { q: "How much does it cost to transfer a domain?", a: "You pay one year of registration at the new registrar's price, and that year is added to your existing expiry rather than replacing it. So transferring from a $22.99 renewal to a $14.78 one costs you $14.78 and buys a year — meaning the move usually pays for itself immediately." },
    { q: "What is an EPP or authorisation code?", a: "A password proving you own the domain, issued by your current registrar. At GoDaddy you request it from the domain settings and it arrives by email. The new registrar asks for it to confirm the transfer is legitimate. It expires, so start the transfer promptly after requesting it." },
    { q: "Will I lose the remaining time on my registration?", a: "No. Transfer adds a year on top of whatever you had left. If your domain expires in eight months and you transfer today, the new expiry is twenty months away. This is the single most misunderstood part of transfers and the reason people wrongly delay." },
    { q: "Should I transfer before or after renewal?", a: "Before — but not at the last minute. Start the transfer at least two to three weeks before expiry. Transferring adds a year anyway, so paying GoDaddy's renewal first and then transferring simply means paying the higher price for no reason." },
    { q: "Do I need to move my hosting too?", a: "No. Domain registration and hosting are separate services. You can transfer your domain to a cheaper registrar and leave the website exactly where it is — just make sure the DNS records still point at your host after the move." },
];

const jsonLd = [
    {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "How to Transfer a Domain From GoDaddy (2026 Guide)",
        description: "Unlock, get the auth code, start the transfer, approve it — plus the timing rules that matter.",
        image: IMAGE, datePublished: PUBLISHED, dateModified: PUBLISHED,
        author: { "@type": "Person", name: "Mohit Koli", url: "https://mohitkoli.in/profile", jobTitle: "Senior Full Stack Developer", sameAs: ["https://github.com/mohit16161600", "https://www.linkedin.com/in/mohit-koli-b47260213", "https://x.com/mohitko86979490"] },
        publisher: { "@type": "Person", name: "Mohit Koli", logo: { "@type": "ImageObject", url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        keywords: "transfer domain from godaddy, godaddy domain transfer, godaddy epp code, domain transfer without downtime",
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
        description: "Check eligibility, save DNS records, unlock the domain, get the authorisation code, start the transfer and approve it.",
        totalTime: "PT7D",
        step: [
            { "@type": "HowToStep", name: "Check the 60-day rule", text: "Confirm the domain was registered or had its contact details changed more than 60 days ago, otherwise it cannot be transferred." },
            { "@type": "HowToStep", name: "Save your DNS records", text: "Screenshot or export every A, CNAME, MX and TXT record so nothing is lost in the move." },
            { "@type": "HowToStep", name: "Unlock the domain", text: "In GoDaddy domain settings, turn off the registrar lock." },
            { "@type": "HowToStep", name: "Request the authorisation code", text: "Request the EPP/auth code from GoDaddy; it arrives by email and expires, so use it promptly." },
            { "@type": "HowToStep", name: "Start the transfer at the new registrar", text: "Enter the domain and the authorisation code, and pay one year of registration which is added to your existing expiry." },
            { "@type": "HowToStep", name: "Approve and verify", text: "Approve the transfer from GoDaddy to speed it up, then confirm DNS records and the live site after it completes." },
        ],
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
                            Six steps, about ten minutes of your time, then five to seven days of waiting. Your site stays
                            online the whole way. The only things that genuinely trip people up are two timing rules —
                            both covered below.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>By Mohit Koli</span><span>•</span><span>August 24, 2026</span><span>•</span><span>9 min read</span>
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
                        <h2 className="text-2xl font-bold text-white mb-3">Two rules before you start</h2>
                        <ul className="space-y-2 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">The 60-day lock.</strong> A domain cannot be transferred within 60 days of registration, or within 60 days of changing the registrant&apos;s contact details. This is an ICANN rule, not a GoDaddy one — no registrar can waive it.</li>
                            <li><strong className="text-white">Transferring adds a year; it does not replace one.</strong> If your domain expires in eight months, transferring today makes the new expiry twenty months away. So there is never a reason to pay GoDaddy&apos;s renewal first and transfer afterwards.</li>
                        </ul>
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
                                    file — which is worth checking is an address you still control. The code expires, so
                                    move on to the next step promptly rather than saving it for the weekend.
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
                                you would be paying $22.99 for a year you get anyway by transferring. Start two to three
                                weeks out and both problems disappear.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Where to transfer to</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-gray-200">
                                    <tr><th className="p-4 font-semibold">Registrar</th><th className="p-4">.com renewal</th><th className="p-4">Vs GoDaddy&apos;s $22.99</th><th className="p-4">Best for</th></tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Porkbun</td><td className="p-4">~$11</td><td className="p-4 text-emerald-400">Save ~$12/yr</td><td className="p-4">Flat pricing, free privacy</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Dynadot</td><td className="p-4">$10.88</td><td className="p-4 text-emerald-400">Save ~$12/yr</td><td className="p-4">Same price to register, renew or transfer</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-4 font-semibold text-white">Namecheap</td><td className="p-4">$14.78</td><td className="p-4 text-emerald-400">Save ~$8/yr</td><td className="p-4">Large, familiar, free WHOIS privacy</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-300 leading-8">
                            Any of these pays for the transfer in the first year. Full comparison in{" "}
                            <Link href="/blog/best-domain-registrars-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">best domain registrars</Link>,
                            and the head-to-head in{" "}
                            <Link href="/blog/namecheap-vs-godaddy" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Namecheap vs GoDaddy</Link>.
{" "}
                            <a href="https://namecheap.pxf.io/c/7673063/1632743/5618" target="_blank" rel="nofollow sponsored noopener" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Start a transfer to Namecheap →</a>
                            <span className="text-gray-500"> · [AFFILIATE_LINK: PORKBUN] · [AFFILIATE_LINK: DYNADOT]</span>
                        </p>
                    </section>

                    <section className="mb-12 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-900/25 to-amber-900/10 p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to move your domain?</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            Namecheap renews a .com at $14.78 against GoDaddy&apos;s $22.99, includes free WHOIS privacy,
                            and the transfer adds a full year to your existing expiry — so moving usually pays for itself
                            in the first year.
                        </p>
                        <a href="https://namecheap.pxf.io/c/7673063/1632743/5618" target="_blank" rel="nofollow sponsored noopener" className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-900/30 hover:scale-[1.02]">
                            Transfer to Namecheap →
                        </a>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">If the transfer fails</h2>
                        <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside">
                            <li><strong className="text-white">&ldquo;Domain is locked&rdquo;</strong> — the registrar lock is still on. Go back to step two.</li>
                            <li><strong className="text-white">&ldquo;Invalid authorisation code&rdquo;</strong> — it has expired or was copied with a trailing space. Request a fresh one.</li>
                            <li><strong className="text-white">&ldquo;Domain is within 60 days of registration&rdquo;</strong> — nothing to be done but wait it out.</li>
                            <li><strong className="text-white">No confirmation email</strong> — check the registrant contact address on the domain, not just your usual inbox. Old email addresses on WHOIS records are the most common cause.</li>
                            <li><strong className="text-white">Privacy protection blocking it</strong> — some registrars require privacy to be temporarily disabled so the confirmation reaches a real address.</li>
                        </ul>
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
                        </ul>
                    </section>

                    <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
                        <h2 className="text-lg font-bold text-white mb-4">Share this guide</h2>
                        <ShareButtons url={CANONICAL} title="How to Transfer a Domain From GoDaddy (2026 Guide)" />
                    </div>
                </article>
            </main>
        </>
    );
}
