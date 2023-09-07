// routes/myprofile.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken"); // Import JWT library

// Middleware to verify authentication using JWT
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization"); // Get the token from the request headers

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, "my-secret-key"); // Replace with your actual secret key
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

router.get("/get-user-profile", verifyToken, async (req, res) => {
  try {
    // Access the user's ID from the decoded JWT token
    const userId = req.user.userId;

    // Retrieve the user's profile data based on the user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
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
