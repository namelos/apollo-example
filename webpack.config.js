const path = require('path')

module.exports = {
  entry: './client/index',
  output: {
    path: path.join(__dirname, 'dist'), filename: 'bundle.js', publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'client'),
      query: {
        presets: ["react", "es2015", "stage-0"],
        plugins: ["babel-plugin-transform-decorators-legacy"]
      }
    }]
  }
}