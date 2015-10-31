var config = {
  // context: __dirname + '/app',
  entry: ['./app/main1','./app/main2'],
  output: {
    path: __dirname + '/webpack',
    filename: 'bundle.js',
    library: 'bundle_as_module',
    libraryTarget: 'var'
  }
}

module.exports = config
