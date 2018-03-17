import { combineReducers } from 'redux';
import inputReducer from '../components/ContIn/reducer';
import paginationReducer from '../components/ContOut/reducer';

const reducer = combineReducers({
    input: inputReducer,
    pagination: paginationReducer,
});

export default function rootReducer(state, action) {
    return reducer(state, action);
}
