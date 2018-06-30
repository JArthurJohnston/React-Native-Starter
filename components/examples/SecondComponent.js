import React from 'react';
import {Button, Text, View} from 'react-native';

export default class SecondComponent extends React.Component {
  render() {
    return (
        <View>
          <Text>This is the second page</Text>
          <Text>Note there is a back button in the header you can use to go back to the home page</Text>
            <Button
            onPress={() => this.props.navigation.navigate('carsList')}
            title="Cars List Page"
            color="#841584"/>
        </View>
    );
  }
}
