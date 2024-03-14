import User from "../models/user.js";

export const authController = {
	auth: async (req, res) => {
		if (req.session.userId) {
			res.render("auth/signout");
		} else {
			res.render("auth/auth", { error: "" });
		}
	},
	signin: async (req, res) => {
		res.render("auth/signin", { error: "" });
	},
	signup: async (req, res) => {
		res.render("auth/signup", { error: "" });
	},
	create: async (req, res) => {
		if (req.body.email === "" || req.body.password === "" || req.body.firstName === "" || req.body.lastName === "") {
			const error = new Error("Tous les champs sont obligatoires");
			res.render("auth/signup", { error: error.message });
			return;
		}
		User.createUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName).then((id) => {
			res.render("auth/signin", { error: "" });
		});
	},
	login: async (req, res) => {
		User.getUserByMail(req.body.email).then((user) => {
			console.log(user);
			if (user.length !== 0 && user[0].password === req.body.password) {
				req.session.userId = user[0].id;
				req.session.userName = user[0].first_name;
				res.redirect("/");
			} else {
				const error = new Error("Email ou mot de passe incorrect");
				res.render("auth/signin", { error: error.message });
			}
		});
	},
	signout: async (req, res) => {
		req.session.destroy(() => {
			res.redirect("/");
		});
	},
};
