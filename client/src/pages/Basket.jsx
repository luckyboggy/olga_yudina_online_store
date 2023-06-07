import React, { useState, useContext } from "react";
import { Context } from "../index.js";
import { BasketList } from "../components/BasketList.jsx";
import { basketTotalPrice } from "../functions/basketFunctions.js";
import { observer } from "mobx-react-lite";
import { CustomButton } from "../components/UI/button/CustomButton.jsx";

const Basket = observer(() => {
  const { user } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  basketTotalPrice().then((total) => setTotalPrice(total));

  return (
    <div className="basket">
      {(user.isAuth && user.basketCount === 0) ||
      (!user.isAuth && user.localBasket.length === 0) ? (
        <h3 style={{ textAlign: "center" }}>Ваша корзина пуста</h3>
      ) : (
        <div className="basket__check">
          <div className="basket__products">
            <BasketList />
          </div>
          <div className="basket__confirm">
            <div className="basket__totalPrice">{totalPrice} р</div>
            <div className="basket__order">
              <CustomButton>Оформить заказ</CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export { Basket };
