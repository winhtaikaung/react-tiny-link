const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: { 'index': './src/ReactTinyLink.tsx' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader?silent=true'
            },

            {
                test: /\.svg?$/,
                include: /src/,
                use: 'webpack-inline-svg-loader'
            }
        ]
    },
    output:
        {
            path: path.join(__dirname, '../lib'),
            filename: '[name].js',
            publicPath: '../lib/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
            libraryTarget: 'umd'
        },
    plugins: [
        new CheckerPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative('../lib', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.NODE_ENV
            }
        })
    ]
};