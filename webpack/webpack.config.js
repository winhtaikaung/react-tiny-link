const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    externals: {
        "react": "react",
        "prop-types": "prop-types",
        "react-day-picker": "react-day-picker",
        "react-day-picker/DayPickerInput": "react-day-picker/DayPickerInput",
        "react-smooth-collapse": "react-smooth-collapse",
        "react-tippy": "react-tippy",
        "react-textarea-autosize": "react-textarea-autosize"
    }
});
