const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  resolve: {
    alias: {
      'utils/request': path.resolve(__dirname, 'mocks/request.js'),
    },
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{loader: "babel-loader"}],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            options: {
              formatter: eslintFormatter,
              emitError: true,
              emitWarning: true,
              failOnError: true,
              failOnWarning: false,
            },
            loader: 'eslint-loader',
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [
    htmlPlugin,
    new CleanWebPackPlugin(['dist']),
  ]
};