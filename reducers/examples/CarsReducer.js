
export const CarStates = {
    REQUEST_SENT: 'CARS_REQUEST_SENT',
    REQUEST_SUCCEEDED: 'CARS_REQUEST_SUCCEEDED',
    REQUEST_FAILED: 'CARS_REQUEST_FAILED',
};

let defaultState = {
    cars: []
};

export default function carsReducer(state = defaultState, action) {
    switch (action.type) {
        case CarStates.REQUEST_SENT:
            return { ...state };
        case CarStates.REQUEST_SUCCEEDED:
            return { ...state,
                cars: action.cars };
        case CarStates.REQUEST_FAILED:
            return {
                ...state,
                error: 'Error while fetching cars'
            };
        default:
            return state;
    }
}
