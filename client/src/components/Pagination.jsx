import React, { useContext } from "react";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";

const Pagination = observer(() => {
  const { product } = useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <div
          className="pageItem"
          key={page}
          onClick={() => product.setPage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
});

export { Pagination };
