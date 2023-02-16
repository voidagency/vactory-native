const createExpoWebpackConfigAsync = require("@expo/webpack-config")
const { withAlias } = require("@expo/webpack-config/addons")
const path = require("path")

// eslint-disable-next-line no-undef
const node_modules = path.join(__dirname, "node_modules")

const alias = {
	react: path.resolve(node_modules, "react"),
	"react-native": path.resolve(node_modules, "react-native-web"),
	"react-native-web": path.resolve(node_modules, "react-native-web"),
}

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(env, argv)

	return withAlias(config, alias)
}
