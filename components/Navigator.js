import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import NavTwo from './examples/NavTwo';
import SecondComponent from './examples/SecondComponent';
import NavOne from "./examples/NavOne";
import GithubRepoList from "./examples/CarList";

export const RootStack = createStackNavigator(
	{
        Proceed: {screen: NavOne},
        Home: {screen: NavTwo},
        Two: {screen: SecondComponent},
        CarsList: {screen: GithubRepoList}
    }, {initialRouteName: 'Proceed'});

class Navigator extends Component {
	render() {
		return (
			<RootStack/>
		);
	}
}

export default Navigator;