const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, 'src/client.js'),
  output: {
    path: path.resolve(__dirname, 'src/static/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    unsafeCache: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: /(src\/static|src\/server)/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
    ],
  },
	/*plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],*/
  devtool: 'source-map',
};
