import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service - Mohit Koli | mohitkoli.info",
    description: "Terms of Service for mohitkoli.info. Read the terms and conditions for using Mohit Koli's website and services.",
    keywords: "Mohit Koli, mohitkoli.info, terms of service, terms and conditions, legal, website terms",
    authors: [{ name: "Mohit Koli" }],
};

export default function TermsOfService() {
    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-gray-600">
                    <li>
                        <Link href="/" className="hover:text-blue-700">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-900">Terms of Service</li>
                </ol>
            </nav>

            {/* Page Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                <p className="text-gray-600">Last Updated: November 20, 2025</p>
            </header>

            {/* Terms Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 mb-4">
                        By accessing and using this website (mohitkoli.info), you accept and agree to be bound by the terms
                        and provision of this agreement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                    <p className="text-gray-700 mb-4">
                        Permission is granted to temporarily download one copy of the materials (information or software) on
                        Mohit Koli&apos;s website for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
                    <p className="text-gray-700 mb-4">
                        The materials on Mohit Koli&apos;s website are provided on an &apos;as is&apos; basis. Mohit Koli makes no
                        warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                        without limitation, implied warranties or conditions of merchantability, fitness for a particular
                        purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
                    <p className="text-gray-700 mb-4">
                        In no event shall Mohit Koli or its suppliers be liable for any damages (including, without
                        limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                        use or inability to use the materials on Mohit Koli&apos;s website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about these Terms, please contact us at <a
                            href="mailto:contact@mohitkoli.info" className="text-blue-600">contact@mohitkoli.info</a>.
                    </p>
                </section>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
                <Link
                    href="/"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}
