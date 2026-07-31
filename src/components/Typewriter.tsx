"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  startDelay?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  startDelay = 2500,
}: TypewriterProps) {
  // Start on the first word fully typed so the <h1> is complete in the SSR HTML
  // (it used to render an invisible placeholder, leaving the heading empty until
  // hydration). The loop then enters at the deleting phase, same as before.
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Hold the first word until the page has settled. A heading that mutates every
  // 100ms from the first frame keeps the above-the-fold viewport changing forever,
  // which inflates Speed Index and competes with the hero image for the main thread.
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [started, text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
        {text || "​"}
      </span>
      <span
        aria-hidden="true"
        className="typewriter-caret inline-block w-[4px] h-[1em] bg-primary-500 ml-1.5 align-middle -translate-y-[2px] shadow-[0_0_8px_rgba(239,68,68,0.8)]"
      />
    </span>
  );
}
