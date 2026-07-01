"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const ITEMS = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_INFO.whatsapp,
    href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, "")}`,
  },
  { icon: MapPin, label: "Address", value: CONTACT_INFO.address, href: undefined },
];

export default function ContactPreview() {
  return (
    <section id="contact" className="bg-navy-dark py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-4">
              Let&apos;s Plan Something
              <br />
              Unforgettable
            </h2>
            <p className="mt-6 text-offwhite/70 max-w-md">
              Reach our concierge team directly, or send an enquiry and we&apos;ll
              follow up with a proposal built around your dates.
            </p>
            <a
              href="mailto:concierge@travbyond.com"
              className="inline-flex items-center justify-center mt-8 rounded-full bg-gold-gradient px-9 py-3.5 text-sm font-medium tracking-wide text-navy-dark shadow-gold transition-transform duration-300 hover:scale-105"
            >
              Send an Enquiry
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass rounded-2xl p-6 h-full transition-colors duration-300 hover:border-gold/40">
                  <Icon className="text-gold" size={22} />
                  <p className="text-xs tracking-wide text-offwhite/50 uppercase mt-4">
                    {item.label}
                  </p>
                  <p className="text-white mt-1 text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
