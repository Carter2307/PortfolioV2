const path = require('path')
const webpack = require('webpack')

//-----widgets-----//

/**
 * Un plugin webpack pour supprimer/nettoyer
 * votre ou vos dossiers de construction.
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * Copie des fichiers individuels ou des répertoires entiers,
 * qui existent déjà, dans le répertoire de construction
 */
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * Ce plugin extrait le CSS dans des fichiers séparés.
 * Il crée un fichier CSS par fichier JS contenant du CSS
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_DEVELOPPEMENT = process.ENV === 'dev'

//Resolve directory
const dirApp = path.join(__dirname, '../app')
const dirShared = path.join(__dirname, '../shared')
const dirStyles = path.join(__dirname, '../styles')
const dirNode = 'node_modules'

module.exports = {
  entry: [path.join(dirApp, 'app.js'), path.join(dirStyles, 'main.scss')],

  //Simplifie l'utilisation des chemin -> path
  resolve: {
    modules: [dirApp, dirShared, dirStyles, dirNode],
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPPEMENT,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './shared',
          to: '',
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, '../index.html'),
    // }),

    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      //HTML
      // {
      // 	test: /\.html$/,
      // 	use: {
      // 		loader: 'html-loader',
      // 	},
      // },
      //JS
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      //CSS
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions ',
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      //IMAGES
      {
        test: /\.(png|jpg|gif|jpe?g|svg|woff2?|fnt|webp|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
        },
      },
    ],
  },
}
