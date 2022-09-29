const path = requiere('path');
const HtmlWebpackPlugin = requiere('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  // Punto de entrada de la app
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.js','.jsx']
    // reconoce elementos js y jsx
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename:'./index.html'
    })
  ]
}