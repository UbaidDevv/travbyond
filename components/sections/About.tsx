"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 md:py-32">
      <div className="container-luxury grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative h-[420px] md:h-[560px] rounded-[2rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1400&auto=format&fit=crop"
              alt="Travbyond curated UAE experience"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl px-8 py-6 shadow-glass">
            <p className="font-display text-3xl gold-text">14+</p>
            <p className="text-xs tracking-wide text-offwhite/70 mt-1">
              Years in the Emirates
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="eyebrow">About Travbyond</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4 leading-tight">
            Journeys Designed
            <br />
            Around <span className="gold-text">You</span>
          </h2>
          <p className="mt-6 text-offwhite/75 leading-relaxed max-w-lg">
            Travbyond is a licensed destination management company built
            around a single idea: the UAE deserves to be experienced, not
            simply visited. From our Dubai headquarters, we design private
            itineraries for travellers who value discretion, craftsmanship
            and access others don&apos;t have.
          </p>
          <p className="mt-4 text-offwhite/75 leading-relaxed max-w-lg">
            No two journeys we plan are the same — because no two guests
            travel for the same reason.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-offwhite/60 tracking-wide mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
