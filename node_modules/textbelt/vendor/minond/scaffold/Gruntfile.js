var tasks, option_loader, option_config, helper, floop;

helper = require('./grunt/helpers/helper.js');
floop = helper('foreach-file');

/**
 * no need to edit this file. configured by config/build.yml
 * http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 */
module.exports = function (grunt) {
    'use strict';

    tasks = {
        config: helper('config-loader')(grunt, [
            'config/build.yml',
            'config/internal.yml'
        ])
    };

    option_config = {
        cwd: __dirname + '/grunt/options/',
        tasks: tasks,
        config: tasks.config,
        grunt: grunt
    };

    // generate a function that loads options
    option_loader = helper('task-require')(option_config);

    // loop over required optons and load them using option loader
    floop(tasks.config.internal.required, option_config, option_loader);

    // import grunt tasks
    require('load-grunt-tasks')(grunt);

    // register alises
    helper('load-grunt-aliases')(grunt, tasks.config.aliases);
    grunt.initConfig(tasks);
};
