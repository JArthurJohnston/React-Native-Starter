import {sendCarsRequest, baseUrl} from '../CarsSagas'
import {cloneableGenerator} from 'redux-saga/utils';
import {CarStates} from "../../../reducers/examples/CarsReducer";
import {call, put} from "redux-saga/effects";
import request from 'axios';

describe('send cars request', function () {
    let generator;
    const expectedAction = {type:CarStates.REQUEST_SENT};

    beforeEach(function () {
        baseUrl = 'whateverIWantItToBe';

        generator = cloneableGenerator(sendCarsRequest)(expectedAction);
    });

    it('should send request', function () {
        const valuePassedToGeneratorForAPIRequest = generator.next().value;

        const expectedUrl = baseUrl + '/cars';
        const expectedOptions = {headers:{'Content-Type':'application/json'}};

        /*
        Had to stringify due to test failure even though "Compared values have no visual difference"
         */
        expect(JSON.stringify(valuePassedToGeneratorForAPIRequest))
            .toEqual(JSON.stringify(call(request.post, expectedUrl, expectedOptions)));

        //You'll need to change the ip address in the expected url to match your machine
    });

    it('should dispatch action with response', function () {
        let responseFromAPICall = {data: [{make: 'ford', model:'fiesta', year: 2015, color:'blue'}]};
        generator.next(); //trigger first generator function to call the API

        const valuePassedToGenerator = generator.next(responseFromAPICall).value;

        expect(valuePassedToGenerator).toEqual(
            put({type: CarStates.REQUEST_SUCCEEDED, cars: responseFromAPICall.data}))
    });

    it('should dispatch failed action when request fails', function () {
        let expectedError = {data: 'Something went Wrong'};
        generator.next(); //need to trigger the first gen function

        expect(generator.throw(expectedError).value).toEqual(
            put({type: CarStates.REQUEST_FAILED, error: expectedError}));
    });
});