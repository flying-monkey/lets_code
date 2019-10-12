const path = require('path');
const webpack = require('webpack');

let plugins = [];
const devPlugins = [];

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true,
    },
  }),
];

plugins = plugins.concat(process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins);

module.exports = {
  mode: "production",
  context: __dirname,
  entry: "./frontend/lets_code.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
