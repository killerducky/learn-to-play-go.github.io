"use strict";

var path = require("path");
var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Our configuration
module.exports = {
  // Define the entry point
  context: __dirname + "/src/",
  entry: {
    style: "./styles.js",
  },

  // Output configuration
  output: {
    publicPath: "/css/",
    path: path.resolve(__dirname, "static/css"),
    filename: "[name].js"
  },

  module: {
    rules: [
      // Inform CSS modules must be bundled in another file.
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    // Extract all CSS content to a file
    new ExtractTextPlugin("[name].css")
  ]
};
