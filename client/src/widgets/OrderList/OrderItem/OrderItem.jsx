import React, { useEffect, useState } from "react";
import { fetchOrderProducts } from "http/orderProductAPI";
import cls from "./OrderItem.module.scss";
import { OrderProduct } from "../OrderProduct/OrderProduct";

const OrderItem = ({ order }) => {
  const [orderProducts, setOrderProducts] = useState([]);
  const [showOrderProducts, setShowOrderProducts] = useState(false);

  const formattedDate = (d) => {
    const date = new Date(d);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day.toString().padStart(2, 0)}.${month
      .toString()
      .padStart(2, 0)}.${year}`;
  };

  useEffect(() => {
    fetchOrderProducts(order.id).then((data) => {
      setOrderProducts(data.rows);
    });
  }, []);

  console.log(orderProducts);

  return (
    <div className={cls.orderItem}>
      <div className={cls.orderInfo}>
        <div className={cls.title}>
          Заказ от {formattedDate(order.createdAt)}
        </div>
        <div className={cls.number}># {order.number}</div>
        <div className={cls.status}>{order.status}</div>
        <div onClick={() => setShowOrderProducts(!showOrderProducts)}>
          Показать товары
        </div>
      </div>
      {showOrderProducts && (
        <div className={cls.orderProducts}>
          {orderProducts.map((product) => (
            <div key={product.productId}>
              <OrderProduct
                productId={product.productId}
                selectedSize={product.selectedSize}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { OrderItem };
