import { $authHost, $host } from "./index.js";

const getBasket = async (userId) => {
  const { data } = await $authHost.get("api/basket", {
    params: { userId },
  });
  return data;
};

export { getBasket };
