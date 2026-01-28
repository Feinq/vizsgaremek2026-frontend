import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist', 'node_modules']),
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		plugins: {
			'@stylistic': stylistic,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			// Indentation - use tabs (handles both JS and JSX)
			'@stylistic/indent': ['error', 'tab', { SwitchCase: 1 }],
			'@stylistic/no-tabs': 'off',

			// Quotes - single quotes
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

			// Semicolons - required
			'@stylistic/semi': ['error', 'always'],

			// Trailing commas
			'@stylistic/comma-dangle': ['error', 'always-multiline'],

			// JSX specific (jsx-indent is deprecated, indent handles JSX too)
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],

			// Other stylistic rules
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/comma-spacing': ['error', { before: false, after: true }],
			'@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/arrow-spacing': ['error', { before: true, after: true }],
			'@stylistic/block-spacing': ['error', 'always'],
			'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/space-before-blocks': ['error', 'always'],
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/keyword-spacing': ['error', { before: true, after: true }],

			// TypeScript specific
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
]);
