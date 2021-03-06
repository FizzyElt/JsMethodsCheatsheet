module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures:{
      jsx:true
    },
    ecmaVersion:11,
    sourceType: 'module',
  },
  plugins:['react']
}
