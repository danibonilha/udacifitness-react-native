import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export const TextButton = ({ onPress, children, style = {} }) => (
	<TouchableOpacity onPress={onPress}>
		<Text style={[styles.reset, style]}>{children}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	reset: {
		textAlign: 'center',
		color: purple,
	}
});