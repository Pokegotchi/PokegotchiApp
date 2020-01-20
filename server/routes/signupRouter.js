const express = require("express");
const loginController = require("../controllers/loginController.js");
const router = express.Router();
// If no cookie is found on frontend, send them here.

router.get("/", loginController.createUser, (req, res) => {
  // Add them to DB here and send them to the login page
  res.redirect("/");
});

module.exports = router;
