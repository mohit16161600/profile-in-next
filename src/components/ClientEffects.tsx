"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

// Both are pure desktop polish (Lenis inertia scrolling + the custom cursor) and
// AnimatedCursor is the only remaining framer-motion consumer on the site. Loading
// them lazily keeps that JS out of every initial bundle, and the pointer check
// means touch devices never download it at all.
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });
const AnimatedCursor = dynamic(() => import("./AnimatedCursor"), { ssr: false });

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

function subscribe(onChange: () => void) {
    const mql = window.matchMedia(FINE_POINTER);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
}

export default function ClientEffects() {
    const hasFinePointer = useSyncExternalStore(
        subscribe,
        () => window.matchMedia(FINE_POINTER).matches,
        () => false
    );

    if (!hasFinePointer) return null;

    return (
        <>
            <SmoothScroll />
            <AnimatedCursor />
        </>
    );
}
