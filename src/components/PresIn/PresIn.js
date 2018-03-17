import React from 'react';
import PropTypes from 'prop-types';
import { map, filter } from 'lodash';
import styled from 'react-emotion';

const Block = styled('div')`
  margin-top: 15px;
  margin-bottom: 25px;
`;

const Textarea = styled('textarea')`
  font-size: 16px;
  line-height: 1.4;
`;

const Select = styled('select')`
  font-size: 16px;
  line-height: 1.4;
  width: 100px;
  height: 150px;
`;

function PresIn(props) {
    const {
        textValue,
        selectionValue,
    } = props;

    const onTextChange = ({ target: { value } }) => props.onTextChange(value);
    const onSelectionChange = ({ target: { options } }) => {
       const selection = map(filter(options, 'selected'), 'value');
       props.onSelectionChange(selection);
    };
    const onAddRecord = () => props.onAddRecord(textValue, selectionValue);

    return (
        <div>
            <Block>
                <div>
                    <label>Text</label>
                </div>
                <Textarea
                    cols="60"
                    rows="5"
                    value={textValue}
                    onChange={onTextChange}
                />
            </Block>
            <Block>
                <div>
                    <label>Selection</label>
                </div>
                <Select
                    multiple
                    value={selectionValue}
                    onChange={onSelectionChange}
                >
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                    <option value="five">five</option>
                </Select>
            </Block>
            <div>
                <button
                    type="button"
                    onClick={onAddRecord}
                >
                    Add Record
                </button>
            </div>
        </div>
    );
}

PresIn.defaultProps = {
    selectionValue: [],
};

PresIn.propTypes = {
    textValue: PropTypes.string.isRequired,
    selectionValue: PropTypes.arrayOf(PropTypes.string).isRequired,
    onTextChange: PropTypes.func.isRequired,
    onSelectionChange: PropTypes.func.isRequired,
    onAddRecord: PropTypes.func.isRequired,
};

export default PresIn;
