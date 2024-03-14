import db from "../db/database.js";

export default class Product {
	constructor(id, name, price, imageUrl) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
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
		return db.execute("INSERT INTO products (name, price, imageUrl) VALUES (?, ?, ?)", [this.name, this.price, this.imageUrl]);
	}
}