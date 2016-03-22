const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/client.js'),
  output: {
    path: path.resolve(__dirname, 'src/static/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /test/],
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
      },
      {
        test: /\.s?css$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass',
      },
    ],
  },
  devtool: 'source-map',
};
