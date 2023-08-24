import React, { useContext } from "react";
import { BasketItem } from "../BasketItem/BasketItem.jsx";
import { Context } from "index.js";

const BasketList = () => {
  const { user } = useContext(Context);

  return (
    <div className="basket__productList">
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
