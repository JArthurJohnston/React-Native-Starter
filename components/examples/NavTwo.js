import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class NavTwo extends React.Component {
  render() {
    return (
        <View style={styles.firstComp}>
            <Text>Pressing this button will navigate you to the next page.</Text>
            <Button
                onPress={() => this.props.navigation.navigate('secondComponent')}
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