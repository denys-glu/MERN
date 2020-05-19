const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [3, "First Name should be longer than 2 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"],
        minlength: [3, "Last Name should be longer than 2 characters!"]
    }
}, { tomestamp: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;