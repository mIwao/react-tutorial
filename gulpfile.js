var gulp = require('gulp')

gulp.task('copy-js', function() {
  gulp.src( [
              'node_modules/react/dist/react.js',
              'node_modules/react-dom/dist/react-dom.js',
              'node_modules/babel-core/lib/api/browser.js',
              'node_modules/jquery/dist/jquery.js',
              'node_modules/marked/lib/marked.js'
            ]
          )
    .pipe(gulp.dest('public/js/lib'))
})