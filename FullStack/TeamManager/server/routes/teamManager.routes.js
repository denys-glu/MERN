const PlayerController = require("../controllers/player.controller");
const GameController = require("../controllers/game.controller");

module.exports = app => {
    app.get("/api/players", PlayerController.getAllPlayers);
    app.get("/api/games", GameController.getAllGames);
    app.post("/api/players/new", PlayerController.createNewPlayer);
    app.post("/api/games/new", GameController.createNewGame);
    // app.get("/api/products/random", ProductsController.getRandomProduct);
    app.put("/api/players/update/:id", PlayerController.updateExistingPlayer);
    app.delete("/api/players/delete/:id", PlayerController.deleteAnExistingPlayer);
    // app.get("/api/products/:id", ProductsController.getOneProduct);
};