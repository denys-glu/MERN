const Joke = require("../models/joke.model");

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJoke => res.json({ users: allJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomJoke = (req, res) => {
    Joke.find().then(allJoke => {
        const rand = Math.floor(Math.random() * allJoke.length);
        Joke.findOne().skip(rand)
            .then(joke => res.json({ joke }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    });
}

module.exports.createNewJoke = (req, res) => {
    console.log("module.exports.createNewJoke -> req.body", req.body)

    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateJoke => res.json({ user: updateJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
