module.exports = {
	extends: ["custom"],
	settings: {
		react: {
			version: "18.0",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"unicorn/filename-case": [
			"error",
			{
				case: "pascalCase",
				ignore: ["index.jsx", ".eslintrc", ".prettierrc", /^node_modules/i, /^\.turbo/i],
			},
		],
	},
}
