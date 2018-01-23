import {
    FILTER_BY_BOOKMARK,
    FILTER_BY_STRENGTH,
    FILTER_BY_CATEGORY
} from '../constants/ActionTypes';

export function filterByCategory(id) {
    return {
        type: FILTER_BY_CATEGORY,
        id
    }
}

export function filterByStrength(id) {
    return {
        type: FILTER_BY_STRENGTH,
        id
    }
}

export function filterByBookmark() {
    return {
        type: FILTER_BY_BOOKMARK,
    }
}