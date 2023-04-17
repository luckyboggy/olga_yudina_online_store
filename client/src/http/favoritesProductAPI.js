import { $authHost, $host } from "./index.js";

const addToFavorites = async (favoritesProduct) => {
  const { data } = await $authHost.post("api/favoritesProduct", favoritesProduct);
  return data;
};

const fetchFavoritesProduct = async (favoritesId) => {
  const { data } = await $authHost.get("api/favoritesProduct", {
    params: {
      favoritesId,
    },
  });
  return data;
};
const deleteFromFavorites = async (productId) => {
  const { data } = await $authHost.delete(`api/favoritesProduct/${productId}`);
  //window.localStorage.setItem("jsonWebToken", data.jsonWebToken);
  //return data.jsonWebToken;
}

export { addToFavorites, fetchFavoritesProduct, deleteFromFavorites };
