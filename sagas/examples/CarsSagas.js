import request from "axios";
import {call, put, takeEvery} from "redux-saga/effects";
import {CarStates} from "../../reducers/examples/CarsReducer";

export function* sendCarsRequest(action){
    try {
        let requestOptions = {headers:{'Content-Type':'application/json'}};

        /*
        When running on an android device or emulator, make sure to use the ip address of your machine
        instead of localhost.
        The iOS simulator forwards localhost to your dev machine.
         */
        let response = yield call(request.get, 'http://192.168.1.66:3000/cars', requestOptions);

        yield put({type: CarStates.REQUEST_SUCCEEDED, cars: response.data})
    } catch (error){
        // console.log(JSON.stringify(error));
        yield put({type: CarStates.REQUEST_FAILED, error: error})
    }
}

export function* carsSagas(){
    yield takeEvery(CarStates.REQUEST_SENT, sendCarsRequest);
}