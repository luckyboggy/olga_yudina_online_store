import { $authHost, $host } from "./index.js";

const addToBasket = async (basketProduct) => {
  const { data } = await $authHost.post("api/basketProduct", basketProduct);
  return data;
};

const fetchBasketProduct = async (basketId) => {
  const { data } = await $authHost.get("api/basketProduct", {
    params: {
      basketId,
    },
  });
  return data;
};
const deleteFromBasket = async (productId) => {
  const { data } = await $authHost.delete(`api/basketProduct/${productId}`);
  window.localStorage.setItem("jsonWebToken", data.jsonWebToken);
  return data.jsonWebToken;

}

export { addToBasket, fetchBasketProduct, deleteFromBasket };
