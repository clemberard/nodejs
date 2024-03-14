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

			req.session.cart = req.session.cart.filter((product) => product !== id_product);

			res.redirect("/cart");
		} catch (error) {
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
			if (cart[0].length === 0) {
				Cart.createCart(req.session.userId).then((result) => {
					const id_cart = result;
					Cart.addProductToCart(id_cart, id_product).then((result) => {
						console.log(result);
					});
				});
			} else {
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
		const cartUser = await Cart.getCart(req.session.userId);
		if (cartUser[0].length === 0) {
			res.render("cart/cart", { products: [] });
			return;
		}
		const id_cart = cartUser[0][0].id;
		Cart.getProductsFromCart(id_cart).then((products) => {
			res.render("cart/cart", { products: products });
		});
	},

	checkout: async (req, res) => {
		const CartUser = await Cart.getCart(req.session.userId);
		const idCartUser = CartUser[0][0].id;
		Cart.getProductsFromCart(idCartUser).then((products) => {
			const number_products = products.length;
			const total_price = products.reduce((acc, product) => acc + product.price, 0);
			res.render("cart/checkout", { products: products, number_products: number_products, total_price: total_price });
		});
	},

	checkoutSuccess: async (req, res) => {
		const CartUser = await Cart.getCart(req.session.userId);
		const idCartUser = CartUser[0][0].id;
		Cart.deleteCart(idCartUser).then((result) => {
			req.session.cart = [];
			res.render("cart/success");
		});
	},
};
