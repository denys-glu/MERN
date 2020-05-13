const faker = require('faker');
const express = require("express");
const app = express();

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street = faker.address.streetAddress(),
            city = faker.address.city(),
            state = faker.address.state(),
            zipCode = faker.address.zipCode(),
            country = faker.address.country()
        }
    }
}

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
