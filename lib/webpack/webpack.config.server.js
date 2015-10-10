var path = require('path');
var webpack = require('webpack');
var dirs = require('../dirs');

module.exports = {
  context: __dirname,
  target: 'node',
  entry: [
    path.join(dirs.app, '.webpack', 'lib', 'core-js-no-number'),
    'regenerator/runtime',
    path.join(dirs.app, 'app', 'main_server')
  ],
  output: {
    path: path.join(dirs.app, 'webpack', 'assets'),
    filename: 'server.bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(dirs.app, 'app'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules|lib/,
      },
    ],
  },
};
