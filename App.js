import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './components/Navigator'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";

// const store = createStore(
//     () => {},
//     {},
//     applyMiddleware(() => {})
// );

export default class App extends React.Component {
  render() {
    return (
        <Provider>
            <Navigator style={styles.container}/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
