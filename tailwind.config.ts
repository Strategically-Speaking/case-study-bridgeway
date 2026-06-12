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
        brand: {
          blue: "#1A3C6E",
          "blue-dark": "#122B52",
          "blue-light": "#2A5298",
          teal: "#2A9D8F",
          "teal-dark": "#1E7A6D",
          "teal-light": "#3DBFAF",
        },
        surface: {
          DEFAULT: "#F5F5F5",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "5rem",
      },
    },
  },
  plugins: [],
};

export default config;
