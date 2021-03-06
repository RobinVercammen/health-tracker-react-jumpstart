var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        publicPath: 'public',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        moduleDirectories: [
            'node_modules',
            'src'
        ],
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },
    module: {
        loaders: [
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
