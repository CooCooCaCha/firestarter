var path    = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'bundle.js',
        sourceMapFilename: 'debug/[file].map',
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,  
                loaders: [
                    'babel?stage=0&optional[]=runtime'
                ],
                include: __dirname,
                exclude: /node_modules/ 
            },
            {
                test: /\.css?$/,
                loader: 'style!css'
            },
            {
                test: /\.scss?$/,
                loader: 'style!css!sass'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        })
    ]
};
