var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Roadmap'
        })
    ]
};

if (TARGET === 'build') {
    module.exports = merge(common, {
        devtool: 'source-map',
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size.
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new ExtractTextPlugin('styles.css')
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel?stage=1',
                    include: path.resolve(ROOT_PATH, 'app')
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css')
                }
            ]
        }
    });
}

if (TARGET === 'dev') {
    module.exports = merge(common, {
        devtool: 'eval',
        module: {
            preLoaders: [
                {
                    test: /\.css$/,
                    loader: 'csslint'
                },
                {
                    test: /\.jsx?$/,
                    // we are using eslint-loader explicitly since
                    // we have ESLint module installed. This way we
                    // can be ceratain that it uses the right loader
                    loader: 'eslint-loader',
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel', 'flowcheck', 'babel?stage=1&blacklist=flow'],
                    include: path.resolve(ROOT_PATH, 'app')
                },
                {
                    test: /\.css/,
                    loaders: ['style', 'css']
                }
            ]
        }
    });
}
