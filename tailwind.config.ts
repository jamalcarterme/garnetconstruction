import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181C22",
        concrete: "#EDEAE2",
        paper: "#F7F5F0",
        blueprint: "#2B4C7E",
        rust: "#A13D2B",
        steel: "#6B6F76"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"]
      },
      backgroundImage: {
        blueprint: "repeating-linear-gradient(0deg, rgba(43,76,126,0.16) 0 1px, transparent 1px 64px), repeating-linear-gradient(90deg, rgba(43,76,126,0.16) 0 1px, transparent 1px 64px)"
      }
    }
  },
  plugins: []
};

export default config;
