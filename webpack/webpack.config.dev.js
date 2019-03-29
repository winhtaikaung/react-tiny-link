const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
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
    externals: {}
});
