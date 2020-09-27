const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  mode: "production",
  entry: {
    vendor:['jquery','./src/js/common.js'],
    cart: path.resolve(__dirname, './src/js/cart.js'),
    index: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.css$/i,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },{
      test:/\.js$/i,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ['index','vendor']
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      template: "./src/cart.html",
      chunks: ['cart']
    })
  ],
  optimization:{
    minimize: true,
    splitChunks:{
      cacheGroups: {
        commons: {
          name: "vendor",
          chunks: "all",
          automaticNameDelimiter: '~',
          minChunks: 2
        }
      }
    }
  }
  // devtool:"#source-map"
}