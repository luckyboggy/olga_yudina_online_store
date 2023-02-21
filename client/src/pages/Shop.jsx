import React, { useState, useContext } from "react";
import ProductList from "../components/ProductList";
import { Context } from "../index.js";

const Shop = () => {
  const [sort, setSort] = useState(false);
  const { product } = useContext(Context);

  return (
    <div>
      <div className="shop__toolbar">
        <div className="shop__toolbar__selected">
          {product.selectedType.name.toLowerCase()}
        </div>
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
