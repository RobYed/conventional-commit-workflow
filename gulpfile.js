const gulp                        = require('gulp');
const conventionalChangelog       = require('gulp-conventional-changelog');
const conventionalRecommendedBump = require('conventional-recommended-bump');
const bump                        = require('gulp-bump');


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

gulp.task('version-bump', function(done) {
  /**
   * Bumping version number and tagging the repository with it.
   * Please read http://semver.org/
   *
   * To bump the version numbers accordingly after you did a patch,
   * introduced a feature or made a backwards-incompatible release.
   */

  conventionalRecommendedBump({ preset: 'angular' }, function (err, importance) {
    // Get all the files to bump version in
    gulp.src('./package.json')
      .pipe(bump({ type: importance }))
      .pipe(gulp.dest('./'));

    done();
  });
});