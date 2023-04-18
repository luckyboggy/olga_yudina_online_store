import Router from "express";
import { userRouter } from "./user.router.js";
import { productRouter } from "./product.router.js";
import { typeRouter } from "./type.router.js";
import { collectionRouter } from "./collection.router.js";
import { basketRouter } from "./basket.router.js";
import { basketProductRouter } from "./basketProduct.router.js";
import { favoritesRouter } from "./favorites.router.js";
import { favoritesProductRouter } from "./favoritesProduct.router.js";

const router = new Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/type", typeRouter);
router.use("/collection", collectionRouter);
router.use("/basket", basketRouter);
router.use("/basketProduct", basketProductRouter);
router.use("/favorites", favoritesRouter);
router.use("/favoritesProduct", favoritesProductRouter);

export { router };
