/**
 * Created by YOU on 2018/6/11.
 * webpack 4.x
 */

const webpack = require('webpack')
const path = require('path');

module.exports = {
  // 多入口配置，实际可包装方法生成多入口
  mode: 'production',
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          tsConfigFile: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    ]
  }
};