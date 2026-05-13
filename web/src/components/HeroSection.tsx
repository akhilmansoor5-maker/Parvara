"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MarqueeTicker } from "@/components/MarqueeTicker";

const HERO_IMG =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80";

const lineEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-ink grain"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/30" />
      </motion.div>

      <div className="relative z-30 flex min-h-[100dvh] flex-col pb-28 pt-[100px] md:pb-32">
        <div className="relative flex flex-1 flex-col px-5 md:px-10 lg:px-16">
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: lineEase }}
            className="text-label text-muted"
          >
            est. 2020 · India
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: lineEase }}
            className="mt-10 text-display text-parchment/40"
            style={{ marginLeft: "8vw" }}
          >
            your
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: lineEase }}
            className="-mt-2 text-display text-parchment md:-mt-4"
          >
            tribalizing
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: lineEase }}
            className="text-display font-bold italic text-ember"
            style={{ marginRight: "8vw", textAlign: "right" }}
          >
            companion
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: lineEase }}
            className="ml-[8vw] mt-4 h-px w-[120px] origin-left bg-gold/70"
          />

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: lineEase }}
            className="mt-6 text-label text-muted"
            style={{ marginLeft: "8vw" }}
          >
            Workshops · Events · Camping
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: lineEase }}
            className="mt-12 flex flex-wrap gap-4"
            style={{ marginLeft: "8vw" }}
          >
            <Link href="#featured" className="btn-ember">
              Explore experiences →
            </Link>
            <Link href="/about" className="btn-outline">
              Our story
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-none absolute bottom-36 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-44"
        >
          <span className="text-label text-muted">scroll</span>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-parchment/20">
            <span className="absolute h-1.5 w-1.5 animate-bounce rounded-full bg-ember" />
          </span>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-30">
          <MarqueeTicker />
        </div>
      </div>
    </section>
  );
}
