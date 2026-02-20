import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Filtered list of images (excluding blog images)
const galleryImages = [
    { src: '/assets/mohit-koli-profile-photo.jpg', alt: 'Mohit Koli Profile', size: 'large' },
    { src: '/assets/mohit-koli-coding-setup-3.jpg', alt: 'Coding Setup', size: 'medium' },
    { src: '/assets/mohit-koli-developer-life-1.jpg', alt: 'Developer Life', size: 'medium' },
    { src: '/assets/mohit-koli-full-stack-4.jpg', alt: 'Full Stack Development', size: 'wide' },
    { src: '/assets/mohit-koli-software-engineer-9.jpg', alt: 'Software Engineer', size: 'medium' },
    { src: '/assets/mohit-koli-tech-creator-2.jpg', alt: 'Tech Creator', size: 'large' },
    { src: '/assets/mohit-koli-youtube-22.jpg', alt: 'YouTube Content', size: 'medium' },
    { src: '/assets/mohit-koli-instagram-23.jpg', alt: 'Instagram Vibe', size: 'medium' },
    { src: '/assets/mohit-koli-web-design-8.jpg', alt: 'Web Design', size: 'wide' },
    { src: '/assets/mohit-koli-vlogger-10.jpg', alt: 'Vlogging', size: 'medium' },
    { src: '/assets/mohit-koli-laravel-developer-12.jpg', alt: 'Laravel Developer', size: 'medium' },
    { src: '/assets/mohit-koli-backend-guru-14.jpg', alt: 'Backend Expert', size: 'medium' },
    { src: '/assets/mohit-koli-react-specialist-13.jpg', alt: 'React Specialist', size: 'wide' },
    { src: '/assets/mohit-koli-frontend-master-15.jpg', alt: 'Frontend Master', size: 'medium' },
    { src: '/assets/mohit-koli-web-projects-16.jpg', alt: 'Web Projects', size: 'medium' },
    { src: '/assets/mohit-koli-coding-life-17.jpg', alt: 'Coding Life', size: 'medium' },
    { src: '/assets/mohit-koli-tech-influencer-18.jpg', alt: 'Tech Influencer', size: 'large' },
    { src: '/assets/mohit-koli-software-architect-19.jpg', alt: 'Software Architect', size: 'medium' },
    { src: '/assets/mohit-koli-digital-creator-20.jpg', alt: 'Digital Creator', size: 'medium' },
    { src: '/assets/mohit-koli-setup-24.jpg', alt: 'Workspace Setup', size: 'wide' },
    { src: '/assets/mohit-koli-work-25.jpg', alt: 'Hard at Work', size: 'medium' },
    { src: '/assets/mohit-koli-portfolio-26.jpg', alt: 'Portfolio Showcase', size: 'medium' },
    { src: '/assets/mohit-koli-lifestyle-6.jpg', alt: 'Lifestyle', size: 'large' },

];

export const metadata = {
    title: "Mohit Koli | Gallery & Social Profile",
    description: "Explore the life of Mohit Koli behind the code. A gallery of coding setups, developer lifestyle, and social media highlights.",
    alternates: {
        canonical: "https://mohitkoli.info/profile",
    },
    openGraph: {
        title: "Mohit Koli - Developer Life & Gallery",
        description: "Behind the scenes: Coding setups, vlogging, and the developer lifestyle of Mohit Koli.",
        images: ["/assets/mohit-koli-coding-setup-3.jpg"],
    },
};

export default function ProfilePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* --- HERO SECTION --- */}
            <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-sm font-medium text-gray-300">
                            Inside the Life of a Developer
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            More Than Just <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Code.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Behind every commit is a story. From my coding setup to my daily adventures as a tech creator, welcome to my world.
                        </p>

                        {/* Social Quick Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors border border-gray-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/mohit-koli-b47260213" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006396] transition-colors shadow-lg shadow-blue-900/20">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                LinkedIn
                            </a>
                            <a href="https://x.com/mohitko86979490" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors border border-gray-800">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                X (Twitter)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL STATS --- */}
            <section className="py-12 -mt-16 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* YOUTUBE */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Content Creator</h3>
                            <p className="text-sm text-gray-500 mb-6">Posting coding tutorials & tech reviews</p>
                            <a href="https://www.youtube.com/@rideswithmohit" target="_blank" rel="noopener noreferrer"
                                className="mt-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium w-full">
                                Visit Channel
                            </a>
                        </div>

                        {/* INSTAGRAM */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 group-hover:text-white transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Daily Life</h3>
                            <p className="text-sm text-gray-500 mb-6">Sharing behind the scenes & lifestyle</p>
                            <a href="https://www.instagram.com/mohit12162/" target="_blank" rel="noopener noreferrer"
                                className="mt-auto px-6 py-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition font-medium w-full">
                                Follow Me
                            </a>
                        </div>

                        {/* GITHUB */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mb-4 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Open Source</h3>
                            <p className="text-sm text-gray-500 mb-6">Building & contributing to projects</p>
                            <a href="https://github.com/mohit16161600" target="_blank" rel="noopener noreferrer"
                                className="mt-auto px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium w-full">
                                View Repos
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- GALLERY SECTION --- */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-500">Snapshots from my journey.</p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={600}
                                    height={800} // Aspect ratio will be handled by height-auto
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                    <p className="text-white font-medium">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Create Something Amazing</h2>
                    <p className="text-gray-600 mb-10 text-lg">Whether you need a website, a mobile app, or a full-stack solution, I'm here to help.</p>
                    <Link href="/#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition shadow-lg hover:shadow-primary-500/30">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
