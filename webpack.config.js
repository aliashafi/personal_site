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
                    test: /\.png$/,
                    loader: 'url-loader?limit=100000&minetype=image/png'
                },
                {
                    test: /\.jpg/,
                    loader: 'file-loader'
                },
                {
                    test: /\.jsx?/,
                    include: SRC_DIR,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};