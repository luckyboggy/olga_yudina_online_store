import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "app/utils/consts.js";
import { fetchOneProduct } from "http/productAPI.js";
import cls from "./OrderProduct.module.scss";

const OrderProduct = ({ productId, selectedSize }) => {
  const [orderProduct, setOrderProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneProduct(productId).then((data) => setOrderProduct(data));
  }, []);

  return (
    <div className={cls.orderProduct}>
      <div className={cls.content}>
        <div
          className={cls.orderProductImg}
          onClick={() => {
            navigate("../" + PRODUCT_ROUTE + "/" + productId);
          }}
        >
          {orderProduct.img && (
            <img
              src={process.env.REACT_APP_API_URL + orderProduct.img[0]}
              key={orderProduct.img[0]}
            />
          )}
        </div>
        <div className={cls.info}>
          <div className={cls.title}>
            <div className={cls.name}>{orderProduct.name}</div>
          </div>
          <div className={cls.price}>
            {orderProduct.price && orderProduct.price.toLocaleString()} р
          </div>
          {selectedSize !== "unified" && (
            <div className={cls.size}>Размер: {selectedSize}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export { OrderProduct };
