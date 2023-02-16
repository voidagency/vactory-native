module.exports = {
	// Configuration for JavaScript files
	extends: ["universe", "plugin:prettier/recommended", "plugin:react/recommended"],
	plugins: ["unicorn", "prettier", "simple-import-sort"],
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
		"import/order": "off",
		"simple-import-sort/imports": "off",
		"simple-import-sort/exports": "off",
		// "simple-import-sort/imports": [
		// 	"error",
		// 	{
		// 		groups: [["^react"], ["^expo"], ["^@?\\w"], ["@/(.*)"], ["^[./]"]],
		// 	},
		// ],
	},
}
