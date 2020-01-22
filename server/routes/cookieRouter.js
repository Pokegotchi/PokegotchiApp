// Takes care of login, sends off to where it is needed via middleware
// Does the logic for cofirming cookie and sending right to landing page
// Also render the login page

// Order of operations:

// Check for cookie. If cookie, send to /landing

// Load login page

// Verify user and pass. If true, feed cookie and redirect to /landing

const express = require("express");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();

// If user has cookie, load user data and send to landing. else send to login
router.get("/", cookieController.checkCookie, (req, res) =>
  res.redirect("/login")
);

module.exports = router;
