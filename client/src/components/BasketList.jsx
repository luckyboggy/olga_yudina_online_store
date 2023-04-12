import React, { useContext } from "react";
import { BasketItem } from "./BasketItem.jsx";
import { Context } from "../index.js";

const BasketList = () => {
  const { user } = useContext(Context);

  return (
    <div className="basket__productList">
      {user.basketItems.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export { BasketList };
