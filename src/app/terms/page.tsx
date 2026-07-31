import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service - Mohit Koli | mohitkoli.info",
    description: "Terms of Service for mohitkoli.info. Read the terms and conditions for using Mohit Koli's website and services.",
    keywords: "Mohit Koli, mohitkoli.info, terms of service, terms and conditions, legal, website terms",
    authors: [{ name: "Mohit Koli" }],
    alternates: {
        canonical: "https://mohitkoli.info/terms",
    },
};

export default function TermsOfService() {
    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-gray-400">
                    <li>
                        <Link href="/" className="hover:text-primary-500 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-white">Terms of Service</li>
                </ol>
            </nav>

            {/* Page Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                <p className="text-gray-400">Last Updated: November 20, 2025</p>
            </header>

            {/* Terms Content */}
            <div className="glass rounded-xl shadow-sm p-8 prose prose-lg prose-invert max-w-none border border-white/5 prose-p:text-gray-300 prose-headings:text-white">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-300 mb-4">
                        By accessing and using this website (mohitkoli.info), you accept and agree to be bound by the terms
                        and provision of this agreement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                    <p className="text-gray-300 mb-4">
                        Permission is granted to temporarily download one copy of the materials (information or software) on
                        Mohit Koli&apos;s website for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                    <p className="text-gray-300 mb-4">
                        The materials on Mohit Koli&apos;s website are provided on an &apos;as is&apos; basis. Mohit Koli makes no
                        warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                        without limitation, implied warranties or conditions of merchantability, fitness for a particular
                        purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
                    <p className="text-gray-300 mb-4">
                        In no event shall Mohit Koli or its suppliers be liable for any damages (including, without
                        limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                        use or inability to use the materials on Mohit Koli&apos;s website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
                    <p className="text-gray-300 mb-4">
                        If you have any questions about these Terms, please contact us at <a
                            href="mailto:contact@mohitkoli.info" className="text-primary-500 hover:text-primary-400 underline underline-offset-2 transition-colors">contact@mohitkoli.info</a>.
                    </p>
                </section>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
                <Link
                    href="/"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-500 transition-colors font-medium shadow-lg"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}
