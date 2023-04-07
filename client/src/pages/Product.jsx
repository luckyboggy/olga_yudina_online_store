import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { CustomCarousel } from "../components/UI/carousel2/CustomCaroousel.jsx";
import { addToBasket } from "../http/basketProductAPI.js";
import { Context } from "../index.js";
import { fetchBasketProduct } from "../http/basketProductAPI.js";

const Product = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { user } = useContext(Context);

  const handleAddToBasket = () => {
    addToBasket({ basketId: user.basketId, productId: id });
    fetchBasketProduct(user.basketId).then((data) => {
      user.setBasketCount(data.count);
      user.setBasketItems(data.rows);
    });
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => setItem(data));
  }, [id]);

  return (
    <div className="product">
      {item.img && (
        <CustomCarousel url={process.env.REACT_APP_API_URL} images={item.img} />
      )}

      <div className="product__content">
        <div className="product__title">{item.name}</div>
        <div className="product__price">{item.price}</div>
        <div className="product__description">{item.description}</div>
        <button className="product__button" onClick={handleAddToBasket}>
          в корзину
        </button>
      </div>
    </div>
  );
};

export { Product };
