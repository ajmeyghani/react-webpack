var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'app.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx']
  }
};
