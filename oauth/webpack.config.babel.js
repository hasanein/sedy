import path from 'path';
import config from 'config';
import webpack from 'webpack';

export default {
    target: 'node',
    entry: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
    output: {
        path: './build/',
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs', // Ensure we have exports.handler
    },
    plugins: [
        new webpack.DefinePlugin({ config: JSON.stringify(config) }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: 'babel-loader',
        }, {
            test: /\.json$/,
            use: 'json-loader',
        }],
    },
};
