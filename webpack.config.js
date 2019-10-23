const path = require("path");
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/src');


module.exports = {
    context: __dirname,
    entry: `${SRC_DIR}/entry_file.jsx`,
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
                
            },
            {
                test: /\.jpg/,
                loader: 'file-loader'
            },
        ],
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};