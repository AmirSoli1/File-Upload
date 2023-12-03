const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, 'name cant be longer than 20 characters'],
    minLength: [2, 'name must be longer than 2 characters'],
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
