import Express from "express";
import shopRouter from "./routes/shop.js";
import productRouter from "./routes/products.js";

const app = new Express();

app.use(Express.static('public'));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use((req, res, next) => {
  console.log("Je suis un middleware qui s'exécute à chaque requête");
  next();
});

app.use(Express.json()); // Middleware pour parser le JSON

app.get("/", (req, res, next) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);

app.use('/products', productRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});

