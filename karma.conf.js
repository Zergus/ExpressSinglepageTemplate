var webpack = require

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        colors: true,
        browsers: ['Chrome'],
        singleRun: false,

        files: [
            './public/bund.js',
            './unitTests/**/*.js'],

        preprocessors: {
            './public/bund.js': ['webpack'],
            './unitTests/**/*.js': ['babel', 'webpack']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },

        webpack: {
            module: {
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
            }
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        }

    });
};
