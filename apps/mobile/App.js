import React from "react"
import { StyleSheet, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Paragraph, Strong } from "@vactory-native/ui"

export default function App() {
	return (
		<View style={styles.container}>
			<Paragraph>
				Hello <Strong>Man !</Strong>, how are you ?
			</Paragraph>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
