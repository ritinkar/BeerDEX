import {
    BOOKMARK
} from '../constants/ActionTypes';

export function bookmark(id) {
    return {
        type: BOOKMARK,
        id
    }
}