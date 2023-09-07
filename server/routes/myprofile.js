// routes/myprofile.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Middleware to verify authentication, if needed

router.get("/get-user-profile", async (req, res) => {
  try {
    // Retrieve the user's profile data based on their session or token
    const user = await User.findById(req.session.user.userId); // Assuming you store user's ID in the session
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Return the user's profile data
    res.status(200).json({
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      address: user.address,
      companyName: user.companyName,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
