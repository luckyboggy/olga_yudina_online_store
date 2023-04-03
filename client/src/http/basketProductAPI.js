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
  console.log(data)
  return data;
};

export { addToBasket, fetchBasketProduct };
