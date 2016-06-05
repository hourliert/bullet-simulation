module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/main.js',
  output: {
    filename: 'app.bundle.js',
    path: './build',
    publicPath: "/build/"
  }
};
