const gulp                  = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');


gulp.task('changelog', function () {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      // conventional-changelog options go here
      preset: 'angular'
    }, {
      // context goes here
    }, {
      // git-raw-commits options go here
    }, {
      // conventional-commits-parser options go here
    }, {
      // conventional-changelog-writer options go here
    }))
    .pipe(gulp.dest('./'));
});