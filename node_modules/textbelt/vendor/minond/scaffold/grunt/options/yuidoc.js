module.exports = {
    all: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        options: {
            themedir: '<%= config.option.documentation.yuidoc.themedir %>',
            paths: '<%= config.files.js.dir %>',
            outdir: '<%= config.artifacts.documentation.yuidoc %>'
        }
    }
};
