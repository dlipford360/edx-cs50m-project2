import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'
import { Ionicons } from '@expo/vector-icons';

export default class MoviePosterScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie poster',
			tabBarIcon: ({ focused, tintColor }) => {
				return (
					<Ionicons
						name='md-film'
						color={tintColor}
						size={25}
					/>)
			}
		};
	};



	render() {
		return (
			<View style={Styles.container}>
				<Text>This is the movie poster</Text>
			</View>
		);
	}
}

