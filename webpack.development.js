let merge = require('webpack-merge');
let { HotModuleReplacementPlugin } = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 10099,
        hot: true
    },
    resolve: {
        extensions: ['.js']
    },
    optimization: {
        usedExports: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HotModuleReplacementPlugin()
    ]
}

module.exports = merge(
    require('./webpack.common.js'),
    config
);