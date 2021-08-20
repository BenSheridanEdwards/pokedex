import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Pagination = (props) => {
  const { pageNumber, setPageNumber, totalPages } = props;

  return (
    <div className="pagination">
      <button
        className={classNames('btn pagination__button', {
          selected: pageNumber === 1,
        })}
        onClick={() => setPageNumber(1)}
        type="button"
        disabled={totalPages === 0}
      >
        First
      </button>
      <button
        className="btn pagination__button"
        onClick={() => setPageNumber(pageNumber - 1)}
        type="button"
        disabled={pageNumber === 1 || totalPages === 0}
      >
        Prev
      </button>
      <button
        className="btn pagination__button"
        onClick={() => setPageNumber(pageNumber + 1)}
        type="button"
        disabled={pageNumber === totalPages || totalPages === 0}
      >
        Next
      </button>
      <button
        className={classNames('btn pagination__button', {
          selected: pageNumber === totalPages,
        })}
        onClick={() => setPageNumber(totalPages)}
        type="button"
        disabled={totalPages === 0}
      >
        Last
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
  totalPages: PropTypes.number,
};

export default Pagination;
