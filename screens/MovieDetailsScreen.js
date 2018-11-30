import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie details',
			// headerRight: (
			// 	<Button
			// 		title="Add"
			// 		onPress={() => navigation.navigate('AddContact')}
			// 		color="#a41034"
			// 	/>
			// ),
		};
	};



	render() {
		return (
			<View style={Styles.container}>
				<Text>This is the movie details</Text>
			</View>
		);
	}
}

