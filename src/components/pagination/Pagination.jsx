import React, { useEffect, useCallback } from "react";

import "./Pagination.css";

export default function Pagination({pageOnClickHandler, page, totalPages}) {

  const getPagination = (page, totalPages, count) => {
    let arr = [];

    arr.push(<li key={0}>{"<"}</li>);

    if (totalPages <= count) {
      for (let i = 1; i <= totalPages; i++) {
        arr.push(<li className={i == +page ? "pagination__active" : ""} key={i}>{i}</li>);
      }
      console.log("1");
    } else if (+page <= ((count + 1) / 2)) {
      for (let i = 1; i <= count; i++) {
        arr.push(<li className={i == +page ? "pagination__active" : ""} key={i}>{i}</li>);
      }
      console.log("2");
    } else if (+page <= totalPages - ((count - 1) / 2)) {
      for (let i = page - ((count - 1) / 2); i <= +page + ((count - 1) / 2); i++) {
        arr.push(<li className={i == +page ? "pagination__active" : ""} key={i}>{i}</li>);
      }
      console.log("3");
    } else {
      for (let i = totalPages - count + 1; i <= totalPages; i++) {
        arr.push(<li className={i == +page ? "pagination__active" : ""} key={i}>{i}</li>);
      }
      console.log("4");
    }

    arr.push(<li key={totalPages + 1}>{">"}</li>);

    return arr;
  };

  const pageOnClick = useCallback(event => {
    if (event.target.tagName == "LI")
      pageOnClickHandler(event.target.innerText);
  }, [pageOnClickHandler]);

  return (
    <div className="pagination-wrapper">
      <ul onClick={pageOnClick} className="pagination">
        {getPagination(page, totalPages, 5)}
      </ul>
    </div>
  );
}
