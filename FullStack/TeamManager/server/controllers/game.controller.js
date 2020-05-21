const { Game } = require("../models/game.model");

module.exports.getAllGames = (req, res) => {
    Game.find()
        .then(allGames => res.json({ allGames }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewGame = (req, res) => {
    console.log("module.exports.createNewPlayer -> req.body", req.body)

    Game.create(req.body)
        .then(newlyCreatedGame => res.json({ game: newlyCreatedGame }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};