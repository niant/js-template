module.exports = {
  entry: './app/components/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  watchOptions: {
    poll: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
};
