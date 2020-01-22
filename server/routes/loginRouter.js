const express = require("express");
const loginController = require("../controllers/loginController.js");
const cookieController = require("../controllers/cookieController.js");
const router = express.Router();

router.get("/", (req, res) => {
  /*Serve login page*/
  res.send("sent to login page");
});

router.get(
  "/sign_in",
  loginController.verifyUser,
  cookieController.createCookie,
  (req, res) => res.redirect("/landing/verif")
);

router.get("/sign_up", (req, res) => res.redirect("/signup"));

module.exports = router;
