let webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "./umd.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
        })
    ]
};