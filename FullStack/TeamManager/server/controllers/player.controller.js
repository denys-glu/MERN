const Player = require("../models/player.model");

module.exports.getAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({ allPlayers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPlayer = (req, res) => {
    console.log("module.exports.createNewPlayer -> req.body", req.body)

    Player.create(req.body)
        .then(newlyCreatedPlayer => res.json({ player: newlyCreatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPlayer = (req, res) => {
    console.log("module.exports.updateExistingPlayer -> req.body", req.body)
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(player => res.json({ player }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPlayer = (req, res) => {
    console.log("module.exports.deleteAnExistingPlayer -> req", req.params)
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
