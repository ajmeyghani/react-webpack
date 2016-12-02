var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: 'main',
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
          retainLines: 'true',
          plugins: ['add-module-exports']
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style!css',
      //   exclude: /node_modules/
      // }
      /* https://github.com/postcss/postcss-loader/issues/81 */
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader'
        )
       }
    ]
  },
  plugins: [
      new ExtractTextPlugin('newapp.css')
  ],
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx', '.html'],
    modulesDirectories: [
    'node_modules',
      path.resolve('./src/components'),
      path.resolve('./src'),
      path.resolve('./.')
    ]
  }
};
