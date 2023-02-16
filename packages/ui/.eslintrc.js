module.exports = {
	extends: ["custom"],
	settings: {
		react: {
			version: "18.0",
		},
	},
	ignorePatterns: ["dist/*.js", "dist/*.mjs"],
	rules: {
		"unicorn/filename-case": [
			"error",
			{
				case: "pascalCase",
				ignore: ["index.jsx", ".eslintrc", ".prettierrc", /^node_modules/i, /^\.turbo/i],
			},
		],
	},
}
