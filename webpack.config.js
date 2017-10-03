const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [__dirname] }
    })
  ]
}