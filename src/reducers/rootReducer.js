import {
    combineReducers
} from 'redux';
import beerReducer from './beerReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    beers: beerReducer,
    filters: filterReducer
})

export default rootReducer