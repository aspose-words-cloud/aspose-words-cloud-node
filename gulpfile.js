var gulp = require('gulp');
var ts = require('gulp-typescript');
var cucumber = require('gulp-cucumber');
var del = require('del');
var fs = require('fs');

var buildConfig = {
    targetPath: 'dist',
    isProduction: true
};

gulp.task('clean', function (callback) {
    del.sync([
        buildConfig.targetPath
    ], { force: true });

    callback();
});

gulp.task('build', ["clean"], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(tsProject())
        .once("error", function () {
            this.once("finish", () => process.exit(1));
        });

    return tsResult.pipe(gulp.dest(buildConfig.targetPath));
});

gulp.task('copyTestConfig', function () {
    return gulp
            .src('testConfig.json')
            .pipe(gulp.dest(buildConfig.targetPath));
});

gulp.task('cucumber', ["build", "copyTestConfig"], function () {
    var reportDir = './reports/bdd';
    
    return gulp.src('./bdd/features/**/*.feature').pipe(cucumber({
        'steps': './dist/bdd/steps/**/*.js',
        'support': './dist/bdd/support/**/*.js',
        'format': 'json:./reports/bdd_results.json',        
    }));
});

gulp.task('cucumber:report', ['cucumber'], function() {
    gulp.src('reports/bdd_results.json')
        .pipe(cucumberXmlReport({strict: true}))
        .pipe(gulp.dest('reports'));
});
 
function cucumberXmlReport(opts) {
    var gutil = require('gulp-util'),
        through = require('through2'),
        cucumberJunit = require('cucumber-junit');
    
    return through.obj(function (file, enc, cb) {
        // If tests are executed against multiple browsers/devices
        var suffix = file.path.match(/\/cucumber-?(.*)\.json/);
        if (suffix) {
            opts.prefix = suffix[1] + ';';
        }
        
        var xml = cucumberJunit(file.contents, opts);
        file.contents = new Buffer(xml);
        file.path = gutil.replaceExtension(file.path, '.xml');
        cb(null, file);
    });
}
