import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'
import SearchResults from './components/SearchResults';

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
		const searchedText = this.props.navigation.getParam('text');
		return (
			<View style={Styles.container}>
				<Text>
					Movies for <Text style={Styles.searchedText}>{searchedText}</Text>
				</Text>
				<SearchResults
					searchedText={searchedText}
				/>
			</View>
		);
	}

}

