const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('../package.json')
const ROOT = path.resolve( __dirname, '../', 'app-test' );
const DESTINATION = path.resolve( __dirname, '../', 'dist-apptest' );

let version = `${pkg.version}`
let nameApp = `${pkg.name}`

module.exports = {
    context: ROOT,


  devServer: {
    static: [
      {
        directory: path.join(__dirname, '../app-test'),
      },
      {
        directory: path.join(__dirname, '../src/assets'),
      },
    ],
    compress: true,
    hot: true,
    port: 9000
  },
  stats: {
    orphanModules: false,
    errorStack: false,
  },
  entry: {
      'main': './main.ts'
  },
  output: {
      filename: '[name].bundle.js',
      path: DESTINATION
  },

  resolve: {
        extensions: ['.ts', '.js', '.scss', 'css'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          // For webpack@4
          // test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
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
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              //MiniCssExtractPlugin.loader,
              // Creates `style` nodes from JS strings
              /*{
                loader: 'css-loader', // translates CSS into CommonJS
                options: {
                  importLoaders: 1
                }
              },*/
              'postcss-loader',
              // Compiles Sass to CSS
            ],
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new webpack.DefinePlugin({
        'VERSION': `'${version}'`,
        'NAMEAPP': `'${nameApp}'`
      }),

    ],

    devtool: 'cheap-module-source-map'
};

