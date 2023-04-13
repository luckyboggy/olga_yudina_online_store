import React from "react";
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE, PRODUCT_ROUTE } from "../utils/consts.js";
import { handleAddToBasket, isInBasket } from "../functions/basketFunctions.js";
import { ReactComponent as Basket } from "../img/svg/basket.svg";
import { observer } from "mobx-react-lite";

const ProductItem = observer(({ item }) => {
  const { id, name, price, img } = item;
  const navigate = useNavigate();
  const inBasket = isInBasket(id);

  return (
    <div
      className="shop__productItem"
      onClick={(event) => {
        event.stopPropagation();
        if (
          event.target.className !== "productBtn" &&
          event.target.className !== "productBtn_order"
        ) {
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
        {inBasket ? (
          <button
            className="productBtn_order"
            onClick={() => navigate("../" + BASKET_ROUTE)}
          >
            оформить
          </button>
        ) : (
          <button
            className="productBtn"
            onClick={(event) => {
              event.stopPropagation();
              handleAddToBasket(id);
            }}
          >
            <Basket className="basket_icon" />
          </button>
        )}
      </div>
    </div>
  );
});

export { ProductItem };
