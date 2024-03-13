import Express from "express";

const cartRouter = Express.Router();

cartRouter.get("/", (req, res) => {
	res.render("cart", {});
});

export default cartRouter;
