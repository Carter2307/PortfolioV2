/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')

//PLUGINS
const CopyWebpackPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const IS_DEVELOPPEMENT = process.ENV === 'dev'

// Resolve directory
const dirApp = path.join(__dirname, '../app')
const dirShared = path.join(__dirname, '../shared')
const dirStyles = path.join(__dirname, '../styles')
const dirNode = 'node_modules'

module.exports = {
  entry: {
    app: path.join(dirApp, 'app.js'),
    main: path.join(dirStyles, 'main.scss'),
  },

  resolve: {
    modules: [dirApp, dirShared, dirStyles, dirNode],
  },

  plugins: [
    new webpack.DefinePlugin({ IS_DEVELOPPEMENT }),
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './shared/', to: '../public/' }],
    }),
    new ESLintPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },

      // CSS
      {
        test: /\.scss$/,
        use: [
          { loader: miniCssExtractPlugin.loader },

          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env', { browsers: 'last 2 versions ' }],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      // IMAGES && SOUND
      {
        test: /\.(png|jpg|gif|jpe?g|svg|woff?2|eot|ttf|fnt|webp|mp4|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
        },
      },
    ],
  },
}
