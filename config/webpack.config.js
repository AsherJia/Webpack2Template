const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, '../src/provider.jsx')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'react-hot-loader/webpack'
                }, {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2'],
                        plugins: ['react-hot-loader/babel', 'transform-decorators-legacy']
                    }
                }]
            }, {
                test: /\.(sass|scss)?$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss', '.html'],
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        compress: true, // enable gzip compression
        port: 9000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/template.html')
        })
    ]
}
