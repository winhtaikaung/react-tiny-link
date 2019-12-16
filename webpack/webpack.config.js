const merge = require('webpack-merge')

module.exports = merge(require('./webpack.config.base'), {
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'prop-types': 'prop-types',
  },
})
