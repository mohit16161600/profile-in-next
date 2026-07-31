"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 *
 * This replaces framer-motion's `whileInView` across the site. framer-motion
 * shipped ~50KB of client JS and, worse, server-rendered every animated block
 * with `style="opacity:0"` — so nothing was painted until hydration finished.
 * An IntersectionObserver costs a few hundred bytes and runs off the critical
 * path. `globals.css` handles the reduced-motion and no-JS fallbacks.
 */
export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        );
        if (elements.length === 0) return;

        const revealAll = () => elements.forEach((el) => el.classList.add("is-visible"));

        if (typeof IntersectionObserver === "undefined") {
            revealAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            },
            // Generous margins so blocks reveal just before they scroll into view,
            // which also keeps fast flicks and in-page anchor jumps from outrunning
            // the observer and leaving a section faded out.
            { rootMargin: "150px 0px 150px 0px", threshold: 0 }
        );

        // Never measure these elements here. Most sit inside `content-visibility: auto`
        // sections, and a synchronous getBoundingClientRect() forces those subtrees to
        // lay out immediately — which defeats content-visibility and costs hundreds of
        // milliseconds of main-thread work. The observer's first callback covers
        // whatever is already on screen.
        for (const el of elements) {
            observer.observe(el);
        }

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
