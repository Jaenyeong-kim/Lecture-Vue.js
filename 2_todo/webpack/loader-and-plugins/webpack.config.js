var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             // 스타일 로더, CSS 로더 순서 중요함 > 오른쪽부터 실행됨
    //             use: ['style-loader', 'css-loader']
    //             // use: ['css-loader']
    //         },
    //     // {
    //     //     test: /\.vue$/,
    //     //     use: ['style-loader', 'css-loader']
    //     // }
    //     ]
    // }, 
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}