import db from "../db/database.js";

export default class Product {
	constructor(id, name, price, description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
	}

	/**
	 *
	 * @returns {Promise<Array<Product>>}
	 */
	static async getAllProducts() {
		try {
			const connection = await db.getConnection();
			const [rows] = await connection.query("SELECT * FROM products");
			connection.release();
			return rows;
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 *
	 * @param {*} id
	 * @returns  {Promise<Product>}
	 */
	static async getProductById(id) {
		try {
			const connection = await db.getConnection();
			const [rows] = await connection.query("SELECT * FROM products WHERE id = ?", [id]);
			connection.release();
			return rows[0];
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 *
	 * @returns {Promise}
	 */
	async createProduct() {
		return db.execute("INSERT INTO products (name, price, description) VALUES (?, ?, ?)", [this.name, this.price, this.description]);
	}

	/**
	 * 
	 * @returns {Promise}
	 */
	async updateProduct() {
		console.log(this);
		return db.execute("UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?", [this.name, this.price, this.description, this.id]);
	}

	/**
	 * 
	 * @returns {Promise}
	 */
	async deleteProduct() {
		return db.execute("DELETE FROM products WHERE id = ?", [this.id]);
	}
}