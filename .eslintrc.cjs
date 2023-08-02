module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 13,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
	},
}
