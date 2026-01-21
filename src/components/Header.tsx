"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Qualification", href: "/#qualification" },
        { name: "Experience", href: "/#experience" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
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
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <header
                id="header-main"
                className="bg-white shadow-md sticky top-0 z-50"
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-xl font-bold text-blue-900"
                        aria-label="Mohit Koli Home"
                    >
                        Mohit Koli
                    </Link>

                    {/* Desktop Menu */}
                    <nav
                        className="hidden md:block"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <ul className="flex space-x-6 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 hover:text-blue-700 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        id="menu-btn"
                        className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
                        onClick={openDrawer}
                        aria-expanded={isDrawerOpen}
                        aria-label="Open menu"
                        aria-controls="mobile-drawer"
                    >
                        <span className="w-6 h-0.5 bg-gray-800"></span>
                        <span className="w-6 h-0.5 bg-gray-800"></span>
                        <span className="w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                id="overlay"
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ease-in-out z-40 ${isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeDrawer}
            ></div>

            {/* Mobile Drawer */}
            <nav
                id="mobile-drawer"
                className={`fixed right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out md:hidden ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-labelledby="menu-btn"
                role="navigation"
            >
                <div className="px-6 py-4 flex items-center justify-between border-b">
                    <span className="text-base font-semibold">Menu</span>
                    <button
                        id="close-btn"
                        className="p-2 rounded hover:bg-gray-100"
                        onClick={closeDrawer}
                        aria-label="Close menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium" role="menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-gray-700 hover:text-blue-700 mobile-menu-link block"
                                role="menuitem"
                                onClick={() => setTimeout(closeDrawer, 100)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
