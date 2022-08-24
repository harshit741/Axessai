const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

router.get("/", async (req, res) => {
  let { id, billAmount, isGroceries } = req.query;
  let discountPercentage = 0;
  let netPayableAmount = billAmount;
  const customer = await Customer.findById(id);
  const yearInMili = 365 * 24 * 60 * 60 * 1000;
  const date = new Date();
  const custDate = new Date(customer.dateOfRegistration);
  const yearsSinceRegirstered = Math.floor((date - custDate) / yearInMili);
  if (isGroceries && isGroceries?.toLowerCase() === 'false') {
    if (yearsSinceRegirstered > 2) {
      discountPercentage = 5/100;
    }
     if (customer.isAffilate) {
      discountPercentage = 10/100;
    }
     if (customer.isEmployee) {
      discountPercentage = 30/100;
    }
    netPayableAmount = billAmount - (billAmount*discountPercentage);
  }
  let additionalDiscount = Math.floor(billAmount/100) * 5;
  netPayableAmount = netPayableAmount - additionalDiscount;
  res
    .status(200)
    .send({ Name: customer.name, "Bill Amount": `$${netPayableAmount}` });
});

module.exports = router;
