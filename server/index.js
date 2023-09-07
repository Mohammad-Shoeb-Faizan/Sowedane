const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session"); // Import express-session
const signupRoute = require("./routes/signup");
const signinRoute = require("./routes/signin");

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


// Configure express-session
app.use(
    session({
      secret: process.env.SESSION_SECRET, // Replace with your secret key
      resave: false,
      saveUninitialized: true,
      // You can configure other session options here
    })
  );

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express with CORS and .env!");
});

app.use("/api", signupRoute);
app.use("/api", signinRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});