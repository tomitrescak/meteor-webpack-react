var path = require('path');
var webpack = require('webpack');
var dirs = require('../dirs');


module.exports = {
  context: __dirname,
  entry: [
    path.join(dirs.app, '.webpack', 'lib', 'core-js-no-number'),
    'regenerator/runtime',
    path.join(dirs.app, 'app', 'main_client')
  ],
  output: {
    path: path.join(dirs.app, 'webpack', 'assets'),
    filename: 'client.bundle.js',
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
        loader: 'babel',
        exclude: /node_modules|lib/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  plugins: [
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ]
};
