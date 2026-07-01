"use client";

import { motion } from "framer-motion";
import { Car, Building2, Compass, Sun, Briefcase, Users } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  transfers: Car,
  hotels: Building2,
  tours: Compass,
  safari: Sun,
  corporate: Briefcase,
  groups: Users,
};

export default function Services() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="eyebrow">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
            Every Detail, Handled
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 p-8 overflow-hidden transition-colors duration-500 hover:border-gold/40"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
                <Icon
                  size={28}
                  className="text-gold transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="font-display text-xl text-white mt-6">
                  {service.title}
                </h3>
                <p className="text-sm text-offwhite/65 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
