import { user } from "../index.js";
import { addToBasket } from "../http/basketProductAPI.js";
import {
  fetchBasketProduct,
  deleteFromBasket,
} from "../http/basketProductAPI.js";

const handleAddToBasket = (id) => {
  addToBasket({ basketId: user.basketId, productId: id });
  fetchBasketProduct(user.basketId).then((data) => {
    user.setBasketCount(data.count);
    user.setBasketItems(data.rows);
  });
};

const handleRemoveFromBasket = (productId) => {
  deleteFromBasket(productId).then(() => {
    fetchBasketProduct(user.basketId).then((data) => {
      user.setBasketCount(data.count);
      user.setBasketItems(data.rows);
    });
  });
};

const isInBasket = (id) => {
  const foundProduct = user.basketItems.find((item) => item.productId === id);
  if (foundProduct) {
    return true;
  }
  return false;
};

export { handleAddToBasket, handleRemoveFromBasket, isInBasket };
