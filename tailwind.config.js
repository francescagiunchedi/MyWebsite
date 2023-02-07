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
        bgBase: "#1E2A78",
        bgGradient: " #49BCF6",
      },
    },
  },
  plugins: [],
};
