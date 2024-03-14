import Express from "express";
import shopRouter from "./routes/shop.js";
import productRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";
import cartRouter from "./routes/cart.js";
import session from "express-session";

const app = new Express();

app.use(
	session({
		secret: "abcdefg",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }, // Note: true if you are using https
	})
);

app.use(Express.static("public"));

app.set("view engine", "ejs");

app.set("views", "views");

app.use(Express.json()); // Middleware pour parser le JSON
app.use(Express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.locals.userName = req.session.userName;
	res.locals.userId = req.session.userId;
	next();
});

app.get("/", (req, res, next) => {
	res.render("home/home", {});
});

app.post("/", (req, res, next) => {
	res.render("home", {});
});

app.use("/shop", shopRouter);

app.use("/products", productRouter);

app.use("/auth", authRouter);

app.use("/cart", cartRouter);

app.listen(3000, () => {
	console.log("http://localhost:3000/");
});
