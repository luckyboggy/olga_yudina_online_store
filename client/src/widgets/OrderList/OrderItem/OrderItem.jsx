import React from "react";
import cls from "./OrderItem.module.scss";

const OrderItem = ({ order }) => {
  const formattedDate = (d) => {
    const date = new Date(d);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day.toString().padStart(2, 0)}.${month
      .toString()
      .padStart(2, 0)}.${year}`;
  };

  return (
    <div className={cls.orderItem}>
      <div className={cls.title}>Заказ от {formattedDate(order.createdAt)}</div>
      <div className={cls.number}>{order.number}</div>
      <div className={cls.status}>{order.status}</div>

    </div>
  );
};

export { OrderItem };
