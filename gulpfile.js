const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true
    })
}

function styles() {
    return src('app/css/style.css')
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(dest('app/css/'))
}

exports.browsersync = browsersync;
exports.styles = styles;