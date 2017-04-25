module.exports = {
    all: {
        src: [ '<%= config.files.js.all %>' ],
        options: {
            specs: [ '<%= config.files.tests.js.all %>' ],
            helpers: [ '<%= config.files.tests.js.helpers %>' ],
            vendor: [
                '<%= config.files.vendor.js %>',
                '<%= config.files.tests.js.mocks %>'
            ],

            junit: {
                path: '<%= config.artifacts.tests.jasmine.junit %>'
            },
            // template: require('grunt-template-jasmine-istanbul'),
            // templateOptions: {
            //     coverage: '<%= config.artifacts.tests.jasmine.coverage %>',

            //     // https://github.com/maenu/grunt-template-jasmine-istanbul#templateoptionsreport
            //     report: [
            //         {
            //             type: 'text-summary'
            //         },
            //         {
            //             type: 'html',
            //             options: {
            //                 dir: '<%= config.artifacts.tests.jasmine.report %>'
            //             }
            //         }
            //     ],

            //     // requirejs template configuration:
            //     template: require('grunt-template-jasmine-requirejs'),
            //     templateOptions: {
            //         // baseUrl: '.grunt/grunt-contrib-jasmine/src/main/js/'
            //     }
            // }
        }
    }
};
