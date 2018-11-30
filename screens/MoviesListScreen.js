import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Styles from '../styles'

export default class MoviesListScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movies list',
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
				<Button
					title="Go to movie details"
					onPress={() => { this.props.navigation.push('MovieDetails'); }}
				/>
			</View>
		);
	}

}

