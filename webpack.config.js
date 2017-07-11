module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}