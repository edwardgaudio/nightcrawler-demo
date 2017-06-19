const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin({
  filename: 'public/styles/style.css',
  disable: false,
  allChunks: true,
});

module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: './public/js/app.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/i,
        use: extractSASS.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
  plugins: [
    extractSASS,
  ],
};
