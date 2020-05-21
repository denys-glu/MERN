const mongoose = require("mongoose");
const Player = require("./player.model")
const Schema = mongoose.Schema;

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Game name is required"],
        minlength: [3, "You can figure out longer name"]
    },
    players: [{type: Schema.Types.ObjectId, ref: "Player"}]
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);

module.exports = {Game, GameSchema};