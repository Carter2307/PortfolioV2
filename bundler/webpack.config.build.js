import { resolve } from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import { merge } from 'webpack-merge'
import config from './webpack.config'

export const conf = merge(config, {
  mode: 'production',

  output: {
    path: resolve(__dirname, '../public/'),
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
})
