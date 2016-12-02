var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$|\.tpl\.html$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['add-module-exports']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx', '.html'],
    modulesDirectories: [
    'node_modules',
      path.resolve('./src/components'),
      path.resolve('./src')
    ]
  }
};
