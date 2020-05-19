const express = require("express");
const app = express();
const cors = require('cors')

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), cors(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
require("./server/routes/authors.routes")(app);

app.listen(8001, () => console.log("The server is all fired up on port 8001"));
