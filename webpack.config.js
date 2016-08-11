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
                loader: 'ng-annotate?add=true',
                exclude: /node_modules/
            },
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
    },
    plugins: []
};

options.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(false)
);

options.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        beautify: false,
        compress: true,
        enclose: true,
        comments: false,
        preamble: false,
        verbose: false,
        warnings: false
    })
);

options.plugins.push(
    new webpack.optimize.LimitChunkCountPlugin({
        'maxChunks': 100,
        'chunkOverhead': 10000
    })
);

module.exports = options;
