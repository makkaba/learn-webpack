const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: './dist',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});