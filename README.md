# Boilerplate for creating libraries with Rollup written in ES2015 for Node and the browser.

[![Build Status](https://travis-ci.org/Kflash/boily.svg?branch=master)](https://travis-ci.org/Kflash/boily)
[![Coverage Status](https://coveralls.io/repos/Kflash/boily/badge.svg?branch=master&service=github)](https://coveralls.io/github/Kflash/boily?branch=master)
[![npm version](https://badge.fury.io/js/boily.svg)](https://badge.fury.io/js/boily)
[![devDependency Status](https://david-dm.org/kflash/boily/dev-status.svg)](https://david-dm.org/kflash/boily#info=devDependencies)
[![Dependency Status](https://david-dm.org/kflash/boily.svg)](https://david-dm.org/kflash/boily)

> A starter kit to get you up and running with a bunch of awesome new front-end technologies using Babel, Rollup, Webpack, Mocha, Sinon-chai, Isparta, and ESLint without any framework dependencies.

## Requirements

Node `>= 4.1`

## Features

* [ES6 with Babel](http://babeljs.io/) for ES6 and ES7
* [Webpack](https://webpack.github.io/) for unit tests
* [Rollup](http://rollupjs.org/) for bundling
* [Eslint](http://eslint.org/) to maintain a consistent code style
* [Karma](http://karma-runner.github.io/0.13/index.html) as the test runner
* [Universal Module Definition (UMD) API](https://github.com/umdjs/umd), which provides compatibility with the most popular script loaders, to the output.
* Unit tests written with ES2015 get transpiled on the fly
* Browser tests in the browser
* Various testing environments ( AT and UT )
* Node >= 4.x

## Getting Started

Just clone the repo and install the necessary node modules.

```js
$ git clone https://github.com/kflash/boily.git boily
$ cd boily
$ npm install                   # Install Node modules listed in ./package.json
$ npm run build                 # Build a minified and a non-minified version of the library
```
## Workflow

* `npm run build` - Build task that generate a minified and a non-minified script
* `npm run build:prod` - Build task that generate a production bundle
* `npm run build:dev` - Build task that generate a development bundle
* `npm run lint:source` - Lint the source
* `npm run lint:tests` - Lint the AT tests
* `npm run lint:fix` - ESLint will try to fix as many issues as possible in your source files
* `npm run clean` - Remove the coverage report and the *dist* folder
* `npm run test` - Runs unit tests for both server and the browser
* `npm run test:browser` - Runs the unit tests for browser / client
* `npm run test:server` - Runs the unit tests on the server
* `npm run watch:server` - Run all unit tests for server & watch files for changes
* `npm run watch:browser` - Run all unit tests for browser & watch files for changes
* `npm run packages` - List installed packages
* `npm run package:purge` - Remove all dependencies
* `npm run package:reinstall` - Reinstall all dependencies
* `npm run package:check` - shows a list over dependencies with a higher version number then the current one - if any 
* `npm run package:upgrade` - Automaticly upgrade all devDependencies & dependencies, and update package.json
* `npm run package:dev` - Automaticly upgrade all devDependencies and update package.json
* `npm run package:prod` - Automaticly upgrade all dependencies and update package.json
* `npm run browser` - starts browser unit tests in the browser. All your AT tests get bundled automatically.

## Testing environment

### AT

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To add a unit test, simply create a `.spec.js` file inside the `~/test` folder. Karma will pick up on these files automatically, and Mocha and Chai will be available within your unit tests without the need to import them.

To run unit tests only for the browser ( *client*), or for the server, create either a `~/.spec.browser.js` or `~/spec.server` file inside the same folder.

To run the tests in the project, just simply `npm run test` for both server and client unit tests, or `npm run test:server`. for server or `npm run test:browser`. for browser tests.

To keep watching the common test suites that you are working on, simply do `npm run watch:browser` or `npm run watch:server`.

### UT

UT are supported. Just add a `__tests__` folder inside your source directory, and simply create `spec.ut.js` file inside that folder. It will be picked up by Karma.

## Browser tests
 
To run your unit tests in the browser, do `npm run browser`, and open `port 8080`. Hot module replacement (WDS) are supported.

## Coveralls

This library is set up to integrate with Coveralls, and will automaticly publish your coverage report to **coveralls.io** if you have created an account there.

##Rollup 

Rollup are used as the library bundler. It produces a cleaner and more lightweight source code then what you get with for example webpack and browserify.

It's not easy at all to get Rollup working and therefor this boilerplate are set up to use different environments variables.

## Package management

Boily has build-in some nice features to always make sure your dependency tree are up to date. 

To check for the latest dependencies, simply run `npm run package:check`. 

If you want to update your packages, you can simply do `npm run package:upgrade`.

*Note!* Your `package.json` will be automatically updated so make sure you have saved your changes before running this.

To reinstall all packages, do `npm run package:reinstall`, and to remove all packages  `npm run package:purge`.

## Pre-commit

This boilerplate uses a [pre-commit hook](https://www.npmjs.com/package/pre-commit) to ensure that your npm test (or other specified scripts) passes before you can commit your changes. This all conveniently configured in your package.json.

## Linting

This boilerplate project uses ESLint to lint your source. To change the rules, edit the .eslintrc file in the root directory, respectively.

## Installation

Download the package, and run this from the command line:

```
npm install 
```


## Known issues

Rollup to be honest. Various Rollup plugins that overwrite native Babel 6.x behaviour. Without this plugins Rollup will not work. 
With mentioned plugins you will screw up the Mocha unit tests on nodejs if you forget to define different environments in `.babelrc`. 
There will also be issues if you set Babel environment variables in `package.json ` as described on Babel webpage. Both Mocha and Rollup will get big time issues.

`uglifyJS` seems to have a Rollup sickness if you use the Rollup babel plugin.

All known issues solved with this boilerplate.

## License
MIT Â© [KFlash](https://github.com/kflash)
