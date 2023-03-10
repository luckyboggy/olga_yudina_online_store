import { Product, ProductInfo } from "../models/models.js";
import { v4 } from "uuid";
import path from "path";
import { ApiError } from "../error/ApiError.js";

const __dirname = path.resolve();

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, typeId, info } = req.body;
      const { img } = req.files || false;
      let imgArr = [];

      if (img) {
        for (let i = 0; i < img.length; i++) {
          let fileName = v4() + ".png";
          img[i].mv(
            path.resolve(__dirname, "..", "server", "static", fileName)
          );
          imgArr.push(fileName);
        }
      }

      const device = await Product.create({
        name,
        price,
        typeId,
        info,
        img: imgArr,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    limit = limit || 8;
    page = page || 1;
    let offset = limit * page - limit;
    let products;
    if (typeId) {
      products = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    } else {
      products = await Product.findAndCountAll({ limit, offset });
    }
    return res.json(products);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne(
      { 
        where: { id },
        include: [{model: ProductInfo, as: 'info'}]
      });
    res.json(product);
  }
  async delete(req, res) {
    const { id } = req.params;
    const product = await Product.destroy({ where: { id } });
    return res.json(product);
  }
}

const productController = new ProductController();

export { productController };
