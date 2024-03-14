import db from "../db/database.js";
import Product from "./product.js";

export default class Cart {
	constructor(id, user_id, date_create) {
		this.id = id;
		this.user_id = user_id;
		this.date_create = date_create;
	}

	static async getProductsFromCart(id_cart) {
		const card_product = await db.execute("SELECT * FROM cart_product WHERE id_cart = ?", [id_cart]);
		const products = [];
		card_product[0].forEach((product) => {
			products.push(Product.getProductById(product.id_product));
		});
		return Promise.all(products);
	}

	static removeProductFromCart(id_cart, id_product) {
		return db.execute("DELETE FROM cart_product WHERE id_cart = ? AND id_product = ?", [id_cart, id_product]);
	}

	static async createCart(user_id) {
		if (user_id === undefined) {
			return Promise.reject(new Error("user_id is required"));
		}
		const insert = db.execute("INSERT INTO cart (user_id, date_create) VALUES (?, ?)", [user_id, new Date()]);
		return insert.then((result) => {
			return result[0].insertId;
		});
	}

	static getCart(user_id) {
		return db.execute("SELECT * FROM cart WHERE user_id = ?", [user_id]);
	}

	static addProductToCart(id_cart, id_product, quantity = 1) {
		return db.execute("INSERT INTO cart_product (id_cart, id_product, quantite) VALUES (?, ?, ?)", [id_cart, id_product, quantity]);
	}
}