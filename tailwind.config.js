/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "var(--primary)",
        "theme-secondary": "var(--secondary)",
        "theme-tertiary": "var(--tertiary)",
        "theme-background": "var(--background)",
        "theme-surface": "var(--surface)",
        "theme-error": "var(--error)",
        "theme-on-primary": "var(--on-primary)",
        "theme-on-secondary": "var(--on-secondary)",
        "theme-on-background": "var(--on-background)",
        "theme-on-surface": "var(--on-surface)",
        "theme-on-error": "var(--on-error)",
        "theme-shadow": "var(--shadow)",
      },
      fontFamily: {
        poppins: ["Poppins Regular", "sans-serif"],
        prohibition: ["Prohibition", "sans-serif"],
        "poppins-medium": ["Poppins Medium", "sans-serif"],
        "poppins-bold": ["Poppins Bold", "sans-serif"],
        anaheim: ["Anaheim", "sans-serif"],
        "cascadia-code": ["Cascadia Code", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        wide: "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#ffffff",
          "primary-focus": "#ffffff",
          "primary-content": "#000000",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#FAE1E1",
          "neutral-focus": "#B85C5C",
          "neutral-content": "#B85C5C",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
}
