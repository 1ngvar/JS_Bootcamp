// Changed var to const for optimization
const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
// Creating a Gulp task for an installed gulp package
// Packages are installed globally first, then as development dependencies
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});JS_Bootcamp