const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
    user: {
      type: String,
      name: String,
      phone_number: String,
      unique: true
    }
  },
  cart: {
    type: String
  },
  amount: {
    type: Number
  },
  discount: {
    type: Boolean,
    default: false
  },
  discount_amount: {
    type: Number,
    default: 0
  },
  amount_before_discount: {
    type: Number,
    default: 0
  },
  payment_status: {
    type: String
  },
  payment_id: {
    type: String
  },
  payment_fees: {
    type: Number,
    default: 0
  },
  payment_reference: {
    type: String
  },
  payment_method: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  billingEmail: {
    type: String
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

module.exports = mongoose.model('Order', orderSchema);
