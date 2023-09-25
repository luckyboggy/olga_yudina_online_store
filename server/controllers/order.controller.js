import { Order, Basket, BasketProduct, OrderProduct } from "../models/models.js";
import { orderProductController } from "./orderProduct.controller.js";


class OrderController {
    async create(req, res) {
        const { userId } = req.body;
        const order = await Order.create({ userId: userId, status: 'issured' })
        return res.json(order)
    }

    async fromBasketToOrder(req, res) {
        const { userId } = req.body;

        const orders = await Order.findAndCountAll({
            where: { userId },
            order: [["updatedAt", "DESC"]]
        });

        console.log(orders)
        const newOrder = orders.rows[0];

        const basket = await Basket.findOne({ where: { userId } });

        const basketProduct = await BasketProduct.findAndCountAll({
            where: { basketId: basket.id }
        })

        basketProduct.rows.forEach(bp => {
            const orderProduct = OrderProduct.create({
                productId: bp.productId,
                orderId: newOrder.id,
                selectedSize: bp.selectedSize
            })
        })

        return res.json([newOrder])

    }


    async getByUser(req, res) {
        try {
            const { userId } = req.query;
            const orders = await Order.findAndCountAll({ where: { userId } });
            return res.json(orders)
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(req, res) {
        const orders = await Order.findAll();
        return res.json(orders)
    }

    async delete(req, res) {
        const { id } = req.params;
        const order = await Order.destroy({ where: { id } });
        return res.json(order);
    }
}

const orderController = new OrderController();

export { orderController };
