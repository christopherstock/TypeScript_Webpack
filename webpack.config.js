
var path = require('path');

module.exports = {
    entry: [

        './lib/src/de/mayflower/mfg/src.js',
        './lib/src_lib/de/mayflower/lib/lib.js',
        './lib/src/index.js'

    ],
    output: {
        filename: 'bundled.js',
        path:     path.resolve(__dirname, 'dist')
    }
};
