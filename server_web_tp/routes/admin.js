import Express from "express";
import { adminController } from "../controllers/adminController.js";

const adminRouter = Express.Router();

adminRouter.get("/", adminController.getInfos);

adminRouter.post("/add", adminController.addProduct);

adminRouter.post("/edit/:id", adminController.updateProduct);

adminRouter.get("/delete/:id", adminController.deleteProduct);

export default adminRouter;
