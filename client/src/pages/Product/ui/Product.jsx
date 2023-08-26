import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneProduct } from "http/productAPI";
import { CustomCarousel } from "shared/ui/carousel2/CustomCaroousel.jsx";
import {
  handleAddToBasket,
  isInBasket,
} from "shared/lib/functions/basketFunctions.js";
import { ReactComponent as Basket } from "shared/assets/img/svg/basket.svg";
import { observer } from "mobx-react-lite";
import { BASKET_ROUTE } from "app/utils/consts";
import cls from "./Product.module.scss";

const Product = observer(() => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const inBasket = isInBasket(item.id);

  useEffect(() => {
    fetchOneProduct(id).then((data) => setItem(data));
  }, []);

  return (
    <div className={cls.product}>
      {item.img && (
        <CustomCarousel url={process.env.REACT_APP_API_URL} images={item.img} />
      )}

      <div className={cls.content}>
        <div className={cls.title}>{item.name}</div>
        <div className={cls.price}>{item.price}</div>
        <div className={cls.description}>{item.description}</div>
        {inBasket ? (
          <button
            className={cls.buttonOrder}
            onClick={() => navigate("../" + BASKET_ROUTE)}
          >
            оформить
          </button>
        ) : (
          <button
            className={cls.button}
            onClick={() => handleAddToBasket(item.id)}
          >
            <Basket className={cls.icon} />
          </button>
        )}
      </div>
    </div>
  );
});

export { Product };
