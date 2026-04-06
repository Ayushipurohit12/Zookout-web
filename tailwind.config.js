/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff6b00",
          "orange-dark": "#e55f00",
          black: "#0f0f0e",
          cream: "#f5f2ec",
          "cream-dark": "#e8e4db",
          border: "#d9d5cb",
          "border-light": "#e2ddd5",
          muted: "#7a7a75",
          green: "#34d399",
        },
      },
      fontFamily: {
        display: ["GT Walsheim Trial", "DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        orange: "0px 3px 14px 0px rgba(255, 107, 0, 0.35)",
        "orange-lg": "0px 0px 40px rgba(255, 107, 0, 0.5)",
        card: "0px 2px 8px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
