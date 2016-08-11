var path = require('path');
var webpack = require('webpack');

var options = {
    context: path.join(__dirname, 'app'),
    entry: './app.js',
    output: {
        filename: 'bund.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
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
