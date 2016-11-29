/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
const path = require('path');

const PORT = process.env.PORT || 8000;

const config = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    // `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    compress: true,
    stats: {
      colors: true,
      chunks: false,
    },
    port: PORT,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: ['node_modules'],
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules'],
    alias: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};

module.exports = config;
