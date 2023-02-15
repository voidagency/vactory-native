import PropTypes from "prop-types"
import { StyleSheet, Text, ViewPropTypes } from "react-native"

export const Strong = ({ children, style, ...props }) => (
	<Text {...props} style={[$strong, style]}>
		{children}
	</Text>
)

const { $strong } = StyleSheet.create({
	$strong: {
		fontWeight: "bold",
		color: "rgb(0, 0, 238)",
	},
})

Strong.propTypes = {
	style: ViewPropTypes.style,
	children: PropTypes.element.isRequired,
}
