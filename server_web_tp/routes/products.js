import Express from "express";
import Product from "../models/product.js";

const productsRouter = Express.Router();

productsRouter.get("/", (req, res) => {
  Product.getAllProducts().then((products) => {
    res.render("products", { products });
  });
});

productsRouter.get("/:id", (req, res) => {
  const productId = req.params.id;
  Product.getProductById(productId).then((product) => {
		res.render("product", { product });
	});
});

export default productsRouter;
