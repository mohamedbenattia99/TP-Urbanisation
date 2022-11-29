const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  _id : {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true
  },
});


module.exports = mongoose.model('Employees', EmployeeSchema);