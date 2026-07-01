"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { HERO_SLIDES } from "@/lib/constants";

const AUTOPLAY_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slide = HERO_SLIDES[index];

  const goTo = (i: number) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // GSAP: subtle letter-level reveal on the heading each time it changes
  useEffect(() => {
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll(".hero-line");
    gsap.fromTo(
      lines,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      }
    );
  }, [index]);

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.heading.replace("\n", " ")}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20" />
          <div className="absolute inset-0 bg-navy-dark/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container-luxury flex flex-col justify-end pb-28 md:pb-32">
        <motion.span
          key={`eyebrow-${slide.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow mb-5"
        >
          {slide.eyebrow}
        </motion.span>

        <h1
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] text-white max-w-3xl"
        >
          {slide.heading.split("\n").map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="hero-line block">{line}</span>
            </span>
          ))}
        </h1>

        <motion.p
          key={`sub-${slide.id}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-xl text-base md:text-lg text-offwhite/80 font-light"
        >
          {slide.subheading}
        </motion.p>

        <motion.div
          key={`cta-${slide.id}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-medium tracking-wide text-navy-dark shadow-gold transition-transform duration-300 hover:scale-105"
          >
            {slide.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-offwhite/30 px-8 py-3.5 text-sm font-medium tracking-wide text-white glass-light transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            {slide.secondaryCta}
          </a>
        </motion.div>
      </div>

      {/* Slide controls */}
      <div className="absolute z-10 bottom-10 right-6 md:right-16 flex items-center gap-4">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="h-11 w-11 rounded-full glass-light flex items-center justify-center text-gold hover:border-gold transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="h-11 w-11 rounded-full glass-light flex items-center justify-center text-gold hover:border-gold transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute z-10 bottom-10 left-6 md:left-16 flex items-center gap-3">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="group relative h-1.5 w-10 rounded-full bg-white/25 overflow-hidden"
          >
            {i === index && (
              <motion.span
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                className="absolute inset-y-0 left-0 bg-gold"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
