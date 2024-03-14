import Express from "express";
import { cartController } from "../controllers/cartController.js";

const cartRouter = Express.Router();

cartRouter.get("/", cartController.getCart);

cartRouter.get("/add/:id", cartController.addProduct);

cartRouter.get("/remove/:id", cartController.removeProduct);

cartRouter.get("/checkout", cartController.checkout);

cartRouter.get("/checkout/success", cartController.checkoutSuccess);

export default cartRouter;
