import Express from "express";
import { productController } from "../controllers/productController.js";

const productsRouter = Express.Router();

productsRouter.get("/", productController.allProducts);

productsRouter.get("/:id", productController.detailProduct);

export default productsRouter;
