import mysql from "mysql2/promise";

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "ecommerce",
	password: "",
});

export async function connect() {
  return await db.getConnection();
}

export default db;