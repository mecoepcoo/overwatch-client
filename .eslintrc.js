const { concat } = require('lodash')

module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": true,
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {},
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": concat([
    "plugin:@typescript-eslint/recommended"
  ], [
    "prettier",
    "prettier/@typescript-eslint"
  ].map((key) => require.resolve(`eslint-config-${key}`))),
  "settings": {},
  "rules": {
    "prettier/prettier": 1,
    "semi": 0,
    "no-extra-semi": 1,
    "quotes": ["error", "single"],
    "no-unused-vars": 0,
    "comma-dangle": ["warn", "only-multiline"],
    "prefer-const": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unreachable": 1,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'function-paren-newline': 0,
    'linebreak-style': 0,
    'no-prototype-builtins': 'off',
    'sort-imports': 0,
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true
    }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowTypedFunctionExpressions: true
      },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    'no-extra-semi': 0,
    // 不必要的校验
    '@typescript-eslint/naming-convention': 0,
    'class-methods-use-this': 0,
    'no-else-return': 0,
    'no-bitwise': 0,
    'global-require': 0,
    '@typescript-eslint/ban-types': 0,
    // 避免报错（未知原因）
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/dot-notation': 0,
    // 团队内的特别约定
    'no-underscore-dangle': 0,
    'func-names': 0,
    'max-classes-per-file': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'prefer-object-spread': 0, // 扩展运算符干扰qs工作
  }
}
