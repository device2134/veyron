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
        discord: {
          dark: "#1e1f22",
          darker: "#111214",
          sidebar: "#1e1f22",
          hover: "#2b2d31",
          active: "#35373c",
          text: "#f2f3f5",
          textMuted: "#b9bbbe",
          accent: "#5865f2",
        },
      },
    },
  },
  plugins: [],
};
export default config;

