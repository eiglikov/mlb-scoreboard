var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/App.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css', 'sass']
          })
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?importLoaders=1"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new ExtractTextPlugin({
          filename: '[name].css',
          allChunks: true
        }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
