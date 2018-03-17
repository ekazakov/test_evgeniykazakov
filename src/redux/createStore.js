import {
    applyMiddleware,
    createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './rootReducer';
import thunk from 'redux-thunk';

export default function _createStore() {
    return createStore(reducer, {}, composeWithDevTools(
        applyMiddleware(thunk)
    ));
}