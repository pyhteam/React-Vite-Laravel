module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Disable all errors
    '@typescript-eslint/no-explicit-any': 'off',
    // any type is allowed
    '@typescript-eslint/explicit-module-boundary-types': 'off',
      "no-unused-vars": "off",
      // no underfined vars turn offf
        "@typescript-eslint/no-unused-vars": "off",
  },
}
