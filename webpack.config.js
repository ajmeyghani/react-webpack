var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: 'main',
    common: 'css-global/all',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  devtool: "cheap-module-source-map",
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
      { test: /\.css$|\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap!postcss?sourceMap!sass?sourceMap'
        )
       },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    alias: {
      'css-vars': 'css-global/0-variables'
    },
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx', '.html', '.css'],
    modulesDirectories: [
     'node_modules',
      path.resolve('./src/components'),
      path.resolve('./src'),
      path.resolve('./.')
    ]
  }
};
