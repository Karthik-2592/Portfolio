/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "rgba(255,255,255,0.08)",
        input: "rgba(255,255,255,0.08)",
        "input-background": "rgb(18 18 24)",
        "switch-background": "rgb(60 60 75)",
        ring: "rgb(76 250 206 / <alpha-value>)",
        background: "rgb(10 10 15 / <alpha-value>)",
        foreground: "rgb(240 240 245 / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(76 250 206 / <alpha-value>)",
          foreground: "rgb(10 10 15 / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(99 102 241 / <alpha-value>)",
          foreground: "rgb(240 240 245 / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(220 38 38 / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(32 32 44 / <alpha-value>)",
          foreground: "rgb(161 161 170 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(76 250 206 / <alpha-value>)",
          foreground: "rgb(10 10 15 / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(26 26 36 / <alpha-value>)",
          foreground: "rgb(240 240 245 / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(26 26 36 / <alpha-value>)",
          foreground: "rgb(240 240 245 / <alpha-value>)",
        },
        outline: {
          DEFAULT: "rgba(255,255,255,0.1)",
        },
      },
      fontSize: {
        base: "var(--font-size)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
      },
    },

    borderRadius: {
      DEFAULT: "var(--radius)",
      lg: "6px",
      md: "4px",
      sm: "2px",
      full: "9999px",
      xl: "8px",
      "2xl": "12px",
    },
  },
  plugins: [],
}
