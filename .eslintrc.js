module.exports = {
  env: {
    // "browser": true,
    // "es2021": true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  // "extends": "eslint:recommended",
  extends: ['prettier', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'max-len': ['error', { code: 132, tabWidth: 2 }],
    camelcase: 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    curly: 'off',
    radix: 'off',
    'comma-dangle': 'off',
    'operator-linebreak': ['error', 'after'],
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'nonblock-statement-body-position': 'off',
    'function-paren-newline': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off', // buscar el porque pasa y la manera de solucionarlo
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'dot-notation': 'off',
    // 'linebreak-style': ['error', 'windows'],
    // "semi": [ "error", "always" ],
    // "object-curly-spacing": [ "error", "always" ],
    // "array-bracket-spacing": [ "error", "always" ],
    // "space-in-parens": [ "error", "always" ],
    // quotes: [ "error", "always" ],
    // indent: [ "error", "spacsing" ],
  },
};
