"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const springConfigLarge = { damping: 20, stiffness: 250, mass: 0.8 };
  const cursorXSpringLarge = useSpring(cursorX, springConfigLarge);
  const cursorYSpringLarge = useSpring(cursorY, springConfigLarge);

  useEffect(() => {
    // Pointer capability is checked by ClientEffects before this module is even
    // fetched, so reaching here means a fine pointer is present.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Lets globals.css hide the native cursor only now that a replacement exists.
    document.documentElement.setAttribute("data-cursor", "on");

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.documentElement.removeAttribute("data-cursor");
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpringLarge,
          y: cursorYSpringLarge,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
    </>
  );
}
