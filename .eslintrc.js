module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
};
