import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import { MainNavigator } from './navigation/MainNavigator';
import { purple } from './utils/colors';
import { UdaciStatusBar } from './components/UdaciStatusBar';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{ flex: 1 }}>
					<UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}