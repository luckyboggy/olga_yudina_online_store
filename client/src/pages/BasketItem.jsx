import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Remove } from "../img/svg/delete.svg";
import { Context } from "../index.js";
import { fetchOneProduct } from "../http/productAPI.js";
import { deleteFromBasket } from "../http/basketProductAPI.js";
import { fetchBasketProduct } from "../http/basketProductAPI.js";

const BasketItem = ({ item }) => {
  const { user } = useContext(Context);
  const { productId } = item;
  const [basketItem, setBasketItem] = useState({});

  const removeFromBasket = () => {
    deleteFromBasket(productId).then(() => {
      fetchBasketProduct(user.basketId).then((data) => {
        user.setBasketCount(data.count);
        user.setBasketItems(data.rows);
      });
    });
  };

  useEffect(() => {
    fetchOneProduct(productId).then((data) => setBasketItem(data));
  }, []);

  return (
    <div className="basketProduct">
      <div className="basketProduct__content">
        <div className="basketProduct__img">
          {basketItem.img && (
            <img
              src={process.env.REACT_APP_API_URL + basketItem.img[0]}
              key={basketItem.img[0]}
            />
          )}
        </div>

        <div className="basketProduct__info">
          <div className="basketProduct__name">{basketItem.name}</div>
          <div className="basketProduct__price">{basketItem.price} р</div>
        </div>
      </div>
      <div className="basketProduct__control">
        <Remove className="removeBtn" onClick={() => removeFromBasket()} />
      </div>
    </div>
  );
};

export { BasketItem };
