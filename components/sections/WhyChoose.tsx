"use client";

import { motion } from "framer-motion";
import { UserCheck, KeyRound, PenTool, ShieldCheck } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  concierge: UserCheck,
  access: KeyRound,
  craft: PenTool,
  trust: ShieldCheck,
};

export default function WhyChoose() {
  return (
    <section className="bg-navy-dark py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="eyebrow">Why Choose Travbyond</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
            Service That Anticipates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE.map((reason, i) => {
            const Icon = ICONS[reason.id];
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/50 transition-colors duration-500"
              >
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl text-white mt-6">
                  {reason.title}
                </h3>
                <p className="text-sm text-offwhite/65 mt-3 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
