
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'       
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html', //relative to root of the app
            template: './index.html',
        })
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
            path.resolve('./internal_modules')
        ]
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            ,
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    }   
}

module.exports = config;