const teamManager = require("../controllers/teamManager.controller");

module.exports = app => {
    app.get("/api/players", teamManager.getAllPlayers);
    app.post("/api/players/new", teamManager.createNewPlayer);
    // app.get("/api/products/random", ProductsController.getRandomProduct);
    app.put("/api/players/update/:id", teamManager.updateExistingPlayer);
    app.delete("/api/players/delete/:id", teamManager.deleteAnExistingPlayer);
    // app.get("/api/products/:id", ProductsController.getOneProduct);
};