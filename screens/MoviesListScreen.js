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
	goToMovieDetails = (movie) => {
		this.props.navigation.push('MovieDetails', { movie })
	}


	render() {
		const searchedText = this.props.navigation.getParam('searchedText');
		const results = this.props.navigation.getParam('results')
		return (
			<View style={Styles.container}>
				<Text>
					Movies for <Text style={Styles.searchedText}>{searchedText}</Text>
				</Text>
				<SearchResults
					results={results}
					goToMovieDetails={this.goToMovieDetails}
				/>
			</View>
		);
	}

}

