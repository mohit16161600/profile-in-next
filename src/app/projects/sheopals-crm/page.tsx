import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sheopals CRM Case Study | Custom CRM Development by Mohit Koli",
    description:
        "Explore the Sheopals CRM case study by Mohit Koli, a custom CRM and operations dashboard built with Next.js, role-based access, workflow automation, webhook integrations, and scalable internal tooling.",
    keywords: [
        "Sheopals CRM case study",
        "custom CRM development",
        "Next.js CRM",
        "internal dashboard development",
        "role based CRM system",
        "workflow automation CRM",
        "webhook integration project",
        "Mohit Koli projects",
    ],
    alternates: {
        canonical: "https://mohitkoli.info/projects/sheopals-crm",
    },
    openGraph: {
        title: "Sheopals CRM Case Study | Custom CRM Development by Mohit Koli",
        description:
            "A custom CRM and internal operations platform built for Sheopals with Next.js, automation workflows, role-based access, and business-critical integrations.",
        url: "https://mohitkoli.info/projects/sheopals-crm",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sheopals CRM Case Study | Custom CRM Development by Mohit Koli",
        description:
            "A custom CRM and internal operations platform built for Sheopals with Next.js, automation workflows, role-based access, and business-critical integrations.",
    },
};

const architecturePoints = [
    "Role-based access control across sales agents, team leaders, managers, and administrators.",
    "Structured dashboard workflows for lead management, order movement, status monitoring, and team visibility.",
    "Automation logic for repetitive operational tasks to reduce manual effort and improve execution speed.",
    "Webhook and cURL integration layer for third-party systems, notifications, and logistics-related updates.",
    "Scalable internal tooling architecture designed for daily usage by multiple user types inside the business.",
];

const featureCards = [
    {
        title: "Lead & Order Workflow Management",
        description:
            "Created a unified workflow for handling leads, assigning ownership, tracking order status, and reducing the operational gaps caused by scattered manual processes.",
    },
    {
        title: "Permission-Based Dashboard Panels",
        description:
            "Built separate views and capabilities for each role so users only see the data and actions relevant to their responsibilities inside the organization.",
    },
    {
        title: "Automation & Daily Task Distribution",
        description:
            "Implemented automation-friendly flows that support recurring operational routines, help distribute workload, and reduce delays in daily execution.",
    },
    {
        title: "API, Webhook & External Sync",
        description:
            "Connected the CRM with external services using webhook handlers and cURL-based integrations for status sync, communication triggers, and process continuity.",
    },
];

const roleCards = [
    {
        code: "SA",
        title: "Sales Agent",
        description:
            "A focused workspace for handling leads, managing calls, updating order details, and working only within role-appropriate records.",
        accent: "blue",
    },
    {
        code: "TL",
        title: "Team Leader",
        description:
            "Tools for monitoring team activity, reviewing performance, assigning work, and supporting day-to-day sales execution at the team level.",
        accent: "purple",
    },
    {
        code: "MG",
        title: "Manager",
        description:
            "A higher-level reporting and oversight view for sales trends, operational visibility, and performance decision-making.",
        accent: "orange",
    },
    {
        code: "AD",
        title: "Super Admin",
        description:
            "Full system-level access for user control, configuration, process governance, and platform-wide administrative actions.",
        accent: "red",
    },
];

const stackGroups = [
    {
        title: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    },
    {
        title: "Backend & Data",
        items: ["Node.js APIs", "MySQL", "Redis", "Server Workflows"],
    },
    {
        title: "Integrations",
        items: ["Webhooks", "cURL Services", "Operational Sync", "Third-Party APIs"],
    },
];

const results = [
    "Reduced dependency on manual coordination across multiple internal workflows.",
    "Improved visibility for team leads and managers with cleaner operational dashboards.",
    "Created a scalable base for future features, process automation, and integration growth.",
    "Centralized critical business actions in one system instead of scattered tools and spreadsheets.",
];

const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Sheopals CRM Case Study",
    headline: "Sheopals CRM Case Study",
    description:
        "A case study covering the design and development of a custom CRM and internal operations dashboard for Sheopals.",
    author: {
        "@type": "Person",
        name: "Mohit Koli",
    },
    publisher: {
        "@type": "Person",
        name: "Mohit Koli",
    },
    url: "https://mohitkoli.info/projects/sheopals-crm",
    about: [
        "Custom CRM development",
        "Next.js dashboard development",
        "Role-based access control",
        "Automation workflows",
        "Webhook integrations",
    ],
};

const accentMap = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
} as const;

export default function SheopalsCrmProject() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 hidden md:block"></div>
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 bg-center"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Projects
                    </Link>

                    <div className="max-w-5xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm mb-6">
                            Custom CRM Case Study
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Sheopals <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CRM & Operations Dashboard</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                            A custom internal CRM system built to streamline lead handling, order workflows, reporting visibility, and multi-role execution for a growing e-commerce operation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Sheopals needed a centralized CRM platform that could support the operational complexity of a busy sales and order ecosystem. Manual follow-ups, fragmented task handling, and limited reporting visibility were creating friction across teams.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The solution was a custom-built internal CRM tailored to real company workflows. Instead of forcing the business into a generic SaaS tool, this system was designed around role-based usage, internal reporting needs, workflow automation, and integration-heavy operations.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Architecture Highlights</h2>
                            <ul className="space-y-4">
                                {architecturePoints.map((item) => (
                                    <li key={item} className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h3>

                                <div className="space-y-6">
                                    {stackGroups.map((group) => (
                                        <div key={group.title}>
                                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{group.title}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {group.items.map((item) => (
                                                    <span key={item} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features Delivered</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            The CRM was designed as a practical internal product, focused on operational clarity, role separation, and day-to-day usability rather than just surface-level dashboards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featureCards.map((card) => (
                            <article key={card.title} className="rounded-2xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multi-Level Panel Architecture</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Different teams needed different workflows. The system was built around secure role-based access so each user type could operate with the right level of visibility and control.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roleCards.map((role) => (
                            <div key={role.code} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 font-bold text-xl ${accentMap[role.accent]}`}>{role.code}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                                <p className="text-sm text-gray-500">{role.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Automation & Integration Layer</h2>
                                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                    A major goal of the project was reducing repetitive operational work. The CRM supported automation-ready flows and external connectivity so business processes could move faster with less manual intervention.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">Operational Automation</h4>
                                            <p className="text-gray-400 text-sm">Supported routine process execution, workload handling, and daily team actions through structured system workflows and repeatable logic.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">Webhook & API Connectivity</h4>
                                            <p className="text-gray-400 text-sm">Integrated third-party systems through webhook listeners and cURL-based requests for data sync, partner communication, and operational continuity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-950 rounded-xl border border-gray-800 p-6 font-mono text-sm overflow-hidden shadow-2xl relative group">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-gray-500 mb-4">{`/* Simplified automation flow */`}</div>
                                <div className="text-blue-400">async function</div> <div className="text-yellow-300 inline">syncOrderUpdate</div>(<div className="text-purple-400 inline">payload</div>) {"{"}
                                <div className="pl-4 text-gray-300">
                                    <div className="text-pink-400">if</div> (payload.type === <span className="text-green-400">&quot;ORDER_UPDATE&quot;</span>) {"{"}
                                    <div className="pl-4">
                                        <span className="text-gray-500">{`// update internal record`}</span><br />
                                        <span className="text-blue-400">await</span> orderStore.update(payload);<br />
                                        <br />
                                        <span className="text-gray-500">{`// trigger next operational step`}</span><br />
                                        <span className="text-blue-400">await</span> workflowQueue.add(<br />
                                        <span className="text-green-400">&quot;notify-team&quot;</span>,<br />
                                        {"{"} orderId: payload.id {"}"}<br />
                                        );
                                    </div>
                                    {"}"}
                                </div>
                                {"}"}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Impact</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                The real value of this CRM was not just in the interface, but in the operational clarity it created. By centralizing actions, visibility, and process handling, the platform gave teams a stronger system for daily execution.
                            </p>

                            <ul className="space-y-4">
                                {results.map((result) => (
                                    <li key={result} className="flex items-start">
                                        <span className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Value of This Case Study</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                This page is intentionally written as a detailed project case study around custom CRM development, internal dashboard development, workflow automation, and Next.js-based operations tooling. That helps the project page rank for more relevant service and portfolio terms while making the work easier for potential clients to understand.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Custom CRM Development",
                                    "Internal Dashboard Development",
                                    "Next.js Case Study",
                                    "Workflow Automation",
                                    "Role-Based Access Control",
                                    "API Integration Project",
                                ].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom CRM or Internal Dashboard?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    I build business websites, internal tools, admin dashboards, and custom workflow systems designed around real operational needs.
                </p>
                <Link href="/#contact" className="inline-block px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-500/30">
                    Discuss Your Project
                </Link>
            </section>
        </div>
    );
}
