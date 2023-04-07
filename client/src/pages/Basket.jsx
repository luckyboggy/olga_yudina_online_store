import React, { useEffect, useContext } from "react";
import { Context } from "../index.js";

const Basket = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Ваша корзина пуста</h3>
      {}
    </div>
  );
};

export { Basket };
