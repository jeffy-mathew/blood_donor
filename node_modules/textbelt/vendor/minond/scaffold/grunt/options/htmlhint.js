/**
 * load a json5 file
 * @param {grunt} grunt - grunt instance
 * @param {string} file - path to file
 * @return {Object}
 */
function json5(grunt, file) {
    'use strict';

    var JSON5 = require('json5');
    var raw = grunt.file.read(file);
    return JSON5.parse(raw);
}

/**
 * @param {grunt} grunt - grunt instance
 * @param {Object} config - build settings/configuration
 */
function htmlhint(grunt, config) {
    'use strict';

    // leaving csslint out because there should NEVER be a reason to leave css
    // in your html. js is a different story, since a little initialization is
    // sometimes done in the page
    var options = json5(grunt, config.files.configuration.htmlhint);
    options.jshint = json5(grunt, config.files.configuration.jshint);

    // dafuq? getting "Bad option: 'globals'." errer with it
    if (options.jshint) {
        delete options.jshint.globals;
    }

    // no reporter option yet :(
    // https://github.com/yaniswang/HTMLHint/blob/master/TODO.md
    return {
        options: options,
        all: {
            src: [ config.files.views.all ],
        }
    };
}

module.exports = htmlhint;
