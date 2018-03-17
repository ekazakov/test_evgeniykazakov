import React from 'react';
import { times } from 'lodash';
import styled from 'react-emotion';

const PaginationButton = styled('button')`
    border: ${props => (props.isSelected ? '1px solid #333' : 'none')};
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-weight: bold;
    text-decoration: ${props => (props.isSelected ? 'none' : 'underline')};
    font-size: 14px;
    cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
`;

const PaginationContent = styled('div')`
    display: flex;
`;

export default function Pagination (props) {
    const {
        page,
        pageSize,
        size,
        onPageClick,
    } = props;

    const totalPages = Math.ceil(size / pageSize);

    return (
        <PaginationContent>
            {times(totalPages, (index) => (
                <PaginationButton
                    key={index}
                    isSelected={page === (index + 1)}
                    onClick={() => onPageClick(index + 1)}
                >
                    {index + 1}
                </PaginationButton>
            ))}
        </PaginationContent>
    );
}


