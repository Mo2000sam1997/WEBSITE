import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme colors (geïnspireerd door Runware.ai)
        bg: {
          primary: "#0a0a0a",      // Main background (bijna zwart)
          secondary: "#1a1a1a",    // Cards, sections
          tertiary: "#2a2a2a",    // Hover states
        },
        text: {
          primary: "#ffffff",      // Main text (wit)
          secondary: "#a0a0a0",   // Descriptions (grijs)
          tertiary: "#666666",    // Subtle text
        },
        accent: {
          primary: "#00d9ff",     // Bright cyan (CTAs)
          secondary: "#7c3aed",   // Purple (highlights)
        },
        // Visual identity blocks
        block: {
          blue: "#77bdf8",         // Data
          green: "#4edc96",        // AI Agents
          pink: "#fc85d7",         // Content
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
      },
      spacing: {
        // Base unit: 4px
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
