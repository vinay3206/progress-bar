module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
   "react/forbid-prop-types": false,
   "jsx-a11y/click-events-have-key-events": false,
   "jsx-a11y/click-events-have-key-events": false,
   "react/destructuring-assignment": false,
   "react/destructuring-assignment": false,
  },
};
