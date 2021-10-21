import React from "react";

export interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  onPaginate: any
}

const Pagination = ({ postsPerPage, totalPosts, onPaginate }: PaginationProps) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => onPaginate(number)} href='#' className="pagination__item">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Pagination