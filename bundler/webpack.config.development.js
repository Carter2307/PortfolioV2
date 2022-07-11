const path = require('path')

const { merge } = require('webpack-merge')

const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    hot: false,
  },

  output: {
    path: path.resolve(__dirname, '../public'),
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
})
