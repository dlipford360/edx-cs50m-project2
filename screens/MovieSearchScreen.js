import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'
import SearchBox from './components/SearchBox';

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
				<SearchBox
					navigation={this.props.navigation}
				/>
			</View>
		);
	}
}

