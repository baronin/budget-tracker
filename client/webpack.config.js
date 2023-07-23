const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === "production";
console.log(isProduction);
module.exports = {
  context: path.join(__dirname, './src'),
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      filename: 'index.html',
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Page users',
      filename: 'users.html',
      template: './users.html',
    }),
  ],
  module: {
    rules: [
      {
        test:  /\.(html)$/i,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, 'src'),
    hot: true,
    host: 'localhost',
    port: 8080,
  },
};
