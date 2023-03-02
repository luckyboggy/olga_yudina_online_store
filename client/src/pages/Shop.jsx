import React, { useState, useContext, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
import { fetchTypes, fetchProducts } from "../http/productAPI.js";

const Shop = observer(() => {
  const [sort, setSort] = useState(false);
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchProducts().then((data) => product.setItems(data.rows));
  });

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
});

export { Shop };
