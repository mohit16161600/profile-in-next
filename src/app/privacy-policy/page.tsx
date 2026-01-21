import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - Mohit Koli | mohitkoli.info",
    description: "Privacy Policy for mohitkoli.info. Learn how Mohit Koli collects, uses, and protects your personal information when you visit this website.",
    keywords: "Mohit Koli, mohitkoli.info, privacy policy, data protection, cookie policy, GDPR, website privacy",
    authors: [{ name: "Mohit Koli" }],
    // Add other metadata as needed
};

export default function PrivacyPolicy() {
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
                    <li className="text-gray-900">Privacy Policy</li>
                </ol>
            </nav>

            {/* Page Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-gray-600">Last Updated: November 20, 2025</p>
            </header>

            {/* Privacy Policy Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to mohitkoli.info (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy
                        Policy explains how Mohit Koli (&quot;I,&quot; &quot;me,&quot; or &quot;my&quot;) collects, uses,
                        discloses, and protects your personal information when you visit this
                        website.
                    </p>
                    <p className="text-gray-700">
                        By using this website, you agree to the collection and use of
                        information in accordance with this policy. If you do not agree with
                        this policy, please do not use this website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        2. Information We Collect
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        2.1 Information You Provide
                    </h3>
                    <p className="text-gray-700 mb-4">
                        When you contact me through the contact form or email, I may collect:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Your name</li>
                        <li>Email address</li>
                        <li>Phone number (optional)</li>
                        <li>Message content</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        2.2 Automatically Collected Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                        When you visit this website, certain information is automatically
                        collected:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website addresses</li>
                        <li>Date and time of visits</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        3. How We Use Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">
                        I use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>To respond to your inquiries and provide customer support</li>
                        <li>To improve the website&apos;s functionality and user experience</li>
                        <li>To analyze website traffic and usage patterns</li>
                        <li>
                            To send you updates about my services (only if you have consented)
                        </li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        4. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-700 mb-4">
                        This website uses cookies and similar tracking technologies to track
                        activity and hold certain information. Cookies are files with a small
                        amount of data that may include an anonymous unique identifier.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        4.1 Types of Cookies Used
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>
                            <strong>Essential Cookies:</strong> Required for the website to
                            function properly
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> Used to understand how visitors
                            interact with the website (Google Analytics)
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> Used to deliver relevant
                            advertisements
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        4.2 Third-Party Services
                    </h3>
                    <p className="text-gray-700 mb-4">
                        This website uses the following third-party services that may set
                        cookies:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>
                            <strong>Google Analytics:</strong> For website analytics and traffic
                            analysis
                        </li>
                        <li>
                            <strong>Gatekeeper Consent:</strong> For cookie consent management
                        </li>
                    </ul>
                    <p className="text-gray-700">
                        You can control cookies through your browser settings. However,
                        disabling cookies may affect the functionality of this website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        5. Data Sharing and Disclosure
                    </h2>
                    <p className="text-gray-700 mb-4">
                        I do not sell, trade, or rent your personal information to third
                        parties. However, I may share your information in the following
                        circumstances:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>
                            <strong>Service Providers:</strong> With trusted third-party service
                            providers who assist in operating the website (e.g., hosting
                            providers, email services)
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required by law or to
                            protect my rights and safety
                        </li>
                        <li>
                            <strong>Business Transfers:</strong> In connection with any merger,
                            sale, or transfer of assets
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        6. Data Security
                    </h2>
                    <p className="text-gray-700 mb-4">
                        I implement appropriate technical and organizational security
                        measures to protect your personal information against unauthorized
                        access, alteration, disclosure, or destruction. However, no method of
                        transmission over the Internet or electronic storage is 100% secure.
                    </p>
                    <p className="text-gray-700">
                        While I strive to use commercially acceptable means to protect your
                        personal information, I cannot guarantee its absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        7. Your Rights
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Depending on your location, you may have the following rights
                        regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>
                            <strong>Right to Access:</strong> Request a copy of the personal
                            information I hold about you
                        </li>
                        <li>
                            <strong>Right to Rectification:</strong> Request correction of
                            inaccurate or incomplete information
                        </li>
                        <li>
                            <strong>Right to Erasure:</strong> Request deletion of your personal
                            information
                        </li>
                        <li>
                            <strong>Right to Restrict Processing:</strong> Request limitation of
                            how I use your information
                        </li>
                        <li>
                            <strong>Right to Data Portability:</strong> Request transfer of your
                            data to another service
                        </li>
                        <li>
                            <strong>Right to Object:</strong> Object to processing of your
                            personal information
                        </li>
                        <li>
                            <strong>Right to Withdraw Consent:</strong> Withdraw consent at any
                            time where processing is based on consent
                        </li>
                    </ul>
                    <p className="text-gray-700">
                        To exercise these rights, please contact me using the information
                        provided in the &quot;Contact Us&quot; section below.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        8. Children&apos;s Privacy
                    </h2>
                    <p className="text-gray-700">
                        This website is not intended for children under the age of 13. I do
                        not knowingly collect personal information from children under 13. If
                        you are a parent or guardian and believe your child has provided me
                        with personal information, please contact me immediately.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        9. Links to Other Websites
                    </h2>
                    <p className="text-gray-700">
                        This website may contain links to other websites that are not operated
                        by me. I have no control over and assume no responsibility for the
                        content, privacy policies, or practices of any third-party websites
                        or services. I encourage you to review the privacy policy of every
                        website you visit.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        10. Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        I may update this Privacy Policy from time to time. I will notify you
                        of any changes by posting the new Privacy Policy on this page and
                        updating the &quot;Last Updated&quot; date.
                    </p>
                    <p className="text-gray-700">
                        You are advised to review this Privacy Policy periodically for any
                        changes. Changes to this Privacy Policy are effective when they are
                        posted on this page.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        11. Contact Us
                    </h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy or wish to
                        exercise your rights, please contact me:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-2">
                            <strong>Mohit Koli</strong>
                        </p>
                        <p className="text-gray-700 mb-2">
                            Email:{" "}
                            <a
                                href="mailto:contact@mohitkoli.info"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                contact@mohitkoli.info
                            </a>
                        </p>
                        <p className="text-gray-700 mb-2">
                            Alternate Email:{" "}
                            <a
                                href="mailto:mohitkoli12162@gmail.com"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                mohitkoli12162@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-700">
                            Phone:{" "}
                            <a
                                href="tel:+918383868837"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                +91 8383868837
                            </a>
                        </p>
                        <p className="text-gray-700 mt-2">
                            Website:{" "}
                            <a
                                href="https://mohitkoli.info"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                https://mohitkoli.info
                            </a>
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        12. Governing Law
                    </h2>
                    <p className="text-gray-700">
                        This Privacy Policy is governed by and construed in accordance with
                        the laws of India. Any disputes arising from this Privacy Policy shall
                        be subject to the exclusive jurisdiction of the courts in India.
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
