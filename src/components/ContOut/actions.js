import types from './actionTypes';

export const changePage = (page) => ({
    type: types.PAGE_CHANGED,
    payload: { page },
});
