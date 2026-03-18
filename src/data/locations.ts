export interface LocationData {
    slug: string;
    name: string;
    type: "city" | "state";
    region: string;
    serviceFocus: string;
    nearby: string[];
}

export const SEO_LOCATIONS: LocationData[] = [
    { slug: "delhi", name: "Delhi", type: "city", region: "North India", serviceFocus: "startup websites, SEO landing pages, and custom business dashboards", nearby: ["gurugram", "noida", "chandigarh"] },
    { slug: "mumbai", name: "Mumbai", type: "city", region: "West India", serviceFocus: "high-conversion company websites, React applications, and product MVPs", nearby: ["pune", "surat", "ahmedabad"] },
    { slug: "gurugram", name: "Gurugram", type: "city", region: "North India", serviceFocus: "SaaS frontend development, performance optimization, and enterprise web apps", nearby: ["delhi", "noida", "chandigarh"] },
    { slug: "noida", name: "Noida", type: "city", region: "North India", serviceFocus: "Next.js business sites, admin panels, and API-connected web platforms", nearby: ["delhi", "gurugram", "lucknow"] },
    { slug: "bangalore", name: "Bangalore", type: "city", region: "South India", serviceFocus: "modern product engineering, startup launches, and scalable React platforms", nearby: ["hyderabad", "chennai", "coimbatore"] },
    { slug: "hyderabad", name: "Hyderabad", type: "city", region: "South India", serviceFocus: "full stack web applications, custom portals, and Laravel development", nearby: ["bangalore", "chennai", "andhra-pradesh"] },
    { slug: "chennai", name: "Chennai", type: "city", region: "South India", serviceFocus: "custom websites, fast-loading landing pages, and long-term web maintenance", nearby: ["bangalore", "coimbatore", "tamil-nadu"] },
    { slug: "pune", name: "Pune", type: "city", region: "West India", serviceFocus: "startup websites, developer portfolios, and cloud-ready web apps", nearby: ["mumbai", "nagpur", "maharashtra"] },
    { slug: "kolkata", name: "Kolkata", type: "city", region: "East India", serviceFocus: "business websites, PHP systems, and content-driven SEO pages", nearby: ["patna", "west-bengal", "bhubaneswar"] },
    { slug: "ahmedabad", name: "Ahmedabad", type: "city", region: "West India", serviceFocus: "ecommerce websites, custom CRMs, and performance-focused landing pages", nearby: ["surat", "mumbai", "gujarat"] },
    { slug: "jaipur", name: "Jaipur", type: "city", region: "North India", serviceFocus: "local business sites, booking flows, and SEO-ready service pages", nearby: ["delhi", "agra", "rajasthan"] },
    { slug: "surat", name: "Surat", type: "city", region: "West India", serviceFocus: "catalog websites, lead-generation funnels, and web automation", nearby: ["ahmedabad", "mumbai", "gujarat"] },
    { slug: "lucknow", name: "Lucknow", type: "city", region: "North India", serviceFocus: "custom business websites, CMS work, and web app modernization", nearby: ["noida", "kanpur", "uttar-pradesh"] },
    { slug: "chandigarh", name: "Chandigarh", type: "city", region: "North India", serviceFocus: "corporate sites, service-company redesigns, and React frontend builds", nearby: ["delhi", "amritsar", "punjab"] },
    { slug: "indore", name: "Indore", type: "city", region: "Central India", serviceFocus: "conversion-focused websites, Laravel backends, and B2B web tools", nearby: ["bhopal", "nagpur", "madhya-pradesh"] },
    { slug: "patna", name: "Patna", type: "city", region: "East India", serviceFocus: "education websites, local SEO pages, and scalable business portals", nearby: ["varanasi", "kolkata", "bihar"] },
    { slug: "bhopal", name: "Bhopal", type: "city", region: "Central India", serviceFocus: "service websites, web maintenance retainers, and custom dashboards", nearby: ["indore", "nagpur", "madhya-pradesh"] },
    { slug: "kanpur", name: "Kanpur", type: "city", region: "North India", serviceFocus: "business websites, legacy PHP upgrades, and fast landing pages", nearby: ["lucknow", "agra", "uttar-pradesh"] },
    { slug: "nagpur", name: "Nagpur", type: "city", region: "Central India", serviceFocus: "regional business websites, CRM integrations, and frontend rebuilds", nearby: ["pune", "bhopal", "maharashtra"] },
    { slug: "agra", name: "Agra", type: "city", region: "North India", serviceFocus: "tourism and service websites, booking journeys, and local SEO pages", nearby: ["delhi", "jaipur", "kanpur"] },
    { slug: "varanasi", name: "Varanasi", type: "city", region: "North India", serviceFocus: "brand websites, content hubs, and mobile-friendly business pages", nearby: ["patna", "lucknow", "uttar-pradesh"] },
    { slug: "amritsar", name: "Amritsar", type: "city", region: "North India", serviceFocus: "business websites, local visibility pages, and streamlined lead forms", nearby: ["chandigarh", "punjab", "delhi"] },
    { slug: "coimbatore", name: "Coimbatore", type: "city", region: "South India", serviceFocus: "industrial company websites, ERP-friendly portals, and frontend UX improvements", nearby: ["chennai", "kochi", "tamil-nadu"] },
    { slug: "kochi", name: "Kochi", type: "city", region: "South India", serviceFocus: "service business websites, multilingual pages, and custom portals", nearby: ["coimbatore", "kerala", "chennai"] },
    { slug: "bhubaneswar", name: "Bhubaneswar", type: "city", region: "East India", serviceFocus: "business growth websites, landing pages, and custom web workflows", nearby: ["kolkata", "guwahati", "andhra-pradesh"] },
    { slug: "guwahati", name: "Guwahati", type: "city", region: "North East India", serviceFocus: "regional business websites, SEO structure, and lightweight web apps", nearby: ["kolkata", "bhubaneswar", "west-bengal"] },
    { slug: "maharashtra", name: "Maharashtra", type: "state", region: "West India", serviceFocus: "multi-location service pages, enterprise sites, and statewide web campaigns", nearby: ["mumbai", "pune", "nagpur"] },
    { slug: "karnataka", name: "Karnataka", type: "state", region: "South India", serviceFocus: "SaaS websites, product marketing pages, and scalable frontend systems", nearby: ["bangalore", "hyderabad", "tamil-nadu"] },
    { slug: "gujarat", name: "Gujarat", type: "state", region: "West India", serviceFocus: "manufacturing websites, ecommerce platforms, and statewide lead capture pages", nearby: ["ahmedabad", "surat", "mumbai"] },
    { slug: "tamil-nadu", name: "Tamil Nadu", type: "state", region: "South India", serviceFocus: "service websites, multilingual UX, and custom business platforms", nearby: ["chennai", "coimbatore", "kerala"] },
    { slug: "uttar-pradesh", name: "Uttar Pradesh", type: "state", region: "North India", serviceFocus: "large service-area site architecture, SEO landing pages, and CMS-led websites", nearby: ["lucknow", "kanpur", "varanasi"] },
    { slug: "rajasthan", name: "Rajasthan", type: "state", region: "North India", serviceFocus: "tourism, education, and service websites with strong local SEO", nearby: ["jaipur", "agra", "delhi"] },
    { slug: "kerala", name: "Kerala", type: "state", region: "South India", serviceFocus: "multilingual websites, premium brochure sites, and custom booking flows", nearby: ["kochi", "coimbatore", "tamil-nadu"] },
    { slug: "punjab", name: "Punjab", type: "state", region: "North India", serviceFocus: "service business sites, city landing pages, and fast lead-generation builds", nearby: ["amritsar", "chandigarh", "delhi"] },
    { slug: "haryana", name: "Haryana", type: "state", region: "North India", serviceFocus: "corporate websites, B2B portals, and location-focused service pages", nearby: ["gurugram", "delhi", "chandigarh"] },
    { slug: "bihar", name: "Bihar", type: "state", region: "East India", serviceFocus: "education portals, business websites, and regional SEO architecture", nearby: ["patna", "varanasi", "west-bengal"] },
    { slug: "madhya-pradesh", name: "Madhya Pradesh", type: "state", region: "Central India", serviceFocus: "multi-city websites, custom dashboards, and B2B service pages", nearby: ["indore", "bhopal", "nagpur"] },
    { slug: "west-bengal", name: "West Bengal", type: "state", region: "East India", serviceFocus: "content websites, local business platforms, and organic growth pages", nearby: ["kolkata", "patna", "guwahati"] },
    { slug: "telangana", name: "Telangana", type: "state", region: "South India", serviceFocus: "product websites, custom admin panels, and scalable web applications", nearby: ["hyderabad", "bangalore", "andhra-pradesh"] },
    { slug: "andhra-pradesh", name: "Andhra Pradesh", type: "state", region: "South India", serviceFocus: "service websites, statewide landing pages, and Laravel-powered platforms", nearby: ["hyderabad", "chennai", "telangana"] },
];

export function getLocationBySlug(slug: string) {
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
