import db from "../db/database.js";

export default class User {
	constructor(id, mail, password, firstName, lastName) {
		this.id = id;
		this.mail = mail;
		this.password = password;
		this.first_name = firstName;
		this.last_name = lastName;
  }
  
  static async getUserById(id) {
    const user = await db.query("SELECT * FROM admin WHERE id = ?", [id]);
    return user[0];
  }

  static async getUserByMail(mail) {
    const user = await db.query("SELECT * FROM admin WHERE mail = ?", [mail]);
    return user[0];
  }

  static async createUser(mail, password, firstName, lastName) {
    const result = await db.query("INSERT INTO admin (mail, password, first_name, last_name) VALUES (?, ?, ?, ?)", [mail, password, firstName, lastName]);
    return result.insertId;
  }
}
