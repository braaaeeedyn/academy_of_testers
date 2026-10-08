module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      // Context modules export a provider alongside its hook, and MathText exports its parser for
      // reuse; both are deliberate, so the fast-refresh hint doesn't apply.
      files: ['src/context/**', 'src/components/MathText.tsx'],
      rules: { 'react-refresh/only-export-components': 'off' },
    },
  ],
}
