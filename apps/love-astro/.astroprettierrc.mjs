export default {
  // Use single quotes for consistency
  singleQuote: true,

  // Use double quotes for JSX attributes
  jsxSingleQuote: false,

  // Use semicolons at the end of statements
  semi: true,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Use spaces instead of tabs
  useTabs: false,

  // Print trailing commas wherever possible
  trailingComma: 'es5',

  // Print spaces between brackets in object literals
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line
  bracketSameLine: false,

  // Always include parentheses around arrow function parameters
  arrowParens: 'always',

  // Line width before wrapping
  printWidth: 100,

  // End of line character
  endOfLine: 'lf',

  // Format embedded code blocks
  embeddedLanguageFormatting: 'auto',

  // HTML whitespace sensitivity
  htmlWhitespaceSensitivity: 'css',

  // Vue files script and style tags indentation
  vueIndentScriptAndStyle: false,

  // Single attribute per line in HTML, Vue, JSX
  singleAttributePerLine: false,

  // Override default options for specific file types
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
  ],
}
