import React, { useEffect, useContext } from "react";
import { fetchBasketProduct } from "../http/basketProductAPI.js";
import { Context } from "../index.js";
import { getBasket } from "../http/basketAPI.js";

const Basket = () => {
  const { user } = useContext(Context);

  console.log(user.basketId);

  useEffect(() => {
    getBasket(user.user.id).then((data) => {
      console.log(data.id);
      user.setBasketId(data.id);
      fetchBasketProduct(data.id).then((data) => {
        console.log(data);
      });
    });
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Ваша корзина пуста</h3>
    </div>
  );
};

export { Basket };
