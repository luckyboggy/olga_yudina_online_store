import Router from "express";
import { userRouter } from "./user.router.js";
import { productRouter } from "./product.router.js";
import { typeRouter } from "./type.router.js";
import { basketRouter } from "./basket.router.js";
import { basketProductRouter } from "./basketProduct.router.js";

const router = new Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/type", typeRouter);
router.use("/basket", basketRouter);
router.use("/basketProduct", basketProductRouter);

export { router };
