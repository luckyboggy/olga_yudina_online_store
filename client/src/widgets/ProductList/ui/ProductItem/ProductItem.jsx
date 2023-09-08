import React from "react";
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE, PRODUCT_ROUTE } from "app/utils/consts.js";
import {
  handleAddToBasket,
  isInBasket,
} from "shared/lib/functions/basketFunctions.js";
import {
  isInFavorites,
  toggleFavorite,
} from "shared/lib/functions/favoritesFunctions.js";
import { ReactComponent as Basket } from "shared/assets/img/svg/basket.svg";
import { ReactComponent as Like } from "shared/assets/img/svg/like.svg";
import { observer } from "mobx-react-lite";
import cls from "./ProductItem.module.scss";

const ProductItem = observer(({ item }) => {
  const { id, name, price, img } = item;
  const navigate = useNavigate();
  const inBasket = isInBasket(id);
  const favorite = isInFavorites(id);

  return (
    <div
      className={cls.productItem}
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
      <div className={cls.wrapper}>
        <div className={cls.productImg}>
          <img src={process.env.REACT_APP_API_URL + img[0]} alt={name} />
        </div>
        <div
          className={cls.like}
          onClick={(event) => {
            toggleFavorite(event, id, favorite);
          }}
        >
          <Like className={`${cls.prodictLike} ${favorite ? cls.liked : ""}`} />
        </div>
      </div>

      <div className={cls.productContent}>
        <div className={cls.productName}>{name}</div>
        <div className={cls.productPrice}>{price.toLocaleString()} р.</div>
        {inBasket ? (
          <button
            className={`${cls.productBtn} ${cls.ordered}`}
            onClick={() => navigate("../" + BASKET_ROUTE)}
          >
            оформить
          </button>
        ) : (
          <button
            className={cls.productBtn}
            onClick={(event) => {
              event.stopPropagation();
              handleAddToBasket(id);
            }}
          >
            <Basket className={cls.basketIcon} />
          </button>
        )}
      </div>
    </div>
  );
});

export { ProductItem };
