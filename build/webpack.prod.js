/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.js');

const mode = 'production';

process.env.NODE_ENV = mode;

const resolve = (file) => path.resolve(__dirname, file);

module.exports = merge(webpackCommonConfig, {
  devtool: 'source-map',
  mode,
  entry: {
    main: resolve('../src/index.js'),
  },
  output: {
    path: resolve('../lib'),
    publicPath: '/dist/',
    filename: 'backstage-ui.min.js',
    // filename: '[name].js',
    library: 'backstage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
      '@ant-design/icons/lib/dist$': resolve('../src/utils/antdIcon.js'),
    },
  },
  optimization: {
    minimizer: [
      new OpimizeCss(),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${mode}"`,
    }),
    new MiniCssExtractPlugin({
      filename: 'backstage-ui.min.css',
    }),
  ],
});
