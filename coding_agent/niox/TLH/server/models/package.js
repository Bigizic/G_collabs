const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String
  },
  slug: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  priority_price: {
    type: Object
  },
  discount: {
    type: Boolean,
    default: false
  },
  discount_price: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'NGN'
  },
  delivery_time: {
    type: Number
  },
  is_active: {
    type: Boolean,
    default: true
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

module.exports = mongoose.model('Package', packageSchema);
