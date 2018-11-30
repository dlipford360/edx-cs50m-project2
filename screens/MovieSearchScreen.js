import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'

export default class MovieSearchScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie Search',
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
				<Text>Hello!</Text>
				<Button
					title="Go to movies list"
					onPress={() => { this.props.navigation.push('MoviesList'); }}
				/>
			</View>
		);
	}
}

