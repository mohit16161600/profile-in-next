export interface LocationData {
    slug: string;
    name: string;
    type: "city" | "state";
    region: string;
    serviceFocus: string;
    intro: string;
    industries: string[];
    nearby: string[];
}

export const SEO_LOCATIONS: LocationData[] = [
    {
        slug: "delhi",
        name: "Delhi",
        type: "city",
        region: "North India",
        serviceFocus: "startup websites, SEO landing pages, and custom business dashboards",
        intro: "Delhi-based founders need websites that move fast and convert. I help D2C brands, agencies, and service businesses across South Delhi, Dwarka, and Connaught Place ship modern React + Next.js sites that load under two seconds and rank for local searches.",
        industries: ["D2C and consumer brands", "education and EdTech startups", "law and consulting firms", "logistics and B2B service providers"],
        nearby: ["gurugram", "noida"],
    },
    {
        slug: "mumbai",
        name: "Mumbai",
        type: "city",
        region: "West India",
        serviceFocus: "high-conversion company websites, React applications, and product MVPs",
        intro: "Mumbai businesses rely on websites that work as hard as the city does. From BKC fintechs to Andheri-based agencies, I build production-grade React and Laravel platforms that handle real traffic, real payments, and real revenue without breaking.",
        industries: ["fintech and BFSI", "media and entertainment", "real estate and broker portals", "fashion and lifestyle ecommerce"],
        nearby: ["pune", "ahmedabad"],
    },
    {
        slug: "gurugram",
        name: "Gurugram",
        type: "city",
        region: "North India",
        serviceFocus: "SaaS frontend development, performance optimization, and enterprise web apps",
        intro: "Gurugram is where Indian SaaS is shipped. I work with Cyber City and Golf Course Road teams on dashboards, admin panels, and customer-facing portals that pass an enterprise security review and feel fast on a sales demo.",
        industries: ["B2B SaaS", "HR and people-ops tools", "fintech APIs", "marketplace platforms"],
        nearby: ["delhi", "noida"],
    },
    {
        slug: "noida",
        name: "Noida",
        type: "city",
        region: "North India",
        serviceFocus: "Next.js business sites, admin panels, and API-connected web platforms",
        intro: "Noida and Greater Noida startups need websites that look like a Series A company without the Series A budget. I help product teams ship Next.js sites, internal admin tools, and API-connected dashboards that scale with the team.",
        industries: ["IT services and SaaS", "education platforms", "logistics tech", "government-adjacent service providers"],
        nearby: ["delhi", "gurugram"],
    },
    {
        slug: "bangalore",
        name: "Bangalore",
        type: "city",
        region: "South India",
        serviceFocus: "modern product engineering, startup launches, and scalable React platforms",
        intro: "Bangalore demands engineering quality. From Koramangala YC-backed founders to Whitefield enterprise teams, I deliver type-safe Next.js codebases, clean component libraries, and review-ready PRs that survive your CTO's standards.",
        industries: ["consumer-tech startups", "deep-tech and AI", "developer tooling", "marketplaces and aggregators"],
        nearby: ["hyderabad", "chennai"],
    },
    {
        slug: "hyderabad",
        name: "Hyderabad",
        type: "city",
        region: "South India",
        serviceFocus: "full stack web applications, custom portals, and Laravel development",
        intro: "Hyderabad's HITEC City and Gachibowli teams need both frontend polish and backend stability. I build PHP/Laravel APIs paired with React frontends so your business has one codebase, one deploy pipeline, and zero finger-pointing between teams.",
        industries: ["pharma and life sciences", "enterprise SaaS", "real estate portals", "BPO and operations dashboards"],
        nearby: ["bangalore", "chennai"],
    },
    {
        slug: "chennai",
        name: "Chennai",
        type: "city",
        region: "South India",
        serviceFocus: "custom websites, fast-loading landing pages, and long-term web maintenance",
        intro: "Chennai businesses value reliability. From OMR-based product companies to Anna Nagar service firms, I deliver Next.js websites with a clean codebase, real performance budgets, and a maintenance retainer that doesn't disappear after launch.",
        industries: ["automotive and manufacturing", "IT services", "education and coaching", "healthcare clinics"],
        nearby: ["bangalore", "hyderabad"],
    },
    {
        slug: "pune",
        name: "Pune",
        type: "city",
        region: "West India",
        serviceFocus: "startup websites, developer portfolios, and cloud-ready web apps",
        intro: "Pune's Kharadi, Hinjewadi, and Baner ecosystem is full of product teams who care about code quality. I help them ship Next.js sites, developer portfolios, and cloud-deployed Laravel apps that pass code review and live on Vercel or AWS without surprises.",
        industries: ["software product companies", "automotive tech", "education startups", "boutique consulting firms"],
        nearby: ["mumbai", "bangalore"],
    },
    {
        slug: "kolkata",
        name: "Kolkata",
        type: "city",
        region: "East India",
        serviceFocus: "business websites, PHP systems, and content-driven SEO pages",
        intro: "Kolkata's Salt Lake and New Town businesses often need to modernize older PHP systems without breaking them. I help with careful Laravel rewrites, fresh React or Next.js frontends, and SEO-driven content sites that finally rank in 2026.",
        industries: ["education and coaching", "B2B trade and distribution", "media and publishing", "regional ecommerce"],
        nearby: ["ahmedabad"],
    },
    {
        slug: "ahmedabad",
        name: "Ahmedabad",
        type: "city",
        region: "West India",
        serviceFocus: "ecommerce websites, custom CRMs, and performance-focused landing pages",
        intro: "Ahmedabad and Gandhinagar businesses move on real revenue. I help D2C brands, manufacturing companies, and service firms ship ecommerce sites, custom CRMs, and high-converting landing pages tuned for Indian payment gateways and Meta Ads.",
        industries: ["D2C and ecommerce brands", "manufacturing and textiles", "chemical and pharma", "real estate developers"],
        nearby: ["mumbai", "pune"],
    },
];

export function getLocationBySlug(slug?: string) {
    if (!slug) {
        return undefined;
    }

    return SEO_LOCATIONS.find((location) => location.slug === slug.toLowerCase());
}

export function getRelatedLocations(location: LocationData, limit = 6) {
    return SEO_LOCATIONS.filter((entry) => entry.slug !== location.slug)
        .sort((a, b) => {
            const aScore = Number(a.region === location.region) + Number(a.type === location.type);
            const bScore = Number(b.region === location.region) + Number(b.type === location.type);
            return bScore - aScore || a.name.localeCompare(b.name);
        })
        .slice(0, limit);
}
