import { BasketProduct } from "../models/models.js";

class BasketProductController {
  async addToBasket(req, res) {
    try {
      const { productId, basketId } = req.body;
      //const basketId = req.basket.id;

      // Проверка, есть ли данный товар в корзине
      const basketItem = await BasketProduct.findOne({
        where: { productId, basketId },
      });

      if (basketItem) {
      } else {
        const basketProduct = await BasketProduct.create({
          basketId,
          productId,
        });
        return res.json(basketProduct);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getBasketProduct(req, res) {
    try {
      const { basketId } = req.query;

      const basketProduct = await BasketProduct.findAndCountAll({
        where: { basketId },
      });
      return res.json(basketProduct);
    } catch (error) { }
  }

  async delete(req, res) {
    const { productId } = req.params;
    console.log(productId)
    /* const basketProduct = await BasketProduct.destroy({ where: { productId } });
    return res.json(basketProduct) */
  }
}

const basketProductController = new BasketProductController();

export { basketProductController };
