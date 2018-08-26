import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const UdaciSteppers = ({ unit, value, onIncrement, onDecrement }) => (
	<View>
		<View>
			<TouchableOpacity onPress={onDecrement}>
				<FontAwesome name='minus' size={30} color={'black'} />
			</TouchableOpacity>
			<TouchableOpacity onPress={onIncrement}>
				<FontAwesome name='plus' size={30} color={'black'} />
			</TouchableOpacity>
		</View>
		<View>
			<Text>{value}</Text>
			<Text>{unit}</Text>
		</View>
	</View>
);