const moduleAliases = require('../webpack/moduleAliases')
const moduleRulesBabel = require('../webpack/moduleRulesBabel')
const moduleCommons = require('../webpack/moduleCommons')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      ...moduleRulesBabel,
      ...moduleCommons
    ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'main-design$': require.resolve('../src/design') }
    )
  }
}
