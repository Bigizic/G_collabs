const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  owner: {
    user: {
      _id: String
    }
  },
  package: {
    type: String
  },
  amount: {
    type: String
  },
  discount: {
    type: Boolean,
    default: false
  },
  discount_amount: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cart', cartSchema);
