const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./entry_file.jsx",
    output: {
        path: path.join(__dirname, 'src'),
        filename: "bundle.js",
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    module: {
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
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};