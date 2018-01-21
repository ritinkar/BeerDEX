import {
    REQUEST_BEERS,
    RECEIVE_BEERS
} from '../constants/ActionTypes';
import {
    API_URL
} from '../constants/secrets';

function requestBeers() {
    return {
        type: REQUEST_BEERS
    }
}

function receiveBeers(json) {
    return {
        type: RECEIVE_BEERS,
        beers: json.data.map(child => ({ ...child,
            isBookmarked: false
        })),
        receivedAt: Date.now()
    }
}

export function fetchBeers(beer) {
    return dispatch => {
        dispatch(requestBeers())
        return fetch(API_URL + beer)
            .then(response => response.json())
            .then(json => dispatch(receiveBeers(json)))
    }
}