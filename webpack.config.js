const path = require('path');

module.exports = {
  entry: './src/devtools.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webpack-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|__tests__)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', ['@babel/env', {modules: false}]]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    port: 3001,
    open: true,
  }
}
