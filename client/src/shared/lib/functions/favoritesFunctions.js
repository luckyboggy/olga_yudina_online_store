import { user } from "index.js";
import {
  addToFavorites,
  fetchFavoritesProduct,
  deleteFromFavorites,
} from "http/favoritesProductAPI.js";
import { fetchOneProduct } from "http/productAPI.js";

const handleAddToFavorites = (id) => {
  if (user.isAuth) {
    addToFavorites({ favoriteId: user.favoriteId, productId: id });
    fetchFavoritesProduct(user.favoriteId).then((data) => {
      user.setFavoritesCount(data.count);
      user.setFavoritesItems(data.rows);
    });
  } else {
    user.addToLocalFavorites(id);
    window.localStorage.setItem(
      "localFavorites",
      JSON.stringify(user.localFavorites)
    );
  }
};

const handleRemoveFromFavorites = (productId) => {
  if (user.isAuth) {
    deleteFromFavorites(productId).then(() => {
      fetchFavoritesProduct(user.favoriteId).then((data) => {
        user.setFavoritesCount(data.count);
        user.setFavoritesItems(data.rows);
      });
    });
  } else {
    user.removeFromLocalFavorites(productId);
    window.localStorage.setItem(
      "localFavorites",
      JSON.stringify(user.localFavorites)
    );
  }
};

const isInFavorites = (id) => {
  let foundProduct = null;

  if (user.isAuth) {
    foundProduct = user.favoritesItems.find((item) => item.productId === id);
  } else {
    foundProduct = user.localFavorites.find((item) => item.productId === id);
  }

  if (foundProduct) {
    return true;
  }
  return false;
};

const toggleFavorite = (event, id, favorite) => {
  event.stopPropagation();
  if (favorite) {
    handleRemoveFromFavorites(id);
  } else {
    handleAddToFavorites(id);
  }
  console.log(favorite);
};

export { handleAddToFavorites, handleRemoveFromFavorites, isInFavorites, toggleFavorite };
