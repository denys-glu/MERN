const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name should be longer than 2 characters!"]
    },
    position: { type: String, default: "Dummy" },
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
// { "Game 1": "Undecided" },
// { "Game 2": "Undecided" },
// { "Game 3": "Undecided" }