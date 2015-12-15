const fs = require('fs');
const rollup = require('rollup');
const uglify = require('uglify-js');
const babel = require('rollup-plugin-babel');
const npm = require('rollup-plugin-npm');
const replace = require('rollup-plugin-replace');
const pack = require('../package.json');
const banner = require('./banner');

const main = fs.readFileSync('src/index.js', 'utf-8')
    // NOTE! replace 'boily' with current name on the library
    .replace(/boily\.version = '[\d\.]+'/, "boily.version = '" + pack.version + "'")
fs.writeFileSync('src/index.js', main)

function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb'
}

function write(dest, code) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(dest, code, function(err) {
            if (err) return reject(err)
            console.log(blue(dest) + ' ' + getSize(code))
            resolve()
        })
    })
}

function logError(e) {
    console.log(e)
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

// Rollup
rollup.rollup({
        entry: 'src/index.js',
        plugins: [
            babel(),
            npm({
                main: true,
                jsnext: true
            })
        ]
    })
    // Standalone Dev Build
    .then(function() {
        return rollup.rollup({
                entry: 'src/index.js',
                plugins: [
                    replace({
                        'process.env.NODE_ENV': "'development'"
                    }),
                    babel(),
                    npm({
                        main: true,
                        jsnext: true
                    })

                ]
            })
            .then(function(bundle) {
                return write('dist/' + pack.name + '.js', bundle.generate({
                    format: 'umd',
                    banner: banner,
                    moduleName: 'boily'
                }).code)
            })
    })
    .then(function() {
        // Standalone Production Build
        return rollup.rollup({
                entry: 'src/index.js',
                plugins: [
                    replace({
                        'process.env.NODE_ENV': "'production'"
                    }),
                    babel(),
                    npm({
                        main: true,
                        jsnext: true
                    })

                ]
            })
            .then(function(bundle) {
                var code = bundle.generate({
                    format: 'umd',
                    moduleName: 'boily'
                }).code
                var minified = banner + '\n' + uglify.minify(code, {
                    fromString: true,
                    dead_code: true,
                    warnings: false,
                    screw_ie8: true
                }).code
                return write('dist/' + pack.name + '.min.js', minified)
            })
    })
    .catch(logError)