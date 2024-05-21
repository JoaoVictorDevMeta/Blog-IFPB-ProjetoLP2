import React from 'react';

export const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <nav className='py-5'>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link fs-5" onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
        </li>
        {[...Array(totalPages).keys()].map(page =>
          <li key={page + 1} className={`page-item ${page + 1 === currentPage ? 'active' : ''}`}>
            <a className="page-link fs-5" onClick={() => handlePageChange(page + 1)}>{page + 1}</a>
          </li>
        )}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a className="page-link fs-5" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
        </li>
      </ul>
    </nav>
  );
};

