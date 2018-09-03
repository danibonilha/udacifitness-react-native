import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import { Tabs } from './navigation/Tabs';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1}}>
					<Tabs />
				</View>
			</Provider>
		);
	}
}