import React from "react"
import { StyleSheet, Text } from "react-native"

export const Paragraph = ({ children, style, ...props }) => (
	<Text {...props} style={[$paragraph, style]}>
		{children}
	</Text>
)

const { $paragraph } = StyleSheet.create({
	$paragraph: {
		color: "rgba(0, 0, 0, 0.87)",
		fontSize: 16,
		letterSpacing: 0.25,
		marginVertical: 2,
	},
})
