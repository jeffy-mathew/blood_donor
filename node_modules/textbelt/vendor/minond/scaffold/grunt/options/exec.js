'use strict';

/**
 * array join helper
 * @param {string} strings*
 * @return {string} joined string
 */
function join () {
    return [].splice.call(arguments, 0).join(' ');
}

module.exports = {
    scsslint: {
        cmd: join(
            '<%= config.binaries.scsslint %>',
            '-f XML <%= config.files.sass.dir %>',
            '>',
            '<%= config.artifacts.linters.scsslint %>'
        )
    },
    phpmd: {
        cmd: join(
            '<%= config.binaries.phpmd %>',
            '<%= config.files.php.dir %>,<%= config.files.tests.dir %>',
            'xml',
            // removing controversial because of camelCame bs
            // cleancode rule not in 1.4.*
            'codesize,design,naming,unusedcode',
            '--reportfile <%= config.artifacts.linters.phpmd %>',
            '--strict'
        )
    },
    phpcpd: {
        cmd: join(
            '<%= config.binaries.phpmd %>',
            '<%= config.files.php.all %>',
            '<%= config.files.tests.dir %>'
        )
    },
    phpdcd: {
        cmd: join(
            '<%= config.binaries.phpmd %>',
            '<%= config.files.php.all %>',
            '<%= config.files.tests.dir %>'
        )
    },
    apigen: {
        cmd: join(
            '<%= config.binaries.apigen %>',
            '-s=<%= config.files.php.dir %>',
            '-d=<%= config.artifacts.documentation.apigen %>',
            '--todo=yes',
            '--colors=no',
            '--progressbar=no'
        )
    },
    phantomjs: {
        cmd: join(
            '<%= config.binaries.phantomjs %>',
            '--webdriver=8643'
        )
    },
    behat: {
        cmd: join(
            '<%= config.binaries.behat %>',
            '--format junit,html,pretty',
            '--out <%= config.artifacts.tests.behat.junit %>,<%= config.artifacts.tests.behat.html %>'
        )
    },
    mocha: {
        cmd: join(
            '<%= config.binaries.istanbul %>',
            'cover',
            '<%= config.binaries._mocha %>',
            '--report lcov',
            '--dir <%= config.artifacts.tests.mocha.report %>',
            '--',
            '-R',
            'spec',
            '<%= config.files.tests.js.backend_unit_dir %>',
            '--recursive'
        )
    }
};
