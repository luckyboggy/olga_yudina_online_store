import { user } from "../index.js";
import {
  addToFavorites,
  fetchFavoritesProduct,
  deleteFromFavorites,
} from "../http/favoritesProductAPI.js";

const handleAddToFavorites = (id) => {
  addToFavorites({ favoritesId: user.favoritesId, productId: id });
  fetchFavoritesProduct(user.favoritesId).then((data) => {
    user.setFavoritesItems(data.rows);
  });
};

const handleRemoveFromFavorites = (productId) => {
  deleteFromFavorites(productId).then(() => {
    fetchFavoritesProduct(user.favoritesId).then((data) => {
      user.setFavoritesItems(data.rows);
    });
  });
};

const isInFavorites = (id) => {
  const foundProduct = user.favoritesItems.find(
    (item) => item.productId === id
  );
  if (foundProduct) {
    return true;
  }
  return false;
};

export { handleAddToFavorites, handleRemoveFromFavorites, isInFavorites };
