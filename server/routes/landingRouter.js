// Our main page after login/signup
const express = require("express");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();

router.get("/", cookieController.checkCookie, (req, res) => {
  // Serve landing page file
});

module.exports = router;
