const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('../package.json')
const ROOT = path.resolve( __dirname, '../', 'app-test' );
const DESTINATION = path.resolve( __dirname, '../', 'dist-apptest' );

let version = `${pkg.version}`
let nameApp = `${pkg.name}`

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
        extensions: ['.ts', '.js', '.scss'],
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
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ]
    },
    plugins: [
      new miniCss({
        filename: 'style.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'VERSION': `'${version}'`,
        'NAMEAPP': `'${nameApp}'`
      }),

    ],

    devtool: 'cheap-module-source-map'
};

