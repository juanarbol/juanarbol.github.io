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
  }
}