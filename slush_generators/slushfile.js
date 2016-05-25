/*
 * slush-newcomponent
 * https://github.com/lukasz.wojcik/slush-newcomponent
 *
 * Copyright (c) 2016, Lukasz Wojcik
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

gulp.task('default', function (done) {
    var prompts = [{
        name: 'componentName',
        message: 'What is the name of your component?'
    }, {
        name: 'componentDescription',
        message: 'What is the description?'
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./sources/frontEnd/components/' + answers.componentName))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
