import React, { useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

// eslint-disable-next-line react/prop-types
export default function Pagination({ totalCount, setCurPage, currentPage }) {
  const pageCount = useMemo(() => {
    const totalPageCount = (totalCount - (totalCount % 20)) / 20;
    const remainingList = totalCount % 20;

    return remainingList ? totalPageCount + 1 : totalPageCount;
  }, [totalCount]);

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(data) => setCurPage(data.selected + 1)}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
      initialPage={currentPage - 1}
    />
  );
}
