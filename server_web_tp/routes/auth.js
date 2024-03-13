import Express from "express";
import User from "../models/user.js";

const authRouter = Express.Router();

authRouter.get("/", (req, res) => {
	res.render("auth", {});
});

authRouter.get("/signin", (req, res) => {
	res.render("signin");
});

authRouter.get("/signup", (req, res) => {
	res.render("signup");
});

authRouter.post("/create", (req, res) => {
	User.createUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName).then((id) => {
		res.redirect("/auth/signin");
	});
});

authRouter.post("/login", (req, res) => {
	User.getUserByMail(req.body.email).then((user) => {
		if (user && user[0].password === req.body.password) {
			req.session.userId = user.id;
			res.redirect("/");
		} else {
			res.redirect("/auth/signin");
		}
	});
});

export default authRouter;
