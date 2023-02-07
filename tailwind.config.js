/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Open Sans",
      titles: "Montserrat",
    },
    extend: {
      colors: {
        text: "hsl(240, 14%, 24%)",
      },
    },
  },
  plugins: [],
};
