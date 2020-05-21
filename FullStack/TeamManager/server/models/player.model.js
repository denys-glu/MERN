const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    games: {
        type: Array, default: [
            { name: { type: String, default: "Game 1" }, Attendance: { type: String, default: "Undecided" } },
            { name: { type: String, default: "Game 2" }, Attendance: { type: String, default: "Undecided" } },
            { name: { type: String, default: "Game 3" }, Attendance: { type: String, default: "Undecided" } }
        ]
    }
})

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name should be longer than 2 characters!"]
    },
    position: { type: String, default: "Dummy" },
    // games: [gameSchema]
    games: {
        type: Array, default: [
            { name: "Game 1", Attendance: "Undecided" },
            { name: "Game 2", Attendance: "Undecided" },
            { name: "Game 3", Attendance: "Undecided" }
        ]
    }
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;