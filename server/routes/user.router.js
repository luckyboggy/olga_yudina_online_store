import Router from 'express';
import { userController } from '../controllers/user.controller.js';
import { authMiddlewere } from '../middleware/authMiddlewere.js';

const userRouter = new Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', authMiddlewere, userController.check);

export { userRouter };