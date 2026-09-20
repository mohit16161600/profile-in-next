"use client";

import { useState } from "react";

/** A discount code with a one-tap copy button. Labels are props so Hinglish pages can localise them. */
export default function CopyCode({
    code,
    copyLabel = "Copy code",
    copiedLabel = "Copied!",
}: {
    code: string;
    copyLabel?: string;
    copiedLabel?: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable (e.g. insecure context) — the code stays visible to copy by hand.
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-xl border-2 border-dashed border-primary-400/60 bg-primary-500/10 px-6 py-3 font-mono text-2xl font-bold tracking-[0.2em] text-white select-all">
                {code}
            </span>
            <button
                type="button"
                onClick={handleCopy}
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
                aria-live="polite"
            >
                {copied ? copiedLabel : copyLabel}
            </button>
        </div>
    );
}
