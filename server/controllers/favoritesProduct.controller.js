import { FavoritesProduct } from "../models/models.js";

class FavoritesProductController {
  async addToFavorites(req, res) {
    try {
      const { productId, favoritesId } = req.body;

      // Проверка, есть ли данный товар в избранном
      const favoritesItem = await FavoritesProduct.findOne({
        where: { productId, favoritesId },
      });

      if (favoritesItem) {
      } else {
        const favoritesProduct = await FavoritesProduct.create({
          favoritesId,
          productId,
        });
        return res.json(favoritesProduct);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getFavoritesProduct(req, res) {
    try {
      const { favoritesId } = req.query;

      const favoritesProduct = await FavoritesProduct.findAndCountAll({
        where: { favoritesId },
      });
      return res.json(favoritesProduct);
    } catch (error) { }
  }

  async delete(req, res) {
    const { productId } = req.params;
    const favoritesProduct = await FavoritesProduct.destroy({ where: { productId } });
    return res.json(favoritesProduct)
  }
}

const favoritesProductController = new FavoritesProductController();

export { favoritesProductController };
