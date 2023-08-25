import React, { useContext } from "react";
import { BasketItem } from "../../BasketItem/BasketItem.jsx";
import { Context } from "index.js";
import cls from "./BasketList.module.scss";

const BasketList = () => {
  const { user } = useContext(Context);

  return (
    <div className={cls.basketList}>
      {user.isAuth
        ? user.basketItems.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))
        : user.localBasket.map((item) => (
            <BasketItem key={item.productId} item={item} />
          ))}
    </div>
  );
};

export { BasketList };
