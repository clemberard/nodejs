import Express from "express";
import Product from "../models/product.js";

const productsRouter = Express.Router();

productsRouter.get("/", (req, res) => {
  const products = Product.getAllProducts();
	res.render("products", { products });
});

productsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);
	res.render("product", { product });
});

export default productsRouter;
