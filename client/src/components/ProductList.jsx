import React, { useContext } from "react";
import { ProductItem } from "./ProductItem";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";

const ProductList = observer(() => {
  const { product } = useContext(Context);

  return (
    <div className="shop__productList">
      {product.items.map((item) => (
        <ProductItem key={item.name} item={item} />
      ))}
    </div>
  );
});

export { ProductList };
