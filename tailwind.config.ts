import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FEFCF9",
          100: "#FBF8F3",
          200: "#F5EFE6",
          300: "#E8E2DA",
          400: "#D4CCC2",
        },
        warm: {
          text: "#2D2A26",
          sub: "#6B6560",
          muted: "#736C66",
          border: "#E8E2DA",
        },
        amber: {
          accent: "#C8956C",
          dark: "#A87B56",
          text: "#8C5F3C",
        },
        terracotta: {
          DEFAULT: "#B5675A",
          light: "#D4897C",
          text: "#9A4F43",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Noto Serif TC", "Georgia", "serif"],
        sans: ["Noto Sans TC", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;