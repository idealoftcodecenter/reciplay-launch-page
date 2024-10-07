import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        "sans": ["var(--font-inter)", "sans-serif"],
        "jersey": ["var(--font-jersey-15)", "sans-serif"],
      },
      boxShadow: {
        "about-us-btn": "0 8px 12px rgba(138, 138, 138, 0.25)",
      },
      textShadow: {
        "pre-footer-text": "0 4px 24px #FEF3D9",
      }
    },
  },
  plugins: [],
  safelist: [
    'transform translate-y-full',
    'transform translate-y-0',
  ]
};
export default config;
