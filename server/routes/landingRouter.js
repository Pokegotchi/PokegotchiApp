// Our main page after login/signup
const express = require("express");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();

router.get("/", cookieController.checkCookie, (req, res) => {
  // Serve landing page file
  res.send("rejoining landing page; cookie checked");
});

router.get("/verif", (req, res) => res.send("served landing page after login"));
module.exports = router;
