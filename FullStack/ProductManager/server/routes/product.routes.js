const ProductsController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products/", ProductsController.getAllProducts);
    app.get("/api/products/random", ProductsController.getRandomProduct);
    app.put("/api/products/update/:id", ProductsController.updateExistingProduct);
    app.post("/api/products/new", ProductsController.createNewProduct);
    app.delete("/api/products/delete/:id", ProductsController.deleteAnExistingProduct);
    app.get("/api/products/:id", ProductsController.getOneProduct);
};