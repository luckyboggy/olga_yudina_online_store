import { user } from "../../../index.js";
import {
  addToFavorites,
  fetchFavoritesProduct,
  deleteFromFavorites,
} from "../../../http/favoritesProductAPI.js";

const handleAddToFavorites = (id) => {
  addToFavorites({ favoriteId: user.favoriteId, productId: id });
  fetchFavoritesProduct(user.favoriteId).then((data) => {
    user.setFavoritesItems(data.rows);
  });
};

const handleRemoveFromFavorites = (productId) => {
  deleteFromFavorites(productId).then(() => {
    fetchFavoritesProduct(user.favoriteId).then((data) => {
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
