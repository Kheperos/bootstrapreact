const source = require('vinyl-source-stream');
const {task, dest, watch, src, parallel,} = require("gulp");
const browserify = require("browserify");

function build() {
    return (browserify({
            entries: './src/js/main.js',
            transform: [["babelify", {"presets": ["@babel/preset-env", "@babel/preset-react"]}]]
        })
            .bundle()
            .pipe(source('main.js'))
            .pipe(dest('dist/js'))

    );
}

function copy(cb) {
    src('src/index.html')
        .pipe(dest('dist'));
    src('src/css/*.*')
        .pipe(dest('dist/css'));
    src('src/images/*.*')
        .pipe(dest('dist/images'));
    src('src/js/vendors/*.*')
        .pipe(dest('dist/js'));
    cb();
}

function watch_files() {
    return (watch('src/**/*.*', parallel(build, copy)));
}

task("default", parallel(build, copy, watch_files));