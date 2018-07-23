'use strict';

let path = require("path");
let gulp = require("gulp");
let merge = require('merge2');
let concat = require("gulp-concat");
let clean = require('gulp-clean');
let watch = require('gulp-watch');
let recursiveFolder = require('gulp-recursive-folder');

let ts = require("gulp-typescript");
let sourcemaps = require('gulp-sourcemaps');
let tsProject = ts.createProject("tsconfig.json");
let nodemon = require('gulp-nodemon');

let paths = require("./paths.json");

gulp.task('clean', () => {
    return gulp.src(paths.clear, { read: false })
        .pipe(clean());
});

function cleanTask(cleanTask, cleanPath) {
    gulp.task(cleanTask, () => {
        return gulp.src(cleanPath, { read: false })
            .pipe(clean());
    });
}

gulp.task('scripts', () => {
    let tsResult = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([  // Merge the two output streams, so this task is finished
                    // when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest(paths.scripts.output_definitions)),
        tsResult.js.pipe(sourcemaps.write({
            // Return relative source map root directories per file.
            mapSources: (path) => path,
            sourceRoot: function (file) {
                // let sourceFile = path.join(`${__dirname}/dist/js/`, file.sourceMap.file);
                // return path.relative(path.dirname(sourceFile), file.cwd);
                return path.relative(file.relative, path.join(file.cwd, 'src'));
            }
        })).pipe(gulp.dest(paths.scripts.output))
    ]);

    // return merge([  // Merge the two output streams, so this task is finished
    //     // when the IO of both operations are done.
    //     tsResult.dts.pipe(gulp.dest(paths.scripts.output_definitions)),
    //     tsResult.js.pipe(sourcemaps.write({
    //         mapSources: (path) => path, // This affects the "sources" attribute even if it is a no-op. I don't know why.
    //         sourceRoot: (file) => {
    //             return path.relative(file.relative, path.join(file.cwd, 'js/'));
    //         }
    //     }))
    //         .pipe(gulp.dest(paths.scripts.output))
    // ]);

    // tsResult.dts.pipe(gulp.dest(paths.scripts.output_definitions));
    // return tsResult.js.pipe(sourcemaps.write('.'))
    //     .pipe(gulp.dest(paths.scripts.output));
});

cleanTask('clean:scripts', paths.scripts.clear);

gulp.task('html', () => {
    return gulp.src(paths.html.input)
        .pipe(gulp.dest(paths.html.output));
});

cleanTask('clean:html', paths.html.clear);

gulp.task('youtube_dl-copy', () => {
    return gulp.src(paths.youtube_dl.input)
        .pipe(gulp.dest(paths.youtube_dl.output));
});

// NOTE: order is essential
gulp.task('build', ['clean:scripts', 'scripts']);

// SERVER start function
const spawn = require('child_process').spawn;
let node;

// gulp.task('server:stop', () => {
//     if (node) {
//         node.kill(node.pid, 'SIGKILL');
//     }
// });

gulp.task('server', () => {
    // node = spawn('node', [paths.server_entry_point], { stdio: 'inherit' });
    // node.on('error', (code) => {
    //     console.log('An unexpected error has occured!');
    //     console.log(code);
    // })
    // node.on('close', function (code) {
    //     if (code === 8) {
    //         gulp.log('Error detected, waiting for changes...');
    //     }
    // });
    nodemon({
        'script': paths.server_entry_point,
        // 'ignore': './dist/www/*.js'
    });
});

gulp.task('watch', () => {
    watch(paths.scripts.input, ['clean:scripts', 'scripts']);
    // watch(paths.html.input, ['clean:html', 'html']);
});

gulp.task('serve', ['server']);
gulp.task('default', ['server']);

// clean up if an error goes unhandled.
// process.on('exit', function () {
//     if (node) {
//         node.kill('SIGKILL');
//     }
// });
