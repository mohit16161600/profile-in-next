"use client";

import { useState } from "react";

interface ShareButtonsProps {
    url: string;
    title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            label: "Share on WhatsApp",
            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            className:
                "bg-[#25D366]/15 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-white",
        },
        {
            label: "Share on X",
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            className:
                "bg-primary-600/20 text-primary-400 border-primary-500/30 hover:bg-primary-600 hover:text-white",
        },
        {
            label: "Share on LinkedIn",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            className:
                "bg-[#0077b5]/20 text-[#4db2ee] border-[#0077b5]/30 hover:bg-[#0077b5] hover:text-white",
        },
        {
            label: "Share on Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            className:
                "bg-[#1877F2]/15 text-[#6ba8f7] border-[#1877F2]/30 hover:bg-[#1877F2] hover:text-white",
        },
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable (e.g. insecure context) — silently ignore.
        }
    };

    return (
        <div className="flex flex-wrap gap-3">
            {shareLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg border transition-colors ${link.className}`}
                >
                    {link.label}
                </a>
            ))}
            <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
                aria-live="polite"
            >
                {copied ? "Link copied!" : "Copy link"}
            </button>
        </div>
    );
}
