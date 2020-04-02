var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.join(__dirname, "js/app/index.js"),
    output: {
        path: path.join(__dirname, "../public"),
        filename: "js/index.js"
    },
        // module: {
        //     rules: [{
        //         test: /\.less$/,///当检测到以.less结尾
        //         use: ExtractTextPlugin.extract({
        //                 fallback: "style-loader",
        //                 use: ["css-loader", "less-loader", "postcss-loader"]
        //                 ///use: ["style-loader","css-loader", "less-loader"] 检测到以less结尾，less-loader先把less内容转化为字符串，css-loader再把字符串转化为css，style-loader再把css应用到样式里
        //             }) //把 css 抽离出来生成一个文件
        //     }]
        // },
    //     resolve: {
    //         alias: {
    //             jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
    //             mod: path.join(__dirname, "js/mod"),
    //             less: path.join(__dirname, "less")
    //         }
    //     },
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //             $: "jquery"////相当于var $ =require('jquery') 直接可以用$ 
    //         }),
    //         new ExtractTextPlugin("css/index.css"),
    //         new webpack.LoaderOptionsPlugin({
    //             options: {
    //                 postcss: [
    //                     autoprefixer(),
    //                 ]
    //             }
    //         })
    //         // new webpack.optimize.UglifyJsPlugin({
    //         //     compress: {
    //         //         warnings: false,
    //         //     },
    //         //     output: {
    //         //         comments: false,
    //         //     },
    //         // }),
    //     ]
    };