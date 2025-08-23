// import type { Config } from "tailwindcss";
// import daisyui from "daisyui";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "#00A9E9",
//         secondary: "#EC4899",
//         accent: "#10B981",
//         info: "#3B82F6",
//         success: "#22C55E",
//         warning: "#F59E0B",
//         error: "#EF4444",
//         lightBg: "#F9FAFB",
//         darkBg: "#111827",
//         lightText: "#1F2937",
//         darkText: "#F3F4F6",
//       },
//     },
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "dark"],
//     darkTheme: "dark",
//   },
// };

// export default config;
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

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
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"], // primary
        playfair: ["var(--font-playfair)", "serif"], // premium hero
        montserrat: ["var(--font-montserrat)", "sans-serif"], // accent/UI
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#00A9E9",
          secondary: "#EC4899",
          accent: "#10B981",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
          lightBg: "#F9FAFB",
          lightText: "#1F2937",
        },
        dark: {
          primary: "#00A9E9",
          secondary: "#F472B6",
          accent: "#22C55E",
          neutral: "#1F2937",
          "base-100": "#111827",
          info: "#60A5FA",
          success: "#22C55E",
          warning: "#FBBF24",
          error: "#F87171",
          darkBg: "#111827",
          darkText: "#F3F4F6",
        },
      },
    ],
    darkTheme: "dark",
  },
};

export default config;
