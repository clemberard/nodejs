import Express from "express";
import { cartController } from "../controllers/cartController.js";

const cartRouter = Express.Router();

cartRouter.get("/", cartController.getCart);

cartRouter.get("/add/:id", cartController.addProduct);

cartRouter.get("/remove/:id", cartController.removeProduct);

export default cartRouter;
