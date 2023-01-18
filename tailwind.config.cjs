/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "2xl": "1024px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "by-gray-100": "#fafafa",
        "by-gray-400": "#5f5b58",
        "by-black-800": "#1b1918",
      },
      fontFamily: {
        mainFont: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
