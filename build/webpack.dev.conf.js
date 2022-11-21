'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devWebpackConfig =  {
  entry: {
    app: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index1.html',
    }),
  ],
}

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig)
})
