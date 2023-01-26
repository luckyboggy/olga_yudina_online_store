import React from "react";
import ProductList from "../components/ProductList";

const Shop = () => {
  return (
    <div>
      <div className="shop__toolbar">
        <div className="shop__toolbar__sort"></div>
        <div className="shop__toolbar__filter"></div>
      </div>
      <div className="shop__products">
        <ProductList />
      </div>
    </div>
  );
};

export { Shop };
