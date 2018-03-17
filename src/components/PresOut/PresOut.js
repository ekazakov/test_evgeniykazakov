import React from 'react';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import styled from 'react-emotion';
import Pagination from '../Pagination/Pagination';

const Table = styled('table')`
    table-layout: fixed;
    text-align: left;
`;

const IdCell = styled('td')`
    width: 30px;
`;

const TextValueCell = styled('td')`
    width: 200px;
`;

const SelectionValueCell = styled('td')`
    width: 100px;
`;


function PresOut(props) {
    if (isEmpty(props.items)) {
        return (
            <h2>Local storage is empty</h2>
        );
    }

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Text Value</th>
                    <th>Selection Value</th>
                </tr>
                </thead>
                <tbody>
                {map(props.items, (item) => (
                    <tr key={item.id}>
                        <IdCell>{item.id}</IdCell>
                        <TextValueCell>{item.textValue}</TextValueCell>
                        <SelectionValueCell>{item.selectionValue.join(', ')}</SelectionValueCell>
                    </tr>
                ))}
                </tbody>
            </Table>
            {props.size > props.pageSize && <Pagination
                page={props.page}
                pageSize={props.pageSize}
                size={props.size}
                onPageClick={props.onPageClick}
            />}
        </div>
    );
}

PresOut.propTypes = {
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        textValue: PropTypes.string.isRequired,
        selectionValue: PropTypes.arrayOf(PropTypes.string),
    })),
};

export default PresOut;
