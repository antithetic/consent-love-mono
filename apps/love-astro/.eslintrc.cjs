module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      // Only add basic TypeScript rules without extending the full config
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
    {
      // Ignore no-this-alias rule for compiled files
      files: ['dist/**/*.js'],
      rules: {
        '@typescript-eslint/no-this-alias': 'off',
      },
    },
  ],
  rules: {
    // Your custom rules here
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
