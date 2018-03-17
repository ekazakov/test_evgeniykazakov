import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import PresOut from '../PresOut/PresOut';
import { safelyReadFromLS } from '../../local-storage-utils';
import { defaultTo, zipWith, size, slice, range } from 'lodash';

const { min, ceil } = Math;
const PAGE_SIZE = 10;

function ContOut(props) {
    return (
        <Fragment>
            <h1>Output Container</h1>
            <PresOut
                page={props.page}
                pageSize={PAGE_SIZE}
                size={props.size}
                items={props.items}
                onPageClick={props.changePage}
            />
        </Fragment>
    );
}

ContOut.propTypes = {
    page: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        textValue: PropTypes.string.isRequired,
        selectionValue: PropTypes.arrayOf(PropTypes.string),
    })),
    changePage: PropTypes.func.isRequired,
};

function stateToProps(state) {
    const selections = defaultTo(safelyReadFromLS('stored_selection'), []);
    const texts = defaultTo(safelyReadFromLS('stored_value'), []);
    const recordsLength = size(texts);
    const page = min(state.pagination.page, ceil(recordsLength / PAGE_SIZE));
    const join = (id, textValue, selectionValue) => ({ id, textValue, selectionValue, });
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE;
    const allItems = zipWith(range(recordsLength), texts, selections, join);
    const items = slice(allItems, from, to);

    return {
        page,
        items,
        size: recordsLength,
    };
}

export default connect(stateToProps, actions)(ContOut);
