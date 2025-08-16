import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class", // 👈 enables dark mode using a "dark" class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // 👈 supports both light and dark themes
    darkTheme: "dark",
  },
};

export default config;
