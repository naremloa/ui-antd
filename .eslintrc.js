module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.dev.js',
      },
    },
  },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)',
  //     ],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
};
