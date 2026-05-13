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
        orange:   { DEFAULT: "#E87722", hover: "#C45E10" },
        charcoal: "#2B2B2B",
        night:    "#1A1A1A",
        sand:     "#F5F0E8",
        steel:    "#3E3E3E",
        muted:    "#888888",
        text:     "#F0F0F0",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter:  ["Inter",  "sans-serif"],
      },
      borderRadius: {
        btn:  "4px",
        card: "8px",
        sec:  "12px",
      },
    },
  },
  plugins: [],
};

export default config;
