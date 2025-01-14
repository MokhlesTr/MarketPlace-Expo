module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4f8bf9",
          default: "#1e3a8a",
          dark: "#1e40af",
        },
        purple: {
          light: "#9b4dca",
          default: "#6a0dad",
          dark: "#4c1d95",
        },
        yellow: {
          light: "#facc15",
          default: "#f59e0b",
          dark: "#ca8a04",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Courier New", "monospace"],
        customFont: ['"Roboto"', "sans-serif"],
        jersey: ["SpaceMono"],
      },
    },
    plugins: [],
  },
};
