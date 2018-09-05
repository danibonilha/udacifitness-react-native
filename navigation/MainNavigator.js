
import { createStackNavigator } from 'react-navigation';
import EntryDetail from '../components/EntryDetails';
import { purple, white } from '../utils/colors';
import { Tabs } from './Tabs';


export const MainNavigator = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			header: null
		}
	},
	EntryDetail: {
		screen: EntryDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple,
			}
		}
	}
});
