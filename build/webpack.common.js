/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

function resolve(dir) { return path.join(__dirname, '..', dir); }

const cssLoader = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: true } },
];

const sassLoader = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } },
  { loader: 'sass-loader', options: { sourceMap: true } },
];

const stylusLoader = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } },
  { loader: 'stylus-loader', options: { sourceMap: true } },
];

const lessLoader = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } },
  { loader: 'less-loader', options: { sourceMap: true, lessOptions: { javascriptEnabled: true } } },
];

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
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
        test: /\.css$/,
        use: cssLoader,
      },
      {
        test: /\.s[ca]ss$/,
        use: sassLoader,
      },
      {
        test: /\.styl(us)?$/,
        use: stylusLoader,
      },
      {
        test: /\.less$/,
        use: lessLoader,
      },
    ],
  },
  resolve: {
    alias: {
      '@': resolve('../src'),
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': '1.0.0',
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader'],
    }),
    // new BundleAnalyzerPlugin(),
    new AntdDayjsWebpackPlugin(),
  ],
};
