const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: __dirname + '/assets/js/app.jsx'
  },

  output: {
    path: path.join(__dirname + '/build'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] },
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['uglify'] }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  }
};
