import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { CustomCarousel } from "../components/UI/carousel2/CustomCaroousel.jsx";
import { handleAddToBasket, isInBasket } from "../functions/basketFunctions.js";
import { ReactComponent as Basket } from "../img/svg/basket.svg";
import { observer } from "mobx-react-lite";
import { BASKET_ROUTE } from "../utils/consts";

const Product = observer(() => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  
  const inBasket = isInBasket(item.id);


  useEffect(() => {
    fetchOneProduct(id).then((data) => setItem(data));
  }, []);

  return (
    <div className="product">
      {item.img && (
        <CustomCarousel url={process.env.REACT_APP_API_URL} images={item.img} />
      )}

      <div className="product__content">
        <div className="product__title">{item.name}</div>
        <div className="product__price">{item.price}</div>
        <div className="product__description">{item.description}</div>
        {inBasket ? (
          <button
            className="product__button_order"
            onClick={() => navigate("../" + BASKET_ROUTE)}
          >
            оформить
          </button>
        ) : (
          <button
            className="product__button"
            onClick={() => handleAddToBasket(item.id)}
          >
            <Basket className="basket_icon" />
          </button>
        )}
      </div>
    </div>
  );
});

export { Product };
