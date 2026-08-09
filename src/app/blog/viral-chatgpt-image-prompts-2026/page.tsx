import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "30 Viral ChatGPT Image Prompts Everyone Uses in 2026",
  description:
    "Copy 30 tested viral ChatGPT image prompts for 2026: action figure, Polaroid, caricature, toy and time-travel edits. Beginner-friendly formula + free prompt list.",
  keywords: [
    "viral chatgpt image prompts",
    "chatgpt image prompts 2026",
    "trending ai photo prompts",
    "chatgpt action figure prompt",
    "polaroid ai prompt chatgpt",
    "caricature chatgpt prompt",
    "best chatgpt image prompts copy paste",
    "ai photo trend prompts 2026",
    "chatgpt dalle prompts list",
    "toy figure ai prompt",
  ],
  alternates: {
    canonical: "https://mohitkoli.in/blog/viral-chatgpt-image-prompts-2026",
  },
  openGraph: {
    title: "30 Viral ChatGPT Image Prompts Everyone Uses in 2026",
    description:
      "Copy 30 tested viral ChatGPT image prompts for 2026: action figure, Polaroid, caricature, toy and time-travel edits. Beginner-friendly formula + free prompt list.",
    url: "https://mohitkoli.in/blog/viral-chatgpt-image-prompts-2026",
    type: "article",
    images: ["/assets/blog/viral-chatgpt-image-prompts-2026.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Viral ChatGPT Image Prompts Everyone Uses in 2026",
    description:
      "Copy 30 tested viral ChatGPT image prompts for 2026: action figure, Polaroid, caricature, toy and time-travel edits. Beginner-friendly formula + free prompt list.",
    images: ["/assets/blog/viral-chatgpt-image-prompts-2026.svg"],
  },
};

export default function ViralChatGPTImagePrompts2026() {
  const faqData = [
    {
      question: "Can free ChatGPT users generate images?",
      answer:
        "Yes, free users get limited image generations per day in 2026; heavy use may require ChatGPT Go or Plus to avoid hitting caps.",
    },
    {
      question: "Do these prompts work with other AI tools?",
      answer:
        "Most work in Gemini, Grok, and other image models with light edits, since they rely on a universal subject-style-lighting-background formula.",
    },
    {
      question: "Why does ChatGPT refuse some image prompts?",
      answer:
        "It blocks prompts featuring real celebrities, copyrighted characters, or unsafe content. Replace them with original or generic subjects.",
    },
    {
      question: "How do I get a consistent face across edits?",
      answer:
        "Upload a clear reference photo and ask ChatGPT to keep the same face, then describe only the style change you want.",
    },
    {
      question: "What image size should I request?",
      answer:
        "Ask for the aspect ratio you need: 1:1 for Instagram posts, 9:16 for stories and reels, 16:9 for thumbnails.",
    },
    {
      question: "Are AI-generated images watermarked?",
      answer:
        "Yes, ChatGPT images include C2PA metadata identifying them as AI-generated, which some platforms read automatically.",
    },
    {
      question: "Can I sell or post these images commercially?",
      answer:
        "OpenAI grants users rights to images they create, but avoid recognizable people, brands, and trademarks to stay safe commercially.",
    },
    {
      question: "Why do my results look low quality?",
      answer:
        "Vague prompts cause generic output. Add specific lighting, lens, mood, and background details for a sharper, trendier look.",
    },
  ];

  const keyTakeaways = [
    "Viral image prompts share one formula: subject, style, lighting, background, and aspect ratio.",
    "All 30 prompts are copy-paste ready and grouped by trend so you can remix quickly.",
    "Upload a reference photo to keep a consistent face across different styles.",
    "Free ChatGPT users can generate images but may hit daily limits during heavy use.",
    "Avoid celebrities and copyrighted characters so prompts are not refused or risky to post.",
  ];

  const canonical = "https://mohitkoli.in/blog/viral-chatgpt-image-prompts-2026";

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "30 Viral ChatGPT Image Prompts Everyone Uses in 2026",
    description:
      "Copy 30 tested viral ChatGPT image prompts for 2026: action figure, Polaroid, caricature, toy and time-travel edits. Beginner-friendly formula + free prompt list.",
    image: "https://mohitkoli.in/assets/blog/viral-chatgpt-image-prompts-2026.svg",
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
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
      logo: {
        "@type": "ImageObject",
        url: "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    keywords:
      "viral chatgpt image prompts, chatgpt image prompts 2026, trending ai photo prompts, chatgpt action figure prompt, polaroid ai prompt chatgpt, caricature chatgpt prompt, best chatgpt image prompts copy paste, ai photo trend prompts 2026, chatgpt dalle prompts list, toy figure ai prompt",
    articleSection: "AI Tips",
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mohitkoli.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mohitkoli.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "30 Viral ChatGPT Image Prompts Everyone Uses in 2026",
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="pt-28 pb-20 bg-[#040404] text-white">
      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-cyan-400 transition">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-300">Viral ChatGPT Image Prompts</span>
        </nav>

        <header className="mb-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-semibold">
            Prompts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            30 Viral ChatGPT Image Prompts
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-8">
            <span>By Mohit Koli</span>
            <span>•</span>
            <span>June 16, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </header>

        <div className="relative w-full aspect-[1200/630] mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
          <Image
            src="/assets/blog/viral-chatgpt-image-prompts-2026.svg"
            alt="30 Viral ChatGPT Image Prompts Everyone Uses in 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <section className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Every few weeks a new AI photo trend floods your feed: tiny action
            figures in blister packs, faded Polaroids of you and a celebrity,
            big-headed caricatures, and dreamy time-travel portraits. The secret
            behind almost all of them is a handful of repeatable{" "}
            <strong>ChatGPT image prompts</strong>. This guide hands you 30 of the
            most viral, copy-paste-ready prompts for 2026, plus a simple formula
            so you can remix any trend in seconds.
          </p>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-l-4 border-cyan-500 p-6 my-8 rounded-r-2xl">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">
              Key Takeaways
            </h2>
            <ul className="list-disc pl-6 text-gray-200 space-y-2">
              {keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Table of Contents
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
              <li>
                <a href="#why-image-prompts-go-viral" className="hover:text-cyan-400 transition">
                  → Why These Image Prompts Go Viral
                </a>
              </li>
              <li>
                <a href="#how-to-use-them" className="hover:text-cyan-400 transition">
                  → How to Use These Prompts in ChatGPT
                </a>
              </li>
              <li>
                <a href="#the-prompt-formula" className="hover:text-cyan-400 transition">
                  → The Subject-Style-Lighting-Background-Ratio Formula
                </a>
              </li>
              <li>
                <a href="#action-figure-toy-prompts" className="hover:text-cyan-400 transition">
                  → Action Figure &amp; Toy Prompts
                </a>
              </li>
              <li>
                <a href="#polaroid-retro-prompts" className="hover:text-cyan-400 transition">
                  → Polaroid &amp; Retro Prompts
                </a>
              </li>
              <li>
                <a href="#caricature-cartoon-prompts" className="hover:text-cyan-400 transition">
                  → Caricature &amp; Cartoon Prompts
                </a>
              </li>
              <li>
                <a href="#time-travel-cinematic-prompts" className="hover:text-cyan-400 transition">
                  → Time-Travel &amp; Cinematic Prompts
                </a>
              </li>
              <li>
                <a href="#tips-better-results" className="hover:text-cyan-400 transition">
                  → Tips for Sharper, On-Trend Results
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:text-cyan-400 transition">
                  → Common Mistakes to Avoid
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-cyan-400 transition">
                  → FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <h2 id="why-image-prompts-go-viral" className="text-3xl font-bold mt-12 mb-6">
            Why These Image Prompts Go Viral
          </h2>
          <p className="text-gray-300 mb-6">
            Viral AI photo trends are not random luck. They spread because they
            are <strong>instantly recognizable</strong>, deeply personal, and
            extremely easy to copy. When someone turns themselves into a boxed
            action figure or a 90s Polaroid, your brain immediately wants to try
            the same thing with your own face. That &quot;I could do that in 30
            seconds&quot; feeling is the engine of every trend.
          </p>
          <p className="text-gray-300 mb-6">
            In 2026, ChatGPT&apos;s built-in image model makes this easier than
            ever. You no longer need to learn a separate tool or fiddle with
            sliders. You upload a photo, paste a prompt, and get a share-ready
            image. The prompts that win on Instagram, TikTok, and Pinterest tend
            to share three things:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
            <li>
              <strong>A strong, single concept</strong> — &quot;action figure,&quot;
              &quot;Polaroid,&quot; or &quot;caricature&quot; is easy to say and
              easy to picture.
            </li>
            <li>
              <strong>A personal hook</strong> — it features <em>you</em>, your
              pet, or someone you love, so it feels custom-made.
            </li>
            <li>
              <strong>A clean, repeatable format</strong> — the same prompt works
              for thousands of people with only the photo changed.
            </li>
          </ul>
          <div className="bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 border-l-4 border-cyan-500 p-6 my-8 rounded-r-2xl">
            <h3 className="text-xl font-bold mb-2">Quick tip</h3>
            <p className="text-gray-200 italic">
              Trends move fast. The best way to stay ahead is not to memorize
              prompts, but to learn the formula in the next section so you can
              build a fresh prompt the moment a new trend appears. If you also
              want curated, ready-made text prompts, see my{" "}
              <Link href="/blog/best-chatgpt-prompts-2026" className="text-cyan-300 underline not-italic">
                best ChatGPT prompts for 2026
              </Link>
              .
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="how-to-use-them" className="text-3xl font-bold mt-12 mb-6">
            How to Use These Prompts in ChatGPT
          </h2>
          <p className="text-gray-300 mb-6">
            You do not need any special plan to start. If you are brand new to the
            tool, my{" "}
            <Link href="/blog/how-to-use-chatgpt-beginners-2026" className="text-cyan-300 underline">
              ChatGPT beginner&apos;s guide
            </Link>{" "}
            walks through the basics. Here is the exact workflow for image prompts:
          </p>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-gray-300">
                  Open ChatGPT and start a new chat. On mobile, tap the photo or
                  attachment icon.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-gray-300">
                  Upload a clear, well-lit photo of your subject if the prompt is
                  a &quot;turn me into&quot; edit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-gray-300">
                  Paste one of the prompts below, then add your aspect ratio
                  (1:1, 9:16, or 16:9).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                  4
                </div>
                <p className="text-gray-300">
                  Generate, then refine with short follow-ups like &quot;make the
                  lighting warmer&quot; or &quot;keep the same face.&quot;
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Free accounts can create images but may hit a daily cap during heavy
            use. If you generate a lot, ChatGPT Go or Plus removes most of the
            friction. Curious which other models can do this? Compare them in my{" "}
            <Link href="/blog/best-ai-image-generators-2026" className="text-cyan-300 underline">
              best AI image generators of 2026
            </Link>{" "}
            roundup.
          </p>

          {/* Section 3 - Formula */}
          <h2 id="the-prompt-formula" className="text-3xl font-bold mt-12 mb-6">
            The Subject-Style-Lighting-Background-Ratio Formula
          </h2>
          <p className="text-gray-300 mb-6">
            Memorize one formula and you can recreate or remix any trend. Every
            strong image prompt answers five questions in order:
          </p>
          <div className="overflow-x-auto mb-10 border border-white/10 rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 font-bold text-white">Element</th>
                  <th className="p-4 font-bold text-white">What it answers</th>
                  <th className="p-4 font-bold text-white">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 font-semibold text-cyan-300">Subject</td>
                  <td className="p-4">Who or what is in the image</td>
                  <td className="p-4">The person in my photo</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-300">Style</td>
                  <td className="p-4">The look or art direction</td>
                  <td className="p-4">Boxed action figure, vinyl toy</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-300">Lighting</td>
                  <td className="p-4">Mood and light source</td>
                  <td className="p-4">Soft studio light, golden hour</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-300">Background</td>
                  <td className="p-4">Scene behind the subject</td>
                  <td className="p-4">Plain gray, neon city street</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-300">Ratio</td>
                  <td className="p-4">Output shape</td>
                  <td className="p-4">1:1, 9:16, or 16:9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mb-6">
            Put together, a finished prompt reads like a sentence:{" "}
            <strong>
              &quot;Turn the person in my photo into a collectible action figure
              (subject + style), lit with soft studio light (lighting), inside a
              blister-pack box on a plain gray background (background), 1:1
              (ratio).&quot;
            </strong>{" "}
            Swap any one element and you have a brand-new image. Keep this in your
            notes and you will never run out of ideas.
          </p>

          {/* Section 4 - Action figure */}
          <h2 id="action-figure-toy-prompts" className="text-3xl font-bold mt-12 mb-6">
            Action Figure &amp; Toy Prompts
          </h2>
          <p className="text-gray-300 mb-6">
            The boxed-figure trend refuses to die because it is endlessly
            customizable. Add your own accessories, job, or hobby to make it feel
            personal. Upload a clear photo first, then paste any of these.
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">1. Classic action figure</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn the person in my photo into a realistic collectible action
                figure sealed in a blister-pack box, with my name on the header
                card, soft studio lighting, plain gray background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">2. Job-themed figure</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make me into a toy figure with accessories that match my job (a
                laptop, coffee, and headphones), packaged in a retail box, clean
                product lighting, white background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">3. Vinyl chibi toy</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a cute vinyl chibi toy with a big head and small
                body, glossy plastic finish, soft pastel studio lighting, simple
                background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">4. LEGO-style minifigure (generic)</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a generic plastic brick minifigure with a printed
                outfit and simple face, bright even lighting, plain backdrop,
                1:1. Do not use any branded logos.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">5. Diorama scene figure</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Place a small action figure of me inside a detailed tabletop
                diorama of my favorite hobby, cinematic side lighting, shallow
                depth of field, 16:9.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">6. Plush toy version</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a soft plush toy with stitched details and button
                eyes, cozy warm lighting, on a knitted blanket background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">7. Pet action figure</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn my pet into a boxed collectible figure with a fun name and
                accessories, bright product lighting, pastel background, 1:1.
              </p>
            </div>
          </div>

          {/* Section 5 - Polaroid */}
          <h2 id="polaroid-retro-prompts" className="text-3xl font-bold mt-12 mb-6">
            Polaroid &amp; Retro Prompts
          </h2>
          <p className="text-gray-300 mb-6">
            Faded film, slight blur, and a white border make any photo feel
            nostalgic. These prompts are great for couples, friends, and
            throwback aesthetics. Keep subjects original or fictional to avoid
            refusals.
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">8. Classic Polaroid look</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make my photo look like a vintage Polaroid with a white border,
                slight film grain, warm faded colors, soft flash lighting, 4:5.
              </p>
            </div>
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">9. 90s disposable camera</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Recreate my photo as a candid 90s disposable-camera snapshot,
                direct on-camera flash, slight motion blur, date stamp in the
                corner, 4:3.
              </p>
            </div>
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">10. Retro film couple shot</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn the two people in my photo into a cozy retro film portrait,
                warm golden tones, soft grain, indoor lamp lighting, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">11. Old yearbook photo</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make me into a vintage 1980s yearbook portrait with a marbled
                blue studio backdrop, soft key light, retro styling, 3:4.
              </p>
            </div>
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">12. Sepia heritage portrait</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Convert my photo into an old sepia heritage portrait with subtle
                cracks and aged paper texture, soft window light, neutral
                background, 4:5.
              </p>
            </div>
            <div className="bg-black/60 border border-blue-400/20 rounded-2xl p-5">
              <p className="text-blue-300 font-bold mb-2">13. Polaroid wall collage</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Arrange several Polaroid-style versions of my photo as a taped
                wall collage with handwritten captions, soft daylight, 16:9.
              </p>
            </div>
          </div>

          {/* Section 6 - Caricature */}
          <h2 id="caricature-cartoon-prompts" className="text-3xl font-bold mt-12 mb-6">
            Caricature &amp; Cartoon Prompts
          </h2>
          <p className="text-gray-300 mb-6">
            Exaggerated features and bold colors make caricatures perfect profile
            pictures and gifts. Ask ChatGPT to keep your key features
            recognizable so the result still looks like you.
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">14. Friendly caricature</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a friendly caricature with a slightly larger head
                and a big smile, keep my features recognizable, bright flat
                lighting, simple colorful background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">15. 3D animated movie style</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a 3D animated character in a modern family-film
                style, soft rounded features, warm cinematic lighting, blurred
                background, 1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">16. Comic book hero</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Draw me as a comic-book hero with bold ink outlines and halftone
                shading, dramatic rim lighting, action background with motion
                lines, 2:3. No existing characters.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">17. Watercolor portrait</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn my photo into a soft watercolor portrait with loose brush
                strokes and pastel washes, gentle natural light, paper texture
                background, 4:5.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">18. Pop-art poster</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make me into a bold pop-art poster with high-contrast colors and
                dot patterns, flat graphic lighting, bright duotone background,
                1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">19. Anime-style avatar</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a clean anime-style avatar with expressive eyes and
                soft cel shading, gentle key light, simple gradient background,
                1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-indigo-400/20 rounded-2xl p-5">
              <p className="text-indigo-300 font-bold mb-2">20. Pencil sketch</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Convert my photo into a detailed graphite pencil sketch with soft
                shading and visible strokes, neutral lighting, white paper
                background, 4:5.
              </p>
            </div>
          </div>

          {/* Section 7 - Time travel */}
          <h2 id="time-travel-cinematic-prompts" className="text-3xl font-bold mt-12 mb-6">
            Time-Travel &amp; Cinematic Prompts
          </h2>
          <p className="text-gray-300 mb-6">
            These prompts drop you into another era or a movie still. They are
            some of the most-shared edits of 2026 because the storytelling feels
            cinematic. Add a decade and a mood for the best results.
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">21. 1950s diner scene</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Place me in a 1950s American diner with period clothing and
                styling, warm neon and tungsten lighting, retro booth background,
                cinematic 16:9.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">22. 1980s synthwave</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into an 80s synthwave portrait with neon pink and blue
                lighting, retro outfit, grid-and-sunset background, slight VHS
                grain, 16:9.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">23. Future cyberpunk city</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Place me in a futuristic cyberpunk city at night, sleek
                techwear, glowing neon signs, moody rim lighting, rain-soaked
                street background, 9:16.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">24. Old-Hollywood glamour</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a black-and-white old-Hollywood glamour portrait,
                dramatic studio key light with soft shadows, classic backdrop,
                3:4.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">25. Renaissance painting</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Paint me as a Renaissance oil portrait with rich textures and
                warm chiaroscuro lighting, dark muted background, ornate framing,
                4:5.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">26. Movie poster still</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make me the hero of a dramatic movie poster, cinematic color
                grade, strong backlight and lens flare, epic landscape
                background, leave space at the top for a title, 2:3.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">27. Astronaut portrait</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into an astronaut floating in space, realistic suit
                reflections, soft cosmic lighting, Earth and stars background,
                1:1.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">28. Fantasy adventurer</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Turn me into a fantasy adventurer with detailed armor and a cloak,
                moody torchlight, misty forest background, cinematic 2:3.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">29. Golden-hour magazine cover</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Make me a stylish magazine-cover portrait at golden hour, warm
                rim light, blurred city background, leave room for cover text,
                3:4.
              </p>
            </div>
            <div className="bg-black/60 border border-cyan-400/20 rounded-2xl p-5">
              <p className="text-cyan-300 font-bold mb-2">30. Double-exposure dream</p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Create a double-exposure portrait of me blended with a mountain
                landscape, soft balanced lighting, dark minimal background, 4:5.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            Want a region-specific viral idea? My{" "}
            <Link href="/blog/nano-banana-saree-trend-prompts-2026" className="text-cyan-300 underline">
              Nano Banana saree trend prompts
            </Link>{" "}
            guide uses the exact same formula for a different aesthetic.
          </p>

          {/* Section 8 - Tips */}
          <h2 id="tips-better-results" className="text-3xl font-bold mt-12 mb-6">
            Tips for Sharper, On-Trend Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-bold text-cyan-400 mb-2">Use a clean reference photo</p>
              <p className="text-sm text-gray-400">
                Good lighting and a clear face in your source photo do more for
                quality than any clever wording.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-bold text-blue-400 mb-2">Lock the face</p>
              <p className="text-sm text-gray-400">
                Add &quot;keep the same face and identity&quot; so the edit still
                looks like you across different styles.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-bold text-indigo-400 mb-2">Name your aspect ratio</p>
              <p className="text-sm text-gray-400">
                Always end with 1:1 for posts, 9:16 for reels and stories, or
                16:9 for thumbnails.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-bold text-cyan-400 mb-2">Refine in small steps</p>
              <p className="text-sm text-gray-400">
                Change one thing at a time: lighting, then background, then pose.
                Big rewrites lose what was working.
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            If you want to push further into AI tooling beyond images, my{" "}
            <Link href="/blog/top-25-free-ai-tools-2026" className="text-cyan-300 underline">
              top 25 free AI tools for 2026
            </Link>{" "}
            list covers editors, upscalers, and background removers that pair well
            with these prompts.
          </p>

          {/* Section 9 - Mistakes */}
          <h2 id="common-mistakes" className="text-3xl font-bold mt-12 mb-6">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
            <li>
              <strong>Naming real celebrities or brands.</strong> ChatGPT will
              refuse prompts featuring real people or trademarked characters. Use
              &quot;a person&quot; or original concepts instead.
            </li>
            <li>
              <strong>Vague, one-line prompts.</strong> &quot;Make me cool&quot;
              gives generic results. Fill in all five formula elements.
            </li>
            <li>
              <strong>Forgetting the aspect ratio.</strong> Without it you get a
              default crop that may not fit the platform you are posting to.
            </li>
            <li>
              <strong>Over-editing in one go.</strong> Stacking ten changes into a
              single follow-up confuses the model. Iterate slowly.
            </li>
            <li>
              <strong>Ignoring the AI label.</strong> ChatGPT images carry C2PA
              metadata marking them as AI-generated, so disclose when a platform
              asks.
            </li>
          </ul>

          {/* FAQ */}
          <h2 id="faqs" className="text-3xl font-bold mt-12 mb-10 border-t border-white/10 pt-10">
            FAQs
          </h2>
          <div className="space-y-6 mb-12">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-3 text-cyan-300">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-cyan-600 to-indigo-700 p-8 rounded-3xl text-center mb-12 shadow-xl shadow-blue-500/20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Need a Custom AI Workflow or Website?
            </h2>
            <p className="text-cyan-100 mb-8 text-lg">
              I help creators and businesses build AI-powered tools, automations,
              and fast websites. Let&apos;s turn a trend into a product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
              >
                View Services
              </Link>
              <Link
                href="/#contact"
                className="bg-indigo-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-900 transition border border-cyan-400/30"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition border border-white/20"
              >
                More Guides
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 Mohit Koli - Senior Full Stack Developer &amp; AI Strategist</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-cyan-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400">
              Terms of Service
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
