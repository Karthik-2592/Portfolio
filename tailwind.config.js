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
    colors: {
      border: "rgb(230 230 230 / <alpha-value>)",
      input: "rgb(230 230 230 / <alpha-value>)",
      ring: "rgb(10 0 20 / <alpha-value>)",
      background: "#27272a",
      foreground: "rgb(10 10 10 / <alpha-value>)",
      primary: {
        DEFAULT: "rgb(255 255 255 / <alpha-value>)",
        foreground: "rgb(22 22 22 / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(245 245 245 / <alpha-value>)",
        foreground: "rgb(10 0 20 / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "rgb(220 38 38 / <alpha-value>)",
        foreground: "rgb(255 255 255 / <alpha-value>)",
      },
      muted: {
        DEFAULT: "rgb(239 239 239 / <alpha-value>)",
        foreground: "rgb(118 118 118 / <alpha-value>)",
      },
      accent: {
        DEFAULT: "rgb(245 245 245 / <alpha-value>)",
        foreground: "rgb(10 0 20 / <alpha-value>)",
      },
      popover: {
        DEFAULT: "rgb(255 255 255 / <alpha-value>)",
        foreground: "rgb(10 10 10 / <alpha-value>)",
      },
      card: {
        DEFAULT: "rgb(255 255 255 / <alpha-value>)",
        foreground: "rgb(10 10 10 / <alpha-value>)",
      },
      outline:
      {
        DEFAULT: "rgb(32 32 32 / <alpha-value>)",
      }
    },
  },

  borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
        full: "9999px"
      },
    },
  plugins: [],
}
