// routes/profile.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Route to update the user's profile
router.post("/update-profile", async (req, res) => {
  try {
    const userId = req.session.user.userId; // Get the user ID from the session
    const { fullName, phone, address, companyName } = req.body;

    // Find the user by ID and update their profile information
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "profile.fullName": fullName,
          "profile.phone": phone,
          "profile.address": address,
          "profile.companyName": companyName,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
