
var path = require('path');

module.exports = {
    entry: [
        './lib/compiled.js'
    ],
    output: {
        filename: 'bundled.js',
        path:     path.resolve(__dirname, 'dist')
    }
};
