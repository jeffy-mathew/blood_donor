'use strict';

/**
 * helper file loader
 * @param {string} name - name of helper
 * @return {mixed} required helper
 */
function helper(name) {
    // since this file is in the helpers directory, we can load files relative
    // this ot one, not having to do this:
    // return require('./grunt/helpers/' + name);
    return require('./' + name);
}

module.exports = helper;
