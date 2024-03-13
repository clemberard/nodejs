import db from "../db/database.js";

export default class Product {
  constructor(id, name, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  static getAllProducts() {
    try {
      const connection = db.getConnection();
      const [rows] = connection.query("SELECT * FROM `products`");
      connection.release();
      return rows;
    } catch (e) {
      console.error(e);
    }
  }

  async createProduct() {
    return db.execute("INSERT INTO products (name, price, imageUrl) VALUES (?, ?, ?)", [
      this.name,
      this.price,
      this.imageUrl,
    ]);
  }
}