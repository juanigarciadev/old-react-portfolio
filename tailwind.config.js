// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/index.css",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "12px",
      base: "16px",
      subtitle: ["20px", "25px"],
      title: ["48px", "1"],
    },
    color: {
      graySubtitle: "#a1a1a1",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "430px" },
      // => @media (max-width: 430px) { ... }
    },
    extend: {
      scale: {
        102: "1.02",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
