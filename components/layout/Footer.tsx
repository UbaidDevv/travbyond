"use client";

import { useState } from "react";
import { Instagram, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import {
  NAV_LINKS,
  FOOTER_SERVICES,
  FOOTER_DESTINATIONS,
  CONTACT_INFO,
} from "@/lib/constants";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-20 pb-8">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl text-white">
              Trav<span className="gold-text">byond</span>
            </p>
            <p className="text-sm text-offwhite/60 mt-5 max-w-xs leading-relaxed">
              A licensed destination management company crafting private,
              cinematic journeys across the United Arab Emirates.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-offwhite/70 hover:text-gold hover:border-gold transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-gold mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-offwhite/65 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-gold mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="text-sm text-offwhite/65">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-gold mb-5">
              Newsletter
            </p>
            <p className="text-sm text-offwhite/60 mb-4">
              Occasional dispatches on new experiences. No spam.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-10 w-10 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-navy-dark"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            {submitted && (
              <p className="text-xs text-gold mt-3">
                Thank you — you&apos;re on the list.
              </p>
            )}

            <p className="text-xs tracking-widest2 uppercase text-gold mt-8 mb-3">
              Destinations
            </p>
            <p className="text-sm text-offwhite/60">
              {FOOTER_DESTINATIONS.join(" · ")}
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-offwhite/45">
          <p>© {new Date().getFullYear()} Travbyond DMC. All rights reserved.</p>
          <p>{CONTACT_INFO.address}</p>
        </div>
      </div>
    </footer>
  );
}
