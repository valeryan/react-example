module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    settings: {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React",
          "version": "detect",
          "flowVersion": "0.53"
        }
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': ['off']
    }
};
