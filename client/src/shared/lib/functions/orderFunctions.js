import { createOrder, fromBasketToOrder } from "http/orderAPI";
import { fetchBasketProduct } from "http/basketProductAPI";
import { user } from "index.js";

const handleFromBasketToOrder = async () => {
  await createOrder(user.user.id);
  if (user.isAuth) {
    await fromBasketToOrder(user.user.id);
    await fetchBasketProduct(user.basketId).then((data) => {
      user.setBasketCount(data.count);
      user.setBasketItems(data.rows);
    });
  }
};

export { handleFromBasketToOrder };
