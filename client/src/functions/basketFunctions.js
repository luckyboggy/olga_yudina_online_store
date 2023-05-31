import { user } from "../index.js";
import { addToBasket } from "../http/basketProductAPI.js";
import {
  fetchBasketProduct,
  deleteFromBasket,
} from "../http/basketProductAPI.js";
import { fetchOneProduct } from "../http/productAPI.js";


const handleAddToBasket = (id) => {
  if (user.isAuth) {
    addToBasket({ basketId: user.basketId, productId: id });
    fetchBasketProduct(user.basketId).then((data) => {
      user.setBasketCount(data.count);
      user.setBasketItems(data.rows);
    });
  } else {
    user.addToLocalBasket(id);
  }

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

const basketTotalPrice = async () => {
  let total = 0;

  const productData = await Promise.all(
    user.basketItems.map((item) => fetchOneProduct(item.productId))
  );

  productData.forEach((data) => {
    total += Number(data.price);
  });

  return total;
};

export {
  handleAddToBasket,
  handleRemoveFromBasket,
  isInBasket,
  basketTotalPrice,
};
