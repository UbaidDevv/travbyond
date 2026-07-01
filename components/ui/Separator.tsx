"use client";

import { motion } from "framer-motion";

// The Wayfinder line is Travbyond's signature motif: a single dashed gold
// route — like a path traced on a map — that threads between every section,
// each one a different curve, echoing a journey rather than a straight line.

const PATHS: Record<string, string> = {
  wave: "M0,60 C 200,10 400,110 700,60 S 1200,10 1440,60",
  descend: "M0,20 C 300,90 500,20 720,70 S 1140,20 1440,90",
  rise: "M0,90 C 260,20 480,100 720,40 S 1160,100 1440,20",
  pulse: "M0,60 C 180,60 220,10 360,60 S 540,110 720,60 S 1080,10 1260,60 S 1400,60 1440,60",
};

export default function Separator({
  variant = "wave",
  compact = false,
}: {
  variant?: keyof typeof PATHS;
  compact?: boolean;
}) {
  const d = PATHS[variant] ?? PATHS.wave;

  return (
    <div className={`wayfinder ${compact ? "!h-16" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wayfinderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8A24A" stopOpacity="0" />
            <stop offset="15%" stopColor="#C8A24A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E6C36A" stopOpacity="1" />
            <stop offset="85%" stopColor="#C8A24A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C8A24A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* A small wayfinder mark that travels the line — a nod to a route pin */}
        <motion.circle
          r="4"
          fill="#E6C36A"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, offsetDistance: "100%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
        />
      </svg>
    </div>
  );
}
