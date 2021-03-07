module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
  },
};
