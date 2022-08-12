const path = require('path')
/**
 * Optimisation engine
 */
const TerserPlugin = require('terser-webpack-plugin')

/**
 * Minimize image size
 */
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const { merge } = require('webpack-merge')

const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../public')
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 8 }]
            ]
          }
        }
      })
    ]
  }
})
