/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Open Sans",
    },
    extend: {
      colors: {
        primary: "#136cfb",
        textcolor: "#353546",
        Borange1: "#f6d365",
        Borange2: "#fda085",
      },
    },
  },
  plugins: [],
};
