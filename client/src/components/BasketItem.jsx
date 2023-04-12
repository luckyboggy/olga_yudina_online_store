import React, { useState, useEffect } from "react";
import { ReactComponent as Remove } from "../img/svg/delete.svg";
import { fetchOneProduct } from "../http/productAPI.js";
import { handleRemoveFromBasket } from "../functions/basketFunctions";

const BasketItem = ({ item }) => {

  const { productId } = item;
  const [basketItem, setBasketItem] = useState({});

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
        <Remove className="removeBtn" onClick={() => handleRemoveFromBasket(productId)} />
      </div>
    </div>
  );
};

export { BasketItem };
