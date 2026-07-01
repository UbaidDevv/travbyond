"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
            Words From Our Guests
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-14 text-center shadow-glass"
            >
              <Quote className="mx-auto text-gold" size={32} />
              <p className="font-display text-xl md:text-2xl text-white mt-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-8 text-gold text-sm tracking-wide">{t.name}</p>
              <p className="text-offwhite/50 text-xs mt-1">{t.origin}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-offwhite/70 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-offwhite/70 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
