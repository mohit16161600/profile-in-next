"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Qualification", href: "/#qualification" },
        { name: "Experience", href: "/#experience" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
        { name: "Locations", href: "/locations" },
        { name: "Blog", href: "/blog" },
    ];

    const openDrawer = () => {
        setIsDrawerOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        document.body.classList.remove("overflow-hidden");
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeDrawer();
        };
        document.addEventListener("keydown", handleKeyDown);
        
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.header
                id="header-main"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent py-2"}`}
                role="banner"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-white tracking-tight flex items-center group hover-target"
                        aria-label="Mohit Koli Home"
                    >
                        Mohit<span className="text-primary-500 transition-colors group-hover:text-primary-400">Koli</span>.
                    </Link>

                    {/* Desktop Menu */}
                    <nav
                        className="hidden md:block"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <ul className="flex space-x-8 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors hover-target relative group py-2"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        id="menu-btn"
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none hover-target z-50 relative"
                        onClick={openDrawer}
                        aria-expanded={isDrawerOpen}
                        aria-label="Open menu"
                        aria-controls="mobile-drawer"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isDrawerOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isDrawerOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}></span>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        id="overlay"
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeDrawer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Drawer */}
            <nav
                id="mobile-drawer"
                className={`fixed right-0 top-0 h-full w-full sm:w-80 max-w-[85vw] bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
                aria-labelledby="menu-btn"
                role="navigation"
            >
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <ul className="flex flex-col px-4 py-6 text-2xl font-bold space-y-4" role="menu">
                        {navLinks.map((link, index) => (
                            <li 
                                key={link.name}
                                style={{
                                    opacity: isDrawerOpen ? 1 : 0,
                                    transform: isDrawerOpen ? "translateX(0)" : "translateX(20px)",
                                    transition: `all 0.3s ease-out ${0.1 + index * 0.05}s`
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-gray-400 hover:text-white hover:pl-4 block border-b border-white/5 pb-4 transition-all hover-target"
                                    role="menuitem"
                                    onClick={() => setTimeout(closeDrawer, 100)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="p-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                            GH
                        </a>
                        <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] transition-colors">
                            IN
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
