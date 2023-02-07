import React, { useState } from "react";
import { ProductFilter } from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import { ProductSort } from "../components/ProductSort";


const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  return (
    <div>
      <div className="shop__toolbar">
        <div
          className="shop__toolbar__sort"
          onClick={() => {
            setSort(!sort);
            setFilter(false);
          }}
        >
          сортировка
        </div>
        <div
          className="shop__toolbar__filter"
          onClick={() => {
            setFilter(!filter);
            setSort(false);
          }}
        >
          фильтр
        </div>
      </div>
      <div className="shop__products">
        {filter && <ProductFilter />}
        {sort && <ProductSort/>}
        {!sort && !filter && <ProductList />}
      </div>
    </div>
  );
};

export { Shop };
