'use strict';

/**
 * loads list of configuration file and merges them
 * @param {grunt} grunt - grunt instance
 * @param {Array} files - array of file paths. lower in the list the higer
 * weight
 * @return {Object} - merged configuration files
 */
function config_loader(grunt, files) {
    var _ = require('lodash');
    var merge = require('merge-defaults');
    var config = {};

    _(files).each(function (file) {
        // don't check if fle doesn't exists. not being able to load this
        // file should result in a error so the user can fix it
        var thisone = grunt.file.readYAML(file);

        // sample files array: [ DEFAULT_CONFIG, LOCAL_CONFIG ]
        // the lower in the list the higher the weight of the file's
        // configuration ovewrites
        config = merge(thisone, config);
    });

    return config;
}

module.exports = config_loader;
