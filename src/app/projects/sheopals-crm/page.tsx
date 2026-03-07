import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Sheopals CRM Case Study | Built with Next.js by Mohit Koli",
    description: "A deep dive into the internal CRM built for Sheopals, featuring complex role-based access, automation pipelines, and API integrations.",
};

export default function SheopalsCrmProject() {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 hidden md:block"></div>
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 bg-center"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Projects
                    </Link>

                    <div className="max-w-4xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm mb-6">
                            Internal Enterprise Tool
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Sheopals <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Intelligent CRM</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                            A high-performance Operations System built to automate daily tasks, manage multi-level hierarchies, and streamline e-commerce workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- OVERVIEW & TECH STACK --- */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Context */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Sheopals needed a central nervous system to handle their growing e-commerce operations. The existing manual workflows for lead management, order processing, and agent performance tracking were becoming bottlenecks.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The solution required a custom-built CRM capable of handling thousands of daily interactions with zero latency, while providing distinct interfaces for different levels of the organization.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Architectures</h2>
                            <ul className="space-y-4">
                                {[
                                    "Micro-frontend architecture using Next.js for lightning-fast page loads.",
                                    "Real-time data synchronization for live sales tracking.",
                                    "Complex permission gatekeeping (Middleware) for 5+ user roles.",
                                    "Optimized API layer handling concurrent requests via cURL & Webhooks."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack Sidebar */}
                        <div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Frontend</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Next.js 14</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">TypeScript</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Tailwind CSS</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Backend & DB</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Node.js API</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">MySQL</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Redis</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Integrations</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Custom Webhooks</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">cURL Services</span>
                                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">Payment Gateways</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROLES SECTION --- */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multi-Level Panel Architecture</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">One system, multiple views. Security and access control were paramount in the design.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 font-bold text-xl">SA</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Sales Agent</h3>
                            <p className="text-sm text-gray-500">Focused view for lead handling, calling, and order entry. Restricted access to own data only.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 font-bold text-xl">TL</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Team Leader</h3>
                            <p className="text-sm text-gray-500">Dashboard for monitoring team performance, assigning leads, and listening to call recordings.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4 font-bold text-xl">MG</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Manager</h3>
                            <p className="text-sm text-gray-500">High-level insights, sales forecasting, and inventory oversight integration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 font-bold text-xl">AD</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Super Admin</h3>
                            <p className="text-sm text-gray-500">Full system control. User management, global configuration, and audit logs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- AUTOMATION & API SECTION --- */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Efficiency Through Automation</h2>
                                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                    Manual data entry kills productivity. I implemented background jobs to handle the heavy lifting.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">Daily Task Automation</h4>
                                            <p className="text-gray-400 text-sm">Automated allocation of leads to agents based on attendance and performance scoring every morning.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">Webhook & cURL Integrations</h4>
                                            <p className="text-gray-400 text-sm">Seamlessly syncing data with Logistics partners (NDR management) and SMS gateways using robust API consumers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Snippet Visual */}
                            <div className="bg-gray-950 rounded-xl border border-gray-800 p-6 font-mono text-sm overflow-hidden shadow-2xl relative group">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-gray-500 mb-4">/* Webhook Handler Logic (Simplified) */</div>
                                <div className="text-blue-400">async function</div> <div className="text-yellow-300 inline">handleWebhook</div>(<div className="text-purple-400 inline">payload</div>) {'{'}
                                <div className="pl-4 text-gray-300">
                                    <div className="text-pink-400">if</div> (payload.type === <span className="text-green-400">'ORDER_UPDATE'</span>) {'{'}
                                    <div className="pl-4">
                                        <span className="text-gray-500">// Sync status real-time</span><br />
                                        <span className="text-blue-400">await</span> db.orders.update({'...'});<br />
                                        <br />
                                        <span className="text-gray-500">// Trigger Automation</span><br />
                                        <span className="text-blue-400">await</span> AutomationQueue.add(<br />
                                        <span className="text-green-400">'notify_agent'</span>, <br />
                                        {'{'} agentId: payload.agent_id {'}'}<br />
                                        );
                                    </div>
                                    {'}'}
                                </div>
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Complex Systems Built?</h2>
                <Link href="/#contact" className="inline-block px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-500/30">
                    Hire Me for Scale
                </Link>
            </section>

        </div>
    );
}
