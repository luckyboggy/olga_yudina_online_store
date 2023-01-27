import { Product } from "../models/models.js";

class ProductController {
    async create(req, res) { }
    async getAll(req, res) { }
    async getOne(req, res) { }
    async delete(req, res) { }
}

const productController = new ProductController();

export { productController }