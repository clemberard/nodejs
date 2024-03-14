import Cart from "../models/cart.js";

export const cartController = {
	removeProduct: async (req, res) => {
		try {
			if (!req.session.userId) {
				const error = new Error("Vous devez être connecté pour ajouter un produit à votre panier");
				res.render("auth/auth", { error: error.message });
				return;
			}

			if (!req.session.cart) {
				req.session.cart = [];
			}

			const id_product = req.params.id;

			const cart = await Cart.getCart(req.session.userId);
			const result = await Cart.removeProductFromCart(cart[0][0].id, id_product);

			console.log(result);

			req.session.cart = req.session.cart.filter((product) => product !== id_product);

			res.redirect("/cart");
		} catch (error) {
			console.error(error);
			res.status(500).send("Une erreur est survenue lors du retrait du produit du panier.");
		}
	},

	addProduct: async (req, res) => {
		if (!req.session.userId) {
			const error = new Error("Vous devez être connecté pour ajouter un produit à votre panier");
			res.render("auth/auth", { error: error.message });
			return;
		}
		if (!req.session.cart) {
			req.session.cart = [];
		}
		const id_product = req.params.id;
		req.session.cart.push(id_product);
		Cart.getCart(req.session.userId).then((cart) => {
			if (cart.length === 0) {
				Cart.createCart(req.session.userId).then((result) => {
					id_cart = result;
				});
				Cart.addProductToCart(id_cart, id_product).then((result) => {
					console.log(result);
				});
			} else {
				console.log(cart[0][0].id);
				Cart.addProductToCart(cart[0][0].id, id_product).then((result) => {
					console.log(result);
				});
			}
		});
		res.redirect("/cart");
	},
	getCart: async (req, res) => {
		if (!req.session.userId) {
			const error = new Error("Vous devez être connecté pour accéder à votre panier");
			res.render("auth/auth", { error: error.message });
			return;
		}
		Cart.getProductsFromCart(req.session.userId).then((products) => {
			console.log(products);
			res.render("cart", { products: products });
		});
	},
};
