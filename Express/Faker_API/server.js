const faker = require('faker');
const express = require("express");
const app = express();

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
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
app.get("/api/users/new", (req, res) => {
    res.json( new User );
});
app.get("/api/companies/new", (req, res) => {
    res.json( new Company );
});
app.get("/api/user/company", (req, res) => {
    res.json( {user: new User, company: new Company} );
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
