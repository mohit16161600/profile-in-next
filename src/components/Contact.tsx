"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        try {
            const response = await fetch("https://mailideepakrajput.vercel.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: "65fe1234567890abcdef9101",
                    message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            alert("Message sent successfully! Mohit Koli will get back to you soon.");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            alert("Failed to send message. Please try again or contact directly via call or email.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Get In Touch</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Connect With Mohit Koli</h3>
                        <p className="text-gray-600 mb-6">
                            Ready to bring your project to life? <strong>Mohit Koli</strong> is available for freelance projects and
                            full-time opportunities. Whether you need a custom web application, web services, or enterprise solution –
                            let's discuss how <strong>Mohit Koli</strong> can help. Visit <strong>mohitkoli.info</strong> to learn more
                            about my services.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <a href="tel:+918383868837" className="text-blue-600 hover:text-blue-800">+91 8383868837</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Email</p>
                                    <a href="mailto:contact@mohitkoli.info"
                                        className="text-blue-600 hover:text-blue-800">contact@mohitkoli.info</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl">📩</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Alternate Email</p>
                                    <a href="mailto:mohitkoli12162@gmail.com"
                                        className="text-blue-600 hover:text-blue-800">mohitkoli12162@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="font-semibold text-gray-800 mb-4">Follow Mohit Koli</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                                    className="hover:opacity-80 transition" aria-label="Mohit Koli GitHub Profile">
                                    <Image src="/assets/github.png" alt="Mohit Koli GitHub Profile - Web Developer Portfolio" className="w-8 h-8"
                                        width={32} height={32} />
                                </a>
                                <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer"
                                    className="hover:opacity-80 transition" aria-label="Mohit Koli LinkedIn Profile">
                                    <Image src="/assets/linkedin.png" alt="Mohit Koli LinkedIn Profile - Professional Web Developer"
                                        className="w-8 h-8" width={32} height={32} />
                                </a>
                            </div>
                            <p className="text-sm text-gray-600 mt-4">
                                Also check out my <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">technology
                                    blog</Link> for web development insights and tutorials.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Start a Project</h3>
                        <form id="projectForm" className="space-y-4" onSubmit={handleSubmit}>
                            <input type="text" id="name" name="name" placeholder="Your Name" required
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <input type="email" id="email" name="email" placeholder="Your Email" required
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <input type="tel" id="phone" name="phone" placeholder="Your Phone"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea id="message" name="message" placeholder="Tell me about your project requirements" rows={4}
                                required
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                            <button type="submit" id="submitBtn" disabled={isSubmitting}
                                className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isSubmitting ? "Sending..." : "Let's Collaborate"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
