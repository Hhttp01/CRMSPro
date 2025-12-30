const express = require('express');
const router = express.Router();
let customers = require('../models/לקוח');

// קבלת כל הלקוחות
router.get('/', (req, res) => {
    res.json(customers);
});

// הוספת לקוח חדש
router.post('/', (req, res) => {
    const newCustomer = {
        id: customers.length + 1,
        ...req.body
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

module.exports = router;
