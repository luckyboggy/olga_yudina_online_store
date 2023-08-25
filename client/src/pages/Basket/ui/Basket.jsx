import React, { useState, useContext, useEffect } from "react";
import { Context } from "index.js";
import { Link } from "react-router-dom";
import { BasketList } from "widgets/BasketList/ui/BasketList/ui/BasketList.jsx";
import { basketTotalPrice } from "shared/lib/functions/basketFunctions.js";
import { observer } from "mobx-react-lite";
import { CustomButton } from "shared/ui/button/CustomButton.jsx";

const Basket = observer(() => {
  const { user } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    basketTotalPrice().then((total) => setTotalPrice(total));
  }, [user.localBasket]);

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
              <Link to="/ordering">
                <CustomButton>Оформить заказ</CustomButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export { Basket };
