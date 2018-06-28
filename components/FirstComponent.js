import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class FirstComponent extends React.Component {
  render() {
    return (
        <View style={styles.firstComp}>
            <Text>This is the first page</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Two')}
                title="Next Page"
                color="#841584"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    firstComp: {
        backgroundColor: '#2c32ff'
    },
});