import {
    FILTER_BY_BOOKMARK,
    FILTER_BY_STRENGTH,
    FILTER_BY_CATEGORY,
    FILTER_BY_LOCATION,
    RESET_FILTERS
} from '../constants/ActionTypes';

const initialState = {
    categoryFilters: [],
    strengthFilters: [],
    bookmarkFilter: false,
    location: ""
}

function filterReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FILTER_BY_BOOKMARK:
            return ({ ...state,
                bookmarkFilter: state.bookmarkFilter ? false : true
            })
        case FILTER_BY_CATEGORY:
            return ({
                ...state,
                categoryFilters: state.categoryFilters.some((id) => id === action.id) ?
                    state.categoryFilters.filter((id) => id !== action.id) : [...state.categoryFilters, action.id]
            })
        case FILTER_BY_STRENGTH:
            return ({
                ...state,
                strengthFilters: state.strengthFilters.some((id) => id === action.id) ?
                    state.strengthFilters.filter((id) => id !== action.id) : [...state.strengthFilters, action.id]
            })
        case FILTER_BY_LOCATION:
            return ({
                ...state,
                location: action.location
            })
        case RESET_FILTERS:
            return initialState
        default:
            return state
    }
}

export default filterReducer