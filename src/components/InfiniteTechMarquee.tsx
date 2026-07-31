"use client";

// Server Component. Icons are vendored locally (devicon, MIT) under
// /public/assets/tech — plain <img> rather than next/image because these are
// already-tiny SVGs: routing 30 of them through /_next/image only added 30
// optimizer round-trips to the homepage for no byte savings.
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

// One duplicate copy is all the -50% keyframe loop needs. Three copies meant a
// ~5700px-wide composited layer to raster every frame on mobile. The duplicate is
// decorative, so it is hidden from assistive tech and lazily loaded.
const COPIES = 2;

export default function InfiniteTechMarquee() {
    return (
        <section
            className="py-12 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/5"
            aria-label="Technologies I work with"
        >
            {/* Left and Right Edge Gradients for smooth fade in/out effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-widest mb-8">
                Empowering logic behind
            </p>

            {/* Scrolling Track Container */}
            <div className="flex overflow-hidden group w-full">
                <div className="flex space-x-12 md:space-x-24 animate-marquee group-hover:[animation-play-state:paused] w-max">
                    {Array.from({ length: COPIES }).flatMap((_, copy) =>
                        technologies.map((tech) => {
                            const isDuplicate = copy > 0;
                            return (
                                <div
                                    key={`${copy}-${tech.name}`}
                                    className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px]"
                                    aria-hidden={isDuplicate || undefined}
                                >
                                    {/*
                                      The dimming used to sit on this whole wrapper, which dropped the
                                      label's effective contrast to 4.3:1 and failed axe. Only the logo
                                      is dimmed now; the text keeps its full colour.
                                    */}
                                    <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={tech.src}
                                            alt={isDuplicate ? "" : `${tech.name} logo`}
                                            width={64}
                                            height={64}
                                            loading="lazy"
                                            decoding="async"
                                            fetchPriority="low"
                                            className={`w-full h-full object-contain ${tech.invertTheme ? "invert brightness-0" : ""}`}
                                        />
                                    </div>
                                    <span className="text-gray-400 font-medium text-xs md:text-sm">{tech.name}</span>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
