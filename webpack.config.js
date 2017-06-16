const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src', 'public', 'assets'),
  entry: './js/build.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'src', 'public', 'assets', 'js'),
    filename: 'build.min.js'
  },
  module: {
     loaders: [
    {
     test: /\.jsx?$/,
     exclude: /node_modules/,
     loader: 'babel-loader',
     query: {
       presets: [['env', { targets: { browsers: ['last 2 versions'] } }], 'react']
     }
    }
   ]
 },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
  ],
};
