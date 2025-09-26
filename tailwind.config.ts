import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-mono)", "monospace"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#f3f4f6",
        accent: "#6b7280",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
