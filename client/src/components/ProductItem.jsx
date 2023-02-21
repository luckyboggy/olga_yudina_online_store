import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts.js";

const ProductItem = ({ item }) => {
  const { id, name, price } = item;
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div
      className="shop__productItem"
      onClick={() => navigate("../" + PRODUCT_ROUTE + "/" + id)}
    >
      <div className="productImg"></div>
      <div className="productContent">
        <div className="productName">{name}</div>
        <div className="productPrice">{price} р.</div>
        <button className="productBtn">в корзину</button>
      </div>
    </div>
  );
};

export { ProductItem };
