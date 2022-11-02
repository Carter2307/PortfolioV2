const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../public/'),
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
})
