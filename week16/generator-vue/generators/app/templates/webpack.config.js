const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.export = {
  entry: "./src/main.js",
  module: {
    rules: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        {
          test:/\.css$/,
          use:[
            'vue-style-loader',
            'css-loader'
          ]
        }
      ],
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns:[
        {
          from:'src/*.html',
          to:'[name].[ext]'
        }
      ]
    })
  ],
};