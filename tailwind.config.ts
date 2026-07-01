import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          dark: "#071426",
        },
        gold: {
          DEFAULT: "#C8A24A",
          soft: "#E6C36A",
        },
        offwhite: "#F5F7FA",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A24A 0%, #E6C36A 50%, #C8A24A 100%)",
        "navy-gradient": "linear-gradient(180deg, #0B1F3A 0%, #071426 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(200, 162, 74, 0.45)",
        glass: "0 8px 32px 0 rgba(7, 20, 38, 0.37)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
