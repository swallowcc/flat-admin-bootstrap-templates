'use strict';

import gulp from "gulp";
import imagemin from 'gulp-imagemin';

gulp.task('image', function () {
  return gulp.src('./src/assets/images/**/*')
    // .pipe(imagemin())
    .pipe(gulp.dest('temp/html/assets/images'))
});