import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../../styles'
import API_KEY from '../../config/API_KEY';

export default class SearchResults extends React.Component {

	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<FlatList
					data={this.props.results}
					renderItem={({ item }) => <Text>{item}</Text>}
				/>
			</View>
		);
	}
}

