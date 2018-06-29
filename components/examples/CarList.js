import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {CarStates} from "../../reducers/examples/CarsReducer";

/*
Adapted from the example given at:
https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29
 */

export class CarList extends React.Component {

    componentDidMount(){
        this.props.loadCars();
    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.make + " " + item.model}</Text>
        </View>
    );

    render() {
        const cars = this.props.cars;
        let carList = cars.length == 0 ? <Text></Text> : this.makeCarsList(cars);
        return (carList);
    };

    makeCarsList(cars){
        return <FlatList
            styles={styles.carsList}
            data={cars}
            renderItem={this.renderItem}/>
    };
}

const mapStateToProps = (state, props) => {
    return {cars: state.cars};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadCars: ()=>{
            dispatch({type:CarStates.REQUEST_SENT})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarList);


const styles = StyleSheet.create({
    carsList: {
        flex: 1,
        backgroundColor: '#ff9d19',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});
