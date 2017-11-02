const path = require('path')

const modulePlugins = require('./webpack/modulePlugins')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const moduleAliases = require('./webpack/moduleAliases')
const moduleCommons = require('./webpack/moduleCommons')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'entry.js'),
    vendor: [ 'react', 'react-dom', 'prop-types', 'lodash', 'styled-components' ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'main-design$': require.resolve('./src/design') }
    )
  },
  module: {
    rules: [
      ...moduleRulesBabel,
      ...moduleCommons
    ]
  },
  plugins: modulePlugins,
  node: {
    fs: 'empty'
  }
}
