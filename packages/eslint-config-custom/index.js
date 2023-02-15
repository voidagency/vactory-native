const globals = require("globals")

module.exports = {
	// Configuration for JavaScript files
	extends: ["universe", "plugin:prettier/recommended", "plugin:react/recommended"],
	plugins: ["unicorn", "prettier"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"prettier/prettier": "error",
		"no-unused-vars": "error",
		"react/prop-types": "off",
	},
}
