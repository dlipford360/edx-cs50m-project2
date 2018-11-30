import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../../styles'
import API_KEY from '../../config/API_KEY';

export default class SearchResults extends React.Component {
	state = { results: [] }

	componentDidMount() {
		const { searchedText } = this.props;
		console.log('componentDidMount', searchedText, this.state);
		return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchedText}`)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({
					results: responseJson.Search
				}, function () {
					console.log("SETSTATE!")
				});

			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<FlatList
					data={this.state.results}
					renderItem={({ item }) => <Text>{item}</Text>}
				/>
			</View>
		);
	}
}

