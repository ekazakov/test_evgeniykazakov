import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PresIn from '../PresIn/PresIn';
import * as actions from './actions';

function ContIn(props) {
    return (
        <Fragment>
            <h1>Input Container</h1>
            <div>
                <PresIn
                    textValue={props.textValue}
                    selectionValue={props.selectionValue}
                    onTextChange={props.changeTextValue}
                    onSelectionChange={props.changeSelectionValue}
                    onAddRecord={props.addRecord}
                />
            </div>
        </Fragment>
    );
}

ContIn.propTypes = {
    changeTextValue: PropTypes.func.isRequired,
    changeSelectionValue: PropTypes.func.isRequired,
    addRecord: PropTypes.func.isRequired,
    textValue: PropTypes.string.isRequired,
    selectionValue: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function stateToProps(state) {
    return state.input;
}

export default connect(stateToProps, actions)(ContIn);
