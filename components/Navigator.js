import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import Login from "./Login";



export const RootStack = createStackNavigator(
	{
        Login: {screen: Login},
        Home: {screen: FirstComponent},
        Two: {screen: SecondComponent}
    }, {initialRouteName: 'Login'});

class Navigator extends Component {
	render() {
		return (
			<RootStack/>
		);
	}
}

export default Navigator;