import Express from "express";
import { authController } from "../controllers/authController.js";

const authRouter = Express.Router();

authRouter.get("/", authController.auth);

authRouter.get("/signin", authController.signin);

authRouter.get("/signup", authController.signup);

authRouter.post("/create", authController.create);

authRouter.post("/login", authController.login);

authRouter.get("/signout", authController.signout);
 
export default authRouter;
