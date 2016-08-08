var path = require('path');
var webpack = require('webpack');

var options = {
    context: path.join(__dirname, 'app'),
    entry: './app.js',
    output: {
        filename: 'bundlewebpack.js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'app',
            'node_modules'
        ],
        extensions: ['', '', '.js']
    }
};
module.exports = options;
