const express = require('express');
const router = express.Router();
const Customer = require('../models/customer')

router.post('/add', (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        isEmployee: req.body.isEmployee,
        isAffilate: req.body.isAffilate,
        dateOfRegistration: req.body.dateOfRegistration
    })
    customer.save()
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.get('/',async (req, res) => {
    try {
        const customers = await Customer.find().sort({'dateOfRegistration': 'desc'});
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;