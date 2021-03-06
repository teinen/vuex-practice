const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './dist/')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    performance: {
      hints: false
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist/'),
      host: '0.0.0.0',
      port: 8080,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new VueLoaderPlugin()
    ],
  },
];