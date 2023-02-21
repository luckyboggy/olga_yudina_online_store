import React, { useContext } from "react";
import { ProductItem } from "./ProductItem";
import { Context } from "../index.js";

const ProductList = () => {
  const { product } = useContext(Context);

  return (
    <div className="shop__productList">
      {product.items.map((item) => (
        <ProductItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
