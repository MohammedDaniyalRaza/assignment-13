import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "orb": "orbMove 8s infinite ease-in-out alternate",
        "glow-line": "glowLine 6s infinite linear",
        "text": "gradientText 3s infinite alternate",
        "fade-in": "fadeIn 1.5s ease-out",
        "fade-in-delay": "fadeIn 2s ease-out",
      },
      keyframes: {
        orbMove: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(20px) translateX(-20px)" },
        },
        glowLine: {
          "0%": { opacity: "0.1" },
          "50%": { opacity: "0.4" },
          "100%": { opacity: "0.1" },
        },
        gradientText: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
