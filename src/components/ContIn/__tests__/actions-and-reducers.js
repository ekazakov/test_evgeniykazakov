import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addRecord, changeSelectionValue, changeTextValue } from '../actions';
import types from '../actionTypes';
import reducer from '../reducer';

const mockStore = configureMockStore([thunk]);

describe('Input Container reducers', () => {
    it('should update text value', () => {
        const nextState = reducer(undefined, changeTextValue('Hello'));
        expect(nextState).toEqual({
            textValue: 'Hello',
            selectionValue: []
        });
    });

    it('should update selections', () => {
        const nextState = reducer(undefined, changeSelectionValue(['one', 'two']));
        expect(nextState).toEqual({
            textValue: '',
            selectionValue: ['one', 'two']
        });
    });

    it('should save data to LS', () => {
        const store = mockStore({ textValue: '', selectionValue: [] });
        store.dispatch(addRecord('Hello', ['one']));

        expect(store.getActions()).toEqual([{
            type: types.ADD_RECORD,
        }]);

        expect(localStorage.__STORE__).toEqual({
            '@app/stored_selection': '[["one"]]',
            '@app/stored_value': '["Hello"]'
        });
    });
});
