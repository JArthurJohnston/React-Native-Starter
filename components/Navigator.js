import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import NavTwo from './examples/NavTwo';
import SecondComponent from './examples/SecondComponent';
import NavOne from "./examples/NavOne";
import CarsList from "./examples/CarList";

export const initialRoute = 'navOne';

export const RootStack = createStackNavigator(
	{
        navOne: {screen: NavOne},
        navTwo: {screen: NavTwo},
        secondComponent: {screen: SecondComponent},
        carsList: {screen: CarsList}
    }, {initialRouteName: initialRoute});

class Navigator extends Component {
	render() {
		return (
			<RootStack/>
		);
	}
}

export default Navigator;