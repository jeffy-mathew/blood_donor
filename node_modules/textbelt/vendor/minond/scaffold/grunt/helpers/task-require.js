'use strict';

/**
 * generate a function that loads tasks into a task map. sample config:
 *
 * <code>
 * {
 *     cwd: './options/',   // base path to option file (should be absolute)
 *     tasks: {},           // reference to a tasks object
 *     config: {},          // reference to a config object
 *     grunt: grunt         // reference to a grunt object
 * }
 * </code>
 *
 * @param {Object} config - basic configuration for loading the task.
 * @return {Function} -- this function just takes an option file as its only
 * argument. no path, just the file name and extension
 */
function task_require(config) {
    var _ = require('lodash');

    return function (option) {
        var task = option.replace(/\.js$/,'');
        var definition = require(config.cwd + option);

        config.tasks[ task ] = _.isFunction(definition) ?
            definition(config.grunt, config.config) : definition;
    };
}

module.exports = task_require;
