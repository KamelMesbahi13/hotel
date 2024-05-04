/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#eee",
      white: "#ffffff",
      grey: "#eee",
      mainColor: "#152248",
      hoverColor: "#7cc1da",
      secondColor: "#f0a02c",
      backgroundColor: "#201f22",
    },
    extend: {
      fontFamily: {
        main: ["Jost", "sans-serif"],
        second: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
