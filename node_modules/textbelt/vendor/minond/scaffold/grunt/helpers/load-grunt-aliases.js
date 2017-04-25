'use strict';

/**
 * @method load_grunt_aliases
 * @param {grunt} grunt -- grunt instance
 * @param {Object} aliases -- map of aliases. key is the alias name, value is
 * an array of task names
 */
function load_grunt_aliases(grunt, aliases) {
    var _ = require('lodash');

    _(aliases).forOwn(function (tasks, alias) {
        grunt.registerTask(alias, tasks);
    });
}

module.exports = load_grunt_aliases;
