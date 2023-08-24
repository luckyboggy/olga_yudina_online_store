import { user } from "../../../index.js";
import { addToBasket } from "../../../http/basketProductAPI.js";
import {
  fetchBasketProduct,
  deleteFromBasket,
} from "../../../http/basketProductAPI.js";
import { fetchOneProduct } from "../../../http/productAPI.js";

const handleAddToBasket = (id) => {
  if (user.isAuth) {
    addToBasket({ basketId: user.basketId, productId: id });
    fetchBasketProduct(user.basketId).then((data) => {
      user.setBasketCount(data.count);
      user.setBasketItems(data.rows);
    });
  } else {
    user.addToLocalBasket(id);
    window.localStorage.setItem(
      "localBasket",
      JSON.stringify(user.localBasket)
    );
  }
};

const handleRemoveFromBasket = (productId) => {
  if (user.isAuth) {
    deleteFromBasket(productId).then(() => {
      fetchBasketProduct(user.basketId).then((data) => {
        user.setBasketCount(data.count);
        user.setBasketItems(data.rows);
      });
    });
  } else {
    user.removeFromLocalBasket(productId);
    console.log('tut')
    window.localStorage.setItem(
      "localBasket",
      JSON.stringify(user.localBasket)
    );
  }
};

const isInBasket = (id) => {
  let foundProduct = null;

  if (user.isAuth) {
    foundProduct = user.basketItems.find((item) => item.productId === id);
  } else {
    foundProduct = user.localBasket.find((item) => item.productId === id);
  }

  if (foundProduct) {
    return true;
  }
  return false;
};

const basketTotalPrice = async () => {

  let total = 0;
  let productData = [];
  if (user.isAuth) {
    productData = await Promise.all(
      user.basketItems.map((item) => fetchOneProduct(item.productId))
    );
  } else {
    productData = await Promise.all(
      user.localBasket.map((item) => fetchOneProduct(item.productId))
    );
  }

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