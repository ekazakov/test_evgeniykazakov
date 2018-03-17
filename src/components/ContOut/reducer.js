import types from './actionTypes';
import { createReducer } from '../../utils';

const initialState = { page: 1 };

export default createReducer({
    [types.PAGE_CHANGED]: (state, payload) => ({
        page: payload.page,
    }),
}, initialState);