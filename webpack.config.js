
var path = require('path');

module.exports = {
    entry: [

        './lib/de/mayflower/mfg/Mfg.js',

        //'./lib/de/mayflower/mfg/base/MfgVersion.js',

        './lib/index.js'

    ],
    output: {
        filename: 'bundled.js',
        path:     path.resolve(__dirname, 'dist')
    }
};
