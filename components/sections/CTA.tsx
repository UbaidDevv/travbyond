"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop"
        alt="Dubai Marina at dusk"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/40" />

      <div className="relative container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Begin Your Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-white mt-5 max-w-3xl mx-auto leading-tight">
            The UAE, Curated
            <br />
            <span className="gold-text">Entirely Around You</span>
          </h2>
          <p className="mt-6 text-offwhite/75 max-w-lg mx-auto">
            Share a few details and a Travbyond concierge will respond within
            one business day with a tailored proposal.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-10 rounded-full bg-gold-gradient px-10 py-4 text-sm font-medium tracking-wide text-navy-dark shadow-gold transition-transform duration-300 hover:scale-105"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
