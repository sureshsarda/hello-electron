var gulp = require('gulp')
var ts = require('gulp-typescript')
var sass = require('gulp-sass')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('html', function() {
    return gulp.src('source/html/*.html')
        .pipe(gulp.dest('build/html'))
});

gulp.task('typescript', function() {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('build'))
});

gulp.task('css_compile', function() {
    return gulp.src('source/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('build/assets/stylesheets/'));
});

gulp.task('default', ['html', 'typescript', 'css_compile']);