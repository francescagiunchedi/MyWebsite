/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Open Sans"],
      titles: ["Montserrat"],
    },
    extend: {
      colors: {
        primary: "#005ded",
        seconda: "#00c6fb",
        textcolor: "#353546",
        background: "#d5d9dd",
      },
    },
  },
  plugins: [],
};
