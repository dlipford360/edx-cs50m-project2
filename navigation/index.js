import {
	createStackNavigator, createAppContainer
} from "react-navigation";
import { MoviesListScreen, MovieDetailsScreen, MovieSearchScreen } from '../screens'

const AppNavigator = createStackNavigator(
	{
		MoviesList: MoviesListScreen,
		MovieDetails: MovieDetailsScreen,
		MovieSearch: MovieSearchScreen,

	},
	{
		initialRouteName: "MovieSearch",

	}
);

export default AppNavigator;
