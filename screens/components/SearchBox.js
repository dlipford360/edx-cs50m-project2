import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Styles from '../../styles'

export default class SearchBox extends React.Component {
	state = { text: '' }
	render() {
		return (
			<View style={{ flexDirection: "column" }}>
				<Text>Search for a movie</Text>
				<TextInput
					onChangeText={
						(text) => this.setState({ text })
					}
					style={Styles.searchBox}
					value={this.state.text}
					placeholder="Movie title..."
					placeholderColor="teal"

				/>
				<Button
					title="Search"
					onPress={() => {
						console.log(this.props, this.state)
						this.props.navigation.push('MoviesList',
							{ text: this.state.text }
						)
					}}
				/>
			</View>
		);
	}
}

