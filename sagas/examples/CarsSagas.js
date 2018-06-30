import request from "axios";
import {call, put, takeEvery} from "redux-saga/effects";
import {CarStates} from "../../reducers/examples/CarsReducer";
import NetworkProperties from 'NewtorkProperties'

const requestOptions = {headers:{'Content-Type':'application/json'}};

export function* sendCarsRequest(action){
    try {
        /*
        When running on an android device or emulator, make sure to use the ip address of your machine
        instead of localhost.
        The iOS simulator forwards localhost to your dev machine.
         */
        let response = yield call(request.get, NetworkProperties.BASE_URL + '/cars', requestOptions);

        yield put({type: CarStates.REQUEST_SUCCEEDED, cars: response.data})
    } catch (error){
        yield put({type: CarStates.REQUEST_FAILED, error: error})
    }
}

export function* carsSagas(){
    yield takeEvery(CarStates.REQUEST_SENT, sendCarsRequest);
}
