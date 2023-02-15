import React, { useState } from "react";
import ProductList from "../components/ProductList";


const Shop = () => {
  const [sort, setSort] = useState(false);

  return (
    <div>
      <div className="shop__toolbar">
        <div
          className="shop__toolbar__sort"
          onClick={() => {
            setSort(!sort);
          }}
        >
          сортировка
        </div>
      </div>
      <div className="shop__products">
        <ProductList />
      </div>
    </div>
  );
};

export { Shop };
