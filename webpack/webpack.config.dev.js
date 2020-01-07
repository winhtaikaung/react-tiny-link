const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
    entry:
    {
        'bundle': './src/demo/index.tsx'
    },
    output: {
        path: path.join(__dirname, 'src', 'demo', 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    externals: {},
    mode: 'development'
});
