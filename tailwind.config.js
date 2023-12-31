/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        sm: ["0.75rem", "1rem"],
        md: ["0.875rem", "1.375rem"],
        lg: ["1rem", "1.5rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["2rem", "2.5rem"],
      },
      colors: {
        blue: "#18489A",
        selected: "#347469",
        hoverBlue: "#ECF0F7",
        pressedBlue: "#E2E8F2",
        purple: "#9747FF",
        green: "#4FE8B7",
        white: "#FEFEFF",
        "light-grey": "#F7F7F9",
        border: "#D9DBDE",
        grey: "#AEB1B7",
        "dark-grey": "#5D6470",
        black: "#1e1e1e",
        error: "#d9454b",
        success: "#15CC8A",
        hoverRed: "#fa104814",
        pressedRed: "#fa10481f",
        design: "#FFE8E8",
        disabled: "#E1E4EA",
      },
    },
  },
  plugins: [],
};
