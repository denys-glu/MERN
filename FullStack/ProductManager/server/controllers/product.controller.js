const Product = require("../models/product.model");

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json({ product }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomProduct = (req, res) => {
    Product.find().then(allProducts => {
        const rand = Math.floor(Math.random() * allProducts.length);
        Product.findOne().skip(rand)
            .then(product => res.json({ product }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    });
}

module.exports.createNewProduct = (req, res) => {
    console.log("module.exports.createNewProduct -> req.body", req.body)

    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ user: newlyCreatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updateProduct => res.json({ product: updateProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
    console.log("module.exports.updateExistingProduct -> req", req.params)
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
