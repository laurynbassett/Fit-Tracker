const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './client/index.js',
  mode: isDev ? 'development' : 'production',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react' ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
  // node: {
  //   crypto: true,
  //   stream: true,
  //   fs: 'empty',
  //   net: 'empty',
  //   __filename: false,
  //   __dirname: false
  // },
  // target: 'node'
}
