var gulp = require('gulp')
var babel = require('gulp-babel')

gulp.task('default', ['copy-html', 'copy-js-lib', 'compile'])

gulp.task('copy-html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
})

gulp.task('copy-js-lib', function() {
  gulp.src( [
              'node_modules/react/dist/react.js',
              'node_modules/react-dom/dist/react-dom.js',
              'node_modules/babel-core/lib/api/browser.js',
              'node_modules/jquery/dist/jquery.js',
              'node_modules/marked/lib/marked.js',
            ]
          )
    .pipe(gulp.dest('public/js/lib'))
})


gulp.task('compile', function() {
  gulp.src( 'src/js/example.js')
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest('public/js'))
})