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
        // primary: "#43d04c",
        // secondary: "#b0f50e",
        primary: "#5da36f",
        secondary: "#a5dac0",
      },
      gridTemplateColumns: {
        "auto-fill-280": "repeat(auto-fill, minmax(280px, 1fr))",
        "auto-fit-280": "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;

