var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/main.ts'
  },
  output: {
    filename: 'dist/[name].bundle.js'
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [

      {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },

      { test: /\.html$/, loader: 'html?attrs=false' },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },

      { test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?name=./img/[name].[ext]' },

      { test: /\.(woff|woff(2)?|eot|ttf|svg)$/, loader: 'file?name=fonts/[name].[ext]' },

      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }

    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  }
};
