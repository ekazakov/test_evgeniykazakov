import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import PresIn from '../PresIn';

describe('PresIn', () => {
    it('renders correctly', () => {
        const props = {
            textValue: 'Hello',
            selectionValue: ['one'],
            onTextChange: noop,
            onSelectionChange: noop,
            onAddRecord: noop,
        };
        const wr = shallow(<PresIn {...props} />);
        expect(wr).toMatchSnapshot();
    });
});