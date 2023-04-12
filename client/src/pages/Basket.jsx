import React, { useEffect, useContext } from "react";
import { Context } from "../index.js";
import { BasketList } from "../components/BasketList.jsx";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className="basket">
      {user.basketCount === 0 ? (
        <h3 style={{ textAlign: "center" }}>Ваша корзина пуста</h3>
      ) : (
        <div className="basket__products">
          <BasketList />
        </div>
      )}
    </div>
  );
});

export { Basket };
