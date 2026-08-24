import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "15+ Hidden ChatGPT Features That Change How You Work (2026)",
  description: "Hidden ChatGPT features nobody talks about — secret hacks for developers, students and creators to 10x productivity in 2026.",
  keywords: [
    "Hidden ChatGPT features",
    "ChatGPT secret features",
    "Best ChatGPT tricks",
    "ChatGPT tips and tricks",
    "Advanced ChatGPT features",
    "AI productivity tools",
    "ChatGPT hacks",
    "Hidden AI tools",
    "ChatGPT for students",
    "ChatGPT for developers",
    "ChatGPT prompts",
    "AI tools 2026",
    "how to use ChatGPT better",
    "ChatGPT productivity tips",
    "secret AI websites",
    "ChatGPT hidden modes",
    "best AI chatbot features",
    "AI workflow automation",
    "AI content creation",
    "ChatGPT extensions",
    "future of AI tools",
    "AI blogging tools"
  ],
  alternates: {
    canonical: "https://mohitkoli.in/blog/hidden-chatgpt-features",
  },
  openGraph: {
    title: "15+ Hidden ChatGPT Features That Will Change How You Work Forever (2026)",
    description: "The ultimate guide to secret ChatGPT features that 99% of people don't know exist.",
    images: ["/assets/more-about-chatgpt.webp"],
  },
};

export default function HiddenChatGPTFeatures() {
  const faqData = [
    {
      question: "What are the most useful hidden features of ChatGPT?",
      answer: "The most useful hidden features include Custom Instructions for personalization, Advanced Data Analysis for file manipulation, and the ability to generate SVG graphics directly in the chat. Most users also overlook the Memory feature, which allows ChatGPT to learn your preferences over time."
    },
    {
      question: "Can ChatGPT generate images for free?",
      answer: "Yes, ChatGPT provides access to DALL-E 3 even on the free tier (with daily limits). However, a hidden trick is asking it to generate SVG code or ASCII art, which doesn't count against your image generation limits."
    },
    {
      question: "How do I use ChatGPT as a developer?",
      answer: "Developers can use the 'JSON Mode' via specific prompting, ask for unit tests using 'Chain of Thought' reasoning, and use the 'Advanced Data Analysis' mode to debug large log files or convert data formats (CSV to JSON) instantly."
    },
    {
      question: "What is ChatGPT's 'Memory' feature?",
      answer: "Memory allows ChatGPT to remember specific details across different conversations, such as your coding style, project names, or writing tone, so you don't have to repeat yourself in every new chat."
    },
    {
      question: "Is there a secret 'God Mode' in ChatGPT?",
      answer: "While there is no official 'God Mode', using advanced prompt engineering techniques like 'Few-Shot Prompting' and 'System Persona Mapping' can make the AI significantly more powerful and accurate than standard use."
    },
    {
        question: "How can students use ChatGPT hidden features?",
        answer: "Students can use 'Voice Mode' for language practice, 'Vision' to solve handwritten math problems, and 'Notebook style' prompts to summarize entire textbooks into study guides."
    }
  ];

  const sections = [
    { id: "wrong", title: "Why Most People Use ChatGPT Wrong" },
    { id: "custom-instructions", title: "Custom Instructions: The Soul of Your AI" },
    { id: "data-analysis", title: "Advanced Data Analysis (The File Killer)" },
    { id: "memory", title: "The Memory Feature: Your Digital Legacy" },
    { id: "vision", title: "Multimodal Vision Hacks" },
    { id: "voice", title: "Advanced Voice Mode: Your Personal Coach" },
    { id: "dev-hacks", title: "Hidden Gems for Developers" },
    { id: "creator-hacks", title: "The Creator's Secret Workforce" },
    { id: "extensions", title: "Best Chrome Extensions for 2026" },
    { id: "faq", title: "Frequently Asked Questions" }
  ];

  return (
    <main className="pt-28 pb-20 bg-[#020202] text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Schema.org Article & FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "15+ Hidden ChatGPT Features That Will Change How You Work Forever (2026)",
            "image": "https://mohitkoli.in/assets/more-about-chatgpt.webp",
            "author": {
              "@type": "Person",
              "name": "Mohit Koli"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mohit Koli",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mohitkoli.in/assets/mohit-koli-profile-photo.jpg"
              }
            },
            "datePublished": "2026-05-09",
            "dateModified": "2026-05-09",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mohitkoli.in/blog/hidden-chatgpt-features"
            },
            "articleSection": "AI Hacks",
            "inLanguage": "en-IN",
            "description": "Discover the hidden ChatGPT features nobody talks about. Learn secret hacks for developers, students, and creators to 10x your productivity."
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mohitkoli.in/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://mohitkoli.in/blog" },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Hidden ChatGPT Features",
                "item": "https://mohitkoli.in/blog/hidden-chatgpt-features"
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-400 uppercase bg-orange-400/10 border border-orange-400/20 rounded-full">
            The Ultimate AI Masterclass 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            15+ Hidden <span className="text-orange-500">ChatGPT Features</span> That Will Change How You Work Forever
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Think you know ChatGPT? Think again. Most people are only using 10% of its power. Today, we’re unlocking the remaining 90%—the secret modes, the hidden prompts, and the "God Mode" tricks the pros use.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">MK</div>
              <span>By <strong>Mohit Koli</strong></span>
            </div>
            <span>•</span>
            <time dateTime="2026-05-09">May 9, 2026</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              60 min read
            </span>
          </div>
        </header>

        <div className="relative w-full mb-16 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(249,115,22,0.1)] group">
          <Image
            src="/assets/more-about-chatgpt.webp"
            alt="Hidden ChatGPT features and secret tricks guide 2026"
            width={1280}
            height={720}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
        </div>

        {/* Powerful Intro Section */}
        <section className="prose prose-invert max-w-none">
          <div className="text-2xl text-gray-300 leading-relaxed mb-12 font-medium italic border-l-4 border-orange-500 pl-8 py-2">
            "I used to think ChatGPT was just a chatbot. Then I discovered these 15 features, and now it basically runs my entire business, my coding projects, and even my morning routine."
          </div>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Let’s be honest: Most people use ChatGPT like a glorified Google search. They ask a question, get an answer, and move on.
          </p>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            But in 2026, ChatGPT has evolved into a multimodal, autonomous agent capable of things that would have felt like science fiction just a year ago. We're talking about features that can <strong>replace entire software suites</strong>, automate weeks of work, and act as a specialized consultant in any field.
          </p>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            In this guide, we aren't just covering "how to write a prompt." We are diving into the deep architecture of OpenAI's powerhouse to find the <strong>hidden gears</strong> that make it truly intelligent.
          </p>

          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-gray-900 to-[#050505] border border-white/10 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[100px]" />
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="text-orange-500">⚡</span> Master Guide Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, idx) => (
                <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition group">
                  <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold group-hover:scale-110 transition">{idx + 1}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Section 1: Why Most People Use ChatGPT Wrong */}
          <h2 id="wrong" className="text-4xl font-bold mt-20 mb-8 text-white">1. Why Most People Use ChatGPT Wrong (The Search Engine Trap)</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            The biggest mistake users make is treating ChatGPT like a <strong>search engine</strong>.
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            When you use Google, you look for <em>information</em>. When you use ChatGPT, you should be looking for <em>intelligence</em>.
          </p>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 mb-12">
            <h4 className="text-orange-400 font-bold mb-4 uppercase tracking-wider text-sm">The Difference:</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">Search Engine:</span> "What is the best way to cook chicken?" (Returns recipes).
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">AI Agent:</span> "I have chicken, soy sauce, and a lemon. Create a 15-minute healthy recipe for someone who hates spicy food and prefers high-protein meals." (Returns a custom solution).
              </li>
            </ul>
          </div>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Most people stop at the first answer. The pros use <strong>iterative prompting</strong>. They treat ChatGPT like an intern that needs clear context, specific goals, and feedback loops.
          </p>

          <hr className="border-white/10 my-20" />

          {/* Section 2: Custom Instructions */}
          <h2 id="custom-instructions" className="text-4xl font-bold mt-20 mb-8 text-white">2. Custom Instructions: The Soul of Your AI</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            This is the most underutilized feature in the entire platform. Custom Instructions allow you to set <strong>global preferences</strong> that apply to every single chat.
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Instead of telling ChatGPT "I am a developer" in every new thread, you bake it into the system's DNA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-6 bg-white/5 rounded-2xl border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4">What to include:</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Your profession and level of expertise.</li>
                <li>• Your preferred writing style (concise, poetic, professional).</li>
                <li>• How you want the AI to handle ambiguity.</li>
                <li>• Your favorite programming languages or frameworks.</li>
              </ul>
            </div>
            <div className="p-6 bg-orange-500/10 rounded-2xl border border-orange-500/40">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Pro Tip: "Persona Mapping"</h3>
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "Tell ChatGPT to act as a 'Devil's Advocate' in its feedback. This forces the AI to find flaws in your logic rather than just agreeing with you."
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            <strong>Most people don't know this:</strong> You can use Custom Instructions to "jailbreak" the robotic tone. Tell it: "Avoid words like 'delve', 'tapestry', or 'testament'. Write like a senior engineer who is slightly tired and values brevity."
          </p>

          <hr className="border-white/10 my-20" />

          {/* Section 3: Advanced Data Analysis */}
          <h2 id="data-analysis" className="text-4xl font-bold mt-20 mb-8 text-white">3. Advanced Data Analysis (The File Killer)</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Formerly known as "Code Interpreter," this feature is basically a <strong>Python-powered sandbox</strong>. Most people use it to make charts. You should use it to do magic.
          </p>
          
          <div className="overflow-x-auto mb-16 rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-5 font-bold text-orange-400">Task</th>
                  <th className="p-5 font-bold text-orange-400">The "Secret" Hack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-5 font-semibold">Image Manipulation</td>
                  <td className="p-5 text-gray-400">Upload a PNG and ask to "Convert to WebP and resize to 1200px width."</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Video Editing</td>
                  <td className="p-5 text-gray-400">Upload a MP4 and ask to "Trim the first 5 seconds and extract the audio as MP3."</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Data Cleaning</td>
                  <td className="p-5 text-gray-400">Upload a messy Excel and say "Fix the date formats and remove duplicates."</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">QR Code Gen</td>
                  <td className="p-5 text-gray-400">Say "Generate a high-res QR code for this URL using Python."</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed font-bold text-white">
            Wait, did you know ChatGPT can generate QR codes? No internet required—it writes the code to create the image file directly in the chat.
          </p>

          <hr className="border-white/10 my-20" />

          {/* Section 4: Memory */}
          <h2 id="memory" className="text-4xl font-bold mt-20 mb-8 text-white">4. The Memory Feature: Your Digital Legacy</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            In 2026, ChatGPT's Memory is its most powerful competitive advantage. It's not just about remembering your name; it's about <strong>contextual awareness</strong>.
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            If you mention you're building a "Next.js project called PortfolioX" in one chat, three months later you can ask "How should I structure the API for PortfolioX?" and it will remember exactly what you're talking about.
          </p>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12">
            <h4 className="text-orange-400 font-bold mb-4">How to "Train" your Memory:</h4>
            <ul className="space-y-4 text-gray-400">
              <li><strong>Explicitly tell it:</strong> "Remember that I prefer TailwindCSS over plain CSS."</li>
              <li><strong>Project Context:</strong> "Remember that for Project Alpha, we are using MongoDB."</li>
              <li><strong>Personal Habits:</strong> "Remember that I start work at 9 AM and prefer short summaries."</li>
            </ul>
          </div>

          <hr className="border-white/10 my-20" />

          {/* Section 5: Vision */}
          <h2 id="vision" className="text-4xl font-bold mt-20 mb-8 text-white">5. Multimodal Vision Hacks (Eyes Everywhere)</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Vision isn't just "What's in this image?" It's <strong>functional analysis</strong>.
          </p>
          <ul className="list-disc pl-8 space-y-4 text-gray-400 mb-12 text-lg">
            <li><strong>The Designer Hack:</strong> Screenshot a website you love and ask, "Write the TailwindCSS code to recreate this hero section."</li>
            <li><strong>The Handyman Hack:</strong> Take a photo of a weird pipe under your sink and ask, "What part do I need from the hardware store to fix this?"</li>
            <li><strong>The Student Hack:</strong> Take a photo of a complex physics diagram and say, "Explain the forces at play here as if I'm 5."</li>
          </ul>

          <hr className="border-white/10 my-20" />

          {/* Section 6: Voice Mode */}
          <h2 id="voice" className="text-4xl font-bold mt-20 mb-8 text-white">6. Advanced Voice Mode: Your Personal Coach</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            If you're still typing everything, you're losing time. Advanced Voice Mode in 2026 is hyper-realistic, with <strong>near-zero latency</strong> and the ability to detect emotion.
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            <strong>The Hidden Use Case:</strong> Roleplaying. Ask ChatGPT to act as a tough hiring manager for a Google interview. Practice your answers out loud. It will give you real-time feedback on your tone, confidence, and content.
          </p>

          <hr className="border-white/10 my-20" />

          {/* Section 7: Developer Hacks */}
          <h2 id="dev-hacks" className="text-4xl font-bold mt-20 mb-8 text-white">7. Hidden Gems for Developers</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Developers often use ChatGPT to "write code," but the real power is in <strong>architecture and debugging</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-3">JSON Mode</h4>
              <p className="text-sm text-gray-400">Ask the AI to "Output only valid JSON with the following schema." This makes it easy to pipe AI data directly into your apps.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-3">Commit Message Gen</h4>
              <p className="text-sm text-gray-400">Paste your `git diff` and ask for "5 professional conventional commit messages."</p>
            </div>
          </div>

          <hr className="border-white/10 my-20" />

          {/* Section 8: Creator Hacks */}
          <h2 id="creator-hacks" className="text-4xl font-bold mt-20 mb-8 text-white">8. The Creator's Secret Workforce</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            If you're a content creator, you're likely using ChatGPT for scripts. But have you used it for <strong>storyboarding</strong>?
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Ask ChatGPT to "Create a scene-by-scene storyboard for a 60-second viral Reel about AI tools, including camera angles and lighting suggestions."
          </p>

          <hr className="border-white/10 my-20" />

          {/* Section 9: Best Chrome Extensions */}
          <h2 id="extensions" className="text-4xl font-bold mt-20 mb-8 text-white">9. Best Chrome Extensions for ChatGPT (2026)</h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            The base UI of ChatGPT is great, but these extensions turn it into a powerhouse.
          </p>
          <ul className="space-y-6 mb-24">
            <li className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <strong className="text-orange-400 text-xl block mb-2">AIPRM for ChatGPT</strong>
              <p className="text-gray-400">Access thousands of curated prompt templates for SEO, marketing, and coding. It's like having a team of experts prompting for you.</p>
            </li>
            <li className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <strong className="text-orange-400 text-xl block mb-2">WebChatGPT</strong>
              <p className="text-gray-400">Adds web access to your prompts for real-time information if you are on an older model or need specific live data feeds.</p>
            </li>
            <li className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <strong className="text-orange-400 text-xl block mb-2">ChatGPT Writer</strong>
              <p className="text-gray-400">Integrates ChatGPT into your Gmail and LinkedIn to write professional replies in seconds based on the context of the email chain.</p>
            </li>
          </ul>

          <hr className="border-white/10 my-20" />

          {/* FAQ Section */}
          <h2 id="faq" className="text-4xl font-bold mt-32 mb-12 text-white border-t border-white/10 pt-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-24">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-orange-300">Q: {faq.question}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Conclusion Section */}
          <div className="bg-gradient-to-br from-orange-600 to-red-700 p-12 sm:p-20 rounded-[3.5rem] text-center mb-24 relative overflow-hidden shadow-[0_20px_50px_rgba(234,88,12,0.3)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <h2 className="text-4xl sm:text-6xl font-black mb-8 text-white">Unlock Your Full Potential.</h2>
            <p className="text-orange-100 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
              AI isn't going to replace you, but a human using AI effectively will. Stop asking simple questions and start building complex workflows. The future belongs to those who know how to talk to the machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/blog" className="bg-white text-orange-700 px-12 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl text-lg">
                More AI Guides 🚀
              </Link>
              <PrintButton />
            </div>
          </div>
          
          <div className="text-center py-12 border-t border-white/10">
            <p className="text-2xl font-bold text-white mb-4">Did you find this valuable?</p>
            <p className="text-gray-400 mb-8">Share this with your team and help them 10x their workflow!</p>
            <div className="flex justify-center gap-4">
               {/* Share buttons would go here */}
               <button className="px-6 py-2 bg-blue-600 rounded-full font-bold">Share on X</button>
               <button className="px-6 py-2 bg-blue-800 rounded-full font-bold">Share on LinkedIn</button>
            </div>
          </div>
        </section>

        {/* SEO & Social Metadata Footer */}
        <footer className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2026 Mohit Koli • Tech Strategist & AI Specialist
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
