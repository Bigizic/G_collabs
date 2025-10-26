const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
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

module.exports = mongoose.model('Card', cardSchema);
