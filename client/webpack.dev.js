const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval',
  output: {
    filename: `[name][hash].bundle.js`,
    pathinfo: true
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  }
})
