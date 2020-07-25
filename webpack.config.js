const path  = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'styles-builder',
  mode: 'production', //'development',
  resolve: {
    extensions: ['.scss', 'sass'],
  },
  entry: {
    app: ['./styles/app.scss'],
  },
  module: {
    rules: [
      {
        test: /\.scss?/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  output: {
    path: path.join(__dirname, '/hugo/static/styles'), 
  },
}
