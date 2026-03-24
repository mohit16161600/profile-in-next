"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

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
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || "Unable to send email");
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
        <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-3xl opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        className="glass shadow-lg rounded-2xl p-8 border border-white/10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Connect With Mohit Koli</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Ready to bring your project to life? <strong className="text-white">Mohit Koli</strong> is available for freelance projects and
                            full-time opportunities. Whether you need a custom web application, web services, or enterprise solution –
                            let's discuss how <strong className="text-white">Mohit Koli</strong> can help.
                        </p>

                        <div className="space-y-6">
                            <a href="tel:+918383868837" className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover-target">
                                <span className="w-12 h-12 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📞</span>
                                <div>
                                    <p className="font-semibold text-gray-300 text-sm">Phone</p>
                                    <p className="text-white group-hover:text-primary-400 transition-colors">+91 8383868837</p>
                                </div>
                            </a>
                            <a href="mailto:contact@mohitkoli.info" className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover-target">
                                <span className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📧</span>
                                <div>
                                    <p className="font-semibold text-gray-300 text-sm">Email</p>
                                    <p className="text-white group-hover:text-emerald-400 transition-colors">contact@mohitkoli.info</p>
                                </div>
                            </a>
                            <a href="mailto:mohitkoli12162@gmail.com" className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 hover-target">
                                <span className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📩</span>
                                <div>
                                    <p className="font-semibold text-gray-300 text-sm">Alternate Email</p>
                                    <p className="text-white group-hover:text-purple-400 transition-colors">mohitkoli12162@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="font-semibold text-gray-300 mb-6">Follow Mohit Koli</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors hover-target" aria-label="Mohit Koli GitHub Profile">
                                    <Image src="/assets/github.png" alt="GitHub" className="w-6 h-6 filter invert opacity-80" width={24} height={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] transition-colors hover-target" aria-label="Mohit Koli LinkedIn Profile">
                                    <Image src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 filter invert opacity-80" width={24} height={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="glass shadow-lg rounded-2xl p-8 border border-white/10"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Start a Project</h3>
                        <form id="projectForm" className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required aria-label="Your Name"
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all hover-target" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required aria-label="Your Email"
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all hover-target" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Your Phone</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone" aria-label="Your Phone"
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all hover-target" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea id="message" name="message" placeholder="Tell me about your project requirements" rows={5} required aria-label="Your Message"
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all resize-none hover-target"></textarea>
                            </div>
                            
                            <motion.button 
                                type="submit" 
                                id="submitBtn" 
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition shadow-lg shadow-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed hover-target"
                            >
                                {isSubmitting ? "Sending..." : "Let's Collaborate"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
