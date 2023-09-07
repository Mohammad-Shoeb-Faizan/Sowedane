// models/User.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  companyName: String,
});

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
  profile: profileSchema,
});

module.exports = mongoose.model('User', userSchema);
