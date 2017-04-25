'use strict';

/**
 * @param {Array} files - array of files to load
 * @param {Object} config - configuration for glob.sync method
 * @param {Function} handler - file loaded handler
 */
function foreach_file(files, config, handler) {
    var _ = require('lodash');
    var glob = require('glob');

    _(files).each(function (file) {
        glob.sync(file, config)
            .forEach(handler);
    });
}

module.exports = foreach_file;
