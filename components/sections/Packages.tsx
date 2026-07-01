"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PACKAGES } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Packages() {
  return (
    <section id="packages" className="bg-navy-dark py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="eyebrow">Featured Packages</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
            Signature UAE Itineraries
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={item}
              className="group relative rounded-3xl overflow-hidden glass shadow-glass"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/10 to-transparent" />
                <span className="absolute top-4 right-4 rounded-full bg-navy-dark/70 border border-gold/30 px-3 py-1 text-xs text-gold">
                  {pkg.duration}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-2xl text-white">{pkg.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-wide uppercase text-offwhite/60 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-gold font-medium">{pkg.price}</p>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${pkg.title}`}
                    className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy-dark"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
