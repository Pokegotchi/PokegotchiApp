const express = require("express");
const loginController = require("../controllers/loginController.js");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();

router.get(
  "/",
  loginController.verifyUser,
  cookieController.createCookie,
  (req, res) => res.redirect("/landing")
);

module.exports = router;
