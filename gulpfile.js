const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/index.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["src/index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
