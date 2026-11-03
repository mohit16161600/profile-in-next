"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { categoryBySlug, type LanderItem } from "@/data/landers";

/**
 * Image grid with a lightbox, for one category.
 *
 * Client component, but the grid still server-renders, so every image is in the
 * static HTML and crawlable — the interactivity is only the lightbox.
 *
 * Deliberately does NOT use the site's `.reveal` class on the cards. ScrollReveal
 * attaches its IntersectionObserver once per pathname, so anything that mounts
 * later would sit at opacity 0 forever. Static copy above the grid can reveal;
 * the grid itself should not.
 */
export default function Gallery({ items }: { items: LanderItem[] }) {
    const [open, setOpen] = useState<LanderItem | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    // <dialog> gives us the backdrop, the focus trap and Esc-to-close for free,
    // so there is no keyboard or scroll-lock code here to get wrong.
    useEffect(() => {
        const element = dialogRef.current;
        if (!element) return;
        if (open && !element.open) element.showModal();
        if (!open && element.open) element.close();
    }, [open]);

    const close = useCallback(() => setOpen(null), []);

    if (items.length === 0) return <EmptyState />;

    return (
        <>
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                {items.map((item) => (
                    <button
                        key={item.slug}
                        type="button"
                        onClick={() => setOpen(item)}
                        className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-colors hover:border-primary-500/40"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={item.width}
                            height={item.height}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="h-auto w-full"
                        />
                        <span className="block px-5 py-4">
                            <span className="block text-base font-semibold text-white">{item.title}</span>
                            {item.note ? (
                                <span className="mt-1 block text-sm leading-6 text-gray-400">{item.note}</span>
                            ) : null}
                            {item.tags?.length ? (
                                <span className="mt-3 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-gray-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </span>
                            ) : null}
                        </span>
                    </button>
                ))}
            </div>

            <dialog
                ref={dialogRef}
                onClose={close}
                onClick={(event) => {
                    // A click that lands on the dialog itself is a backdrop click;
                    // content sits inside the figure and stops there.
                    if (event.target === dialogRef.current) close();
                }}
                className="max-h-[92vh] w-[min(1100px,94vw)] rounded-2xl border border-white/10 bg-[#0b0b0f] p-0 text-white backdrop:bg-black/80"
            >
                {open ? (
                    <figure className="m-0">
                        <Image
                            src={open.image}
                            alt={open.title}
                            width={open.width}
                            height={open.height}
                            sizes="94vw"
                            className="h-auto w-full"
                        />
                        <figcaption className="flex flex-wrap items-start justify-between gap-4 border-t border-white/10 p-5">
                            <span>
                                <span className="block text-lg font-semibold text-white">{open.title}</span>
                                <span className="mt-1 block text-sm text-gray-400">
                                    {categoryBySlug(open.category)?.name ?? open.category}
                                </span>
                                {open.note ? (
                                    <span className="mt-2 block max-w-prose text-sm leading-6 text-gray-400">
                                        {open.note}
                                    </span>
                                ) : null}
                            </span>
                            <button
                                type="button"
                                onClick={close}
                                className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 hover:border-primary-500 hover:text-white"
                            >
                                Close
                            </button>
                        </figcaption>
                    </figure>
                ) : null}
            </dialog>
        </>
    );
}

function EmptyState() {
    return (
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8">
            <p className="text-base font-semibold text-white">No layouts in this category yet</p>
            <p className="mt-3 leading-7 text-gray-400">
                Put the image in{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-sm text-primary-400">
                    public/assets/lander/
                </code>{" "}
                and add an entry to{" "}
                <code className="rounded bg-black/40 px-1.5 py-0.5 text-sm text-primary-400">src/data/landers.ts</code>{" "}
                with its real pixel width and height.
            </p>
        </div>
    );
}
