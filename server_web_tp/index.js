import Express from "express";
import ejs from "ejs";

const app = new Express();

app.get("/", (req, res) => {
  ejs.renderFile('views/shop.ejs')
});

app.listen(3000);

console.log("http://localhost:3000/");