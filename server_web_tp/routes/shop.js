import Express from "express";
import { shopController } from "../controllers/shopController.js";

const shopRouter = Express.Router();

shopRouter.get("/", shopController.allshops);

export default shopRouter;
