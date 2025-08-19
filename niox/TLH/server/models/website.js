const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true
  },
  domain: {
    type: String
  },
  status: {
    type: String,
    enum: ['development', 'testing', 'live']
  },
  note: {
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

module.exports = mongoose.model('Website', websiteSchema);
