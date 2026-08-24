import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

const CANONICAL = "https://mohitkoli.in/blog/how-to-get-sora-2-invite-code-2026";
const IMAGE = "https://mohitkoli.in/assets/blog/how-to-get-sora-2-invite-code-2026.png";
const PUBLISHED = "2026-06-01T00:00:00.000Z";
const UPDATED = "2026-08-24T00:00:00.000Z";

export const metadata: Metadata = {
  title: "What Happened to Sora? OpenAI Shut It Down (2026)",
  description:
    "Sora 2 invite codes no longer exist — OpenAI discontinued the Sora app on 26 April 2026. What happened, why, and the best alternatives to use instead.",
  keywords: [
    "what happened to sora",
    "sora shut down",
    "is sora 2 still available",
    "sora 2 invite code",
    "sora 2 invite code 2026",
    "openai sora discontinued",
    "why did openai shut down sora",
    "sora alternatives",
    "best sora alternative 2026",
    "sora 2 india",
    "sora invite code scam",
    "ai video generator after sora",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "What Happened to Sora? OpenAI Shut It Down (2026)",
    description:
      "Sora 2 invite codes no longer exist. OpenAI discontinued the Sora app in April 2026 — here is what happened and what to use instead.",
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "What happened to OpenAI Sora — shutdown explained" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Sora? OpenAI Shut It Down (2026)",
    description:
      "No more invite codes — OpenAI killed the Sora app in April 2026. The real story, and the alternatives worth using now.",
    images: [IMAGE],
  },
};

const TIMELINE = [
  ["24 March 2026", "OpenAI posts a short farewell on X announcing the Sora app is shutting down."],
  ["26 April 2026", "The Sora web and mobile experiences are discontinued. Generation stops for everyone."],
  ["24 September 2026", "The Sora API is scheduled to be discontinued — the last piece of Sora to go."],
];

const ALTERNATIVES = [
  {
    name: "Google Veo",
    tone: "from-sky-600/20",
    pros: ["Genuinely strong free tier", "Excellent realism and motion", "Built into the Google/Gemini ecosystem"],
    best: "The closest like-for-like replacement, and the easiest one to start with today.",
  },
  {
    name: "Kling",
    tone: "from-amber-600/20",
    pros: ["Free credits to experiment with", "Very good on fast, dynamic motion", "Works in India and most regions"],
    best: "Heavy experimentation before you pay anything. Kling 3.0 landed in February 2026.",
  },
  {
    name: "Runway",
    tone: "from-purple-600/20",
    pros: ["Mature editing tools around the generator", "Strong control over shots and motion", "Established creator workflows"],
    best: "People who want a real editing suite, not just a prompt box.",
  },
];

const FAQ = [
  {
    q: "Is Sora 2 still available in 2026?",
    a: "No. OpenAI announced the shutdown on 24 March 2026 and discontinued the Sora web and app experiences on 26 April 2026. The API is scheduled to follow on 24 September 2026. There is no way to sign up, no waitlist, and no working invite code — the product no longer exists for consumers.",
  },
  {
    q: "How do I get a Sora 2 invite code now?",
    a: "You cannot, and nobody can. Invite codes stopped meaning anything the moment the app was discontinued in April 2026. Any site, video or seller still offering Sora invite codes in 2026 is running a scam — the product they are selling access to is switched off.",
  },
  {
    q: "Why did OpenAI shut down Sora?",
    a: "Cost and demand, mostly. Reporting around the shutdown put Sora's running cost at roughly $1 million a day against about $2.1 million in total revenue, with active users falling sharply after the initial hype. Copyright and deepfake problems, a collapsed Disney partnership, and OpenAI's focus on profitability ahead of an IPO all pushed the same direction.",
  },
  {
    q: "What happens to videos I made in Sora?",
    a: "OpenAI told users to export their content before the shutdown dates, and confirmed that data associated with Sora accounts would be permanently deleted afterwards. If you did not export in time, assume those files are gone — there is no recovery route.",
  },
  {
    q: "Was Sora 2 ever available in India?",
    a: "Not properly. Access was always invite-gated and limited to a handful of regions, and OpenAI had already removed invite codes in the US, Canada, Japan and Korea in late 2025. Most Indian users never got in at all, which — with hindsight — saved them the trouble of migrating off it.",
  },
  {
    q: "What is the best Sora alternative in 2026?",
    a: "Google Veo is the closest replacement for most people: strong quality, a real free tier and wide availability. Kling is the best pick if you want to experiment heavily on free credits, and it handles fast motion particularly well. Runway suits anyone who wants proper editing tools around the generator rather than just a prompt box.",
  },
  {
    q: "Are people still selling Sora invite codes?",
    a: "Yes, and that is precisely the problem. Scam listings tend to outlive the products they target, because the search demand does not disappear overnight. If someone is selling access to Sora in 2026, they are selling access to a switched-off service. Never pay, and never enter your OpenAI login on a third-party page.",
  },
  {
    q: "Will OpenAI bring Sora back?",
    a: "There has been no announcement of a return, and the video technology has largely been folded into OpenAI's broader model work rather than kept as a standalone consumer app. Treat any claim of a relaunch as rumour until OpenAI says so directly.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Happened to Sora? OpenAI Shut It Down (2026)",
    description:
      "OpenAI discontinued the Sora app on 26 April 2026. What happened, why, what it means for your videos, and the best alternatives.",
    image: IMAGE,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
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
    keywords: "what happened to sora, sora shut down, sora 2 invite code, sora alternatives, openai sora discontinued",
    articleSection: "AI Tools",
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mohitkoli.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mohitkoli.in/blog" },
      { "@type": "ListItem", position: 3, name: "What Happened to Sora", item: CANONICAL },
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

export default function WhatHappenedToSora() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="pt-28 pb-20 bg-[#040404] text-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-orange-400">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-300">What Happened to Sora</li>
            </ol>
          </nav>

          <header className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-4">AI Tools</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              What Happened to Sora? OpenAI Shut It Down
            </h1>
            <p className="text-lg text-gray-300 leading-8">
              If you landed here looking for a Sora 2 invite code, here is the short, unglamorous answer:{" "}
              <strong className="text-white">there are none, and there never will be again.</strong> OpenAI
              discontinued the Sora app on 26 April 2026. This page explains what actually happened, why, what it means
              if you had videos in there, and which tools are genuinely worth switching to.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>By Mohit Koli</span>
              <span>•</span>
              <span>Updated August 24, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/assets/blog/how-to-get-sora-2-invite-code-2026.svg"
              alt="OpenAI Sora shutdown explained — what happened and what to use instead"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Correction notice — this page used to be an invite-code guide */}
          <div className="mb-12 rounded-2xl border-l-4 border-amber-500 bg-amber-500/10 p-6">
            <h2 className="text-xl font-bold mb-2">⚠️ This guide has been rewritten</h2>
            <p className="text-gray-200 leading-8">
              An earlier version of this article explained how to get Sora 2 invite codes. That advice is now obsolete —
              the product it described has been switched off. Rather than quietly delete the page, I have rewritten it
              with what is actually true in August 2026, because plenty of people are still searching for those codes
              and deserve a straight answer instead of another dead listicle.
            </p>
          </div>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The shutdown timeline</h2>
            <div className="space-y-4">
              {TIMELINE.map(([date, event]) => (
                <div key={date} className="flex flex-col sm:flex-row gap-2 sm:gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-bold text-orange-400 sm:w-52 shrink-0">{date}</p>
                  <p className="text-gray-300 leading-7">{event}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-300 leading-8">
              Sora launched in late 2025 and was gone from consumer hands inside six months. For a product that
              dominated tech headlines and had people trading invite codes like concert tickets, that is a remarkably
              short life — and a useful reminder about building a workflow on top of a single vendor&apos;s hype cycle.
            </p>
          </section>

          {/* Why */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why OpenAI killed it</h2>
            <p className="text-gray-300 leading-8 mb-6">
              The honest summary is that Sora cost far more to run than it ever earned, and the audience did not stay.
              Reporting around the shutdown put the running cost at roughly{" "}
              <strong className="text-white">$1 million per day</strong> against about{" "}
              <strong className="text-white">$2.1 million in total revenue</strong> across its whole life. Video
              generation is brutally expensive compute, and a free-to-browse social feed of AI clips was never going to
              cover that.
            </p>
            <ul className="space-y-3 text-gray-300 leading-8 list-disc list-inside mb-6">
              <li><strong className="text-white">Usage fell off a cliff</strong> after the novelty wore off — the feed filled with low-effort clips and people stopped coming back.</li>
              <li><strong className="text-white">Copyright and deepfake problems</strong> kept generating headlines OpenAI did not want, particularly around recognisable characters and real people.</li>
              <li><strong className="text-white">The Disney partnership collapsed</strong>, removing the licensed-content path that might have made the feed worth visiting.</li>
              <li><strong className="text-white">Profitability pressure ahead of an IPO</strong> made an expensive, unprofitable side product an obvious thing to cut.</li>
            </ul>
            <p className="text-gray-300 leading-8">
              None of that means the underlying video technology was bad. It means a standalone consumer video app was
              the wrong shape for it, and OpenAI decided to stop paying for that lesson.
            </p>
          </section>

          {/* Your videos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">If you had videos in Sora</h2>
            <p className="text-gray-300 leading-8">
              OpenAI told users to export their content before the shutdown dates and confirmed that data associated
              with Sora accounts would be permanently deleted afterwards. If you exported in time, you are fine. If you
              did not, those files are gone — there is no recovery request, no support ticket that brings them back.
              It is worth taking that as a general lesson: anything you generate in a hosted AI tool and actually care
              about should be downloaded the day you make it.
            </p>
          </section>

          {/* Scam warning — still the most useful section on this page */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The scams did not stop — they got worse</h2>
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-l-4 border-red-500 p-6 mb-8 rounded-r-2xl">
              <h3 className="text-xl font-bold mb-2">🛑 Read this before you click anything</h3>
              <p className="text-gray-200 leading-8">
                People are <em>still</em> selling Sora 2 invite codes in 2026. They are selling access to a service that
                is switched off. Search demand outlives products, and scammers know it — a dead product with heavy
                residual search traffic is close to an ideal target.
              </p>
            </div>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-6 leading-8">
              <li><strong className="text-white">&quot;Enter your login to verify&quot;</strong> — phishing, full stop. Nothing legitimate ever asks for your OpenAI password on a third-party page.</li>
              <li><strong className="text-white">Pay-for-a-code resellers</strong> — invite codes were never officially sold, and now there is nothing to unlock. You will get nothing, or a stolen account.</li>
              <li><strong className="text-white">Code generators and &quot;checkers&quot;</strong> — these produce gibberish or quietly install malware. They never worked, and cannot work now.</li>
              <li><strong className="text-white">Fake apps in the stores</strong> — apps posing as Sora that demand permissions or a subscription up front. Report them.</li>
              <li><strong className="text-white">Urgency and countdown timers</strong> — &quot;only 3 codes left in the next 5 minutes&quot; is a pressure tactic, never a real offer.</li>
            </ul>
            <p className="text-gray-300 leading-8">
              The golden rule has not changed: never pay for a code, never share your password. That same scepticism is
              worth carrying into every shiny AI launch — a theme that runs through my list of the{" "}
              <Link href="/blog/top-25-free-ai-tools-2026" className="text-orange-400 hover:text-amber-300 underline underline-offset-4">
                top 25 free AI tools of 2026
              </Link>.
            </p>
          </section>

          {/* Alternatives */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What to use instead</h2>
            <p className="text-gray-300 leading-8 mb-6">
              Here is the genuinely good news: the gap between Sora and its rivals was always smaller than the hype
              suggested, and the best alternatives are available to everyone right now — no invite, no waitlist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {ALTERNATIVES.map((alt) => (
                <div key={alt.name} className="border border-white/10 rounded-2xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${alt.tone} to-transparent p-4 text-center font-bold`}>{alt.name}</div>
                  <div className="p-5 space-y-4">
                    <div className="text-green-400 text-sm space-y-1">
                      {alt.pros.map((p) => <p key={p}>✔ {p}</p>)}
                    </div>
                    <p className="text-gray-400 text-sm leading-6">Best for: {alt.best}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-8">
              I have compared these and several others in detail in my roundup of the{" "}
              <Link href="/blog/best-ai-video-generators-2026" className="text-orange-400 hover:text-amber-300 underline underline-offset-4">
                best AI video generators in 2026
              </Link>. If video is part of a bigger plan to actually earn from these skills, it pairs well with the
              ideas in{" "}
              <Link href="/blog/best-ai-tools-to-make-money-online-2026" className="text-orange-400 hover:text-amber-300 underline underline-offset-4">
                best AI tools to make money online in 2026
              </Link>. And if you are new to prompting generative models at all, start with{" "}
              <Link href="/blog/how-to-use-chatgpt-beginners-2026" className="text-orange-400 hover:text-amber-300 underline underline-offset-4">
                how to use ChatGPT for beginners
              </Link>.
            </p>
          </section>

          {/* Takeaways */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-orange-900/30 to-black border border-orange-500/20 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Key takeaways</h2>
              <ul className="space-y-4">
                {[
                  "Sora 2 invite codes do not exist any more — the app was discontinued on 26 April 2026.",
                  "The API follows on 24 September 2026, so nothing Sora-branded survives past this year.",
                  "It closed because it cost roughly $1M/day to run and earned a fraction of that.",
                  "Anyone still selling Sora access in 2026 is scamming you. There is nothing to unlock.",
                  "Google Veo and Kling are free, available today, and good enough for almost everything Sora was used for.",
                  "Export anything you generate in a hosted AI tool the day you make it.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-200 leading-8">
                    <span className="text-amber-400 font-bold mt-0.5">★</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <summary className="cursor-pointer text-lg font-semibold text-white marker:text-orange-400">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-gray-300 leading-8">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="glass rounded-xl shadow-sm p-6 border border-white/5">
            <h2 className="text-lg font-bold text-white mb-4">Share this</h2>
            <ShareButtons url={CANONICAL} title="What Happened to Sora? OpenAI Shut It Down (2026)" />
          </div>
        </article>
      </main>
    </>
  );
}
