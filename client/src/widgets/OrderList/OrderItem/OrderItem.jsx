import React, { useEffect, useState } from "react";
import { fetchOrderProducts } from "http/orderProductAPI";
import { OrderProduct } from "../OrderProduct/OrderProduct";
import { ReactComponent as Arrow } from "shared/assets/img/svg/arrow.svg";
import cls from "./OrderItem.module.scss";

const OrderItem = ({ order }) => {
  const [orderProducts, setOrderProducts] = useState([]);
  const [showOrderProducts, setShowOrderProducts] = useState(false);

  const orderStatus = {
    issued: "оформлен",
    inProcessy: "в обработке",
    delivery: "доставка",
    delivered: "доставлен",
    received: "получен",
    canceled: "отменен",
  };

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

  return (
    <div className={cls.orderItem}>
      <div className={cls.orderInfo}>
        <div className={cls.title}>
          <div className={cls.number}>Заказ № {order.number}</div>

          <div className={cls.status}>{orderStatus[order.status]}</div>
        </div>
        <div className={cls.orderDate}>
          <div>Дата оформления</div>
          <div>{formattedDate(order.createdAt)}</div>
        </div>
        <div className={cls.priceQuantity}>
          <div className={cls.quantity}>Товаров: {orderProducts.length}</div>
          <div className={cls.totalPrice}>xxx р</div>
        </div>
      </div>
      <hr />
      {showOrderProducts && (
        <div className={cls.orderProducts}>
          {orderProducts.map((product) => (
            <div key={product.productId}>
              <OrderProduct
                productId={product.productId}
                selectedSize={product.selectedSize}
              />
              <hr />
            </div>
          ))}
        </div>
      )}
      <div
        className={cls.showBtn}
        onClick={() => setShowOrderProducts(!showOrderProducts)}
      >
        <div>{showOrderProducts ? "Скрыть" : "Показать товары"}</div>
        <Arrow
          className={`${cls.dropArrow} ${showOrderProducts ? cls.active : ""}`}
        />
      </div>
    </div>
  );
};

export { OrderItem };
