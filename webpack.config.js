const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    // 入口js的打包输出文件名
    filename: 'index.js',
    publicPath: '/assets/',
    chunkFilename: '[id].js?[chunkhash]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.html$/,
        use: 'html-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  plugins: [
    /*
    html-webpack-plugin用来打包入口html文件
    entry配置的入口是js文件, webpack以js文件为入口, 遇到import, 用配置的loader加载引入文件
    但作为浏览器打开的入口html, 是引用入口js的文件, 它在整个编译过程的外面,
    所以, 我们需要html-webpack-plugin来打包作为入口的html文件
    */
    new HtmlWebpackPlugin({
      /*
      template参数指定入口html文件路径, 插件会把这个文件交给webpack去编译,
      webpack按照正常流程, 找到loaders中test条件匹配的loader来编译, 那么这里html-loader就是匹配的loader
      html-loader编译后产生的字符串, 会由html-webpack-plugin储存为html文件到输出目录, 默认文件名为index.html
      可以通过filename参数指定输出的文件名
      html-webpack-plugin也可以不指定template参数, 它会使用默认的html模板.
      */
      template: './src/index.html'
    })
  ],

  devServer: {
    port: 8100,
    historyApiFallback: {
      index: '/assets/'
    }
  }
}