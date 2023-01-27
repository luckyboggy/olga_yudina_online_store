import Router from 'express';
import { productController } from '../controllers/product.controller.js';

const productRouter = new Router();

productRouter.post('/', productController.create);
productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getOne);
productRouter.delete('/:id', productController.delete);

export { productRouter };