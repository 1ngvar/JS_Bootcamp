// Changed vars to const for optimization reasons
const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const rename      = require('gulp-rename');
const rename      = 



// Creating a Gulp task for an installed gulp package
// Packages are installed globally first, then as development dependencies
// Launching a Static server. Name of a task in quotes can be changed to whatever you like
gulp.task('server', function() {

    browserSync.init({
        server: {
            // A folder to launch the terminal from
            baseDir: "./"
        }
    });
});


// Compiling sass files into css
gulp.task('styles', function () {
    // Process all sass and scss files
    return gulp.src("styles/*.+(scss|sass)")
        // Compiling
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // Sending them to a destination folder
        .pipe(gulp.dest("styles/css"))
        // Launching browserSync after completion
        .pipe(browserSync.stream());
});

// Assigning watchers to track changes in scss files
gulp.task('watch', function () {
    gulp.watch("styles/*.+(scss|sass)", gulp.parallel("styles"))
    // Tracking changes in all html files
    gulp.watch("./*.html").on('change', browserSync.reload);

});



// Bootstrapping all functionality to one task
// A task with the name 'default' will run whenever we run gulp in a terminal
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
