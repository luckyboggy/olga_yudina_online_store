import { $authHost, $host } from "../shared/api/index.js";

const createOrder = async (userId) => {
  const { data } = await $authHost.post("api/order", { userId });
  return data;
};

const setOrderNumber = async (userId) => {
  const { data } = await $authHost.post("api/order/setNumber", { userId });
  return data;
}

const getOrdersByUser = async (userId) => {
  const { data } = await $authHost.get("api/order", {
    params: { userId },
  });
  return data;
};

const fromBasketToOrder = async (userId) => {
  const { data } = await $authHost.post("api/order/basketToOrder", { userId });
  return data;
};

export { createOrder, setOrderNumber, getOrdersByUser, fromBasketToOrder };
