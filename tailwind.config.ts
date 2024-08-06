import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        nav: " 0 4px 10px 12px rgba(0,0,0, 0.05)",
      },
      textColor: {
        primary: "#197967",
        secondary: "#565555",
      },
      backgroundColor: {
        primary: "#096857",
        secondary: "#199E86",
        third: "#D8E9FF",
        forth: "#0675C5",
        five: "#3893D5",
        six: "#197967",
      },
      animation: {
        loading: "loading .8s linear infinite",
        fadeIn: "fadeIn 0.2s forwards",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            display: "flex",
            transform: "scale(1.10)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
