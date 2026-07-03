"use client";

import Image from "next/image";

// Array of tech logos to scroll.
// Icons are vendored locally (devicon, MIT) under /public/assets/tech — no remote
// CDN host needed in next.config images, faster loads, and no jsdelivr dependency.
const technologies = [
    { name: "React", src: "/assets/tech/react.svg" },
    { name: "Next.js", src: "/assets/tech/nextjs.svg", invertTheme: true },
    { name: "TypeScript", src: "/assets/tech/typescript.svg" },
    { name: "Tailwind CSS", src: "/assets/tech/tailwindcss.svg" },
    { name: "Node.js", src: "/assets/tech/nodejs.svg" },
    { name: "PHP", src: "/assets/tech/php.svg" },
    { name: "MySQL", src: "/assets/tech/mysql.svg" },
    { name: "Laravel", src: "/assets/tech/laravel.svg" },
    { name: "Framer Motion", src: "/assets/tech/framermotion.svg" },
    { name: "MongoDB", src: "/assets/tech/mongodb.svg" },
];

// Duplicate the array to create a seamless infinite scroll loop
const infiniteTechList = [...technologies, ...technologies, ...technologies];

export default function InfiniteTechMarquee() {
    return (
        <section className="py-12 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/5">
            {/* Left and Right Edge Gradients for smooth fade in/out effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <p className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-widest mb-8">
                Empowering logic behind
            </p>

            {/* Scrolling Track Container */}
            <div className="flex overflow-hidden group w-full">
                {/* 
                 The "animate-scroll" class handles the infinite movement via CSS keyframes.
                 Group hovering pauses the animation via "group-hover:[animation-play-state:paused]". 
                */}
                <div className="flex space-x-12 md:space-x-24 animate-marquee group-hover:[animation-play-state:paused] w-max">
                    {infiniteTechList.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px] opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4">
                                <Image
                                    src={tech.src}
                                    alt={`${tech.name} logo`}
                                    fill
                                    className={`object-contain ${tech.invertTheme ? "invert brightness-0" : ""}`}
                                    sizes="(max-width: 768px) 48px, 64px"
                                />
                            </div>
                            <span className="text-gray-400 font-medium text-xs md:text-sm">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );    
}
