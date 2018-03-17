import { defaultTo, isEmpty } from 'lodash';
import types from './actionTypes';
import { safelyReadFromLS, safelyWriteToLS } from '../../local-storage-utils';

export const changeTextValue = (value) => ({
    type: types.TEXT_VALUE_CHANGED,
    payload: { value },
});

export const changeSelectionValue = (value) => ({
    type: types.SELECTION_VALUE_CHANGED,
    payload: { value }
});

export const addRecord = (textValue, selectionValue) => {
    return (dispatch) => {
        if (isEmpty(textValue) && isEmpty(selectionValue)) {
            return;
        }

        const selections = defaultTo(safelyReadFromLS('stored_selection'), []);
        const texts = defaultTo(safelyReadFromLS('stored_value'), []);

        selections.push(selectionValue);
        safelyWriteToLS('stored_selection', selections);
        texts.push(textValue);
        safelyWriteToLS('stored_value', texts);

        dispatch({
            type: types.ADD_RECORD,
        });
    }
};