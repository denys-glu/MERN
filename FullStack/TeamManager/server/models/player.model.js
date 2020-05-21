const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name should be longer than 2 characters!"]
    },
    position: String,
    team: String
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;