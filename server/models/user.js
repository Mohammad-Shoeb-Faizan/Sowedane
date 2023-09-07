// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    fullName: String,
    phone: String,
    address: String,
    companyName: String,
  },
});

module.exports = mongoose.model('User', userSchema);
