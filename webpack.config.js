'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.join(__dirname, '/lib'),
    output: {
        filename: 'base-react-components.js',
        path: path.join(__dirname, '/dist'),
        library: 'base-react-components',
        libraryTarget: 'umd'
    },
    entry: {
        'base-react-components': './main.js'
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /lib/,
                loader: 'babel'
            }
        ]
    }
};

module.exports = config;
