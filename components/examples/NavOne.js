import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackActions, NavigationActions} from "react-navigation";

export default class NavOne extends React.Component {
    render() {
        return (
            <View>
                <Text>This is the login page</Text>
                <Button
                    onPress={() => {
                        let action = StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName: 'Home'}),
                            ],
                        });
                        this.props.navigation.dispatch(action);
                    }}
                    title="Proceed"
                    color="#00ff99"/>
                <Text>Pressing this button will navigate you to the next screen without giving you a back button back to this screen</Text>
            </View>
        );
    }
}