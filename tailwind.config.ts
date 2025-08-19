import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
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
        primary: "#00A9E9",
        secondary: "#EC4899",
        accent: "#10B981",
        info: "#3B82F6",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        lightBg: "#F9FAFB",
        darkBg: "#111827",
        lightText: "#1F2937",
        darkText: "#F3F4F6",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};

export default config;
