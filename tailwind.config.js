/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#eee",
      white: "#ffffff",
      grey: "#eee",
      mainColor: "#152248",
      secondColor: "#f0a02c",
      thirdColor: "#7cc1da",
      backgroundColor: "#201f22",
    },
    extend: {
      fontFamily: {
        main: ["Lato", "sans-serif"],
        second: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};
