/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const modifyVars = require('../src/styles/modifyVars');
const webpackCommonConfig = require('./webpack.common.js');

process.env.NODE_ENV = 'development';

const resolve = (file) => path.resolve(__dirname, file);

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: resolve('../dev/index.js'),
  },
  output: {
    path: resolve('../dev'),
    publicPath: '/dev/',
    filename: '[name].js',
    library: 'backstageUiAntd',
  },
  resolve: {
    alias: {
      'backstage-ui': resolve('../src'),
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
      '@ant-design/icons/lib/dist$': resolve('../src/utils/antdIcon.js'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: 'condense',
          },
        },
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
                modifyVars,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: resolve('../dev'),
    publicPath: '/dev/',
    host: 'localhost',
    port: '8181',
    hot: true,

  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader'],
    }),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    // new BundleAnalyzerPlugin(),
    new AntdDayjsWebpackPlugin({
      preset: 'antdv3',
    }),
  ],
};
