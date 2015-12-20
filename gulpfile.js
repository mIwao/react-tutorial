const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')

gulp.task('default', ['clean', 'copy-html', 'copy-js-lib', 'compile'])

gulp.task('copy-html', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
})

gulp.task('copy-js-lib', () => {
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

gulp.task('compile', () => {
  gulp.src( 'src/js/example.js')
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest('public/js'))
})

gulp.task('clean', (cb) => {
  del.sync('public', cb)
})