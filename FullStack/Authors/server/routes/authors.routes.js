const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors/", AuthorsController.getAllAuthors);
    app.get("/api/authors/random", AuthorsController.getRandomAuthor);
    app.put("/api/authors/update/:id", AuthorsController.updateAuthor);
    app.post("/api/authors/new", AuthorsController.addNewAuthor);
    app.delete("/api/authors/delete/:id", AuthorsController.deleteAuthor);
    app.get("/api/authors/:id", AuthorsController.getOneAuthor);
};