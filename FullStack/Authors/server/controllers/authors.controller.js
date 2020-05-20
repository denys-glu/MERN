const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ allAuthors }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json({ author }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomAuthor = (req, res) => {
    Author.find().then(allAuthors => {
        const rand = Math.floor(Math.random() * allAuthors.length);
        Author.findOne().skip(rand)
            .then(author => res.json({ author }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    });
}

module.exports.addNewAuthor = (req, res) => {
    console.log("module.exports.addNewAuthor -> req.body", req.body)

    Author.create(req.body)
        .then(newAuthor => res.json({ author: newAuthor }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAuthor = (req, res) => {
    console.log("module.exports.deleteAuthor -> req", req.params)
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
