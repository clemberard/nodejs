import Product from "../models/product.js";

export const productController = {
	allProducts: async (req, res) => {
		Product.getAllProducts().then((products) => { // On récupère tous les produits
			res.render("products/products", { products }); // On affiche la page des produits
		});
	},
	detailProduct: async (req, res) => {
		const productId = req.params.id;
		Product.getProductById(productId).then((product) => { // On récupère le produit par son id
			res.render("products/product", { product }); // On affiche la page du produit
		});
	},
};
