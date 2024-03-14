import User from "../models/user.js";

export const authController = {
	auth: async (req, res) => {
		if (req.session.userId) {
			res.render("auth/signout"); // Si l'utilisateur est connecté, on affiche la page de déconnexion
		} else {
			res.render("auth/auth", { error: "" }); // Sinon on affiche la page de connexion
		}
	},
	signin: async (req, res) => {
		res.render("auth/signin", { error: "" }); // On affiche la page de connexion
	},
	signup: async (req, res) => {
		res.render("auth/signup", { error: "" }); // On affiche la page d'inscription
	},
	create: async (req, res) => {
		if (req.body.email === "" || req.body.password === "" || req.body.firstName === "" || req.body.lastName === "") {
			const error = new Error("Tous les champs sont obligatoires");
			res.render("auth/signup", { error: error.message }); // Si un champ est vide, on affiche un message d'erreur
			return;
		}
		User.createUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName).then((id) => {
			res.render("auth/signin", { error: "" }); // Si l'inscription est réussie, on affiche la page de connexion
		});
	},
	login: async (req, res) => {
		User.getUserByMail(req.body.email).then((user) => {
			if (user.length !== 0 && user[0].password === req.body.password) {
				req.session.userId = user[0].id; // Si l'utilisateur est trouvé et que le mot de passe est correct, on crée une session
				req.session.userName = user[0].first_name; // On stocke le prénom de l'utilisateur dans la session
				res.redirect("/");
			} else {
				const error = new Error("Email ou mot de passe incorrect");
				res.render("auth/signin", { error: error.message }); // Si l'utilisateur n'est pas trouvé ou que le mot de passe est incorrect, on affiche un message d'erreur
			}
		});
	},
	signout: async (req, res) => {
		req.session.destroy(() => {
			res.redirect("/"); // On détruit la session et on redirige vers la page d'accueil
		});
	},
};
