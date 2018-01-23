import {
    RECEIVE_BEERS,
    REQUEST_BEERS,
    BOOKMARK
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
            return ({ ...state,
                isFetching: true
            })
        case RECEIVE_BEERS:
            return ({ ...state,
                isFetching: false,
                items: action.beers,
                lastUpdated: action.receivedAt
            })
        case BOOKMARK:
            let newItems = state.items.map((beer) => {
                if (beer.id === action.id) {
                    return { ...beer,
                        isBookmarked: beer.isBookmarked === false ? true : false
                    }
                }
                return beer;
            })
            return ({ ...state,
                items: newItems
            });
        default:
            return state
    }
}

export default beerReducer