"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

// Alternating heights create a masonry feel without a layout library.
const HEIGHTS = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-navy-dark py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="eyebrow">Travel Experience Gallery</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
            Moments Worth Framing
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`relative w-full ${HEIGHTS[i % HEIGHTS.length]} rounded-2xl overflow-hidden break-inside-avoid group block`}
            >
              <Image
                src={img}
                alt="Travbyond UAE experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/30 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-navy-dark/95 flex items-center justify-center p-6"
          >
            <button
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-white/80 hover:text-gold"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-4xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[active]}
                alt="Travbyond UAE experience enlarged"
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
