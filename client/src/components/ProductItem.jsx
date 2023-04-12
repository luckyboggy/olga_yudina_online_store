import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts.js";
import { handleAddToBasket } from "../functions/basketFunctions.js";

const ProductItem = ({ item }) => {
  const { id, name, price, img } = item;
  const navigate = useNavigate();

  return (
    <div
      className="shop__productItem"
      onClick={(event) => {
        if (event.target.className !== "productBtn") {
          navigate("../" + PRODUCT_ROUTE + "/" + id);
        }
      }}
    >
      <div className="productImg">
        <img src={process.env.REACT_APP_API_URL + img[0]} alt={name} />
      </div>
      <div className="productContent">
        <div className="productName">{name}</div>
        <div className="productPrice">{price} р.</div>
        <button className="productBtn" onClick={() => handleAddToBasket(id)}>
          в корзину
        </button>
      </div>
    </div>
  );
};

export { ProductItem };
