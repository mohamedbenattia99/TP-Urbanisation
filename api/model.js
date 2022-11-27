const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Books',BookSchema);