import Router from 'express';
import { userController } from '../controllers/user.controller.js';

const userRouter = new Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', userController.check);

export { userRouter };