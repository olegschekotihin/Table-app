import React from "react";
import styled from 'styled-components';

export interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  onPaginate: any
}

const PaginateList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const PaginateLink = styled.a`
  display: block;
  color: #000;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
  margin-right: 5px;
  text-decoration: none;
`;

const Pagination = ({ postsPerPage, totalPosts, onPaginate }: PaginationProps) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginateList>
        {pageNumbers.map(number => (
          <li key={number}>
            <PaginateLink onClick={() => onPaginate(number)} href='#'>
              {number}
            </PaginateLink>
          </li>
        ))}
      </PaginateList>
    </nav>
  );
};


export default Pagination