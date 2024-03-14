import Product from "../models/product.js";

export const productController = {
	allProducts: async (req, res) => {
		Product.getAllProducts().then((products) => {
			res.render("products/products", { products });
		});
	},
	detailProduct: async (req, res) => {
		const productId = req.params.id;
		Product.getProductById(productId).then((product) => {
			res.render("products/product", { product });
		});
	},
};
