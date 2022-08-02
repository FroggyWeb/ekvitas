
const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const replace = require("gulp-replace");
const plumber = require("gulp-plumber");
const path = require("path");

const isDev =
  process.env.NODE_ENV || process.env.NODE_ENV === "production";

const envHtml = function (environment) {
  if (isDev == 'development') {
    environment.addGlobal('env', 'dev')
  }
}


function html() {
  return gulp
    .src('_src/' + "tpl/*.html")
    .pipe(plumber())
    .pipe(nunjucksRender({ path: "./_src/tpl", manageEnv: envHtml }))
    .pipe(replace("@/", "../"))
    .pipe(gulp.dest('dist/'));
}



function watchFiles() {
  gulp.watch('_src/' + "tpl/**/*.html", gulp.series(html));
}

const watch = gulp.parallel(watchFiles, html);

exports.watch = watch;
exports.default = watch;
exports.html = html;
