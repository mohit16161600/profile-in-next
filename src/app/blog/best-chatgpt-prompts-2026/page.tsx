import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "100+ Best ChatGPT Prompts for 2026 (Copy & Paste List)",
  description:
    "Get 100+ best ChatGPT prompts for 2026 you can copy and paste: work, study, money, marketing, coding and writing. A mega list to 10x your ChatGPT results.",
  keywords: [
    "best chatgpt prompts",
    "chatgpt prompts 2026",
    "chatgpt prompts copy paste",
    "best chatgpt prompts for work",
    "chatgpt prompts for students",
    "chatgpt prompts for business",
    "useful chatgpt prompts list",
    "chatgpt prompts to make money",
    "chatgpt marketing prompts",
    "chatgpt writing prompts 2026",
  ],
  alternates: {
    canonical: "https://mohitkoli.info/blog/best-chatgpt-prompts-2026",
  },
  openGraph: {
    title: "100+ Best ChatGPT Prompts for 2026 (Copy & Paste List)",
    description:
      "Get 100+ best ChatGPT prompts for 2026 you can copy and paste: work, study, money, marketing, coding and writing. A mega list to 10x your ChatGPT results.",
    url: "https://mohitkoli.info/blog/best-chatgpt-prompts-2026",
    type: "article",
    images: ["/assets/blog/best-chatgpt-prompts-2026.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "100+ Best ChatGPT Prompts for 2026 (Copy & Paste List)",
    description:
      "Get 100+ best ChatGPT prompts for 2026 you can copy and paste: work, study, money, marketing, coding and writing. A mega list to 10x your ChatGPT results.",
    images: ["/assets/blog/best-chatgpt-prompts-2026.svg"],
  },
};

export default function BestChatGPTPrompts2026() {
  const faqData = [
    {
      question: "How do I use a ChatGPT prompt?",
      answer:
        "Copy the prompt, paste it into ChatGPT, and replace the bracketed placeholders with your details. Then refine the answer with follow-up requests.",
    },
    {
      question: "Do these prompts work on the free ChatGPT plan?",
      answer:
        "Yes, all prompts work on free ChatGPT, though heavy or long tasks may run faster and longer on paid plans.",
    },
    {
      question: "What makes a prompt effective?",
      answer:
        "Effective prompts assign a role, give context, state the desired format, and include constraints or examples for the model to follow.",
    },
    {
      question: "Can I use these prompts in Gemini or Claude?",
      answer:
        "Yes, most prompts are model-agnostic and work well in Gemini, Claude, and DeepSeek with minor wording tweaks.",
    },
    {
      question: "Are there prompts to make money with ChatGPT?",
      answer:
        "Yes, the money and business section includes prompts for freelancing, content, and product ideas; see our dedicated ChatGPT earning guide for full methods.",
    },
    {
      question: "How do I get longer, detailed answers?",
      answer:
        "Ask ChatGPT to think step by step, specify a word count, and request sections or tables. Follow up with 'continue' for more depth.",
    },
    {
      question: "Should I save my best prompts?",
      answer:
        "Yes, keep a personal prompt library in notes or a doc so you can reuse and refine what works for your tasks.",
    },
    {
      question: "Will these prompts still work in late 2026?",
      answer:
        "The formula stays valid even as models update; you may only need to adjust wording for newer ChatGPT features.",
    },
  ];

  const keyTakeaways = [
    "Over 100 copy-paste prompts are organized by goal: work, study, money, marketing, coding, and writing.",
    "Every prompt follows a role-context-format-constraints structure you can reuse anywhere.",
    "Prompts work on free ChatGPT and transfer to Gemini, Claude, and DeepSeek.",
    "Use bracketed placeholders to customize each prompt to your situation.",
    "Save winners in a personal prompt library and refine them with follow-ups.",
  ];

  const title = "100+ Best ChatGPT Prompts for 2026 (Copy & Paste List)";
  const canonical = "https://mohitkoli.info/blog/best-chatgpt-prompts-2026";
  const image = "https://mohitkoli.info/assets/blog/best-chatgpt-prompts-2026.svg";

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description:
      "Get 100+ best ChatGPT prompts for 2026 you can copy and paste: work, study, money, marketing, coding and writing. A mega list to 10x your ChatGPT results.",
    image: image,
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    author: {
      "@type": "Person",
      name: "Mohit Koli",
      url: "https://mohitkoli.info/profile",
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
        url: "https://mohitkoli.info/assets/mohit-koli-profile-photo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    keywords:
      "best chatgpt prompts, chatgpt prompts 2026, chatgpt prompts copy paste, best chatgpt prompts for work, chatgpt prompts for students, chatgpt prompts for business, useful chatgpt prompts list, chatgpt prompts to make money, chatgpt marketing prompts, chatgpt writing prompts 2026",
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
        item: "https://mohitkoli.info/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mohitkoli.info/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Best ChatGPT Prompts 2026</span>
          </nav>

          <div className="text-center">
            <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-purple-400/20">
              Mega List
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-violet-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              100+ Best ChatGPT Prompts 2026
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-2">
              <span>By Mohit Koli</span>
              <span>•</span>
              <span>June 12, 2026</span>
              <span>•</span>
              <span>22 min read</span>
            </div>
          </div>
        </header>

        <div className="relative w-full h-72 sm:h-[450px] mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
          <Image
            src="/assets/blog/best-chatgpt-prompts-2026.svg"
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <section className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The difference between a mediocre ChatGPT answer and a jaw-dropping one is rarely the model — it is the <strong>prompt</strong>. In 2026, ChatGPT is smarter than ever, but it still does exactly what you tell it. This is a curated mega list of <strong>100+ copy-and-paste prompts</strong> grouped by goal: productivity, study, money, marketing, coding, and writing. Each one uses bracketed placeholders so you can swap in your own details in seconds.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Table of Contents</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
              <li><a href="#how-to-use-these-prompts" className="hover:text-purple-400 transition">→ How to Use These Prompts</a></li>
              <li><a href="#prompt-writing-formula" className="hover:text-purple-400 transition">→ The Prompt Formula</a></li>
              <li><a href="#productivity-prompts" className="hover:text-purple-400 transition">→ Productivity & Work Prompts</a></li>
              <li><a href="#student-study-prompts" className="hover:text-purple-400 transition">→ Student & Study Prompts</a></li>
              <li><a href="#money-business-prompts" className="hover:text-purple-400 transition">→ Money & Business Prompts</a></li>
              <li><a href="#marketing-content-prompts" className="hover:text-purple-400 transition">→ Marketing & Content Prompts</a></li>
              <li><a href="#coding-prompts" className="hover:text-purple-400 transition">→ Coding & Developer Prompts</a></li>
              <li><a href="#writing-personal-prompts" className="hover:text-purple-400 transition">→ Writing & Personal Prompts</a></li>
              <li><a href="#advanced-prompt-tricks" className="hover:text-purple-400 transition">→ Advanced Prompt Tricks</a></li>
              <li><a href="#faqs" className="hover:text-purple-400 transition">→ FAQs</a></li>
            </ul>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-l-4 border-purple-500 p-6 my-8 rounded-r-2xl">
            <h3 className="text-xl font-bold mb-4">🔑 Key Takeaways</h3>
            <ul className="list-disc pl-6 text-gray-200 space-y-2">
              {keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <h2 id="how-to-use-these-prompts" className="text-3xl font-bold mt-12 mb-6">How to Use These Prompts</h2>
          <p className="text-gray-300 mb-6">
            Every prompt below is written to be pasted directly into ChatGPT. Wherever you see square brackets like <strong>[your topic]</strong> or <strong>[target audience]</strong>, replace the text inside with your own details. The brackets are placeholders, not part of the prompt. Here is the simple three-step workflow:
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="h-9 w-9 shrink-0 rounded-full bg-purple-500 flex items-center justify-center font-bold">1</div>
              <p className="text-gray-300"><strong>Copy and paste</strong> the prompt into ChatGPT and fill in the brackets with your real context.</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="h-9 w-9 shrink-0 rounded-full bg-pink-500 flex items-center justify-center font-bold">2</div>
              <p className="text-gray-300"><strong>Read the first draft</strong>, then ask follow-ups like &quot;make it shorter&quot;, &quot;add examples&quot;, or &quot;use a friendlier tone&quot;.</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="h-9 w-9 shrink-0 rounded-full bg-violet-500 flex items-center justify-center font-bold">3</div>
              <p className="text-gray-300"><strong>Save the winners</strong> in a notes app so you build your own reusable prompt library over time.</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            New to ChatGPT entirely? Start with our friendly walkthrough on <Link href="/blog/how-to-use-chatgpt-beginners-2026" className="text-purple-400 underline hover:text-purple-300">how to use ChatGPT for beginners</Link> before you dive into the advanced prompts at the bottom of this guide.
          </p>

          <h2 id="prompt-writing-formula" className="text-3xl font-bold mt-12 mb-6">The Prompt Formula Behind Great Results</h2>
          <p className="text-gray-300 mb-6">
            Almost every powerful prompt follows the same four-part structure. Once you internalize it, you can write your own prompts for any task without a list. Think of it as <strong>Role + Context + Format + Constraints</strong>.
          </p>
          <div className="overflow-x-auto mb-10 border border-white/10 rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-4 font-bold text-white">Ingredient</th>
                  <th className="p-4 font-bold text-white">What It Does</th>
                  <th className="p-4 font-bold text-white">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 font-semibold text-purple-300">Role</td>
                  <td className="p-4">Tells ChatGPT who to be</td>
                  <td className="p-4 text-gray-400">&quot;Act as a senior marketing strategist&quot;</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-purple-300">Context</td>
                  <td className="p-4">Gives it the facts it needs</td>
                  <td className="p-4 text-gray-400">&quot;I sell handmade candles to busy moms&quot;</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-purple-300">Format</td>
                  <td className="p-4">Shapes the output</td>
                  <td className="p-4 text-gray-400">&quot;Return a table with 5 rows&quot;</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-purple-300">Constraints</td>
                  <td className="p-4">Sets the rules and limits</td>
                  <td className="p-4 text-gray-400">&quot;Keep it under 100 words, no jargon&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <p className="text-purple-300 font-semibold mb-2">📋 Master Template</p>
            <p className="text-gray-200 font-mono text-sm leading-relaxed">
              Act as a [role]. I am working on [context/goal]. Produce [desired output] in the format of [format]. Keep it [constraints such as length, tone, audience]. Ask me up to 3 clarifying questions before you begin.
            </p>
          </div>

          <h2 id="productivity-prompts" className="text-3xl font-bold mt-12 mb-6">Productivity & Work Prompts</h2>
          <p className="text-gray-300 mb-6">
            These prompts turn ChatGPT into a tireless assistant for emails, meetings, planning, and the busywork that eats your day. Pair them with the right apps from our roundup of the <Link href="/blog/best-ai-productivity-tools-2025" className="text-purple-400 underline hover:text-purple-300">best AI productivity tools</Link> to save even more hours.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Act as my executive assistant. Turn these messy notes into a clear, prioritized to-do list with time estimates: [paste notes].",
              "Summarize this email thread in 5 bullet points and draft a polite reply that confirms next steps: [paste thread].",
              "Rewrite this email to sound more confident and concise while staying friendly: [paste email].",
              "Create a 1-week deep-work schedule for me. My fixed commitments are [list] and my top 3 goals are [goals].",
              "Act as a meeting facilitator. Build an agenda for a 30-minute meeting about [topic] with time blocks and desired outcomes.",
              "Turn this transcript into meeting minutes with decisions, action items, and owners: [paste transcript].",
              "I have too many tasks. Apply the Eisenhower Matrix to this list and tell me what to drop: [list].",
              "Draft 3 versions of a follow-up message to a client who hasn't replied in [number] days about [topic].",
              "Act as a productivity coach. Diagnose why I keep procrastinating on [task] and give me a 3-step fix.",
              "Write a clear out-of-office auto-reply for [dates] that sets expectations and lists an emergency contact.",
              "Help me say no politely to this request without burning the relationship: [paste request].",
              "Create a checklist I can reuse every time I [recurring task], with no step skipped.",
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-purple-400 font-bold shrink-0">{i + 1}.</span>
                <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>

          <h2 id="student-study-prompts" className="text-3xl font-bold mt-12 mb-6">Student & Study Prompts</h2>
          <p className="text-gray-300 mb-6">
            ChatGPT is one of the best study partners ever invented — it explains, quizzes, and adapts to your level. Use these to learn faster and revise smarter (and remember to verify facts before exams).
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Explain [topic] to me like I'm 12, then again at a university level, and tell me the 3 most common misconceptions.",
              "Act as a patient tutor. Quiz me on [subject] with 10 questions, one at a time, and explain each answer after I respond.",
              "Turn these lecture notes into flashcards in a question-and-answer table: [paste notes].",
              "Create a 7-day revision plan for my [exam] on [date], covering these topics: [list].",
              "Summarize this chapter into a one-page cheat sheet with key terms in bold: [paste text].",
              "Use the Feynman technique to check my understanding: here is my explanation of [topic] — find the gaps: [explanation].",
              "Give me 5 real-world examples of [concept] so it actually sticks in my memory.",
              "Act as an exam coach. Predict 8 likely exam questions for [subject] and outline strong answers.",
              "Help me write a study schedule that uses spaced repetition for these subjects: [list].",
              "Explain the difference between [concept A] and [concept B] with a comparison table.",
              "Convert this difficult paragraph into simple language without losing accuracy: [paste paragraph].",
              "Act as a research assistant. List 5 credible angles I could explore for an essay on [topic].",
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-pink-400 font-bold shrink-0">{i + 1}.</span>
                <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>

          <h2 id="money-business-prompts" className="text-3xl font-bold mt-12 mb-6">Money & Business Prompts</h2>
          <p className="text-gray-300 mb-6">
            Whether you freelance, run a side hustle, or own a business, these prompts help you find ideas, pitch clients, and price your work. They are a starting point — pair them with real effort. For full earning methods, see our guide on the <Link href="/blog/best-ai-tools-to-make-money-online-2026" className="text-purple-400 underline hover:text-purple-300">best AI tools to make money online</Link>.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Act as a business consultant. Suggest 10 low-cost business ideas for someone with skills in [your skills] and a budget of [amount].",
              "Help me validate this business idea: [idea]. List the biggest risks and 3 cheap ways to test demand this week.",
              "Write a freelance proposal for a [type] project. Client need: [need]. Make it persuasive but not pushy.",
              "Act as a pricing expert. Suggest 3 pricing tiers for my [product or service] aimed at [audience].",
              "Draft a cold outreach message to [type of client] offering [service]. Keep it under 120 words.",
              "Turn my skill in [skill] into 5 sellable digital products I could launch with no inventory.",
              "Act as a CFO. Review this simple monthly budget and suggest where I'm overspending: [paste numbers].",
              "Create a 30-day plan to land my first [number] freelance clients in the [niche] space.",
              "Write a compelling 'About' section for my freelance profile. My niche is [niche], my edge is [strength].",
              "Brainstorm 10 upsells and add-ons I could offer existing customers of my [business].",
              "Act as a negotiation coach. Help me ask for a higher rate on this project without losing the client: [details].",
              "Outline a simple sales funnel for my [product] from first touch to purchase.",
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-green-400 font-bold shrink-0">{i + 1}.</span>
                <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-l-4 border-green-500 p-6 my-8 rounded-r-2xl">
            <h3 className="text-xl font-bold mb-2">💡 Realistic Money Note</h3>
            <p className="text-gray-200">
              ChatGPT does not print money. It accelerates the work — research, drafting, outreach — but the income comes from delivering real value to real people. Treat these prompts as leverage, not a lottery ticket.
            </p>
          </div>

          <h2 id="marketing-content-prompts" className="text-3xl font-bold mt-12 mb-6">Marketing & Content Prompts</h2>
          <p className="text-gray-300 mb-6">
            From hooks to full content calendars, these prompts speed up every stage of marketing. They work great alongside dedicated tools — see our breakdown of <Link href="/blog/top-25-free-ai-tools-2026" className="text-purple-400 underline hover:text-purple-300">the top 25 free AI tools for 2026</Link> for the full stack.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "Act as a viral content strategist. Give me 10 scroll-stopping hooks for a [platform] post about [topic].",
              "Write a 30-day content calendar for [brand] on [platform], with a theme and caption idea per day.",
              "Turn this blog post into 5 tweets, 3 LinkedIn posts, and 1 short-form video script: [paste post].",
              "Write 5 high-converting headlines for a landing page selling [product] to [audience].",
              "Act as an SEO writer. Suggest 15 long-tail keywords and content ideas for the niche [niche].",
              "Draft a friendly newsletter intro that gets people to read the rest. Topic: [topic].",
              "Write a product description for [product] that focuses on benefits, not features. Tone: [tone].",
              "Create 3 ad variations for [product] with different angles: pain, desire, and curiosity.",
              "Act as a brand strategist. Define a clear brand voice for [brand] in 5 adjectives with examples.",
              "Repurpose this long video transcript into a tight blog outline with H2s: [paste transcript].",
              "Write 10 engaging Instagram caption ideas for a [niche] account with a call to action.",
              "Audit this caption and rewrite it to boost engagement: [paste caption].",
            ].map((prompt, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-purple-400 font-bold">{i + 1}. </span>
                  {prompt}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 mb-6">
            Need eye-catching visuals to go with your captions? Steal ideas from our list of <Link href="/blog/viral-chatgpt-image-prompts-2026" className="text-purple-400 underline hover:text-purple-300">viral ChatGPT image prompts</Link> and turn plain posts into thumb-stoppers.
          </p>

          <h2 id="coding-prompts" className="text-3xl font-bold mt-12 mb-6">Coding & Developer Prompts</h2>
          <p className="text-gray-300 mb-6">
            ChatGPT is a serious coding companion in 2026 — for explaining, debugging, refactoring, and scaffolding. As a senior full stack developer, my advice: always read and test the code it gives you. For a deeper take, read our honest review of <Link href="/blog/the-truth-about-ai-coding-assistants" className="text-purple-400 underline hover:text-purple-300">AI coding assistants</Link>.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Act as a senior [language] developer. Review this code for bugs, security issues, and readability, then suggest fixes: [paste code].",
              "Explain what this function does line by line, then suggest a cleaner version: [paste code].",
              "Write a [language] function that [task]. Include comments and 3 test cases.",
              "I'm getting this error: [paste error]. Here is the relevant code: [paste code]. Find the cause and fix it.",
              "Refactor this code to be more readable and follow best practices, without changing behavior: [paste code].",
              "Convert this code from [language A] to [language B] and explain the key differences: [paste code].",
              "Design a simple database schema for a [type of app] and explain each table and relationship.",
              "Write clear documentation and a README for this project: [describe project].",
              "Generate realistic sample test data in JSON for a [entity] with these fields: [list].",
              "Act as my pair programmer. Walk me through building [feature] step by step, asking before each stage.",
              "Optimize this slow query and explain why it was slow: [paste query].",
              "Suggest a clean folder structure for a [framework] project of medium size.",
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-blue-400 font-bold shrink-0">{i + 1}.</span>
                <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>

          <h2 id="writing-personal-prompts" className="text-3xl font-bold mt-12 mb-6">Writing & Personal Prompts</h2>
          <p className="text-gray-300 mb-6">
            From polishing a resume to planning a trip, ChatGPT shines at personal tasks. These prompts cover writing, life admin, and self-improvement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "Act as a professional editor. Improve the clarity and flow of this text while keeping my voice: [paste text].",
              "Rewrite my resume bullet points to be results-driven with strong verbs: [paste bullets].",
              "Write a heartfelt thank-you message for [person] for [reason], in a warm but not cheesy tone.",
              "Help me draft a difficult message to [person] about [situation] that stays calm and respectful.",
              "Act as a life coach. Ask me 5 questions to help me clarify my goals for the next 6 months.",
              "Plan a [number]-day trip to [place] on a budget of [amount], with a day-by-day itinerary.",
              "Create a simple weekly meal plan for [diet preference] with a grocery list.",
              "Turn my rough journal entry into a clear reflection with 3 lessons I can act on: [paste entry].",
              "Write a wedding/birthday speech outline for [person]. Include one joke and one touching moment.",
              "Act as a debate partner. Argue the opposite of my view on [topic] so I can stress-test it.",
              "Help me write a polite review for [product or service] that is honest and specific.",
              "Create a 30-day habit plan to build the habit of [habit], with tiny daily steps.",
            ].map((prompt, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-pink-400 font-bold">{i + 1}. </span>
                  {prompt}
                </p>
              </div>
            ))}
          </div>

          <h2 id="advanced-prompt-tricks" className="text-3xl font-bold mt-12 mb-6">Advanced Prompt Tricks</h2>
          <p className="text-gray-300 mb-6">
            Once the basics feel natural, these techniques push ChatGPT to deliver noticeably better answers. They apply to almost every prompt in this guide.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-8">
            <li><strong>Chain of thought:</strong> Add &quot;think step by step and show your reasoning&quot; for math, logic, and planning tasks.</li>
            <li><strong>Few-shot examples:</strong> Show 1 to 3 examples of the output you want, then say &quot;now do the same for [new input]&quot;.</li>
            <li><strong>Role priming:</strong> Start with &quot;Act as a [specific expert]&quot; to unlock a more specialized tone and depth.</li>
            <li><strong>Ask for questions first:</strong> End with &quot;ask me clarifying questions before answering&quot; to avoid generic output.</li>
            <li><strong>Output format control:</strong> Request tables, JSON, bullet lists, or a specific word count to get usable results instantly.</li>
            <li><strong>Iterate, do not restart:</strong> Refine with &quot;make it shorter&quot;, &quot;more formal&quot;, or &quot;add data&quot; instead of rewriting the whole prompt.</li>
            <li><strong>Self-critique loop:</strong> Ask &quot;now critique your own answer and improve it&quot; for a stronger second draft.</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <p className="text-purple-300 font-semibold mb-2">🧪 Power Prompt to Try Now</p>
            <p className="text-gray-200 font-mono text-sm leading-relaxed">
              Act as a world-class [expert]. I want to achieve [goal]. First ask me up to 5 questions to understand my situation. Then give me a step-by-step plan with priorities, a realistic timeline, and the single most important first action. Think step by step.
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            These prompts are model-agnostic, so they also work in Gemini, Claude, and DeepSeek. Curious which assistant fits you best? Read our side-by-side comparison of <Link href="/blog/chatgpt-vs-gemini-vs-claude-best-ai-2026" className="text-purple-400 underline hover:text-purple-300">ChatGPT vs Gemini vs Claude</Link> before you commit to one.
          </p>

          {/* FAQ */}
          <h2 id="faqs" className="text-3xl font-bold mt-12 mb-10 border-t border-white/10 pt-10">FAQs</h2>
          <div className="space-y-6 mb-12">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-3 text-purple-300">Q: {faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-violet-600 to-pink-700 p-8 rounded-3xl text-center mb-12 shadow-xl shadow-purple-500/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Want AI Working For Your Business?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              I help founders and teams put AI to work — from prompt workflows to full-stack apps. Let&apos;s build something that actually saves you time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                Get In Touch 🚀
              </Link>
              <Link href="/services" className="bg-purple-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-900 transition border border-purple-400/30">
                View Services
              </Link>
              <Link href="/blog" className="bg-transparent text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition border border-white/30">
                More Guides
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 Mohit Koli - Senior Full Stack Developer & AI Strategist</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-purple-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-400">Terms of Service</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
