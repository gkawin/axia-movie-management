const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `[name][chunkhash].bundle.js`,
    pathinfo: false,
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new UglifyJSPlugin()
  ]
})
