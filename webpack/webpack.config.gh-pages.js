const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(
    {
        customizeObject(a, b, key) {
            if (key === 'entry') {
                // Custom merging
                return b;
            }

            if (key === 'output') {
                // Custom merging
                return b;
            }

            // Fall back to default merging
            return undefined;
        }
    }
)(require('./webpack.config.base'), {
    entry:
    {
        'bundle': './src/demo/index.tsx'
    },
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, '..', 'docs'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    externals: {}
});