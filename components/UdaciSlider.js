import React from 'react';
import { View, Text, Slider } from 'react-native';

export const UdaciSlider = ({ max, unit, step, value, onChange }) => (
	<View>
		<Slider
			onValueChange={onChange}
			value={value}
			step={step}
			maximumValue={max}
			minimumValue={0}
		/>
		<View>
			<Text>{value}</Text>
			<Text>{unit}</Text>
		</View>
	</View>
);
