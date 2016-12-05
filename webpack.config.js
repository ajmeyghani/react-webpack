var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: 'main',
    common: 'css-global/all',
  },
  output: {
    filename: isProd ? '[name].min.js' : '[name].js',
    path: path.resolve(isProd ? './build': './dist')
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
      { test: /\.css$|\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap!postcss?sourceMap!sass?sourceMap'
        )
       },
    ]
  },
  plugins: [
    new ExtractTextPlugin(isProd ? '[name].min.css' : '[name].css')
  ],
  resolve: {
    alias: {
      'css-vars': 'css-global/0-variables',
      'kube': 'imperavi-kube/src/_scss'
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
