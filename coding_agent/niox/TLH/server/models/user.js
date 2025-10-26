const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  google_id: {
    type: String,
    default: null
  },
  apple_id: {
    type: String,
    default: null
  },
  facebook_id: {
    type: String,
    default: null
  },
  otp_code: {
    type: Number
  },
  has_complete_verification: {
    type: Boolean,
    default: false
  },
  otp_expires: {
    type: Date
  },
  reset_password_token: {
    type: String,
    unique: true
  },
  reset_password_expires: {
    type: Date
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

module.exports = mongoose.model('User', userSchema);
