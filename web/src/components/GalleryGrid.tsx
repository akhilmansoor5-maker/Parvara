"use client";

import Image from "next/image";
import { useState } from "react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    className:
      "relative min-h-[280px] md:col-start-1 md:row-start-1 md:row-span-2 md:min-h-[420px]",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    className: "relative min-h-[220px] md:col-start-2 md:row-start-1 md:min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=600&q=80",
    className: "relative min-h-[220px] md:col-start-3 md:row-start-1 md:min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    className: "relative min-h-[240px] md:col-span-2 md:col-start-2 md:row-start-2 md:min-h-[220px]",
  },
  {
    src: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=600&q=80",
    className: "relative min-h-[220px] md:col-start-2 md:row-start-3 md:min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80",
    className: "relative min-h-[220px] md:col-start-3 md:row-start-3 md:min-h-[200px]",
  },
];

export function GalleryGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-ink">
      <p className="py-16 text-center text-label text-muted">PARVARA IN THE WILD</p>
      <div className="grid grid-cols-1 gap-0.5 px-0.5 md:grid-cols-3 md:grid-rows-3">
        {PHOTOS.map((p, i) => (
          <div
            key={p.src}
            className={`group ${p.className}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="grain absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay" aria-hidden />
            <Image
              src={p.src}
              alt=""
              fill
              className="object-cover brightness-[0.92] transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="img-tint pointer-events-none absolute inset-0 z-[5]" />
            <div
              className={`pointer-events-none absolute bottom-3 right-3 z-20 transition-opacity duration-300 ${
                hovered === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-label text-parchment/80">@parvara.in</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
