const { resolve } = require('path');
module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'Zooi',
        libraryTarget: 'umd'
    },
}