import Router from 'express';
import { userRouter } from './user.router.js';
import { productRouter } from './product.router.js';
import { typeRouter } from './type.router.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/type', typeRouter);

export { router };