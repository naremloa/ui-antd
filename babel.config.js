module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
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
