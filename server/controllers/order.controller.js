import {
  Order,
  Basket,
  BasketProduct,
  OrderProduct,
  ProductSize,
} from "../models/models.js";
import { sequelize } from "../db.js";
import { orderProductController } from "./orderProduct.controller.js";

class OrderController {
  async create(req, res) {
    console.log(req.body);
    const { userId } = req.body;
    const order = await Order.create({ userId: userId, status: "issured" });
    return res.json(order);
  }

  async fromBasketToOrder(req, res) {
    console.log(req.body);
    const { userId } = req.body;
    console.log(userId);

    // получаем все заказы пользователя в хронологическом порядке
    const orders = await Order.findAndCountAll({
      where: { userId },
      order: [["updatedAt", "DESC"]],
    });

    // выделяем последний созданный (только что созданный)
    const newOrder = orders.rows[0];

    // корзина пользователя
    const basket = await Basket.findOne({ where: { userId } });

    // содержимое корзины
    const basketProduct = await BasketProduct.findAndCountAll({
      where: { basketId: basket.id },
    });

    // перенос содержимого корзины в заказ / удаление из корзины / изменеие количества
    basketProduct.rows.forEach((bp) => {
      OrderProduct.create({
        productId: bp.productId,
        orderId: newOrder.id,
        selectedSize: bp.selectedSize,
      });
      BasketProduct.destroy({
        where: {
          productId: bp.productId,
          selectedSize: bp.selectedSize,
        },
      });
      ProductSize.update(
        {
          quantity: sequelize.literal("quantity - 1"),
        },
        {
          where: {
            productId: bp.productId,
            size: bp.selectedSize,
          },
        }
      );
    });

    return res.json([]);
  }

  async getByUser(req, res) {
    try {
      const { userId } = req.query;
      const orders = await Order.findAndCountAll({ where: { userId } });
      return res.json(orders);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res) {
    const orders = await Order.findAll();
    return res.json(orders);
  }

  async delete(req, res) {
    const { id } = req.params;
    const order = await Order.destroy({ where: { id } });
    return res.json(order);
  }
}

const orderController = new OrderController();

export { orderController };
