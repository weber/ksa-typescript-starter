const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname, 'app-test' );
const DESTINATION = path.resolve( __dirname, 'dist-apptest' );

module.exports = {
    context: ROOT,

    entry: {
        'main': './main.ts'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },

          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ]
    },

    devtool: 'cheap-module-source-map'
};

