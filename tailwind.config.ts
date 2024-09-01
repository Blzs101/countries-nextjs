import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-blue-element": "hsl(209,23%,22%)",
        "very-dark-blue-bg": "hsl(207, 26%, 17%)",
        "very-dark-grey-bg": "hsl(45.5, 35.1%, 86%)",
        "very-light-grey-bg": "hsl(60, 55.6%, 91.2%)",
      },
      textColor: {
        "very-dark-blue-text": "hsl(200, 15%, 8%)",
        "dark-grey-input": "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [],
};
export default config;
