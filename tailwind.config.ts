import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#08090B",
          raised: "#0F1114",
          card: "#131519",
        },
        ink: {
          DEFAULT: "#F4F5F7",
          muted: "#9BA3AF",
          faint: "#5B6472",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          bright: "#5EEAFF",
          dim: "#0E7A8F",
        },
        line: "rgba(255,255,255,0.08)",
        lineStrong: "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5.5vw, 5.25rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: { prose: "62ch" },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
