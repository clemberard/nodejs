import Express from "express";

const shopRouter = Express.Router();

shopRouter.get("/", (req, res) => {
	console.log("req.body : " + JSON.stringify(req.body));
	res.render("shop", {});
});

export default shopRouter;
