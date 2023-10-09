import React, { useEffect, useState } from "react";
import "./pageNumber.style.scss";
const PageNumber = ({ pages, selectPageNumber, currentPage }) => {
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    setPageArr(arr);
  }, [pages]);

  //   console.log(pageArr);

  return (
    <div className="page-number-container">
      {pageArr.map((x) => (
        <button
          key={x}
          className={`${x == currentPage && "active-page "} page-btn`}
          onClick={() => selectPageNumber(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default PageNumber;
