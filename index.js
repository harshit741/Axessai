const express = require('express');
require('dotenv/config')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: "10mb"}));

const customer = require('./routes/customers')
const getDiscount = require('./routes/getDiscount')


app.use('/customers', customer);
app.use('/getDiscount', getDiscount);
mongoose.connect(process.env.DB_CONN, (err, data) => {
    if(err) return console.log(err);
    console.log("DB connected");
})
app.listen(port,'0.0.0.0',() => {
    console.log(`Server ready at http://127.0.0.1:${port}`);
  });