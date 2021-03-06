import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './components/Navigator'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import gitReducer from './reducers/examples/CarsReducer';
import {carsSagas} from './sagas/examples/CarsSagas';

const sagas = createSagaMiddleware();
const store = createStore(
    gitReducer,
    applyMiddleware(sagas)
);

sagas.run(carsSagas);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
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
