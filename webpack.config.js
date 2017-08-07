
var path = require('path');

module.exports = {
    entry: [

        // external libs
        // './node_modules/babylonjs/dist/preview release/Oimo.js',

        // './dist/lib/cannon.js',

        // project sources
        './lib/src/de/mayflower/mfg/src.js',

        // lib sources
        './lib/src_lib/de/mayflower/lib/lib.js',

        // index file will be removed soon
        './lib/src/index.js'


    ],
    output: {
        filename: 'bundled.js',
        path:     path.resolve(__dirname, 'dist')
    }
};
