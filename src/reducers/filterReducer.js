import {
    FILTER_BY_BOOKMARK,
    FILTER_BY_STRENGTH,
    FILTER_BY_CATEGORY
} from '../constants/ActionTypes';

function filterReducer(
    state = {
        categoryFilters: [],
        strengthFilters: [],
        bookmarkFilter: false
    },
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
        default:
            return state
    }
}

export default filterReducer