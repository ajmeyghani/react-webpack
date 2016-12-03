var path = require('path');
// https://github.com/juliancwirko/react-boilerplate/blob/master/webpack.config.js
var webpack = require('webpack');
var poststylus = require('poststylus');
// var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: 'main',
    common: 'css/all.css',
    example: 'css/ex.styl'
  },
  output: {
    filename: '[name].js',
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
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
       },
       { test: /\.styl$/,
         loader: ExtractTextPlugin.extract(
           'style-loader',
           'css!postcss!stylus-loader'
         )
        }
    ]
  },
  // stylus: {
  //   use: [
  //     poststylus([ 'autoprefixer'])
  //   ]
  // },

  stylus: function () {
    return []
  },
  postcss: function () {
    return [require('autoprefixer')({
      browsers: ['ff > 5', 'ie > 8', 'chrome > 10']
    })];
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
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
