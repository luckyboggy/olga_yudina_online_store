import React from "react";

const Product = () => {
  const item = { id: 1, name: "Серьги_1", price: 5000 };

  return (
    <div className="product">
      <div className="product__img"></div>
      <div className="product__content">
        <div className="product__title">{item.name}</div>
        <div className="product__price">{item.price}</div>
        <div className="product__description">тут какое-то описание</div>
        <button className="product__button">в корзину</button>
      </div>
    </div>
  );
};

export { Product };
