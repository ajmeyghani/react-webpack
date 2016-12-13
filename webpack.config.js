var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: 'main'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  devtool: "eval",
  module: {
    loaders: [
      {
        test: /\.jsx?$|\.jsx\.html$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          retainLines: 'true',
          plugins: ['add-module-exports']
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx', '.html'],
    modulesDirectories: [
     'node_modules',
      path.resolve('./src/components'),
      path.resolve('./src'),
      path.resolve('./.')
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    'React': 'react'
  })
  ]
};
