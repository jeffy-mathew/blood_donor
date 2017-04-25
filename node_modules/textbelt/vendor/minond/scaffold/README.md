`scaffold` is a pre-built build process that uses [Grunt](http://gruntjs.com/)
as its task runner. although configurable, it expects that you save it under
`vendor/minond/scaffold`. install/download anyway you want, but I recommend
you save it as a git submodule

### getting started
```bash
# add scaffold to your project
git submodule add http://github.com/minond/scaffold vendor/minond/scaffold

# install the npm packages it depends on
npm install --save-dev grunt@0.4.2
npm install --save-dev grunt-contrib-clean@0.5.0
npm install --save-dev grunt-mkdir@0.1.1
npm install --save-dev load-grunt-tasks@0.4.0
npm install --save-dev lodash@2.4.1
npm install --save-dev merge-defaults@0.1.0
npm install --save-dev glob@3.2.9

# get a copy of the Gruntfile.js file provided
cp vendor/minond/scaffold/grunt/Gruntfile.js ./
```

### configuration
to configure the build process, create a `config/build.yml` file in your
project and follow the scheme used in `vendor/minond/scaffold/config/build.yml`

### packages
#### linters
 * (composer) phpmd/phpmd: 1.4.*
 * (composer) sebastian/phpcpd: 2.*
 * (composer) sebastian/phpdcd: 1.*
 * (composer) squizlabs/php_codesniffer: 1.*
 * (npm) grunt-complexity: ~0.1.3
 * (npm) grunt-contrib-jshint: ~0.7.2
 * (npm) grunt-htmlhint: ~0.4.0
 * (npm) grunt-phpcs: ~0.2.2

#### tests
 * (composer) behat/behat: 2.5.2
 * (composer) behat/mink-extension: 1.2.0
 * (composer) behat/mink-selenium2-driver: 1.1.1
 * (composer) phpunit/phpunit: 4.*
 * (npm) expect.js: ~0.3.1
 * (npm) grunt-contrib-jasmine: ~0.5.2
 * (npm) grunt-phpunit: ~0.3.3
 * (npm) istanbul: ~0.2.7
 * (npm) mocha: ~1.18.2
 * (npm) phantomjs: ~1.9.7-1

#### documentation
 * (npm) grunt-apidoc: ~0.4.0
 * (npm) grunt-contrib-yuidoc: ~0.5.0

#### pre-processors
 * (npm) grunt-contrib-sass: ~0.7.3

#### for everything
 * (npm) grunt-exec: ~0.4.5

#### misc.
 * (composer) sebastian/exporter: 1.*
 * (npm) grunt-contrib-connect: ~0.5.0
 * (npm) grunt-contrib-watch: ~0.5.3
 * (npm) grunt-spell: ~0.2.1
 * (npm) json5: ~0.2.0
