import React, { useState, useContext } from "react";
import { Context } from "../index.js";
import { BasketList } from "../components/BasketList.jsx";
import { basketTotalPrice } from "../functions/basketFunctions.js";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  const { user } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  basketTotalPrice().then((total) => setTotalPrice(total));

  return (
    <div className="basket">
      {user.basketCount === 0 ? (
        <h3 style={{ textAlign: "center" }}>Ваша корзина пуста</h3>
      ) : (
        <>
          <div className="basket__products">
            <BasketList />
          </div>
          <div className="basket__totalPrice">{totalPrice} р</div>
        </>
      )}
    </div>
  );
});

export { Basket };
