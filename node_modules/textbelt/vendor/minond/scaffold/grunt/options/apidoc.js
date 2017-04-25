// presentation: https://speakerdeck.com/rottmann/api-documentation
// documentation: http://apidocjs.com/#grunt-module
// example: http://apidocjs.com/source/example_basic/example.js
module.exports = {
    all: {
        src: '<%= config.files.js.dir %>',
        dest: '<%= config.artifacts.documentation.apidoc %>'
    }
};
