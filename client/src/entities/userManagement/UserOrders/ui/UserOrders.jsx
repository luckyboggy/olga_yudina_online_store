import React, { useEffect, useContext } from "react";
import { Context } from "index.js";
import { getOrdersByUser } from "http/orderAPI";
import cls from "./UserOrders.module.scss";

const UserOrders = () => {
  const { user } = useContext(Context);

  useEffect(() => {
    getOrdersByUser(user.user.id).then((data) => {
      console.log(user.user.id);
      console.log(data);
      user.setOrderIds();
    });
  }, []);

  return <div className={cls.userOrders}></div>;
};

export { UserOrders };
