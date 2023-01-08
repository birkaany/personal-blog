/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
  plugins: [],
};
