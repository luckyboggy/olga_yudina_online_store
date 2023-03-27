import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { CustomCarousel } from "../components/UI/carousel2/CustomCaroousel.jsx";

const Product = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

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
        <button className="product__button">в корзину</button>
      </div>
    </div>
  );
};

export { Product };
