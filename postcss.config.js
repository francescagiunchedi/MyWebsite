module.exports = {
  plugins: [
    require("postcss-import"),
    // require("stylelint"),
    require("postcss-preset-env")({ stage: 1 }),
    require("cssnano"),
  ],
};
