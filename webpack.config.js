var webpack = require('webpack');
var config = {
  // context: __dirname + '/app',
  entry: ['webpack-hot-middleware/client','./app/main'],
  output: {
    path: __dirname + '/webpack',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
