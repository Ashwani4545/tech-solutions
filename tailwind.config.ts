import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
        },
        paper: {
          DEFAULT: "#FAFBFC",
          alt: "#F0F4F8",
          dark: "#0B1120",
          darkAlt: "#111827",
        },
        emerald: {
          DEFAULT: "#0F9D6E",
          light: "#34D399",
          dark: "#0B7C57",
        },
        signal: {
          DEFAULT: "#2E6BE6",
          light: "#60A5FA",
        },
        slate: {
          soft: "#64748B",
          faint: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "infinity-draw": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "infinity-draw": "infinity-draw 1.8s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
