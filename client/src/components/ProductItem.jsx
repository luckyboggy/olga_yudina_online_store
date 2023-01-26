import React from "react";
import { CustomButton } from "../components/UI/button/CustomButton.jsx";

const ProductItem = () => {
  return (
    <div className="shop__productItem">
      <div className="productImg"></div>
      <div className="productContent">
        <div className="productName">Охуенный продукт</div>
        <div className="productPrice">10000</div>
        <div className="productBtn">
          <CustomButton>в корзину</CustomButton>
        </div>
      </div>
    </div>
  );
};

export { ProductItem };
