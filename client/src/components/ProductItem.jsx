import React from "react";


const ProductItem = () => {
  return (
    <div className="shop__productItem">
      <div className="productImg"></div>
      <div className="productContent">
        <div className="productName">Охуенный продукт</div>
        <div className="productPrice">10000 р.</div>
        <button className="productBtn">в корзину</button>
      </div>
    </div>
  );
};

export { ProductItem };
