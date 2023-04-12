import {user} from '../index.js'
import { addToBasket } from "../http/basketProductAPI.js";
import { fetchBasketProduct, deleteFromBasket } from "../http/basketProductAPI.js";

const handleAddToBasket = (id) => {
  console.log(111);
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

export { handleAddToBasket, handleRemoveFromBasket };
