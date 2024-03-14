import Cart from "../models/cart.js";

export const cartController = {
	removeProduct: async (req, res) => {
		try {
			if (!req.session.userId) {
				const error = new Error("Vous devez être connecté pour ajouter un produit à votre panier");
				res.render("auth/auth", { error: error.message }); // Si l'utilisateur n'est pas connecté, on affiche la page de connexion
				return;
			}

			if (!req.session.cart) {
				req.session.cart = []; // Si le panier n'existe pas, on le crée
			}

			const id_product = req.params.id; // On récupère l'id du produit à retirer du panier

			const cart = await Cart.getCart(req.session.userId); // On récupère le panier de l'utilisateur
			const result = await Cart.removeProductFromCart(cart[0][0].id, id_product); // On retire le produit du panier en base de données

			req.session.cart = req.session.cart.filter((product) => product !== id_product); // On retire le produit du panier en session

			res.redirect("/cart"); // On redirige vers la page du panier
		} catch (error) {
			res.status(500).send("Une erreur est survenue lors du retrait du produit du panier."); // Si une erreur survient, on renvoie une erreur 500
		}
	},

	addProduct: async (req, res) => {
		if (!req.session.userId) {
			const error = new Error("Vous devez être connecté pour ajouter un produit à votre panier");
			res.render("auth/auth", { error: error.message }); // Si l'utilisateur n'est pas connecté, on affiche la page de connexion
			return;
		}
		if (!req.session.cart) {
			req.session.cart = []; // Si le panier n'existe pas, on le crée
		}
		const id_product = req.params.id; // On récupère l'id du produit à ajouter au panier
		req.session.cart.push(id_product); // On ajoute le produit au panier en session
		Cart.getCart(req.session.userId).then((cart) => { // On récupère le panier de l'utilisateur
			if (cart[0].length === 0) {
				Cart.createCart(req.session.userId).then((result) => { // Si le panier n'existe pas en base de données, on le crée
					const id_cart = result;
					Cart.addProductToCart(id_cart, id_product).then((result) => { // On ajoute le produit au panier en base de données
						console.log(result);
					});
				});
			} else {
				Cart.addProductToCart(cart[0][0].id, id_product).then((result) => { // Si le panier existe en base de données, on ajoute le produit au panier
					console.log(result);
				});
			}
		});
		res.redirect("/cart"); // On redirige vers la page du panier
	},
	getCart: async (req, res) => {
		if (!req.session.userId) {
			const error = new Error("Vous devez être connecté pour accéder à votre panier");
			res.render("auth/auth", { error: error.message }); // Si l'utilisateur n'est pas connecté, on affiche la page de connexion
			return;
		}
		const cartUser = await Cart.getCart(req.session.userId); // On récupère le panier de l'utilisateur
		if (cartUser[0].length === 0) {
			res.render("cart/cart", { products: [] }); // Si le panier n'existe pas, on affiche un panier vide
			return;
		}
		const id_cart = cartUser[0][0].id; // On récupère l'id du panier
		Cart.getProductsFromCart(id_cart).then((products) => {
			res.render("cart/cart", { products: products }); // On affiche le panier
		});
	},

	checkout: async (req, res) => {
		const CartUser = await Cart.getCart(req.session.userId); // On récupère le panier de l'utilisateur
		const idCartUser = CartUser[0][0].id; // On récupère l'id du panier
		Cart.getProductsFromCart(idCartUser).then((products) => {
			const number_products = products.length; // On compte le nombre de produits dans le panier
			const total_price = products.reduce((acc, product) => acc + product.price, 0); // On calcule le prix total du panier
			res.render("cart/checkout", { products: products, number_products: number_products, total_price: total_price }); // On affiche la page de validation de commande
		});
	},

	checkoutSuccess: async (req, res) => {
		const CartUser = await Cart.getCart(req.session.userId); // On récupère le panier de l'utilisateur
		const idCartUser = CartUser[0][0].id; // On récupère l'id du panier
		Cart.deleteCart(idCartUser).then((result) => {
			req.session.cart = [];
			res.render("cart/success"); // On affiche la page de confirmation de commande
		});
	},
};
