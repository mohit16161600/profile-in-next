/**
 * Content and data for the /lander gallery cluster.
 *
 * Each category here becomes its own indexable page at /lander/<slug>, carrying
 * real written content — not just images. A gallery page with nothing but
 * pictures has no text for Google to rank and reads as a doorway page when it is
 * one of a dozen near-identical ones. The written sections are what make these
 * pages rankable at all, so keep them specific when you edit them: every
 * paragraph should say something that would be wrong about a different category.
 *
 * ADDING AN IMAGE — two steps:
 *
 *   1. Drop the file in `public/assets/lander/`. Use .webp. This cluster shows
 *      many large images at once and total image weight is the whole performance
 *      story here.
 *   2. Add an entry to ITEMS below with the image's real pixel width and height.
 *      Those two numbers are required — next/image uses them to reserve space
 *      before the file arrives, which is what stops the grid jumping while it
 *      loads.
 *
 * Ratios do not need to match between items. The grid is a CSS column layout, so
 * tall and short cards sit together without cropping.
 *
 * ADDING A CATEGORY: add to CATEGORIES and it appears on the hub, gets its own
 * route, and enters the sitemap automatically. Do not add one you cannot write
 * real content for — four good pages beat twelve thin ones, and thin ones drag
 * the whole cluster down.
 */

export type LanderCategory = {
    /** URL segment: /lander/<slug> */
    slug: string;
    /** Short label for cards, chips and breadcrumbs. */
    name: string;
    h1: string;
    title: string;
    description: string;
    keywords: string[];
    /** One line for the hub card. */
    blurb: string;
    /** Opening copy, one string per paragraph. */
    intro: string[];
    /** What makes this page type work. */
    principles: { heading: string; body: string }[];
    /** What goes wrong most often. */
    mistakes: { heading: string; body: string }[];
    /**
     * Requirements that only exist for an Indian audience — COD, UPI, GST on the
     * price, WhatsApp as the contact channel, Hindi alongside English.
     *
     * This is the cluster's real opening. Checked 3 Nov 2026: a search for
     * layout guidance on COD pincode-checker placement returns nothing at all,
     * and the global galleries (Dribbble, Behance, Awwwards) do not appear in the
     * results for Indian business-type design queries — the competition there is
     * agency sales pages, some of them ranking with dead example links.
     *
     * Optional on purpose. Fill it only where the answer is genuinely different
     * in India; a boilerplate paragraph repeated across categories is exactly
     * what makes a cluster look like doorway pages.
     */
    indiaSpecific?: { heading: string; body: string }[];
    /**
     * What drives the cost, never a quoted figure.
     *
     * Cost queries dominate this site's own Search Console data and it ranks
     * badly on them (`shopify website cost india` at position 98), while the
     * design galleries do not compete for them at all. Worth targeting — but
     * only with what can be stood behind. No invented price ranges: name the
     * things that move the number, and link to the hosting pages where the
     * figures are verified.
     */
    cost?: { intro: string; drivers: { heading: string; body: string }[]; note: string };
    /** Include a Hinglish question where people actually search that way. */
    faq: { question: string; answer: string }[];
    /** Internal links out of the cluster, into pages that earn. */
    related: { href: string; label: string }[];
};

export type LanderItem = {
    /** Unique, kebab-case. Used as the React key. */
    slug: string;
    title: string;
    /** Must match a `slug` in CATEGORIES. */
    category: string;
    /** Path under /public, e.g. "/assets/lander/kirana-store-home.webp" */
    image: string;
    width: number;
    height: number;
    /** One line on the decision worth pointing at. Shown in the lightbox. */
    note?: string;
    tags?: string[];
};

export const CATEGORIES: LanderCategory[] = [
    {
        slug: "landing-page",
        name: "Landing Pages",
        h1: "Landing Page Designs",
        title: "Landing Page Design Examples & Layouts (India)",
        description:
            "Landing page layouts built around a single action, with the structure that converts and the mistakes that kill it. Examples, section order and what to host it on.",
        keywords: [
            // PRIMARY
            "landing page design",
            // SECONDARY
            "landing page design examples",
            "landing page layout",
            "high converting landing page design",
            // LONG-TAIL
            "landing page design india",
            "landing page structure that converts",
            "how many sections should a landing page have",
            // SUPPORTING
            "above the fold design",
            "cta placement",
            "single page conversion layout",
        ],
        blurb: "One page, one action. Built to be scanned in nine seconds, not read.",
        intro: [
            "A landing page is not a small website. It has one job, and every section either moves someone toward that job or is costing you conversions. That constraint is what makes landing pages the hardest layout on this list to get right — there is nowhere to hide a weak section behind navigation.",
            "The layouts here are grouped by what the page is asking for, because a page selling a ₹500 course and a page booking a ₹5,00,000 service need completely different amounts of proof before the button. The cheap one can ask immediately. The expensive one has to earn it over six sections.",
        ],
        principles: [
            {
                heading: "One action, repeated",
                body: "Pick the single thing you want and put that button in the hero, in the middle, and at the end. Not three different asks — the same ask three times, because people convert at different points in the scroll and you cannot predict which.",
            },
            {
                heading: "The fold has to say what and for whom",
                body: "If someone cannot tell in the first screen what you sell and whether they are the right person for it, nothing below matters. Specific beats clever: \"Hosting cost calculator for Indian buyers\" outperforms \"Make smarter decisions\" every time.",
            },
            {
                heading: "Proof sits next to the ask, not in a section of its own",
                body: "A testimonials block halfway down gets scrolled past. The same testimonial placed directly under the button answers the doubt at the moment it appears.",
            },
            {
                heading: "Remove the navigation",
                body: "Every header link is an exit. A landing page with a full site menu leaks the traffic you paid for. Logo, maybe a phone number, nothing else.",
            },
            {
                heading: "Mobile is the design, not the adaptation",
                body: "Most Indian traffic arrives on a phone on a mid-range connection. Design the single-column version first and let the desktop layout be the variant — doing it the other way round is how hero text ends up at 11px.",
            },
        ],
        mistakes: [
            {
                heading: "A carousel in the hero",
                body: "Nobody waits for slide two. Whatever is on it is effectively unpublished, and the slider costs you JavaScript on the critical path for the privilege.",
            },
            {
                heading: "Asking for too many fields",
                body: "Every field is a decision point. Name, phone, email, company, budget, requirement — that form is why the page is not converting. Ask for the minimum that lets you follow up.",
            },
            {
                heading: "Stock photography of people pointing at laptops",
                body: "It reads as a template and signals that there is nothing real to show. A screenshot of the actual product beats a model in a meeting room.",
            },
            {
                heading: "No answer to \"what happens after I click\"",
                body: "People hesitate because they do not know whether the button charges them, calls them, or opens a form. One line under the button removes the hesitation.",
            },
        ],
        faq: [
            {
                question: "How many sections should a landing page have?",
                answer: "As many as it takes to answer the objections that come up in your actual sales conversations, and not one more. A cheap, low-risk offer often needs three or four. A high-value service usually needs six to eight, because there is more doubt to clear. Section count is an output of the price, not a design choice.",
            },
            {
                question: "Should a landing page have a navigation menu?",
                answer: "No. Every link in the header is a way out of the page, and on paid traffic that is money leaving. Keep the logo and, if people call you, a phone number. Put the legal links in the footer where they are required but not inviting.",
            },
            {
                question: "What should go above the fold?",
                answer: "What you sell, who it is for, and the button. A visitor who cannot work out those three things from the first screen will not scroll to find them. Everything else — features, pricing, proof — can wait.",
            },
            {
                question: "How do I know whether my landing page is working?",
                answer: "Compare the conversion rate against your own previous version, not against an industry benchmark. Benchmarks mix traffic sources, price points and markets that have nothing to do with yours. Change one thing, measure for long enough to get a real sample, keep what wins.",
            },
        ],
        related: [
            { href: "/services", label: "Landing page development service" },
            { href: "/blog/build-website-with-ai-step-by-step", label: "Build a website with AI, step by step" },
            { href: "/blog/best-web-hosting-india-2026", label: "Best web hosting in India" },
        ],
    },
    {
        slug: "e-commerce",
        name: "E-commerce",
        h1: "E-commerce Website Designs",
        title: "E-commerce Website Design Examples & Layouts (India)",
        description:
            "Product, category and checkout layouts for Indian online stores — what to show, where COD and returns belong, and the checkout steps that lose the sale.",
        keywords: [
            // PRIMARY
            "ecommerce website design",
            // SECONDARY
            "ecommerce website design examples",
            "online store design india",
            "product page design",
            // LONG-TAIL
            "ecommerce website design india",
            "product page layout that converts",
            "checkout page design best practices",
            // SUPPORTING
            "category page design",
            "cart abandonment layout",
            "cod trust signals",
        ],
        blurb: "Product, category and checkout screens built for comparison and for COD buyers.",
        intro: [
            "E-commerce layouts are judged on one number and it is not how they look. A store design works if people reach the payment screen and finish. Everything on a product page is either reducing the doubt that stops that, or it is decoration.",
            "Indian stores carry doubts that templates built for the US market do not answer. Is cash on delivery available on this pincode. What does return actually cost me. Is GST included in this price. A layout that leaves those three unanswered until checkout is why the cart gets abandoned at step two.",
        ],
        principles: [
            {
                heading: "Price with tax, in one number",
                body: "A price that grows at checkout is the single most reliable way to lose a buyer who had already decided. Show the figure they will actually pay, and if GST is extra, say so at the price and not three screens later.",
            },
            {
                heading: "Delivery and return terms on the product page",
                body: "These are not policy-page content. They are purchase decisions, and they belong next to the Add to Cart button where the decision is being made.",
            },
            {
                heading: "Category pages are comparison tools",
                body: "People do not browse, they narrow. Filters that match how buyers actually think — price band, size, in-stock — do more for revenue than any amount of grid styling.",
            },
            {
                heading: "Real photography, multiple angles, zoomable",
                body: "This is the only substitute for picking the thing up. One hero shot is not enough, and a 3MB uncompressed image that takes six seconds on 4G is worse than a smaller clear one.",
            },
            {
                heading: "Guest checkout exists",
                body: "Forcing account creation before payment is a decision to lose first-time buyers. Offer the account after the order is placed, when they have a reason to want it.",
            },
        ],
        mistakes: [
            {
                heading: "A four-step checkout with a progress bar",
                body: "The progress bar does not make four steps acceptable, it just tells people how much is left. Collapse to as few screens as the payment flow allows.",
            },
            {
                heading: "Hiding stock status until the cart",
                body: "Someone who gets to payment and then learns the item is unavailable does not come back. Show it on the product card.",
            },
            {
                heading: "Coupon field in the middle of checkout",
                body: "It tells every buyer without a code that they are paying too much, and sends them to a coupon site — from which many do not return.",
            },
            {
                heading: "No trust signals near payment",
                body: "The payment screen is where doubt peaks. A contact number, the return window and the payment logos belong there, not in the footer.",
            },
        ],
        indiaSpecific: [
            {
                heading: "The COD pincode checker goes on the product page",
                body: "Not in the cart, and not at checkout. Cash on delivery availability is a purchase condition for a large part of the Indian market, so it has to be answerable at the moment the buyer is deciding. Put the pincode field directly under the price, remember the entered pincode across the session, and show the serviceability answer plus the expected delivery window in the same place. A buyer who reaches payment and only then learns COD is unavailable for their area does not switch to prepaid — they leave.",
            },
            {
                heading: "Show the UPI option first, not last",
                body: "UPI is the default payment habit for most Indian buyers, and payment method lists are usually ordered card-first because the template was built for another market. Put UPI at the top of the list with the app logos visible. A buyer who has to scroll past three card fields to find the option they intended to use reads the store as unfamiliar with how they pay.",
            },
            {
                heading: "GST: decide inclusive or exclusive, then say which, at the price",
                body: "A price that grows 18% at checkout is the most reliable way to lose a buyer who had already decided. Pick one convention for the whole store and label it at every price — \"₹1,499 incl. GST\" or \"₹1,270 + GST\". For B2B stores the GSTIN field also belongs in the address step, because a business buyer who cannot claim input credit will not place the order.",
            },
            {
                heading: "WhatsApp is a support channel, so design for it",
                body: "A floating WhatsApp button is standard on Indian stores and it works, but placement matters: bottom-right collides with the Add to Cart bar on mobile, and that bar is the one thing that must never be covered. Put it bottom-left, or pin it inside the product information block. Pre-fill the message with the product name so you are not asking the customer which item they meant.",
            },
            {
                heading: "Return cost in rupees, not in policy language",
                body: "\"Easy returns\" means nothing. \"Free return pickup within 7 days\" or \"Return shipping ₹99, deducted from refund\" is a number the buyer can weigh. This single line next to the button does more for conversion than the entire policy page it replaces.",
            },
        ],
        cost: {
            intro:
                "What moves an Indian store's total is almost never the design. It is the integrations — payment, delivery, COD reconciliation, GST invoicing — and then the running cost that nobody budgets at the start.",
            drivers: [
                {
                    heading: "Platform model, not platform name",
                    body: "A hosted platform is a monthly subscription that never stops and includes the hosting. A self-hosted store is a one-time build cost plus hosting you own and renew. Over four years these two totals can invert, which is why comparing the signup prices tells you nothing.",
                },
                {
                    heading: "Payment and logistics integration",
                    body: "A gateway, a shipping aggregator, COD remittance reconciliation and GST invoice generation are four separate pieces of work. This is where most of an Indian store build actually goes.",
                },
                {
                    heading: "Product count and catalogue work",
                    body: "Twenty products and two thousand products are different projects. Photography, descriptions and variant setup scale with the catalogue and are usually underestimated more than the development.",
                },
                {
                    heading: "Hosting renewal, which is the part that surprises people",
                    body: "Indian hosting renewal rates run far above the introductory rate. The shared tier commonly used for a WooCommerce store goes from ₹149/mo on a long term to ₹449/mo at renewal, and no coupon or referral code ever applies to a renewal. Work out the four-year total before committing.",
                },
            ],
            note:
                "Hosting figures above are Hostinger's own published India rates, checked 17 September 2026. Everything else varies by scope, so treat a quote that arrives without these questions being asked as a guess.",
        },
        faq: [
            {
                question: "How much does an e-commerce website cost in India?",
                answer: "It splits into three very different ranges. A hosted platform store is a monthly subscription plus a theme. A WooCommerce build on your own hosting is a one-time development cost plus hosting and renewals. A custom storefront is a project budget. What moves the total most is not the design — it is payment, logistics and inventory integrations, which is where most of the work actually sits.",
            },
            {
                question: "Shopify or WooCommerce for an Indian store?",
                answer: "Shopify trades money for not being your problem — it is a subscription and the platform handles hosting, updates and PCI scope. WooCommerce trades your time for control and no per-month platform fee, but you own the hosting, the updates and the security. The deciding question is whether you have someone to maintain it.",
            },
            {
                question: "Where should cash on delivery be mentioned?",
                answer: "On the product page, next to the price, with the pincode check if you have one. COD availability is a purchase condition for a large part of the Indian market. Revealing it at checkout means everyone who needed it has already left.",
            },
            {
                question: "How many product images are enough?",
                answer: "Enough to replace handling the item. For clothing that means fit on a person plus fabric close-up. For electronics it means ports, scale against a known object, and what is in the box. One studio shot is enough only for commodity goods people already know.",
            },
            {
                question: "Online store banane me kitna kharcha aata hai?",
                answer: "Do alag kharche hote hain aur log sirf pehla jodte hain. Ek baar ka build cost, aur phir har saal ka hosting aur domain renewal. India me hosting ka renewal rate intro rate se kaafi zyada hota hai — jo shared plan ₹149/mo pe milta hai, wo renewal pe ₹449/mo ho jaata hai, aur kisi bhi coupon ya referral code ka renewal pe koi asar nahi hota. Isliye pehle saal ka price dekh kar faisla karna galti hai; chaar saal ka total nikaalein.",
            },
            {
                question: "COD pincode checker kahan lagana chahiye?",
                answer: "Product page par, price ke theek neeche — cart me nahi, checkout me nahi. COD India me kharidne ki shart hai, aur buyer usi waqt jaanna chahta hai jab wo faisla kar raha hota hai. Checkout tak bataya to jisko COD chahiye tha wo pehle hi ja chuka hoga.",
            },
        ],
        related: [
            { href: "/blog/shopify-vs-woocommerce", label: "Shopify vs WooCommerce compared" },
            { href: "/blog/react-se-ecommerce-website-kaise-banaye", label: "React se e-commerce website kaise banaye" },
            { href: "/blog/shopify-review-india-2026", label: "Shopify review for India" },
        ],
    },
    {
        slug: "mobile-design",
        name: "Mobile Design",
        h1: "Mobile App UI Designs",
        title: "Mobile App UI Design Examples & Screen Layouts",
        description:
            "App screen layouts — onboarding, navigation, empty states and store listings — with the constraints that decide whether a design survives a real device.",
        keywords: [
            // PRIMARY
            "mobile app ui design",
            // SECONDARY
            "app ui design examples",
            "mobile app screen design",
            "app onboarding screen design",
            // LONG-TAIL
            "mobile app ui design india",
            "app ui design for android and ios",
            "app store screenshot design size",
            // SUPPORTING
            "bottom navigation design",
            "empty state design",
            "thumb zone layout",
        ],
        blurb: "App screens, onboarding flows and store listings, designed for one thumb.",
        intro: [
            "App design is constrained in ways web design is not. There is one hand, a reachable area that covers maybe the bottom two thirds of the screen, an operating system with opinions, and a store reviewer who can reject the whole thing over a screenshot size.",
            "The screens collected here are organised by the moment they appear in — first launch, routine use, something went wrong — because those three moments have nothing in common. Onboarding gets one shot and has no data to work with. A daily-use screen is competing with muscle memory. An error state is the only screen that has to work when everything else has failed.",
        ],
        principles: [
            {
                heading: "Put actions in the thumb zone",
                body: "The primary action belongs in the lower part of the screen. A top-right confirm button on a 6.7-inch phone requires regripping, and people regrip by putting the phone down.",
            },
            {
                heading: "Design the empty state first",
                body: "Every list, feed and dashboard starts empty, and that is the screen a new user actually sees. A blank area with no explanation is where most installs are abandoned.",
            },
            {
                heading: "Onboarding should ask for one thing at a time",
                body: "Permissions, account, notifications and a tour on first launch is four rejections in a row. Ask for a permission at the moment it is needed, with the reason visible.",
            },
            {
                heading: "Respect the platform where it costs nothing",
                body: "Back gesture on Android, swipe-back on iOS, system share sheets, native date pickers. A custom control that behaves almost like the native one is worse than the native one.",
            },
            {
                heading: "Store screenshots are part of the design",
                body: "They are the only screens most people see before deciding, and both stores reject wrong dimensions automatically. Design them as marketing, not as raw captures.",
            },
        ],
        mistakes: [
            {
                heading: "Hamburger menu as primary navigation",
                body: "It hides the app from its own users. Anything behind it gets a fraction of the use of the same item in a bottom tab bar.",
            },
            {
                heading: "Tap targets under 44px",
                body: "Both platforms publish a minimum for a reason. A dense list of 30px rows produces mis-taps, and mis-taps produce uninstalls.",
            },
            {
                heading: "A loading spinner where a skeleton belongs",
                body: "A spinner says wait. A skeleton says what is coming and makes the same delay feel shorter.",
            },
            {
                heading: "Text baked into screenshots in one language only",
                body: "It makes every later localisation a redesign, and it is the most common reason store listings go stale.",
            },
        ],
        faq: [
            {
                question: "Should an Android and an iOS app look identical?",
                answer: "The content and the brand should match. The navigation and the controls should not. Users judge an app against the other apps on their own phone, so a design that ignores platform conventions reads as unfinished on whichever platform it was not designed for.",
            },
            {
                question: "What screenshot sizes do the app stores need?",
                answer: "Both stores publish an exact required set and both reject submissions automatically when the dimensions are wrong. Check the current requirement in Play Console and App Store Connect at the time you submit — the lists change, and a stale blog post is the usual reason a first submission bounces.",
            },
            {
                question: "How long should app onboarding be?",
                answer: "Short enough that someone can reach the thing they installed the app for. If onboarding explains features, it is too long — explain a feature at the point of use instead, where it is relevant and cannot be skipped by accident.",
            },
            {
                question: "Do I need a designer before I can publish?",
                answer: "No, but you need the required assets at the right dimensions, a store listing, and the privacy forms filled to match what the app actually does. Those are the things that block submission, and they are mechanical rather than creative.",
            },
        ],
        related: [
            { href: "/services/app-deployment", label: "App deployment service — Play Store and App Store" },
            { href: "/services", label: "Web and app development services" },
        ],
    },
    {
        slug: "website",
        name: "Business Websites",
        h1: "Business Website Designs",
        title: "Business Website Design Examples & Page Layouts",
        description:
            "Full website layouts for Indian businesses — home, about, services and contact — with the page structure that gets enquiries instead of compliments.",
        keywords: [
            // PRIMARY
            "business website design",
            // SECONDARY
            "website design examples",
            "small business website layout",
            "company website design india",
            // LONG-TAIL
            "business website design india",
            "how many pages does a business website need",
            "website design for small business india",
            // SUPPORTING
            "about page layout",
            "contact page design",
            "service page structure",
        ],
        blurb: "Multi-page sites for businesses that need to be found and then believed.",
        intro: [
            "A business website is doing two jobs that pull in different directions. It has to be found by someone searching, which rewards depth and text, and it has to convince whoever arrives, which rewards clarity and brevity. Most sites pick one and lose on the other.",
            "The structures here resolve that by separating them. Pages that exist to be found carry the depth. Pages that exist to convert carry the clarity. The home page is not the most important page on a business site — it is the least likely entry point, because people arrive from search on whatever page answered their question.",
        ],
        principles: [
            {
                heading: "One page per thing people search for",
                body: "A single services page listing eight offerings ranks for none of them. Eight pages, each answering one search, is how a small site competes with a bigger one.",
            },
            {
                heading: "Every page is a landing page",
                body: "Search sends people to interior pages, not the home page. If a service page has no way to contact you on it, it is a dead end for the traffic that was hardest to earn.",
            },
            {
                heading: "Contact details as text, not an image",
                body: "A phone number in a graphic cannot be tapped, copied, or read by a search engine. This single mistake costs more enquiries than any layout decision.",
            },
            {
                heading: "The about page is a trust page",
                body: "It is one of the most visited pages on a business site, because people check who they are dealing with before they enquire. A real photo and a real address outperform a paragraph about passion for excellence.",
            },
            {
                heading: "Load speed is part of the design",
                body: "A layout that needs four fonts, a slider and a video background is a slow site, and on a mid-range phone on mobile data that is a bounce before anything is seen.",
            },
        ],
        mistakes: [
            {
                heading: "An auto-playing video background",
                body: "It delays everything that matters, drains battery, and on a metered connection it spends the visitor's money to show them a mood.",
            },
            {
                heading: "A contact form as the only way to reach you",
                body: "A large share of Indian buyers want to call. A form-only contact page filters out your most ready customers.",
            },
            {
                heading: "No indication of price, anywhere",
                body: "Total silence on cost does not create curiosity, it creates suspicion. A range, a starting figure, or an explanation of what drives the price all work better than nothing.",
            },
            {
                heading: "Writing for yourself instead of for the search",
                body: "\"Bespoke digital solutions\" is not what anyone types. The page title should contain the words a customer would actually use.",
            },
        ],
        indiaSpecific: [
            {
                heading: "WhatsApp before the contact form",
                body: "For most Indian small businesses WhatsApp is where the enquiry actually arrives, and a form is where it goes to be ignored. Put a WhatsApp link with a pre-filled message as the primary action and keep the form as the secondary one. Pre-fill it with the page the visitor is on, so you know what they were reading when they decided to message.",
            },
            {
                heading: "A tappable phone number, as text",
                body: "Wrap it in a tel: link so one tap dials. A number sitting inside a header graphic cannot be tapped, cannot be copied, and cannot be read by Google — and this single mistake costs more enquiries than any layout decision on the page.",
            },
            {
                heading: "Hindi where the customer is Hindi-speaking",
                body: "Not a translated clone of the whole site — one well-written page in Hindi for the service that gets the most local enquiries, at its own URL. The global competition is entirely in English, so this is the one place where a small site has no competition at all. Keep the page titles in the words people type, Devanagari or Roman, whichever they actually use.",
            },
            {
                heading: "Name, address and phone as plain text, identical everywhere",
                body: "The same spelling on the site, on the Google Business Profile and in any directory listing. Local search matches these against each other, and an abbreviation difference is enough to split the signal.",
            },
        ],
        cost: {
            intro:
                "Two costs exist and people budget only the first. The build is one-time. The domain and hosting renew every year, for as long as the site is up.",
            drivers: [
                {
                    heading: "How many pages have to rank",
                    body: "A page for each thing you want to be found for is the whole SEO strategy on a small site, and it is also the main thing that scales the build. Four services is four pages of real writing, not four bullet points.",
                },
                {
                    heading: "Who edits it after launch",
                    body: "If a non-technical person will update content, that means a CMS and a brief, which costs more up front and far less over two years. If the site is fixed, a static build is cheaper, faster, and needs almost no maintenance.",
                },
                {
                    heading: "Content, which is usually the bottleneck",
                    body: "Photography and written copy delay more projects than development does. A site that is otherwise finished can sit unlaunched for a month waiting for text.",
                },
                {
                    heading: "The renewal, every year",
                    body: "Hosting advertised at ₹149/mo on a four-year term renews at ₹449/mo, and 18% GST is added at checkout. The advertised monthly figure is also a division, not a billing cycle — the full term is one upfront invoice.",
                },
            ],
            note:
                "Hosting figures are Hostinger's published India rates, checked 17 September 2026. Run your own numbers on the calculator rather than taking a quote's first-year price at face value.",
        },
        faq: [
            {
                question: "How many pages does a small business website need?",
                answer: "Start with home, about, contact, and one page for each distinct thing you want to be found for. That last part is what decides the number — a business with four separate services needs four pages, not one page with four headings, because one page cannot rank for four different searches.",
            },
            {
                question: "What does a business website cost in India?",
                answer: "The build is one cost and the running is another, and people usually budget only the first. Domain and hosting renew every year, and hosting renewal rates in India are typically far above the introductory rate you paid at signup. Work out the four-year total before you commit to a plan, not the first-year price.",
            },
            {
                question: "Do I need a blog on a business website?",
                answer: "Only if you will keep writing. Three posts from two years ago actively signal an inactive business. If you can commit to it, it is the cheapest way to get found for questions your customers ask before they are ready to buy.",
            },
            {
                question: "WordPress or a custom build?",
                answer: "WordPress if content changes often and someone non-technical will be editing it. A custom build if the site is mostly fixed and speed matters, or if it has to do something a plugin cannot. The honest deciding factor is who maintains it after launch.",
            },
            {
                question: "Business website banane me kitna kharcha aata hai?",
                answer: "Kharcha do hisson me hota hai. Ek, build ka one-time cost — jo is baat pe nirbhar karta hai ki kitne page chahiye aur content kaun likhega. Do, har saal ka domain aur hosting renewal, jise log budget me hi nahi jodte. India me hosting ka renewal intro rate se kaafi upar hota hai: ₹149/mo wala plan renewal pe ₹449/mo, aur 18% GST alag. Jo \"₹149/mo\" likha hota hai wo billing cycle nahi, bhaag hai — poora term ek hi invoice me dena padta hai.",
            },
            {
                question: "Kya website ke liye Hindi page banana chahiye?",
                answer: "Agar aapke customer Hindi me baat karte hain to haan — par poori site ka translation nahi. Jis ek service se sabse zyada local enquiry aati hai, usi ka ek acha Hindi page banaiye, apne URL pe. Global competition poori tarah English me hai, isliye yahi ek jagah hai jahan chhoti site ko koi takkar nahi milti.",
            },
        ],
        related: [
            { href: "/services", label: "Web development services" },
            { href: "/blog/best-web-hosting-india-2026", label: "Best web hosting in India" },
            { href: "/blog/best-domain-registrars-india-2026", label: "Best domain registrars in India" },
            { href: "/tools/hosting-cost-calculator", label: "Hosting cost calculator" },
        ],
    },
    {
        slug: "saas-dashboard",
        name: "SaaS & Dashboards",
        h1: "SaaS and Dashboard Designs",
        title: "SaaS Dashboard Design Examples & App Layouts",
        description:
            "Application shells, data-dense screens and in-product onboarding — layouts for software people use daily rather than visit once.",
        keywords: [
            // PRIMARY
            "saas dashboard design",
            // SECONDARY
            "dashboard ui design examples",
            "saas app layout",
            "admin panel design",
            // LONG-TAIL
            "data dense dashboard layout",
            "saas onboarding screen design",
            "dashboard design best practices",
            // SUPPORTING
            "sidebar navigation design",
            "data table design",
            "analytics screen layout",
        ],
        blurb: "Screens people open every day — where density beats decoration.",
        intro: [
            "Dashboards are the one layout judged on repeat use rather than first impression. A marketing page has to impress once. A dashboard has to stay out of the way for two years, which means the decisions that look conservative are usually the right ones.",
            "The screens here lean dense. Software that someone uses daily earns the right to show more at once, because familiarity replaces discoverability — and generous whitespace that felt calm in week one becomes scrolling in month six.",
        ],
        principles: [
            {
                heading: "Answer the one question the screen exists for",
                body: "Every dashboard is opened with a question in mind. Put the answer at the top at a size that can be read from a distance, and the supporting detail underneath.",
            },
            {
                heading: "A number needs a comparison to mean anything",
                body: "\"4,312 visits\" says nothing. Against last month, against target, or as a trend line, it becomes information. The comparison is not decoration, it is the content.",
            },
            {
                heading: "Tables are a design surface",
                body: "Right-align numbers, use a tabular font so digits line up, keep the header visible when scrolling, and make sort and filter obvious. Most dashboard work is table work.",
            },
            {
                heading: "Design loading, empty and error for every view",
                body: "A new account sees empty. A slow query shows loading. A failed one shows an error. Skipping these means the most common first experience is undesigned.",
            },
            {
                heading: "Colour means something or it means nothing",
                body: "If red is bad and green is good, nothing else may be red or green. A brand palette applied decoratively across a data screen destroys the only signal the user had.",
            },
        ],
        mistakes: [
            {
                heading: "A pie chart with nine slices",
                body: "Nobody can compare nine angles. A sorted bar chart answers the same question in a glance and takes less space.",
            },
            {
                heading: "Icon-only navigation with no labels",
                body: "It looks clean in a screenshot and costs every user a guess. Label the items; the few pixels are cheaper than the hesitation.",
            },
            {
                heading: "A product tour on first login",
                body: "It is dismissed and then forgotten. Contextual help at the point of confusion is used; a tour is endured.",
            },
            {
                heading: "Truncating data to fit the layout",
                body: "If the real values do not fit, the layout is wrong. Design with the longest realistic string, not with sample data.",
            },
        ],
        faq: [
            {
                question: "Sidebar or top navigation for a SaaS app?",
                answer: "A sidebar scales to more sections and survives growth, which is why most applications end up there. Top navigation suits a product with few areas and buys back vertical space. The real question is how many destinations you will have in two years, not today.",
            },
            {
                question: "How much data should one dashboard screen show?",
                answer: "More than a marketing page and less than everything you have. The test is whether a daily user can find what they came for without scrolling. If a screen needs a legend to be understood, it is holding too much.",
            },
            {
                question: "Should a dashboard have a dark mode?",
                answer: "If people stare at it for hours, yes, and build it with colour tokens from the start rather than retrofitting. Doing it later means revisiting every chart, border and shadow, because a dark theme is not an inverted light one.",
            },
            {
                question: "What is the most common dashboard design mistake?",
                answer: "Showing numbers without context. A screen full of totals with nothing to compare them against gives the user no basis for a decision, which is the only reason they opened it.",
            },
        ],
        related: [
            { href: "/services", label: "Custom SaaS application development" },
            { href: "/blog/best-vps-hosting-india-2026", label: "Best VPS hosting in India" },
            { href: "/blog/hostinger-kvm-vps-plans-india-2026", label: "Hostinger KVM VPS plans compared" },
        ],
    },
    {
        slug: "portfolio",
        name: "Portfolio",
        h1: "Portfolio Website Designs",
        title: "Portfolio Website Design Examples & Layouts",
        description:
            "Work-first portfolio layouts for designers, developers and photographers — how to order case studies and what hiring managers actually look for.",
        keywords: [
            // PRIMARY
            "portfolio website design",
            // SECONDARY
            "portfolio website examples",
            "developer portfolio design",
            "designer portfolio layout",
            // LONG-TAIL
            "portfolio website design india",
            "how many projects in a portfolio",
            "portfolio case study structure",
            // SUPPORTING
            "personal website layout",
            "case study page design",
            "resume website design",
        ],
        blurb: "Layouts where the work carries the page and the design stays out of its way.",
        intro: [
            "A portfolio is read by someone deciding whether to spend money or make an offer, usually in under two minutes, usually on a phone, usually with several other tabs open. That is the whole brief.",
            "The layouts here put work first because that is what the visitor came for. A portfolio whose home page is an animated introduction is asking for patience from the one audience that has none.",
        ],
        principles: [
            {
                heading: "Best work first, no chronology",
                body: "Newest-first is a filing system, not a case. Lead with the strongest piece regardless of when it was made, and cut everything you would not want to be judged on.",
            },
            {
                heading: "Show the problem, not just the pixels",
                body: "A screenshot shows what you made. Two lines on the constraint and what changed because of your work shows that you can think, which is what is actually being assessed.",
            },
            {
                heading: "Say what you did on team projects",
                body: "\"Worked on\" is read as ambiguity. Naming your part is more credible than implying the whole, and experienced reviewers assume the worst when it is unclear.",
            },
            {
                heading: "Make contact unavoidable",
                body: "Email as copyable text on every page. A visitor who decides to reach out should never have to go looking.",
            },
            {
                heading: "Your own site is a work sample",
                body: "A slow, broken-on-mobile portfolio is evidence, whatever the case studies claim. This is the one page where performance is part of the argument.",
            },
        ],
        mistakes: [
            {
                heading: "A loading animation before the content",
                body: "Nobody waits to be impressed by a preloader. It is a self-inflicted delay on the only page you need people to stay on.",
            },
            {
                heading: "Twenty projects of mixed quality",
                body: "A portfolio is judged by its weakest visible piece, not averaged. Six strong projects beat twenty uneven ones.",
            },
            {
                heading: "Scroll-jacking and custom cursors",
                body: "They break the one interaction people rely on, and on a phone they do nothing except cost download size.",
            },
            {
                heading: "No indication of what you want",
                body: "Open to work, taking projects, hiring — if the visitor cannot tell, the enquiry does not happen.",
            },
        ],
        faq: [
            {
                question: "How many projects should a portfolio show?",
                answer: "Four to eight, with real depth on two or three. Reviewers rarely get past the third item, so everything after that is only diluting the impression made by the first ones.",
            },
            {
                question: "Should a developer portfolio have a blog?",
                answer: "It helps if you write about what you actually build, because it demonstrates reasoning that a screenshot cannot. An abandoned blog with three posts from two years ago does the opposite.",
            },
            {
                question: "Do I need case studies or are screenshots enough?",
                answer: "For freelance and hiring, a short case study wins — the constraint, your decision, the outcome. Three sentences is enough. Screenshots alone prove you were present; they do not prove you decided anything.",
            },
            {
                question: "Where should a portfolio be hosted?",
                answer: "Anywhere fast and cheap, since a portfolio is almost always static. A static site needs no database, so the entry hosting tier is enough — just check the renewal rate before committing to a long term.",
            },
        ],
        related: [
            { href: "/profile", label: "My own profile page" },
            { href: "/blog/mohit-koli-backend-developer-laravel-php-profile", label: "Backend developer profile" },
            { href: "/blog/best-web-hosting-india-2026", label: "Best web hosting in India" },
        ],
    },
    {
        slug: "restaurant",
        name: "Restaurant & Cafe",
        h1: "Restaurant and Cafe Website Designs",
        title: "Restaurant Website Design Examples (India)",
        description:
            "Restaurant and cafe layouts for Indian outlets — menu, timings, location and ordering — built for someone standing outside deciding whether to walk in.",
        keywords: [
            // PRIMARY
            "restaurant website design",
            // SECONDARY
            "restaurant website design examples",
            "cafe website design",
            "restaurant website india",
            // LONG-TAIL
            "restaurant website design india",
            "restaurant menu page design",
            "cloud kitchen website design",
            // SUPPORTING
            "online table booking layout",
            "menu page without pdf",
            "local business website design",
        ],
        blurb: "Menu, timings and directions — for someone deciding on the footpath.",
        intro: [
            "A restaurant website has an unusually specific visitor: someone on a phone, often nearby, often right now, who wants the menu, the price range, whether you are open, and how to get there. Four things.",
            "Almost every restaurant site in India fails on the first one, because the menu is a PDF. That single decision makes the most wanted page on the site unreadable on the device almost everyone is using, and invisible to search.",
        ],
        principles: [
            {
                heading: "The menu is a web page",
                body: "Not a PDF, not a photo of a printed card. Real text with real prices, so it can be read on a phone, searched by Google, and updated without a designer.",
            },
                {
                heading: "Opening hours and address above the fold",
                body: "These are the two things being checked most often. They should be visible without scrolling and without tapping into another page.",
            },
            {
                heading: "A map link, not an embedded map",
                body: "A link that opens the native maps app with directions is what people want. An embedded iframe is heavy, often blocked, and still needs a second tap.",
            },
            {
                heading: "Photographs of the actual food",
                body: "Stock images of generic dishes read as a template and raise suspicion. A phone photo of what you actually serve outperforms a polished picture of something you do not.",
            },
            {
                heading: "One obvious action",
                body: "Call, order, or book — pick the one you want most and make it a button that is visible on every screen.",
            },
        ],
        mistakes: [
            {
                heading: "Menu as a downloadable PDF",
                body: "It pinch-zooms badly, costs data, cannot be updated quickly, and keeps your dish names out of search entirely.",
            },
            {
                heading: "Background music or video on load",
                body: "It is startling on a phone in public and is the fastest way to get the tab closed.",
            },
            {
                heading: "Prices omitted from the menu",
                body: "Hiding prices does not raise perceived value, it loses the visitor who was deciding on budget — which is most of them.",
            },
            {
                heading: "No mention of whether you deliver",
                body: "If ordering goes through an aggregator, link it. Silence is read as no.",
            },
        ],
        indiaSpecific: [
            {
                heading: "Mark veg, non-veg, Jain and egg on the menu itself",
                body: "This is the first thing scanned on an Indian menu and it is a filter, not a detail. Use the standard green and brown marks next to each item rather than a legend at the bottom, and mark Jain availability where you offer it. A menu that forces someone to call and ask has already cost you the call.",
            },
            {
                heading: "Spice level, stated",
                body: "A simple one-to-three indicator removes a real hesitation and prevents the complaint that follows. It costs one character per row.",
            },
            {
                heading: "WhatsApp for orders, with the menu linked in the message",
                body: "Many outlets take direct orders on WhatsApp and it undercuts the aggregator commission entirely. Pre-fill the message with the outlet name and the menu URL so the customer is not typing their order from memory.",
            },
            {
                heading: "GST on the menu price, decided and labelled",
                body: "Pick inclusive or exclusive and say which at the top of the menu. A bill that is 5% higher than the page said is a complaint at the table.",
            },
            {
                heading: "Aggregator links belong on the page, not hidden",
                body: "If you are on the delivery apps, link them — that is where a hungry visitor expects to go next. Keep your own ordering option above them so the commission-free route is the first one seen.",
            },
        ],
        faq: [
            {
                question: "Does a restaurant need a website if it is on delivery apps?",
                answer: "Yes, for two reasons. The aggregator owns that customer relationship and takes a commission on every order, and a site you own is where dine-in enquiries, bookings, catering and hiring arrive. The apps are a sales channel, not a presence.",
            },
            {
                question: "Should the menu be a PDF?",
                answer: "No. A PDF is the most common and most costly mistake on restaurant websites. It reads badly on phones, cannot be updated without the original file, and keeps your dishes out of Google. Put the menu in the page as text.",
            },
            {
                question: "What should a restaurant home page show first?",
                answer: "What kind of food, where you are, whether you are open, and the menu link. A full-screen photograph with the name over it looks good and answers none of those.",
            },
            {
                question: "How do I get my restaurant found in local search?",
                answer: "A verified Google Business Profile with correct hours and photos does most of the work, and the website supports it by carrying the same name, address and phone number as plain text, plus the menu in a form Google can read.",
            },
        ],
        related: [
            { href: "/services", label: "Website development services" },
            { href: "/locations", label: "Local web development across India" },
            { href: "/blog/cheap-web-hosting-under-200-india", label: "Cheap web hosting under ₹200 in India" },
        ],
    },
    {
        slug: "real-estate",
        name: "Real Estate",
        h1: "Real Estate Website Designs",
        title: "Real Estate Website Design Examples (India)",
        description:
            "Property listing, project and enquiry layouts for Indian real estate — what buyers filter on and the details whose absence kills the lead.",
        keywords: [
            // PRIMARY
            "real estate website design",
            // SECONDARY
            "property website design",
            "real estate website examples",
            "property listing page design",
            // LONG-TAIL
            "real estate website design india",
            "property search filter design",
            "builder project page layout",
            // SUPPORTING
            "property enquiry form design",
            "listing card design",
            "floor plan page layout",
        ],
        blurb: "Listing, project and enquiry pages for a decision worth lakhs.",
        intro: [
            "Real estate is the highest-value decision on this list and the longest. Nobody buys from a website, so the layout's job is narrower than it looks: survive the shortlist, and produce an enquiry from someone who is actually in the market.",
            "That makes filtering the entire product. A buyer arrives with a budget, an area and a configuration already fixed, and a site that cannot narrow on all three loses them to one that can — regardless of how the listings look.",
        ],
        principles: [
            {
                heading: "Filter on budget, locality and configuration",
                body: "These three are non-negotiable for Indian buyers. A search that cannot combine all three is not a search.",
            },
            {
                heading: "Put the price on the card",
                body: "\"Price on request\" removes the listing from consideration for most buyers and signals that negotiation will be unpleasant. A range beats silence.",
            },
            {
                heading: "Carpet area, and say which area you mean",
                body: "Carpet, built-up and super built-up are different numbers and buyers know it. Labelling it precisely is a trust signal; leaving it ambiguous is the opposite.",
            },
            {
                heading: "Location as a neighbourhood, not a pin",
                body: "Distance to the station, the schools, the hospital. Buyers are evaluating a commute and a routine, not coordinates.",
            },
            {
                heading: "A short enquiry form, on the listing",
                body: "Name and phone is enough to start a conversation. A ten-field qualification form on a first enquiry filters out serious buyers along with the rest.",
            },
        ],
        mistakes: [
            {
                heading: "Renders presented as photographs",
                body: "Buyers spot it immediately and discount everything else on the page. Label renders as renders.",
            },
            {
                heading: "No RERA number on a project page",
                body: "For a buyer doing basic diligence, its absence ends the conversation. It is also a legal requirement for marketing in most states.",
            },
            {
                heading: "A gallery with no floor plan",
                body: "Photographs sell the feeling; the floor plan is what gets compared between shortlisted options.",
            },
            {
                heading: "Listings with no last-updated date",
                body: "A site full of sold properties is worse than a small one that is current, because every stale listing is a wasted call.",
            },
        ],
        indiaSpecific: [
            {
                heading: "RERA number on every project page, in text",
                body: "Not in a footer image, not in a brochure PDF. It is a legal requirement for marketing in most states and it is the first thing a buyer doing diligence looks for. Its absence ends the conversation silently — they do not ask, they move on.",
            },
            {
                heading: "Name which area you are quoting",
                body: "Carpet, built-up and super built-up are three different numbers and Indian buyers know the difference. Label it explicitly on every listing. Quoting the largest figure without saying which it is reads as the oldest trick in the market.",
            },
            {
                heading: "Price in lakh and crore, the way buyers think",
                body: "₹85 lakh, not ₹8,500,000. A layout that formats in millions was built for another market and signals it immediately. Include the per-square-foot rate too, because that is the number used to compare across projects.",
            },
            {
                heading: "The costs on top of the price",
                body: "Stamp duty, registration, GST on under-construction property, maintenance deposit and parking. Buyers find these out eventually and discovering them late turns a warm lead cold. A short honest block about what else is payable builds more trust than any amenity list.",
            },
            {
                heading: "Possession date, or say it is ready to move",
                body: "This is a filter for a buyer who is paying rent while they wait. Put it on the listing card, not inside the detail page.",
            },
        ],
        faq: [
            {
                question: "What should a property listing page include?",
                answer: "Price, carpet area with the measure named, configuration, floor, age or possession date, the locality with real landmarks, a floor plan, honest photographs, and one short enquiry form. Anything missing from that list becomes a phone call you have to take before the buyer is qualified.",
            },
            {
                question: "Should prices be shown or kept on request?",
                answer: "Shown, or at least a range. Hiding the price does not create enquiries, it creates a shortlist you are not on. The buyers who do call a price-on-request listing are disproportionately not ready to buy.",
            },
            {
                question: "How important are filters on a real estate site?",
                answer: "They are the product. Buyers arrive with budget, locality and configuration already decided, and the site that lets them apply all three quickly is the one they stay on. Listing design matters far less.",
            },
            {
                question: "Is a virtual tour worth it?",
                answer: "For high-value or under-construction inventory it reduces wasted site visits, which is a real saving. For an ordinary resale listing, clear photographs and an accurate floor plan do more for less.",
            },
        ],
        related: [
            { href: "/services", label: "Website development services" },
            { href: "/locations", label: "Local web development across India" },
            { href: "/blog/best-web-hosting-india-2026", label: "Best web hosting in India" },
        ],
    },
    {
        slug: "coaching-institute",
        name: "Coaching & Education",
        h1: "Coaching Institute and Education Website Designs",
        title: "Coaching Institute Website Design (India): Layouts & Cost",
        description:
            "Coaching class, institute and edtech layouts for India — course pages, faculty, results and admission enquiry, with the structure that fills batches instead of impressing visitors.",
        keywords: [
            // PRIMARY
            "coaching institute website design",
            // SECONDARY
            "coaching class website design india",
            "education website design",
            "institute website layout",
            // LONG-TAIL
            "coaching institute website design india",
            "coaching class website kaise banaye",
            "coaching institute website cost in india",
            "website design for tuition classes",
            // SUPPORTING
            "course page layout",
            "admission enquiry form design",
            "batch timing page design",
        ],
        blurb: "Course, faculty and admission pages for institutes that fill batches from search.",
        intro: [
            "A coaching website has two visitors who want opposite things. The student wants the batch timing, the fee and whether the faculty is any good. The parent wants proof — results, years running, and a human being to speak to. A layout that serves only one of them loses the other, and in India the parent usually signs.",
            "The structural mistake is almost universal: the site is about the institute, and the courses are buried in a dropdown. Every course is a separate search with its own intent, so every course deserves its own page. An institute teaching NEET, JEE and Foundation has three audiences, not one — and one page listing all three ranks for none of them.",
        ],
        principles: [
            {
                heading: "One page per course, per exam, per class",
                body: "This is the entire difference between an institute that gets found and one that does not. \"NEET coaching in Noida\" and \"JEE coaching in Noida\" are different searches, and a single courses page cannot answer both.",
            },
            {
                heading: "Fee and batch timing on the course page",
                body: "These are the two things being looked for, and withholding them does not generate a call — it generates a visit to the next institute's site. A range is enough if the fee varies by batch.",
            },
            {
                heading: "Results as specifics, not as a claim",
                body: "\"Excellent results\" is noise. A named student, a rank, a year and a photograph is evidence. A small honest table of last year's selections outperforms a banner claiming the best in the city.",
            },
            {
                heading: "Faculty with real credentials and real faces",
                body: "Parents assess the teacher, not the building. Name, subject, qualification and years of teaching, with a photograph. Anonymous \"expert faculty\" reads as there being nobody in particular.",
            },
            {
                heading: "Demo class as the first ask",
                body: "Admission is a large commitment and a demo is a small one. The primary button should request the thing a hesitant parent will actually agree to, not the enrolment.",
            },
        ],
        mistakes: [
            {
                heading: "Courses hidden in a navigation dropdown",
                body: "A dropdown item gets a fraction of the traffic of a linked page, and none of the search visibility. Promote each course to a real page with a real URL.",
            },
            {
                heading: "A photo gallery of the building instead of the teaching",
                body: "Nobody chooses a coaching centre on its reception desk. Classroom, study material and a teacher mid-explanation do more.",
            },
            {
                heading: "Topper photos with no year",
                body: "An undated results wall is assumed to be old. The year next to each name is what makes it credible.",
            },
            {
                heading: "A single enquiry form for every course",
                body: "You then have to call to find out what they wanted. Carry the course name into the form from the page they were on.",
            },
        ],
        indiaSpecific: [
            {
                heading: "Hindi, or the state language, for the parent",
                body: "The student reads English; the parent frequently does not, and the parent decides. One well-written page in Hindi covering fee, timing, faculty and the enquiry number — on its own URL — is the single biggest unserved opportunity here. The English-language design galleries do not compete in Hindi at all.",
            },
            {
                heading: "WhatsApp as the primary enquiry channel",
                body: "Admission enquiries in India arrive on WhatsApp, not through forms. Pre-fill the message with the course and the batch so the first reply can be useful instead of a question.",
            },
            {
                heading: "Exam names exactly as students write them",
                body: "NEET, JEE Main, JEE Advanced, UPSC, CA Foundation, CUET, board class 10 and 12. These are the search terms, and an abstract heading like \"Science Programmes\" matches none of them.",
            },
            {
                heading: "The locality, not just the city",
                body: "Coaching is chosen by travel time. \"NEET coaching in Sector 62 Noida\" is how it is searched, and the nearest metro station or landmark belongs on the page.",
            },
            {
                heading: "Fee instalments, stated",
                body: "Whether the fee can be paid in parts is a decision factor for a large share of Indian families. Saying so on the page removes a call you would otherwise have to take, and a hesitation you would never hear about.",
            },
        ],
        cost: {
            intro:
                "A coaching website is a small build with an unusual amount of content. The cost sits in the course pages and the results data, not in the design.",
            drivers: [
                {
                    heading: "Number of courses",
                    body: "Each course page is real writing — syllabus, duration, batch timing, fee, faculty. Six courses is six pages, and that is the main driver of the total.",
                },
                {
                    heading: "Whether students log in",
                    body: "A brochure site that generates enquiries is one project. Test series, recorded lectures, attendance or fee payment turns it into an application, which is a different budget entirely.",
                },
                {
                    heading: "A second language",
                    body: "A Hindi version of the pages that matter is additional writing, not a translation toggle. It is usually the highest-return item on the list for an institute outside a metro.",
                },
                {
                    heading: "Hosting, which is small here",
                    body: "A brochure-style institute site is static and light. The entry shared tier is enough — ₹149/mo on a long term, renewing at ₹449/mo, plus 18% GST. Only a login area or video hosting changes that requirement.",
                },
            ],
            note:
                "Hosting figures are Hostinger's published India rates, checked 17 September 2026. Build cost depends entirely on course count and whether students log in, so a quote given before those two questions is a guess.",
        },
        faq: [
            {
                question: "Coaching institute ki website me kya hona chahiye?",
                answer: "Har course ka apna page — usme fee, batch timing, duration aur syllabus. Faculty ke asli naam, qualification aur photo. Pichle saal ke results saal ke saath. Locality aur nearest landmark, kyunki coaching travel time dekh kar chuni jaati hai. Aur enquiry ke liye WhatsApp number, form se pehle. Ek hi page pe saare courses daalne se koi bhi search me nahi aata.",
            },
            {
                question: "Should each course have its own page?",
                answer: "Yes, and it is the most important decision on the site. A student searching for NEET coaching and one searching for CA Foundation are different people with different intent. One combined courses page competes for neither search, while separate pages each have a chance. It is also how you avoid calling every enquiry to ask what they were interested in.",
            },
            {
                question: "Should coaching fees be shown on the website?",
                answer: "Show a range at minimum. Hiding the fee does not create enquiries, it sends the visitor to the next institute that does show it. Parents are budgeting, and a page that will not say the price is read as one that will negotiate upward.",
            },
            {
                question: "Does a coaching institute need a Hindi version?",
                answer: "If your enquiries come from Hindi-speaking families, yes — and not as a whole-site translation. One page in Hindi carrying the fee, the timing, the faculty and the phone number covers almost all of the value. It is also where there is effectively no competition, because the design and SEO advice this market follows is all written in English.",
            },
            {
                question: "What does a coaching institute website cost in India?",
                answer: "It depends on two things and nothing else much: how many course pages are needed, and whether students will log in for material or tests. A brochure site with six course pages and an enquiry form is a small project. Add a student portal and it becomes a software build. Any quote given before those two questions are asked is not a quote.",
            },
        ],
        related: [
            { href: "/services", label: "Website development services" },
            { href: "/locations", label: "Local web development across India" },
            { href: "/blog/cheap-web-hosting-under-200-india", label: "Cheap web hosting under ₹200 in India" },
        ],
    },
    {
        slug: "clinic-healthcare",
        name: "Clinic & Healthcare",
        h1: "Clinic and Doctor Website Designs",
        title: "Clinic & Doctor Website Design (India): Layouts That Book",
        description:
            "Clinic, dental and doctor website layouts for India — timings, appointment booking, credentials and fees, built for a patient who needs an answer today.",
        keywords: [
            // PRIMARY
            "clinic website design",
            // SECONDARY
            "doctor website design india",
            "dental clinic website design",
            "hospital website layout",
            // LONG-TAIL
            "clinic website design india",
            "doctor website design cost in india",
            "appointment booking page design",
            // SUPPORTING
            "consultation fee page",
            "clinic timings layout",
            "medical website trust signals",
        ],
        blurb: "Timings, credentials and booking — for a patient deciding today, not browsing.",
        intro: [
            "A clinic website has the most urgent visitor of any layout here. Someone is unwell, or worried about someone who is, and they want four things: is this doctor qualified for my problem, are they open, what does a consultation cost, and how do I get an appointment. Nothing else on the page matters until those four are answered.",
            "The pages that fail do so by being brochures for the institution rather than tools for the patient. A hero image of a stethoscope and a paragraph about a commitment to care answers none of the four, and the visitor goes back to the search results — which is where the clinic that listed its timings is waiting.",
        ],
        principles: [
            {
                heading: "Timings and the phone number above the fold",
                body: "These are the two most-checked items on a clinic site by a wide margin. They belong on the first screen, with the number as a tel: link so one tap dials.",
            },
            {
                heading: "A page per condition or treatment",
                body: "Patients search for the problem, not the specialty. A page about root canal treatment, written plainly, is found by people who would never search for \"endodontics\".",
            },
            {
                heading: "Credentials in full, with the registration",
                body: "Qualification, specialisation, years practising and the medical council registration number. This is the trust layer, and vagueness here is read as something being concealed.",
            },
            {
                heading: "Consultation fee, stated",
                body: "Patients are deciding whether they can afford to walk in. A figure or a range removes a phone call for you and a hesitation for them.",
            },
            {
                heading: "Booking that works at 11pm",
                body: "Much of the traffic arrives outside clinic hours, when calling is not an option. A request form or a WhatsApp message captures the appointment that a phone-only page loses overnight.",
            },
        ],
        mistakes: [
            {
                heading: "Stock photography of foreign doctors",
                body: "It is spotted immediately and undermines every credential on the page. A real photograph of the actual doctor in the actual clinic does more than any amount of production value.",
            },
            {
                heading: "Medical terminology as page headings",
                body: "Patients do not search in clinical vocabulary. Lead with the plain-language term and keep the clinical one alongside it.",
            },
            {
                heading: "No address detail beyond the locality",
                body: "Floor, landmark, parking. A patient who is unwell should not be solving a navigation puzzle on arrival.",
            },
            {
                heading: "Patient photographs or testimonials without consent",
                body: "This is a consent and privacy matter before it is a design one. If you use before-and-after images or named reviews, have written permission on file.",
            },
        ],
        indiaSpecific: [
            {
                heading: "WhatsApp for appointments, because that is where they arrive",
                body: "Indian clinics take most of their bookings on WhatsApp or by phone. Make the WhatsApp link primary with the clinic name pre-filled, and keep the form as the fallback for people who would rather not call.",
            },
            {
                heading: "Hindi or the local language for the symptom pages",
                body: "Patients describe symptoms in their own language and search in it. A symptom page written in Hindi has almost no competition, because the English-language health content that dominates these searches was not written for this audience.",
            },
            {
                heading: "Cash, UPI and insurance, said plainly",
                body: "Which insurers are empanelled, whether UPI is accepted, and whether cashless treatment is available. These determine where a patient goes, and they are almost never on the page.",
            },
            {
                heading: "Separate timings for separate days",
                body: "Indian clinics commonly run split shifts and different Sunday hours. A single \"10am to 7pm\" line that is wrong on Wednesday evening produces a wasted trip and a bad review.",
            },
            {
                heading: "The registration number, visible",
                body: "State medical council registration is both a credibility signal and, for many specialities, an expectation of any advertised practice. Put it with the doctor's name as text.",
            },
        ],
        cost: {
            intro:
                "Clinic sites are small and the build is rarely the expensive part. What it costs depends on how many conditions you want to be found for and whether booking is live.",
            drivers: [
                {
                    heading: "Number of treatment or condition pages",
                    body: "Each one is a separate search and a separate page of plain-language writing. This is where the budget goes, and it is also the only part that brings patients from search.",
                },
                {
                    heading: "Enquiry form versus live booking",
                    body: "A request form that sends an email is simple. Real slot availability, confirmations and reminders is a system, with ongoing cost.",
                },
                {
                    heading: "A second language",
                    body: "Hindi or the state language for the symptom pages that matter most. Additional writing rather than a toggle, and usually the highest-return item for a single-location clinic.",
                },
                {
                    heading: "Hosting, which is minimal",
                    body: "A clinic site is static and small. The entry shared tier covers it — ₹149/mo on a long term, ₹449/mo at renewal, plus 18% GST. Live booking may need more, depending on how it is built.",
                },
            ],
            note:
                "Hosting figures are Hostinger's published India rates, checked 17 September 2026. Anything handling patient data brings privacy obligations that are a legal question, not a design one — take advice on that separately.",
        },
        faq: [
            {
                question: "Clinic ki website me kya hona chahiye?",
                answer: "Pehli screen pe timings aur phone number, aur number tel: link me ho taaki ek tap pe call lage. Doctor ka naam, qualification, specialisation aur medical council registration number. Consultation fee ya uski range. Har treatment ya problem ka apna page, aasan bhasha me. Address me floor aur landmark. Aur appointment ke liye WhatsApp, kyunki raat ko call nahi hoti par message hota hai.",
            },
            {
                question: "Should a doctor show consultation fees on the website?",
                answer: "Yes, or a range. A patient is deciding whether they can afford to come in, and a page that will not say removes itself from consideration for a large part of the market. It also saves the receptionist the call.",
            },
            {
                question: "What should a clinic website have above the fold?",
                answer: "Timings and a tappable phone number, plus what the clinic treats. Those are the most checked items on any clinic site, and a full-screen image with a line about compassionate care answers none of them.",
            },
            {
                question: "Do clinics need online appointment booking?",
                answer: "A request form or a WhatsApp link is enough for most single-location clinics, and it captures the bookings that arrive after hours — which is a large share of them. Live slot availability with confirmations and reminders is worth it only at the volume where phone handling has become the bottleneck.",
            },
            {
                question: "What does a clinic website cost in India?",
                answer: "It scales with the number of treatment pages you want found in search, and with whether booking is live or just an enquiry. A single-doctor clinic with six condition pages and a WhatsApp booking link is a small project; real-time scheduling is a different one. Hosting for a site like this is the cheapest part — just check the renewal rate rather than the signup price.",
            },
        ],
        related: [
            { href: "/services", label: "Website development services" },
            { href: "/locations", label: "Local web development across India" },
            { href: "/blog/cheap-web-hosting-under-200-india", label: "Cheap web hosting under ₹200 in India" },
        ],
    },
    {
        slug: "local-business",
        name: "Local Business",
        h1: "Local Business Website Designs",
        title: "Local Business Website Design (India): Salon, Gym, Shop",
        description:
            "Salon, gym, boutique and shop website layouts for India — timings, prices, directions and WhatsApp, built for a customer searching from a few kilometres away.",
        keywords: [
            // PRIMARY
            "local business website design",
            // SECONDARY
            "salon website design india",
            "gym website design",
            "shop website design india",
            // LONG-TAIL
            "local business website design india",
            "small shop website kaise banaye",
            "salon website design cost in india",
            // SUPPORTING
            "google business profile website",
            "near me search optimisation",
            "service price list page",
        ],
        blurb: "Salon, gym, boutique and shop pages for customers searching from nearby.",
        intro: [
            "Local business websites are judged by a visitor who is physically close, on a phone, and comparing two or three options found in the same search. They want the price, the timings, how far it is, and some evidence the place is real and currently operating.",
            "Almost nothing else matters, and that is liberating — this is the smallest site on this list. The common failure is not an ugly layout, it is a site that does not say the price, so the customer calls the competitor who did. The second is a site that looks abandoned, because an outdated page is read as a closed business.",
        ],
        principles: [
            {
                heading: "A real price list, as text",
                body: "Service and rate, in a table. Not a PDF, not a photograph of a printed board, not \"call for prices\". This is the page people came for and it is also the page Google can read.",
            },
            {
                heading: "Timings, including the weekly off",
                body: "Day by day. The closed day is as important as the open hours, and getting it wrong produces a wasted trip and a one-star review.",
            },
            {
                heading: "A maps link, not an embedded map",
                body: "A link that opens native maps with directions is what a nearby customer wants. An iframe is heavy, often blocked, and still needs a second tap.",
            },
            {
                heading: "Photographs of the actual place",
                body: "Inside, the staff, the work. Phone photos of the real premises outperform polished stock images of somewhere else, because the question being answered is whether this place is real.",
            },
            {
                heading: "One booking action, visible on every screen",
                body: "Call or WhatsApp, pinned. A local customer decides in under a minute and should never have to look for how to reach you.",
            },
        ],
        mistakes: [
            {
                heading: "No prices anywhere",
                body: "The most common and most expensive mistake in this category. Silence on price loses the comparison to whoever published theirs.",
            },
            {
                heading: "A site that has not been touched in two years",
                body: "An old offer banner or a stale festival greeting signals a closed business more strongly than no website at all.",
            },
            {
                heading: "Social links instead of contact details",
                body: "An Instagram icon is not a phone number. Keep both, but the number comes first.",
            },
            {
                heading: "Desktop-first layout",
                body: "Essentially all of this traffic is a phone held one-handed, often outdoors. If it does not work there, it does not work.",
            },
        ],
        indiaSpecific: [
            {
                heading: "The Google Business Profile does more than the website",
                body: "For a local business the profile is the primary listing and the site is its support. Keep the name, address, phone and hours identical in both — local search matches them against each other, and even an abbreviation difference splits the signal.",
            },
            {
                heading: "WhatsApp as the booking channel",
                body: "Appointments and orders arrive on WhatsApp for most Indian local businesses. Pin the link, pre-fill the message with the business name, and place it bottom-left on mobile so it never sits on top of a call button.",
            },
            {
                heading: "UPI accepted, said on the page",
                body: "It is assumed, but stating it removes a question. For a shop taking advance orders, showing the UPI handle on the page saves a message exchange every time.",
            },
            {
                heading: "Hindi or the state language for the service pages",
                body: "Customers search for local services in their own language, and the competition for those phrases is effectively nothing. One page covering services, prices and timings in the local language is often the highest-return page on the whole site.",
            },
            {
                heading: "Festival and seasonal hours",
                body: "Indian local businesses change hours around festivals more than any other market, and a wrong listing during the busiest week of the year is the costliest possible time to be wrong. Keep it editable without a developer.",
            },
        ],
        cost: {
            intro:
                "This is the smallest build on this list. The honest answer is that most local businesses overpay, usually for pages they did not need.",
            drivers: [
                {
                    heading: "Page count, which should be low",
                    body: "Home with prices and timings, about, contact, and one page per service worth being found for. Four to six pages covers almost every local business.",
                },
                {
                    heading: "Who updates the prices",
                    body: "If rates change seasonally, you need to be able to edit them yourself. That is the one feature worth paying for here, because a price list you cannot update becomes wrong and then becomes a liability.",
                },
                {
                    heading: "Photography",
                    body: "Usually the largest line item, and usually worth it. Real photographs of the premises are the trust signal that nothing else substitutes for.",
                },
                {
                    heading: "Hosting, genuinely small",
                    body: "A static local site is as light as a site gets. The cheapest shared tier is enough — ₹149/mo on a long term, renewing at ₹449/mo, plus 18% GST. A domain renews yearly on top.",
                },
            ],
            note:
                "Hosting figures are Hostinger's published India rates, checked 17 September 2026. If a quote for a six-page local site runs into a large figure, ask which of the six pages is responsible for it.",
        },
        faq: [
            {
                question: "Chhoti dukaan ya salon ki website me kya hona chahiye?",
                answer: "Price list text me — PDF ya photo me nahi, kyunki wo na phone pe theek padhti hai na Google use padh sakta hai. Din ke hisaab se timings, aur weekly off bhi. Maps ka link jo seedha directions khole. Asli jagah ki photos. Aur ek pinned WhatsApp ya call button har screen pe. Chaar se chhe page me poora kaam ho jaata hai — isse zyada ki zaroorat nahi hoti.",
            },
            {
                question: "Does a local business need a website if it has a Google Business Profile?",
                answer: "The profile does most of the work and should be the priority. The website earns its place by holding what the profile cannot — a full price list, service detail, and pages that can be found for searches the profile does not cover. Keep the name, address, phone and hours identical in both.",
            },
            {
                question: "Should prices be on a local business website?",
                answer: "Yes, as text in a table. This is the single most common mistake in this category. A customer comparing two salons or two gyms picks the one that published its rates, because the one that did not is assumed to be expensive.",
            },
            {
                question: "Salon ya gym ki website banane me kitna kharcha aata hai?",
                answer: "Ye is list me sabse chhota build hai — chaar se chhe page. Sabse bada kharcha aksar photography hota hai, aur wo wajib hai. Ek cheez ke liye paisa dena worth hai: price khud update kar paane ki suvidha, kyunki rate badalte hain aur purani price list nuksaan karti hai. Hosting bohot kam padti hai — ₹149/mo wala plan kaafi hai, par renewal ₹449/mo hai, GST alag.",
            },
            {
                question: "How many pages does a local business website need?",
                answer: "Four to six. Home carrying prices and timings, about, contact, and a page for each service you want found in search. Anything beyond that is usually sold rather than needed.",
            },
        ],
        related: [
            { href: "/services", label: "Website development services" },
            { href: "/locations", label: "Local web development across India" },
            { href: "/blog/cheap-web-hosting-under-200-india", label: "Cheap web hosting under ₹200 in India" },
        ],
    },
];

export const ITEMS: LanderItem[] = [];

export const categoryBySlug = (slug: string) => CATEGORIES.find((category) => category.slug === slug);

export const itemsInCategory = (slug: string) => ITEMS.filter((item) => item.category === slug);

export const countsByCategory = (): Record<string, number> =>
    ITEMS.reduce<Record<string, number>>((acc, item) => {
        acc[item.category] = (acc[item.category] ?? 0) + 1;
        return acc;
    }, {});

/** Previous and next category, for the cross-links at the foot of each page. */
export const siblingCategories = (slug: string) => {
    const index = CATEGORIES.findIndex((category) => category.slug === slug);
    if (index === -1) return { previous: null, next: null };
    return {
        previous: index > 0 ? CATEGORIES[index - 1] : CATEGORIES[CATEGORIES.length - 1],
        next: index < CATEGORIES.length - 1 ? CATEGORIES[index + 1] : CATEGORIES[0],
    };
};
