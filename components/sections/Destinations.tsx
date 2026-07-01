"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DESTINATIONS } from "@/lib/constants";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-navy py-24 md:py-32">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <span className="eyebrow">Top Destinations</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
              Four Emirates, <br className="hidden md:block" /> Endless Character
            </h2>
          </div>
          <p className="max-w-sm text-offwhite/70">
            Each emirate has its own rhythm. We help you find the one that
            matches yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest, i) => (
            <motion.a
              href="#packages"
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group relative h-[420px] rounded-3xl overflow-hidden block"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.15]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent transition-opacity duration-500 group-hover:from-navy-dark/95" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl text-white">{dest.name}</p>
                <p className="text-sm text-offwhite/70 mt-1 max-w-[200px] opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {dest.tagline}
                </p>
              </div>
              <span className="absolute top-5 left-5 h-px w-8 bg-gold" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
