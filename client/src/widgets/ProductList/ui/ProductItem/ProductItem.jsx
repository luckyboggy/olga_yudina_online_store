import React from "react";
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE, PRODUCT_ROUTE } from "../../../../app/utils/consts.js";
import { handleAddToBasket, isInBasket } from "shared/lib/functions/basketFunctions.js";
import {
  handleAddToFavorites,
  handleRemoveFromFavorites,
  isInFavorites,
} from "shared/lib/functions/favoritesFunctions.js";
import { ReactComponent as Basket } from "shared/assets/img/svg/basket.svg";
import { ReactComponent as Like } from "shared/assets/img/svg/like.svg";
import { observer } from "mobx-react-lite";

const ProductItem = observer(({ item }) => {
  const { id, name, price, img } = item;
  const navigate = useNavigate();
  const inBasket = isInBasket(id);
  const favorite = isInFavorites(id);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    if (favorite) {
      handleRemoveFromFavorites(id);
    } else {
      handleAddToFavorites(id);
    }
  };

  return (
    <div
      className="shop__productItem"
      onClick={(event) => {
        event.stopPropagation();
        if (
          event.target.className !== "productBtn" &&
          event.target.className !== "productBtn_order" &&
          event.target.className !== "prodictLike"
        ) {
          navigate("../" + PRODUCT_ROUTE + "/" + id);
        }
      }}
    >
      <div className="productImg__wrapper">
        <div className="productImg">
          <img src={process.env.REACT_APP_API_URL + img[0]} alt={name} />
        </div>
        <div
          className="productLike__wrapper"
          onClick={(event) => {
            toggleFavorite(event);
          }}
        >
          <Like className={`prodictLike ${favorite ? "liked" : ""}`} />
        </div>
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
