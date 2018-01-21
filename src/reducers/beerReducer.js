import {
    RECEIVE_BEERS,
    REQUEST_BEERS
} from '../constants/ActionTypes';

function beerReducer(
    state = {
        isFetching: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_BEERS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.beers,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export default beerReducer