import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const TextButton = ({ onPress, children }) => (
	<TouchableOpacity onPress={onPress}>
		<Text>{children}</Text>
	</TouchableOpacity>
);