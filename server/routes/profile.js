// routes/updateProfile.js
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.post('/updateProfile', async (req, res) => {
  try {
    const userId = req.session.user.userId; // Assuming you have stored user info in the session

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's profile subdocument
    user.profile = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      companyName: req.body.companyName,
    };

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
