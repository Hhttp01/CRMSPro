class Customer {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

// מערך לאחסון זמני
let customers = [
    { id: 1, name: "ישראל ישראלי", email: "israel@test.com", phone: "050-1234567" }
];

module.exports = { Customer, customers };
