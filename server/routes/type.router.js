import Router from 'express';
import { typeController } from '../controllers/type.controller.js';

const typeRouter = new Router();

typeRouter.post('/', typeController.create);
typeRouter.get('/', typeController.get);
typeRouter.delete('/:id', typeController.delete);

export { typeRouter };