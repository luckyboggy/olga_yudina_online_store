import React, { useState, useEffect } from "react";
import { ReactComponent as Remove } from "shared/assets/img/svg/delete.svg";
import { fetchOneProduct } from "http/productAPI.js";
import { handleRemoveFromBasket } from "shared/lib/functions/basketFunctions";
import cls from "./BasketItem.module.scss";

const BasketItem = ({ item }) => {
  const { productId } = item;
  const [basketItem, setBasketItem] = useState({});

  useEffect(() => {
    fetchOneProduct(productId).then((data) => setBasketItem(data));
  }, []);

  return (
    <div className={cls.basketProduct}>
      <div className={cls.content}>
        <div className={cls.basketProductImg}>
          {basketItem.img && (
            <img
              src={process.env.REACT_APP_API_URL + basketItem.img[0]}
              key={basketItem.img[0]}
            />
          )}
        </div>

        <div className={cls.info}>
          <div className={cls.name}>{basketItem.name}</div>
          <div className={cls.price}>{basketItem.price} р</div>
        </div>
      </div>
      <div className={cls.control}>
        <Remove
          className={cls.removeBtn}
          onClick={() => handleRemoveFromBasket(productId)}
        />
      </div>
    </div>
  );
};

export { BasketItem };
