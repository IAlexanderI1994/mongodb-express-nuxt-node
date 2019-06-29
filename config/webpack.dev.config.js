const path              = require('path')
const webpack           = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports          = {
  entry: {
    main: './client/main.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // отображение пути при подключении файла, например, вместо dist/index.js будет /index.js, если publicPath: '/'
    publicPath: '/',

  },
  devtool: 'source-map',
  devServer: {
    // при запуске дев сервера будет мониториться эта папка
    contentBase: 'dist',
    overlay: true,
    hot: true,
    port: 8082,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [

          {
            loader: 'html-loader',
          },

        ]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html'
    })

  ]
}