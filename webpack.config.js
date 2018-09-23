module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: true
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3000,
    hot: true,
    open: true,
  }
};
