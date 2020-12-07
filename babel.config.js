module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/transform-runtime'],
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
