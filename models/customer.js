const mongoose = require("mongoose");

const CustSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isEmployee: {
    type: Boolean,
    default: false,
  },
  isAffilate: {
    type: Boolean,
    default: false,
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Customers', CustSchema);