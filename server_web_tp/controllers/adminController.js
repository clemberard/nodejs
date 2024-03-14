import Products from "../models/product.js";

export const adminController = {
	getInfos: async (req, res) => {
		Products.getAllProducts().then((products) => {
			// On récupère tous les produits
			res.render("admin/admin", { products: products, error: null, success: null }); // On affiche la page des produits
		});
	},
	updateProduct: async (req, res) => {
		const id = req.params.id;
		const name = req.body.name;
		const price = req.body.price;
		const description = req.body.description;
		const product = new Products(id, name, price, description);
    product.updateProduct(name, price, description, id).then(() => {
      Products.getAllProducts().then((products) => {
        res.render("admin/admin", { products: products, success: "Produit modifié avec succès", error: null });
      });
		});
  },
  deleteProduct: async (req, res) => {
    const product = new Products(req.params.id);
    product.deleteProduct().then(() => {
      Products.getAllProducts().then((products) => {
        res.render("admin/admin", { products: products, success: "Produit supprimé avec succès", error: null });
      });
    });
  },
  addProduct: (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Products(null, name, price, description);
    product.createProduct().then(() => {
      Products.getAllProducts().then((products) => {
        res.render("admin/admin", { products: products, success: "Produit ajouté avec succès", error: null });
      });
    });
  },
};
