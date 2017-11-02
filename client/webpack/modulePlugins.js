const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    )
  }),
  new HtmlWebpackPlugin({
    title: 'Movies Management',
    template: path.join(__dirname, '..', 'src/template', 'index.html')
  }),
  new CleanWebpackPlugin([ 'public' ])
]
