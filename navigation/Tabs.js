import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { purple, white } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AddEntry from '../components/AddEntry';
import History from '../components/History';
import Live from '../components/Live';

/* eslint react/display-name: 0 */
export const Tabs = createBottomTabNavigator(
	{
		History: {
			screen: History,
			navigationOptions: {
				tabBarLabel: 'History',
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="ios-bookmarks" size={30} color={tintColor} />
				)
			}
		},
		AddEntry: {
			screen: AddEntry,
			navigationOptions: {
				tabBarLabel: 'Add Entry',
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name="plus-square" size={30} color={tintColor} />
				)
			}
		},
		Live: {
			screen: Live,
			navigationOptions: {
				tabBarLabel: 'Live',
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="ios-speedometer" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? purple : white,
			style: {
				height: 56,
				backgroundColor: Platform.OS === 'ios' ? white : purple,
				shadowColor: 'rgba(0, 0, 0, 0.24)',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1
			}
		}
	}
);
