const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './lib/index.ts',
    plugins: [],
    output: {
        library: 'watergis',
        libraryTarget: 'umd',
        filename: 'maplibre-gl-legend.js',
        path: path.resolve(__dirname, 'dist/cdn'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [
          '.ts', '.js',
        ],
    },
    externals: {
        'maplibre-gl': 'maplibregl'
    }
};