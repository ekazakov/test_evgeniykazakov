import types from './actionTypes';
import { createReducer } from '../../utils';

const initialState = { textValue: '', selectionValue: [] };

export default createReducer({
    [types.TEXT_VALUE_CHANGED]: (state, payload) => ({
        textValue: payload.value,
    }),
    [types.SELECTION_VALUE_CHANGED]: (state, payload) => ({
        selectionValue: payload.value
    }),
    [types.ADD_RECORD]: initialState,
}, initialState);